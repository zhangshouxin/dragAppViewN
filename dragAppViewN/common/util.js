import store from '../store'

function formatTime(time) {
	if (typeof time !== 'number' || time < 0) {
		return time
	}

	var hour = parseInt(time / 3600)
	time = time % 3600
	var minute = parseInt(time / 60)
	time = time % 60
	var second = time

	return ([hour, minute, second]).map(function(n) {
		n = n.toString()
		return n[1] ? n : '0' + n
	}).join(':')
}

function formatLocation(longitude, latitude) {
	if (typeof longitude === 'string' && typeof latitude === 'string') {
		longitude = parseFloat(longitude)
		latitude = parseFloat(latitude)
	}

	longitude = longitude.toFixed(2)
	latitude = latitude.toFixed(2)

	return {
		longitude: longitude.toString().split('.'),
		latitude: latitude.toString().split('.')
	}
}
var dateUtils = {
	UNITS: {
		'年': 31557600000,
		'月': 2629800000,
		'天': 86400000,
		'小时': 3600000,
		'分钟': 60000,
		'秒': 1000
	},
	humanize: function(milliseconds) {
		var humanize = '';
		for (var key in this.UNITS) {
			if (milliseconds >= this.UNITS[key]) {
				humanize = Math.floor(milliseconds / this.UNITS[key]) + key + '前';
				break;
			}
		}
		return humanize || '刚刚';
	},
	format: function(dateStr) {
		var date = this.parse(dateStr)
		var diff = Date.now() - date.getTime();
		if (diff < this.UNITS['天']) {
			return this.humanize(diff);
		}
		var _format = function(number) {
			return (number < 10 ? ('0' + number) : number);
		};
		return date.getFullYear() + '/' + _format(date.getMonth() + 1) + '/' + _format(date.getDate()) + '-' +
			_format(date.getHours()) + ':' + _format(date.getMinutes());
	},
	parse: function(str) { //将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
		var a = str.split(/[^0-9]/);
		return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
	}
};

function uuid() {
	var s = [];
	var hexDigits = "0123456789abcdef";
	for (var i = 0; i < 36; i++) {
		s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
	}
	s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
	s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
	s[8] = s[13] = s[18] = s[23] = "-";

	var uuid = s.join("");
	return uuid;
}

/**单个组件的参数初始化
 * @param {Object} _uuid         当前组件的ID
 * @param {Object} _join_param   初始化后的组件参数(传入参数为props，或其衍生)
 * @param {Object} _param_all    需要初始化的参数
 * @param {Object} _event        需要初始化的事件
 * @param {Object} _vmodel_group 是否有初始化双向绑定
 *  @param {Object} template     当前组件的初始化模板
 */
