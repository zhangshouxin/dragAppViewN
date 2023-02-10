
<script>
	import { mapMutations } from 'vuex';
	import uView from "static/uView/data.js";
	import util from "./common/util.js";
    export default {
        onLaunch: function() {
            console.log('App Launch');
			var _this=this;
			//初始化vuex
			if(!this.$u.test.isEmpty(uni.getStorageSync('activeTopMenu'))){
				this.$store.state.activeTopMenu =uni.getStorageSync('activeTopMenu');
			}
			if(!this.$u.test.isEmpty(uni.getStorageSync('activeSecondMenu'))){
				this.$store.state.activeSecondMenu = uni.getStorageSync('activeSecondMenu');
			}
			if(!this.$u.test.isEmpty(uni.getStorageSync('activeSecondMenuUUID'))){
				this.$store.state.activeSecondMenuUUID = uni.getStorageSync('activeSecondMenuUUID');
				this.$store.state.selectUnitList = uni.getStorageSync('selectUnitList');
			}
			if(!this.$u.test.isEmpty(uni.getStorageSync('unitRelationship'))){
				this.$store.state.unitRelationship = uni.getStorageSync('unitRelationship');
				//this.$store.state.removeUnitRelationship = uni.getStorageSync('removeUnitRelationship');
			}
			if(!this.$u.test.isEmpty(uni.getStorageSync('bdUnitList'))){
				this.$store.state.bdUnitList = uni.getStorageSync('bdUnitList');
			}
			//监听模板页面的保存功能
			uni.$on('saveTemplatePage',function(data){
				
			});
			//验证上一个组件的参数是否正确
			uni.$on('checkUnitSave',function(data){
				_this.fileDrop();//验证通过允许下一个组件拖入
			});
			uni.$on('getUnitDesc',function(data){
				
				var _selectUnitList=this.$store.state.selectUnitList;
				this.$store.state.editUnit=data.id;
				//uni.setStorageSync('activeSecondMenuUUID', data.id);
				//当前组件是否有子组件
				if(null!=data.child&&data.child.length>0){
					let _map={};
					_map[data.id]=data.child;
					this.$store.state.removeUnitRelationship=_map;
					uni.setStorageSync('removeUnitRelationship', _map);
				}
				else{
					let _map={};
					this.$store.state.removeUnitRelationship=_map;
					uni.setStorageSync('removeUnitRelationship', _map);
				}
			})
        },
		
        onShow: function() {
            console.log('App Show');
			//this.updatebar();
			var _this=this;
			var uniMain=document.getElementsByTagName("uni-main")[0];
			//监听组件放入事件
			uniMain.ondrop=function(e){
				e.preventDefault();
				//如果是模板、已生成页面，直接跳转对应页面
				if(_this.$store.state.activeTopMenu=="模板"||_this.$store.state.activeTopMenu=="已生成页面"){
					uni.redirectTo({
					    url: _this.$store.state.nowPageHref
					});
				}
				else{
					//拖动新组件时保存当前组件
				   _this.$store.state.unitChangeID=util.uuid();
				}
				
			}
			//监听组件拖动中事件
			uniMain.ondragover=function(e){
				 e.preventDefault();
			}
			
        },
        onHide: function() {
            console.log('App Hide');
        },
		globalData: {
			test: 'zzzz'
		},
		methods:{
			...mapMutations(['setUniverifyErrorMsg','setUniverifyLogin','setSelectUnitList','setUnitRelationship','setRemoveUnitRelationship','setActiveSecondMenuUUID','setBdUnitList']),
			
			async fileDrop(){
				var _this=this;
				//判断当前组件是否为模板
				var _daa=JSON.stringify(uView[this.$store.state.activeTopMenu]);
				var _da=JSON.parse(_daa);
				var _da_desc=null;
				if(this.$store.state.activeTopMenu=="模板"||this.$store.state.activeTopMenu=="已生成页面"){
					for(let d of _da){
						if(d["name"]==this.$store.state.activeSecondMenu){
							uni.navigateTo({
							    url: d["href"]
							});
							break;
						}
					}
				}
				else{
				for(let d of _da){
					if(d["name"]==this.$store.state.activeSecondMenu){
						_da_desc=d;
						break;
					}
				}
				var _uuid=util.uuid();
				//判断当前组件是否为独立Props(不是组合组件)
				if(_da_desc["param"].hasOwnProperty("props")){
					var vmodel_but="";
					var _event_xx="",_event_xx_methon="";//组件是有初始化事件
					var _template=_da_desc["template"];
					//将组件手动添加的默认值(已选值)添加到组件中，及拖动组件后首次展示的样式
					var _first_param=_da_desc;
					var _join_param="props";
					//获取当前组件所有需要初始化的事件
					var _all_event=[];
					for(let fp in _da_desc["param"]){
						 if(fp.indexOf("event")>=0){
							 _all_event=_da_desc["param"][fp];//只是取了其中一种大类的事件
						 }
					}
		            var cpd= await util.groupProps(_uuid,_join_param,_first_param,_all_event,vmodel_but,_template);
		            if(!cpd["statu"]){
		            	return;
		            }
		            else{
						_join_param=cpd["param"];
						_event_xx=cpd["event_desc"]["event_template"];
						_event_xx_methon=cpd["event_desc"]["event_methods"];
		            	vmodel_but=cpd["vmodel"];
		            	_template=cpd["template"];
		            }
					this.setActiveSecondMenuUUID(_uuid);
					//给拖动组件添加临时的ID
					_template=_template.replace("id-xxx",this.$store.state.activeSecondMenuUUID)
					_template=_template.replace(" param-xxx",_join_param);
					//获取拖动生成后的组件点击事件的ID
					_template=_template.replace("xxxxxx",this.$store.state.activeSecondMenuUUID);
					//暂时替换到用于插槽使用的区域
					_template=_template.replace("slot-xxx","");
					//初始化组件事件
					_template=_template.replace("event-xxx",_event_xx);
					
					var _selectUnitList=this.$store.state.selectUnitList;
					//当前组件是否绑定父组件
					if(null!= this.$store.state.isNest){
						_da_desc["parentID"]=this.$store.state.isNest;
					}
					_selectUnitList[this.$store.state.activeSecondMenuUUID]=_da_desc;
					this.setSelectUnitList(_selectUnitList);
					
					//当前组件是否放到Form 表单中
					if(!this.$u.test.isEmpty(_this.$store.state.isNest)&&!this.$u.test.isEmpty(_selectUnitList[_this.$store.state.isNest])){
						_selectUnitList[this.$store.state.activeSecondMenuUUID]=_da_desc;
						
						//Slider 滑动选择器 不在外层生成u-form-item ，因为会影响滑动选择器的拖动
						if(_da_desc["name"]!="Slider 滑动选择器"){
							//将表单中的form-item-props 参数拷贝到当前组件中去，然后自定义每个组件的form-item-props参数
							_da_desc["param"]["form-item-props"]=_selectUnitList[_this.$store.state.isNest]["param"]["form-item-props"];
							//form-item-props 中的label与prop 重置
							for(let ij in _da_desc["param"]["form-item-props"]){
								let _name_p=_da_desc["param"]["form-item-props"][ij]["参数"];
								if(_name_p=="label"||_name_p=="prop"){
									_da_desc["param"]["form-item-props"][ij]["已选值"]="";
								}
								
							}
						}
						
						//将当前组件v-model双向绑定参数，加上form表单数据对象的前缀
						for(let nup of _da_desc["param"]["props"]){
								if(nup["参数"]=="v-model"){
								   nup["已选值"]=_selectUnitList[_this.$store.state.isNest]["param"]["form-props"][1]["已选值"]+".";
								   nup["说明"]="当前组件双向绑定需加上外层表单数据对象前缀(如fromModel.参数)"
								}
						}
						_selectUnitList[this.$store.state.activeSecondMenuUUID]=_da_desc;
						this.setSelectUnitList(_selectUnitList);
						let _isNestName=_selectUnitList[_this.$store.state.isNest]["name"];
						let _da_desc_i=_selectUnitList[_this.$store.state.isNest];
						if(_isNestName=="Form 表单"&&_da_desc["name"]!="Slider 滑动选择器"){
						    let templateChild=_selectUnitList[_this.$store.state.isNest]["templateChild"];
							//获取u-form-item的参数定义（初始化）
							let vmodel_but_new="";
							let param_form_item_props_desc="form-item-props";
							var cpd= await util.groupProps(_uuid,param_form_item_props_desc,_da_desc_i,[],vmodel_but_new,"");
							if(!cpd["statu"]){
								return;
							}
							else{
							   templateChild=templateChild.replace("param-form-item-xxx",cpd["param"]);
							  
							}
							templateChild=templateChild.replace("formUnit",_template);
							_template=templateChild;
						}
					}
					uni.request({
						    url: 'http://127.0.0.1:8090/template', 
							method:"POST",
						    data: {
						          param:{
									  "template":_template,
									  "uuid":_uuid,
									  "event": _event_xx_methon,
									  "vmodel":vmodel_but,
									  //当前组件是否放到另外一个组件中
									  "parentID":_this.$store.state.isNest!=null?_this.$store.state.isNest:null
								  }
						    },
						    header: {},
						    success: (res) => {
						        console.log(res.data);
								//当前是否为组件嵌套
								if(null!=_this.$store.state.isNest&&_this.$store.state.isNest!=""){
									let parentID=_this.$store.state.isNest;
									let childID=_uuid;
									_this.$store.state.isNest=null;
									//将父组件与子组件关联起来(防止父组件更新时丢失嵌套的子组件)
									//将子组件已经生成的UI存放起来，用于父组件更新时直接使用(需注意如果子组件更新时也需要更新当前对象)
									var ur=_this.$store.state.unitRelationship;
									if(ur.hasOwnProperty(parentID)){
										ur[parentID][childID]=_template;
									}
									else{
										let _p={};
										    _p[childID]=_template;
										    ur[parentID]=_p;
									}
									_this.setUnitRelationship(ur);
								}
								
						    },
							fail(res) {
								console.log("当前拖动组件保存失败errMsg--"+res.errMsg)
							}
						});
				}
				
				//是组合组件
				else{
					var _template=_da_desc["template"];
					var _selectUnitList=this.$store.state.selectUnitList;
					var _event_group="";//是否有初始化事件
					var _vmodel_group="";//是否有初始化双向绑定事件
					var _is_from=false;//当前组合组件是否为表单，是则生成表单提交事件以及表单验证事件
					var is_form_param="";
					//Layout 布局 动态生成每个分栏的ID
					if(_da_desc["name"]=="Layout 布局"){
						let col_props_item1=util.uuid(),
						    col_props_item2=util.uuid(),
							col_props_item3=util.uuid();
						//修改template
						_template=_template.replace(/col_props_item1/gm,col_props_item1);
						_template=_template.replace(/col_props_item2/gm,col_props_item2);
						_template=_template.replace(/col_props_item3/gm,col_props_item3);
						//修改col-props 中id
						_da_desc["param"]["col-props"][0][4]["已选值"]=col_props_item1;
						_da_desc["param"]["col-props"][1][4]["已选值"]=col_props_item2;
						_da_desc["param"]["col-props"][2][4]["已选值"]=col_props_item3;
					}
					else if(_da_desc["name"]=="Checkbox 复选框"){
						//初始化CheckboxGroup的 Props与Event
						_template=_template.replace("param-checkbox-group","");
						//_template=_template.replace("event-checkbox-group"," @change=\"checkboxGroupChange\" ");
						_template=_template.replace("event-checkbox-group","");
						
						//初始化Checkbox 的 Props与Event
						_template=_template.replace("param-checkbox-item","");
						//_template=_template.replace("event-checkbox-item","   @change=\"checkboxChange\"  ");
						_template=_template.replace("event-checkbox-item","");
						_template=_template.replace("event-checkbox-checked","checked");
                        _template=_template.replace("event-checkbox-list","list");
						_template=_template.replace(/event-checkbox-name/gm,"name");
						
						// var _eg_gr="checkboxChange(e) {\n";
						// 	_eg_gr+="	    console.log(e);\n";
						// 	_eg_gr+="},\n";
						// 	_eg_gr+="checkboxGroupChange(e) {\n";
						// 	_eg_gr+="		console.log(e);\n";
						// 	_eg_gr+="},\n";
						// _event_group=_eg_gr;
						_vmodel_group="list:[{name: '春眠',checked:false},{name: '不觉',checked:false},{name: '晓',checked:false}],"
					}
					else if(_da_desc["name"]=="Radio 单选框"){
						//初始化CheckboxGroup的 Props与Event
						_template=_template.replace("param-radio-group"," v-model=\"radioValue\" ");
						//_template=_template.replace("event-radio-group"," @change=\"radioGroupChange\" ");
						_template=_template.replace("event-radio-group","");
						
						//初始化Checkbox 的 Props与Event
						_template=_template.replace("param-radio-item","");
						//_template=_template.replace("event-radio-item","   @change=\"radioChange\"  ");
						_template=_template.replace("event-radio-item","");
						_template=_template.replace("event-radio-list","list");
						_template=_template.replace(/event-radio-name/gm,"name");
						
						// var _eg_gr="radioChange(e) {\n";
						// 		_eg_gr+="	    console.log(e);\n";
						// 		_eg_gr+="},\n";
						// 		_eg_gr+="radioGroupChange(e) {\n";
						// 		_eg_gr+="		console.log(e);\n";
						// 		_eg_gr+="},\n";
						// 	_event_group=_eg_gr;
							_vmodel_group="\n list:[{name: '春眠'},{name: '不觉'},{name: '晓'}],\nradioValue:\"\"\n"
						
					}
					else if(_da_desc["name"]=="Table 表格"){
						_template=_template.replace("param-table","");
						_template=_template.replace("param-th","");
						_template=_template.replace("param-td","");
						
						_template=_template.replace("list-th","list.th");
						_template=_template.replace("list-td","list.td");
						
						_vmodel_group="\n list:{\"th\":[\"姓名\",\"性别\",\"年龄\"],\"td\":[[\"张三\",\"男\",\"25\"],[\"李四\",\"男\",\"26\"],[\"王五\",\"男\",\"27\"]]}";
					}
					else if(_da_desc["name"]=="Collapse 折叠面板"){
						//外层  
						let collapse_props_desc="collapse-props";
	                    var cpd= await util.groupProps(_uuid,collapse_props_desc,_da_desc,_da_desc["param"]["collapse-event"],_vmodel_group,_template);
						if(!cpd["statu"]){
							return;
						}
						else{
							console.log(cpd);
							_template=_template.replace("param-collapse",cpd["param"]);
							_template=_template.replace("collapse-event",cpd["event_desc"]["event_template"]);
							_vmodel_group=cpd["vmodel"];
							_event_group=_event_group+cpd["event_desc"]["event_methods"];
						}
						//内层
						let collapse_item_props_desc="collapse-item-props";
						var cipd= await util.groupProps(_uuid,collapse_item_props_desc,_da_desc,_da_desc["param"]["collapse-item-event"],_vmodel_group,_template);
						if(!cipd["statu"]){
							return;
						}
						else{
							console.log(cipd)
							_template=_template.replace("param-collapse-item",cipd["param"]);
							_template=_template.replace("collapse-item-event",cipd["event_desc"]["event_template"]);
							_template=_template.replace("dataFiled",cipd["dataFiled"]);
							_vmodel_group=cipd["vmodel"];
							_event_group=_event_group+cipd["event_desc"]["event_methods"];
						}
						//插槽数据处理
						_template=_template.replace("slot-xxx","");
					}
					else if(_da_desc["name"]=="Grid 宫格布局"){
						//外层
						let param_grid_props_desc="grid-props";
						var cpd= await util.groupProps(_uuid,param_grid_props_desc,_da_desc,_da_desc["param"]["grid-event"],_vmodel_group,_template);
						if(!cpd["statu"]){
							return;
						}
						else{
							_template=_template.replace("param-grid-props",cpd["param"]);
							_template=_template.replace("grid-event",cpd["event_desc"]["event_template"]);
							_template=_template.replace(/dataFiled/gm,cpd["dataFiled"]);
							_vmodel_group=cpd["vmodel"];
							_event_group=_event_group+cpd["event_desc"]["event_methods"];
						}
						//内层
						let grid_item_props_desc="grid-item-props";
						var cipd= await util.groupProps(_uuid,grid_item_props_desc,_da_desc,_da_desc["param"]["grid-item-event"],_vmodel_group,_template);
						if(!cipd["statu"]){
							return;
						}
						else{
							_template=_template.replace("grid-item-props",cipd["param"]);
							_template=_template.replace("grid-item-event",cipd["event_desc"]["event_template"]);
							//_template=_template.replace(/dataFiled/gm,cipd["dataFiled"]);
							_vmodel_group=cipd["vmodel"];
							_event_group=_event_group+cipd["event_desc"]["event_methods"];
						}
						
					}
					else if(_da_desc["name"]=="Dropdown 下拉菜单"){
						//外层
						let param_grid_props_desc="dropdown-props";
						var cpd= await util.groupProps(_uuid,param_grid_props_desc,_da_desc,_da_desc["param"]["dropdown-events"],_vmodel_group,_template);
						if(!cpd["statu"]){
							return;
						}
						else{
							    _template=_template.replace("dropdown-props",cpd["param"]);
								_template=_template.replace("dropdown-events",cpd["event_desc"]["event_template"]);
								_event_group=_event_group+cpd["event_desc"]["event_methods"];
						}
						//内层
						let grid_item_props_desc="dropdown-item-props";
						var cipd= await util.groupProps(_uuid,grid_item_props_desc,_da_desc,_da_desc["param"]["dropdown-item-events"],_vmodel_group,_template);
						if(!cipd["statu"]){
							return;
						}
						else{
							     _vmodel_group=cipd["vmodel"];
								_event_group=_event_group+cipd["event_desc"]["event_methods"];
						}
						//遍历生成u-dropdown-item
						let _dropdown_item="\n";
						let _dfg=JSON.parse(_da_desc["param"]["dropdown-item-props"][1]["已选值"]) ;
						let _poi=0;
		                for(let dp of _dfg){
							let _oku=_da_desc["templateChild"];
							_oku=_oku.replace("dropdown-item-events",cipd["event_desc"]["event_template"]);
							_oku=_oku.replace("dropdown-item-vmodel",dp["vmodel"]);
							_oku=_oku.replace("dropdown-item-title",dp["title"]);
							_oku=_oku.replace("dataFiled",cipd["dataFiled"]+"["+_poi+"]['options']");
							_vmodel_group=_vmodel_group+"\n"+dp["vmodel"]+":null, //"+dp["title"]+"--绑定值";
							_dropdown_item=_dropdown_item+""+_oku+"\n";
							_poi++;
						}
						_template=_template.replace("templateChild",_dropdown_item);
					}
					else if(_da_desc["name"]=="Form 表单"){
						//外层
						let param_form_props_desc="form-props";
						var cpd= await util.groupProps(_uuid,param_form_props_desc,_da_desc,[],_vmodel_group,_template);
						if(!cpd["statu"]){
							return;
						}
						else{
							    _template=_template.replace("param-form-xxx",cpd["param"]);
								_vmodel_group=cpd["vmodel"]
						}
						_template=_template.replace(/FormID/gm,_uuid);
						_template=_template.replace("slot-xxx","");
						
						//获取表单的model以及ref参数，生成表单提交事件与表单验证事件
						_is_from=true;
						let _map_l={};
					    for(let fp of _da_desc["param"]["form-props"]){
							    if(fp["参数"]=="ref"){
									_map_l["ref"]=fp["已选值"]
								}
							    else if(fp["参数"]=="rules"){
									_map_l["rules"]=fp["已选值"]
								}
						}
						is_form_param=_map_l;
					}
					//this.$store.state.activeSecondMenuUUID=_uuid;
					this.setActiveSecondMenuUUID(_uuid);
					_selectUnitList[this.$store.state.activeSecondMenuUUID]=_da_desc;
					//当前组件是否绑定父组件
					if(null!= this.$store.state.isNest&&this.$store.state.isNest!=""){
						_da_desc["parentID"]=this.$store.state.isNest;
					}
					this.setSelectUnitList(_selectUnitList);
					
					_template=_template.replace("id-xxx",this.$store.state.activeSecondMenuUUID);
					_template=_template.replace("xxxxxx",this.$store.state.activeSecondMenuUUID);
					
					let _this=this;
					
					
					//当前组件是否放到Form 表单中
					if(!this.$u.test.isEmpty(_this.$store.state.isNest)&&!this.$u.test.isEmpty(_selectUnitList[_this.$store.state.isNest])){
						_selectUnitList[this.$store.state.activeSecondMenuUUID]=_da_desc;
						_da_desc["param"]["form-item-props"]=_selectUnitList[_this.$store.state.isNest]["param"]["form-item-props"];
						
						//form-item-props 中的label与prop 重置
						for(let ij in _da_desc["param"]["form-item-props"]){
							let _name_p=_da_desc["param"]["form-item-props"][ij]["参数"];
							if(_name_p=="label"||_name_p=="prop"){
								_da_desc["param"]["form-item-props"][ij]["已选值"]="";
							}
						}
						var _set_param=function(props,name){
							for(let nup of _da_desc["param"][props]){
									if(nup["参数"]==name){
									   nup["已选值"]=_selectUnitList[_this.$store.state.isNest]["param"]["form-props"][1]["已选值"]+".";
									   nup["说明"]="当前组件双向绑定需加上外层表单数据对象前缀(如fromModel.参数)"
									}
							}
						}
						//将当前组件双向绑定参数，加上form表单数据对象的前缀
						if(_da_desc["name"]=="Checkbox 复选框"){
							_set_param("checkbox-props","v-checked");
						}
				        else if(_da_desc["name"]=="Radio 单选框"){
							_set_param("radiogroup-props","v-model");
						}
						_selectUnitList[this.$store.state.activeSecondMenuUUID]=_da_desc;
						this.setSelectUnitList(_selectUnitList);
						
						let _isNestName=_selectUnitList[_this.$store.state.isNest]["name"];
						let _da_desc_i=_selectUnitList[_this.$store.state.isNest];
						if(_isNestName=="Form 表单"){
						    let templateChild=_selectUnitList[_this.$store.state.isNest]["templateChild"];
							//获取u-form-item的参数定义（初始化）
							let vmodel_but_new="";
							let param_form_item_props_desc="form-item-props";
							var cpd= await util.groupProps(_uuid,param_form_item_props_desc,_da_desc_i,[],vmodel_but_new,"");
							if(!cpd["statu"]){
								return;
							}
							else{
							   templateChild=templateChild.replace("param-form-item-xxx",cpd["param"]);
							}
							templateChild=templateChild.replace("formUnit",_template);
							_template=templateChild;
						}
					}
					uni.request({
						    url: 'http://127.0.0.1:8090/template', 
							method:"POST",
						    data: {
						          param:{
									  "template":_template,
									  "uuid":_uuid,
									  "event": _event_group,
									  "vmodel":_vmodel_group,
									  "parentID":_this.$store.state.isNest!=null?_this.$store.state.isNest:null,
									  "is_form_param":is_form_param
								  }
						    },
						    header: {
						        
						    },
						    success: (res) => {
						        console.log(res.data);
						       //当前是否为组件嵌套
						       if(null!=_this.$store.state.isNest&&_this.$store.state.isNest!=""){
						       	//console.log("父ID:"+_this.$store.state.isNest+"子ID:"+_uuid);
						       	let parentID=_this.$store.state.isNest;
						       	let childID=_uuid;
						       	_this.$store.state.isNest=null;
						       	//将父组件与子组件关联起来(防止父组件更新时丢失嵌套的子组件)
						       	//将子组件已经生成的UI存放起来，用于父组件更新时直接使用(需注意如果子组件更新时也需要更新当前对象)
						       	var ur=_this.$store.state.unitRelationship;
						       	if(ur.hasOwnProperty(parentID)){
						       		ur[parentID][childID]=_template;
						       	}
						       	else{
						       		let _p={};
						       		    _p[childID]=_template;
						       		    ur[parentID]=_p;
						       	}
						       	_this.setUnitRelationship(ur);
						       }
						    }
						});
				}
				
			}
			}
		}
    }
	