async function groupProps(_uuid, _join_param, _param_all, _event, _vmodel_group, template, callback) {
	//是否存在数据源绑定
	var _dataFiled_init = "";
	//验证码倒计时定义参数
	var vmodel_but = "",
		param_but = null,
		vmodel_but_key = null;
    var _is_group_unit=_join_param=="props"?true:false;//是否组合组件
	var _da_desc = _param_all;
	_param_all = _param_all["param"][_join_param]; //获取组件参数pro信息
	_join_param="";
	//---------------------------------处理参数开始----------------------
	for (let _param of _param_all) {
		if (_param.hasOwnProperty("参数") && null != _param["已选值"] && _param["已选值"] != "") {
			if (_param.hasOwnProperty("参数")) {
				if (_param["类型"] == "Boolean") {
					if (_param["参数"] == "v-model") {
						_join_param = _join_param + " " + _param["参数"] + "=\"" + _param["已选值"] + "\" ";
						_vmodel_group = _vmodel_group + " " + _param["已选值"] + ":false, \n";
					} else {
						if (_param["已选值"] == "true") {
							_join_param = _join_param + " :" + _param["参数"] + "=\"true\" ";
						} else {
							_join_param = _join_param + " :" + _param["参数"] + "=\"false\" ";
						}
					}
				} else if (_param["类型"] == "Object" || _param["类型"] == "Array") {

					//是否为Select 列选择器，通过数据模式选择对应初始化数据
					if (_da_desc["name"] == "Select 列选择器" && _param["参数"] == "list") {
						//获取当前的数据模式
						let _dataMode = _da_desc["param"]["props"][0]["已选值"]
						if (_dataMode == "single-column") { //单列
							_join_param = _join_param + " :" + _param["参数"] + "=\"" + _da_desc['initData'][
								'single-column'
							] + "\" ";

						} else if (_dataMode == "mutil-column") { //多列
							_join_param = _join_param + " :" + _param["参数"] + "=\"" + _da_desc['initData'][
								'mutil-column'
							] + "\" ";

						} else if (_dataMode == "mutil-column-auto") { //多列联动
							_join_param = _join_param + " :" + _param["参数"] + "=\"" + _da_desc['initData'][
								'mutil-column-auto'
							] + "\" ";

						}
					} 
					//添加Upload 上传 组件已选择的图片
					else if(_da_desc["name"] == "Upload 上传" && _param["参数"] == "v-model"){
					        _vmodel_group = _vmodel_group + " " + _param["已选值"] + ":null, \n";
					}
					else {
						if(_da_desc["name"] == "Form 表单"&&_param["参数"]=="rules"){}
						else{
							_join_param = _join_param + " :" + _param["参数"] + "=\"" + _param["已选值"] + "\" ";
						}
                        if(_da_desc["name"] == "Form 表单"&&(_param["参数"]=="model"||_param["参数"]=="rules")){
							//取出当前表单中的所有组件，是进行了双向绑定得组件
							let _ursd = store.state.unitRelationship; //获取所有已注册到页面的组件
							let _child_list=_ursd[_uuid];
							var _su_zs = store.state.selectUnitList; //获取所有已注册到页面的组件
							var _vm_value=[];//双向绑定的字段
							for(let uu in _child_list){
								let _map={};
								_map["unit_name"]=_su_zs[uu]["name"];//组件名称
								//是否为组合组件
							    if(null!=_su_zs[uu]["param"]["props"]){//单组件
									let _new_unit_param=_su_zs[uu]["param"]["props"];
									for(let nup of _new_unit_param){
										if(nup["参数"]=="v-model"){
											_map["vmodel"]=nup["已选值"].split(".")[1];
											if(nup["类型"] == "Number"){
												_map["vmodel_v"]=0;
											}
											else if(nup["类型"] == "Boolean"){
												_map["vmodel_v"]=false;
											}
											else{
												_map["vmodel_v"]=null;
											}
										}
									}
								}
								else{//组合组件
								     let get_from_mode=function(props,name){
										let _new_unit_param=_su_zs[uu]["param"][props];
										for(let nup of _new_unit_param){
											if(nup["参数"]==name){
												_map["vmodel"]=nup["已选值"].split(".")[1];
												if(nup["类型"] == "Number"){
													_map["vmodel_v"]=0;
												}
												else if(nup["类型"] == "Boolean"){
													_map["vmodel_v"]=false;
												}
												else{
													_map["vmodel_v"]=null;
												}
											}
										} 
									 }
									 //Checkbox 复选框
									 if(_su_zs[uu]["name"]=="Checkbox 复选框"){
										   get_from_mode("checkbox-props","v-checked");
									 }
									 else if(_su_zs[uu]["name"]=="Radio 单选框"){
										  get_from_mode("radiogroup-props","v-model");
									 }
								}
								
								if(_su_zs[uu]["name"]!="Slider 滑动选择器"){
									let _now_form_item_props=_su_zs[uu]["param"]["form-item-props"];
									for(let oi of _now_form_item_props){
										if(oi["参数"]=="label"){
											_map["label"]=oi["已选值"];
										}
										else if(oi["参数"]=="prop"){
											_map["prop"]=oi["已选值"];	
										}
									}
								}
								//获取form-item-props  左侧标题以及是否进行验证
								
								_vm_value.push(_map);
							}
							let _add_param="";
							if(_param["参数"]=="model"){
								for(let i of _vm_value){
									_add_param=_add_param+i["vmodel"]+":"+i["vmodel_v"]+",\n"
								}
							}
						    //默认生成非空验证
							else if(_param["参数"]=="rules"){
								for(let j of _vm_value){
									//通过prop 来判断是否要规则验证
								    if(null!=j["prop"]&&j["prop"]!=""){
										//如果评分组件 不生成trigger验证
									    if(j["unit_name"]!="Input 输入框"){
											let _nhg=j["vmodel"]+":[{ required: true,message: \""+j["label"]+"不能为空\"}],"
											_add_param=_add_param+_nhg+"\n";
										}
										else{
											let _nhg=j["vmodel"]+":[{ required: true,message: \""+j["label"]+"不能为空\",trigger: ['change','blur']}],"
											_add_param=_add_param+_nhg+"\n";
										}
									}
								}
							}
							_vmodel_group = _vmodel_group + " " + _param["已选值"] + ":{"+_add_param+"} , \n";
						}
					}
				} else if (_param["类型"] == "mode") {
					_join_param = _join_param + " :" + _param["参数"] + "=\"" + _param["已选值"] + "\" ";

				}
				//非v-model字段的双向绑定
				else if (_param["类型"] == "vmodel") {
					_join_param = _join_param + " :" + _param["参数"] + "=\"" + _param["已选值"] + "\" ";
					_vmodel_group = _vmodel_group + " " + _param["已选值"] + ":" + _param["默认值"] + ", \n";
				} else if (_param["类型"] == "dataFiled" || _param["类型"] == "dataSource") {
					if (_param["类型"] == "dataFiled") {
						_dataFiled_init = _param["已选值"];
						//通过v-for进行遍历,则要对template中dataFiled进行替换(v-for=\"(item, index) in dataFiled\" )
						if (_param["参数"] == "dataFiled") {
							template = template.replace("dataFiled", _param["已选值"])
						}
						//没有通过v-for进行遍历(直接通过字段绑定 如 :list="Object")
						else {
							_join_param = _join_param + " :" + _param["参数"] + "=\"" + _param["已选值"] + "\" ";
						}
					} else {
						if (null != _dataFiled_init && _dataFiled_init != "") {
							_vmodel_group = _vmodel_group + " " + _dataFiled_init + ":" + _param["已选值"] + ", \n";
						} else {
							
							//当前uuid的组件是否为首次放入
							//首次放入不验证 _uuid
							var _is_first_uuid = store.state.selectUnitList; //获取所有已注册到页面的组件
							 if(null!=_is_first_uuid[_uuid]){
								 uni.showToast({
								 	title: "数据源字段绑定不能为空",
								 	duration: 2000,
								 	icon: "none"
								 });
								 return {
								 	statu: false
								 };
							 }
							
						}
					}
				} else {
					//如果当前组件为VerificationCode 验证码倒计时
					//将style 与v-model 作用与外层button上
					if (_da_desc["name"] == "VerificationCode 验证码倒计时") {

						if (_param["参数"] == "style") {
							param_but = " " + _param["参数"] + "=\"" + _param["已选值"] + "\" ";
						} else if (_param["参数"] == "v-model") {
							_vmodel_group = " " + _param["已选值"] + ":\"\", ";
							vmodel_but_key = _param["已选值"];
						} else {
							_join_param = _join_param + " " + _param["参数"] + "=\"" + _param["已选值"] + "\" ";
						}
					} 
					else if(_da_desc["name"] == "Slider 滑动选择器"){
					     if(_param["参数"] == "name"){
							 template=_da_desc["templateWc"].replace("SliderChild",template);
							 template = template.replace("滑动条", _param["已选值"]);
						 }
						 else  if (_param["参数"] == "v-model") {
							 _join_param = _join_param + " " + _param["参数"] + "=\"" + _param["已选值"] + "\" ";
							 
						 	_vmodel_group = " " + _param["已选值"] + ":1, \n";
						 }
						 else{
							 _join_param = _join_param + " " + _param["参数"] + "=\"" + _param["已选值"] + "\" ";
						 }
					}
					else {
						_join_param = _join_param + " " + _param["参数"] + "=\"" + _param["已选值"] + "\" ";
						if (_param["参数"] == "v-model") {
							if (_param["类型"] == "String" && _param["已选值"] != "") {
								_vmodel_group = " " + _param["已选值"] + ":\"\",\n ";
							} else if (_param["类型"] == "Number" && _param["已选值"] != "") {
								_vmodel_group =_vmodel_group+ " " + _param["已选值"] + ":1, \n";
							}
						}
					}
				}
			}
		} else {
			//验证是否存在必传向
			//if(!this.$u.test.isEmpty(_param["repair"])){
			if (_param.hasOwnProperty("repair") && (_param["repair"] == true || _param["repair"] == "true")) {
				//当前uuid的组件是否为首次放入
				//首次放入不验证 _uuid
				var _is_first_uuid = store.state.selectUnitList; //获取所有已注册到页面的组件
				 if(null!=_is_first_uuid[_uuid]){
					 uni.showToast({
					 	title: "组件" + _da_desc["name"] + "的" + _param["参数"] + "不能为空",
					 	duration: 2000,
					 	icon: "none"
					 });
					 return {
					 	statu: false
					 };
				 }
				 else{
					 
				 }
				
			}
		}
	}
	//---------------------------------处理参数结束----------------------

	//---------------------------处理事件开始---------------------
	var _event_desc = {},
		_event_xxx = "",
		_event_yyy = "";
	for (let _ev of _event) {
		if (null != _ev["已选值"] && _ev["已选值"] != "") {
			if (_da_desc["name"] == "VerificationCode 验证码倒计时") {
				//-----------------外层button 事件与参数的初始化开始-------------------
				template = template.replace("param-but", param_but != null ? param_but : "");
				template = template.replace("vmodel-but", vmodel_but_key != null ? vmodel_but_key : "");
				let _vfc_but_event = _da_desc["param"]["event"][0]["已选值"]; //外层button事件
				if (null != _vfc_but_event && _vfc_but_event != "" && _vfc_but_event != "-") {
					template = template.replace("event-but", " @tap=\"" + _vfc_but_event + "\"");
				} else {
					template = template.replace("event-but", "");
				}
				//-----------------外层button 事件与参数的初始化结束-------------------

				//内部验证码初始化验证码
				let evs = _ev;
				//移除外部button事件 _event_xx
				if (evs["事件名"] == "tap") {
					if (null != evs["已选值"] && evs["已选值"] != "") {

						var init_chang = "\n if(this.$refs.vcode.canGetCode) {\n";
						init_chang += "uni.showLoading({\n";
						init_chang += "	title: '正在获取验证码'\n";
						init_chang += "})\n";
						init_chang += "setTimeout(() => {\n";
						init_chang += "	uni.hideLoading();\n";
						init_chang += "	this.$u.toast('验证码已发送');\n";
						init_chang += "	this.$refs.vcode.start();\n";
						init_chang += "	}, 2000);\n";
						init_chang += "} else {\n";
						init_chang += "    this.$u.toast('倒计时结束后再发送');\n";
						init_chang += "}\n";
						_event_yyy = _event_yyy + "\n" + evs["已选值"] + "(){" + init_chang + "},\n"
					}
				} else {
					if (null != evs["已选值"] && evs["已选值"] != "") {
						_event_xxx = _event_xxx + "  @" + evs["事件名"] + "=\"" + evs["已选值"] + "\" ";
						//初始化事件方法
						if (evs["事件名"] == "change") {

							_event_yyy = _event_yyy + "\n" + evs["已选值"] + "(text){\n this.tips = text;\n},\n";
						} else {
							_event_yyy = _event_yyy + "\n" + evs["已选值"] + "(){},\n";
						}
					}
				}
			} else {
				if (null != _ev["事件名"]) {
					_event_xxx = _event_xxx + "  @" + _ev["事件名"] + "=\"" + _ev["已选值"] + "\"  ";

					//生成事件的实现方法
					var _callback_method = function() {
						//当前是否有回调参数
						if (null != _ev["回调参数"] && _ev["回调参数"] != "") {
							//如果当前组件时upload 上传， 则v-model结合on-list-change事件实现绑定
							if (_da_desc["name"] == "Upload 上传"&&_ev["事件名"]=="on-list-change") {
								//获取当前组件的双向绑定事件
								let _now_vmodel="";
								for(let nv of _da_desc["param"]["props"]){
									if(nv["参数"]=="v-model"){
										_now_vmodel=nv["已选值"];
										break;
									}
								}
								
								if(null!=_now_vmodel&&_now_vmodel!=""){
									_event_yyy = _event_yyy + "\n " + _ev["已选值"] + "(v){this."+_now_vmodel+"=v},\n"
								}
								else{
									_event_yyy = _event_yyy + "\n " + _ev["已选值"] + "(v){alert(\"执行事件名为:" + _ev["已选值"] +
										",回调参数" +
										_ev["回调参数"] + ",值为:\"+v)},\n"
								}
							}
							else{
								_event_yyy = _event_yyy + "\n " + _ev["已选值"] + "(v){alert(\"执行事件名为:" + _ev["已选值"] +
									",回调参数" +
									_ev["回调参数"] + ",值为:\"+v)},\n"
							}
							
						} else {
							_event_yyy = _event_yyy + "\n " + _ev["已选值"] + "(){alert(\"执行事件名为:" + _ev["已选值"] +
								"\")},\n"
						}
					}
					//可进行挂载的组件
					var _mount_unit_list = ["Calendar 日历", "Select 列选择器", "Keyboard 键盘", "Picker 选择器",
						"ActionSheet 操作菜单", "Popup 弹出层"
					]
					//当前组件是否可以提供给其他组件绑定(如：Input 输入框、Field 输入框)
					if (_mount_unit_list.indexOf(_da_desc["name"]) >= 0) {
						var _mount_unit_list_bd = store.state.bdUnitList; //所有可挂载的组件
						let _new_item_map = {},
							_new_item_map_info = {};
						//已存在该组件的大类
						if (_mount_unit_list_bd.hasOwnProperty(_da_desc["name"])) {
							//当前ID的组件已存在
							if (_mount_unit_list_bd[_da_desc["name"]].hasOwnProperty(_uuid)) {
								let _now_unit_mount_statu = _mount_unit_list_bd[_da_desc["name"]][_uuid];
								//已挂载到其他组件，暂时不生成组件的事件的实现方法，在挂载他的组件中生成事件的实现方法
								if (_now_unit_mount_statu) {

								}
								//还未挂载到其他组件,生成该组件的事件实现方法
								else {
									_callback_method();
								}
							}
							//当前ID组件首次出现
							else {
								_mount_unit_list_bd[_da_desc["name"]][_uuid] = false;
								_callback_method(); //生成该组件的事件实现方法
							}

						}
						//不存在该组件的大类
						else {
							_new_item_map_info[_uuid] = false;
							_mount_unit_list_bd[_da_desc["name"]] = _new_item_map_info;
							//还未挂载到其他组件上，生成事件的实现方法
							_callback_method();
						}
						store.state.bdUnitList = _mount_unit_list_bd;
						uni.setStorageSync('bdUnitList', _mount_unit_list_bd);
					} else {
						_callback_method();
					}



				} else if (null != _ev["属性名"]) {
					//判断该事件是否为微信小程序获取手机号
					if (_ev["默认值"] == "微信小程序" && _ev["属性名"] == "getphonenumber") {
						_event_xxx = _event_xxx + "   open-type=\"getPhoneNumber\"   " + "  @" + _ev["属性名"] +
							"=\"" +
							_ev["已选值"] + "()\"   ";
					} else {
						_event_xxx = _event_xxx + "   @" + _ev["属性名"] + "=\"" + _ev["已选值"] + "()\"";
					}
					_event_yyy = _event_yyy + "\n " + _ev["已选值"] + "(){alert(\"执行事件名为:" + _ev["已选值"] + "\")},\n";
				}

			}
		} else {
			if (_ev.hasOwnProperty("repair") && (_ev["repair"] == true || _ev["repair"] == "true")) {
				
				//当前uuid的组件是否为首次放入
				//首次放入不验证 _uuid
				var _is_first_uuid = store.state.selectUnitList; //获取所有已注册到页面的组件
				 if(null!=_is_first_uuid[_uuid]){
					 uni.showToast({
					 	title: "组件" + _da_desc["name"] + "的" + _ev["事件名"] + "不能为空",
					 	duration: 2000,
					 	icon: "none"
					 });
					 return {
					 	statu: false
					 };
				 }
				 else{
					 
				 }
				
				
			}
		}

	}
	//Input 输入框 是否已挂载其他组件
	if (_da_desc["name"] == "Input 输入框"||_da_desc["name"] == "Field 输入框") {
		if (null != _da_desc["bdUnit"] && _da_desc["bdUnit"] != "") {
			let _db_unit_id = _da_desc["bdUnit"];
			var _su = store.state.selectUnitList; //获取所有已注册到页面的组件
			let _db_unit_param = _su[_db_unit_id]["param"]["props"];
			//生成input点击事件，触发绑定组件显示与隐藏
			for (let dup of _db_unit_param) {
				if (dup["参数"] == "v-model") {
					_join_param = _join_param + "  @click= \"" + dup["已选值"] + "=true\"";
					break;
				}
			}
			//如果绑定的是ActionSheet 操作菜单 ,获取ActionSheet 数据源绑定的dataFiled
			var _as_dataFiled = "";
			if (_su[_db_unit_id]["name"] == "ActionSheet 操作菜单") {
				for (let dup of _db_unit_param) {
					if (dup["类型"] == "dataFiled") {
						_as_dataFiled = dup["已选值"];
						break;
					}
				}
			}
			//获取input 双向绑定的值(注意：是通过下标顺序获取)
			//var _input_param_vmodel = _da_desc["param"]["props"][0]["已选值"];
			var _input_param_vmodel="";
		    let _new_parent_vmodel=_da_desc["param"]["props"];
			for (let npv of _new_parent_vmodel) {
				if (npv["参数"] == "v-model") {
					if(null!=npv["已选值"]&&npv["已选值"]!=""){
						_input_param_vmodel=npv["已选值"];
						if(_da_desc["name"] == "Input 输入框"){
							break;
						}
						//_da_desc["name"] == "Field 输入框" 则把disabled 设置为true后跳出循环
					}
					else{
						uni.showToast({
							title: "组件" + _da_desc["name"] + "的" + npv["参数"] + "不能为空",
							duration: 2000,
							icon: "none"
						});
						return {
							statu: false
						};
					}
				}
				if(_da_desc["name"] == "Field 输入框"&&npv["参数"] == "disabled"){
					//npv["已选值"]=true;
					_join_param = _join_param + " :" + npv["参数"] + "=\"" + npv["已选值"] + "\" ";
					
					break;
				}
			}
			//生成绑定组件选中值时更新值到input组件上
			let _db_unit_event = _su[_db_unit_id]["param"]["events"];
			for (let due of _db_unit_event) {
				if (null != due["已选值"] && due["已选值"] != "") {
					//Calendar 日历  change事件处理
					if (_su[_db_unit_id]["name"] == "Calendar 日历") {
						_event_yyy = _event_yyy + due["已选值"] + "(v){  this." + _input_param_vmodel +
							"=v.result?v.result:v.startDate+'~'+v.endDate; alert(\"当前选中的值为:\"+JSON.stringify(v))},\n";
					} else if (_su[_db_unit_id]["name"] == "Select 列选择器") {
						//默认只处理confirm 点击确定时间
						if (due["事件名"] == "confirm") {
							_event_yyy = _event_yyy + due["已选值"] +
								"(v){let vv=\"\";for(let p of v){vv+=p[\"label\"]};this." + _input_param_vmodel +
								" = vv;alert(\"当前选中的值为:\"+JSON.stringify(v))},\n";

						}
						//cancel 取消事件只生成方法
						else if (due["事件名"] == "cancel") {
							_event_yyy = _event_yyy + due["已选值"] + "(v){alert(\"点击了取消事件:\"+JSON.stringify(v))},\n";

						}
					} else if (_su[_db_unit_id]["name"] == "Keyboard 键盘") {
						if (due["事件名"] == "change") {
							_event_yyy = _event_yyy + due["已选值"] + "(v){this." + _input_param_vmodel + "=this." +
								_input_param_vmodel + "+\"\"+v},\n";
						} else if (due["事件名"] == "backspace") {
							_event_yyy = _event_yyy + due["已选值"] + "(){let va=this." + _input_param_vmodel +
								";if(va.length>0){this." + _input_param_vmodel +
								"=va.substring(0,va.length-1);}},\n";
						} else {
							_event_yyy = _event_yyy + due["已选值"] + "(){alert(\"点击了" + due["事件名"] + "\")},\n";

						}
					} else if (_su[_db_unit_id]["name"] == "Picker 选择器") {
						if (due["事件名"] == "confirm") {
							_event_yyy = _event_yyy + due["已选值"] + "(v){this." + _input_param_vmodel +
								"=v.year?v.year+'-'+v.month+'-'+v.day:v.province?v.province+'-'+v.city+'-'+v.area:'单列和多列模式,按数据格式获取'},\n";
						} else {
							_event_yyy = _event_yyy + due["已选值"] + "(){alert(\"点击了" + due["事件名"] + "\")},\n";
						}
					} else if (_su[_db_unit_id]["name"] == "ActionSheet 操作菜单") {
						if (due["事件名"] == "click") {
							_event_yyy = _event_yyy + due["已选值"] + "(v){this." + _input_param_vmodel + "=this." +
								_as_dataFiled + "[v].text},\n";
						} else {
							_event_yyy = _event_yyy + due["已选值"] + "(){alert(\"点击了" + due["事件名"] + "\")},\n";
						}
					} else if (_su[_db_unit_id]["name"] == "Popup 弹出层") {
						if (due["事件名"] == "close") {
							_event_yyy = _event_yyy + due["已选值"] + "(){alert(\"当前弹出层已关闭，自定义页面中选中的值请手动绑定\");},\n";
						} else {
							_event_yyy = _event_yyy + due["已选值"] + "(){alert(\"点击了" + due["事件名"] + "\")},\n";
						}
					}
				}
			}
		}
	}

	_event_desc["event_template"] = _event_xxx;
	_event_desc["event_methods"] = _event_yyy;
	//---------------------------处理事件结束---------------------

   

	//---------------------------处理插槽开始---------------------
	var _unit_add_slot = ""; //定义的插槽
	let ue_item = _da_desc["param"];
	let solt_keys = ["slot", "slots", "cellitem-slot"];
	for (let uim in ue_item) {
		if (solt_keys.indexOf(uim) >= 0) {
			let _hji = ue_item[uim]
			for (let uih of _hji) {
				if (null != uih["已选值"] && uih["已选值"] != "") {
					let _slot_p = null;
					if (uih["名称"] == "loading" && uih["已选值"] == "true") {
						_slot_p = "<u-loading slot=\"loading\"></u-loading>";
					} else if (uih["名称"] == "error") {
						_slot_p = "<view slot=\"error\" style=\"font-size: 24rpx;\">" + uih["已选值"] +
							"</view>";
					} else {
						//已按标准使用插槽组件
						if (uih["已选值"].indexOf("<") >= 0 && uih["已选值"].indexOf("slot") >= 0) {
							_slot_p = uih["已选值"];
						}
						//用于占位的纯文本插槽(生成页面后，还需要手动写入组件)
						else {
							_slot_p = "<view slot=\"" + uih["名称"] + "\" style=\"font-size: 24rpx;\">" + uih["已选值"] +
								"</view>";
						}
					}
					if (null != _slot_p) {
						_unit_add_slot = _unit_add_slot + "  " + _slot_p;
					}
				}
			}
		}

	}
	//---------------------------处理插槽结束---------------------


	//-------------------判断CellGroup单元格组是否有子组件---开始--------------------
	if (_da_desc["name"] == "CellGroup 单元格组") {
		let _id_s = _uuid;
		template = template.replace(/CellGroupID/gm, _id_s);
		//当前单元格组是否有单元格列表子组件
		var urCell = store.state.unitRelationship;
		if (urCell.hasOwnProperty(_id_s)) {
			let changeArea = "<!--" + _id_s + "-->"; //生成组件替换区域
			let _new_area = "";
			for (let _cell in urCell[_id_s]) {
				let _oi = "<!--" + _cell + "开始-->" + urCell[_id_s][_cell] + "<!--" + _cell + "结束-->";
				_new_area = _new_area + "\n" + _oi + "\n";
			}
			_new_area = _new_area + "\n<!--" + _id_s + "-->"
			template = template.replace(changeArea, _new_area);
		}
	}
	//-------------------判断CellGroup单元格组是否有子组件---开始--------------------


   
	//-----------------全屏选项卡-----开始--------------
	if (_da_desc["name"] == "tabsSwiper 全屏选项卡") {
		let _current = _da_desc["param"]["props"][1]["已选值"];
		template = template.replace("current-xxx", _current);
		_vmodel_group = _vmodel_group + " " + _current + ":0,\n ";
		let _tabs_list = JSON.parse(_da_desc["param"]["props"][3]["已选值"]);
		let _template_child_info = "";
		for (let _n of _tabs_list) {
			let _template_child = _da_desc["templateChild"];
			_template_child = _template_child.replace("自定义内容区域", _n["name"] + "自定义内容区域");
			_template_child_info = _template_child_info + _template_child + "\n";
		}
		template = template.replace("templateChild", "\n" + _template_child_info);
		let tabs_ev_lis = "\n";
		tabs_ev_lis += "                // tabs通知swiper切换\n";
		tabs_ev_lis += "                tabsChange(index) {\n";
		tabs_ev_lis += "							this." + _current + "=index;\n";
		tabs_ev_lis += "				},\n";
		tabs_ev_lis += "				// swiper-item左右移动，通知tabs的滑块跟随移动\n";
		tabs_ev_lis += "				transition(e) {\n";
		tabs_ev_lis += "							let dx = e.detail.dx;\n";
		tabs_ev_lis += "							this.$refs." + _da_desc["param"]["props"][4]["已选值"] + ".setDx(dx);\n";
		tabs_ev_lis += "				},\n";
		tabs_ev_lis += "				// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态\n";
		tabs_ev_lis += "				// swiper滑动结束，分别设置tabs和swiper的状态\n";
		tabs_ev_lis += "				animationfinish(e) {\n";
		tabs_ev_lis += "							let current = e.detail.current;\n";
		tabs_ev_lis += "							this.$refs." + _da_desc["param"]["props"][4]["已选值"] +
		".setFinishCurrent(current);\n";
		tabs_ev_lis += "							this." + _current + " = current;\n";
		tabs_ev_lis += "				},\n";
		tabs_ev_lis += "				// scroll-view到底部加载更多\n";
		tabs_ev_lis += "				onreachBottom() {\n";
		tabs_ev_lis += "							      \n";
		tabs_ev_lis += "				},\n";
		var _event_xx_methon = _event_desc["event_methods"];
		_event_xx_methon = _event_xx_methon + "\n" + tabs_ev_lis;
		_event_desc["event_methods"] = _event_xx_methon;
	}
	//-----------------全屏选项卡-----结束-------------------
	
	return {
		param: _join_param,
		vmodel: _vmodel_group,
		statu: true,
		dataFiled: _dataFiled_init,
		event_desc: _event_desc,
		template: template,
		unit_add_slot: _unit_add_slot
	};
}

module.exports = {
	formatTime: formatTime,
	formatLocation: formatLocation,
	dateUtils: dateUtils,
	uuid: uuid,
	groupProps: groupProps
}