</script>
<style lang="scss">
	@import "@/uni_modules/uview-ui/index.scss";
</style>
<style>
	
    /* #ifndef APP-PLUS-NVUE */
    /* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
    @import './common/uni.css';

	/* H5 兼容 pc 所需 */
	/* #ifdef H5 */
	@media screen and (min-width: 768px) {
		body{
			overflow-y: scroll;
		}
	}

	 /* 顶栏通栏样式 */
	/* .uni-top-window {
	    left: 0;
	    right: 0;
	} */

	uni-page-body {
		background-color: #F5F5F5 !important;
		min-height: 100% !important;
		height: auto !important;
	}

	.uni-top-window uni-tabbar .uni-tabbar {
		background-color: #fff !important;
	}

	.uni-app--showleftwindow .hideOnPc {
		display: none !important;
	}
	/* #endif */

    /* 以下样式用于 hello uni-app 演示所需 */
    page {
        background-color: #efeff4;
        height: 100%;
        font-size: 28rpx;
        line-height: 1.8;
    }
	.fix-pc-padding {
		padding: 0 50px;
	}
    .uni-header-logo {
        padding: 30rpx;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 10rpx;
    }

    .uni-header-image {
        width: 100px;
        height: 100px;
    }

    .uni-hello-text {
        color: #7A7E83;
    }

    .uni-hello-addfile {
        text-align: center;
        line-height: 300rpx;
        background: #FFF;
        padding: 50rpx;
        margin-top: 10px;
        font-size: 38rpx;
        color: #808080;
    }
    /* #endif*/
</style>
