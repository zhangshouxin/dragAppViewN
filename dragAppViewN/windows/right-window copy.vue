<template>
	<view>
		<!--页面保存确认输入开始-->
	<!-- 	<u-modal id="8feb0754-69cc-4f10-b08f-25f0ff84916c" @confirm="modalConfirm" @cancel="modalCancel"
			:show-cancel-button="true" v-model="z_modal_y" title="保存页面"
			onclick="getUnitDesc('8feb0754-69cc-4f10-b08f-25f0ff84916c',event)" >
			<view slot="default" >
				</br>
				<u-input   v-model="z_modal_title" :border="false" input-align="center" placeholder="请输入标题(最好中文)" />
				<u-input  v-model="z_modal_name"  :border="false" input-align="center"
					placeholder="请输入页面名称(最好英文)" />
					</br>
			</view>
		</u-modal> -->
		
		<!--页面保存确认输入结束-->
	<view v-if="activeTopMenu=='模板'" style="position: relative;">
	    <view style="position: absolute;left: 0; right: 0;text-align: center;top: 400rpx;">
			<label style="background: #2D497B;color: #FFFFFF;font-size: 28rpx;height: 100rpx;padding: 15rpx 30rpx;border-radius: 10rpx;" @click="sapage()">保存页面</label>
		</view>
	</view>
	<view class="rightContent" v-if="activeTopMenu!='模板'&&activeTopMenu!='已生成页面'">
		
		<view class="unitContent" v-if="unitItem">
			<label class="unitContentTitle">
				<a :href="unitLink" target="_blank" style="text-decoration: none;">
					{{nowUnitName}}
				</a>
			</label>
			<button class="unitButton unitButton_save" @click="saveUnit(false)">保存</button>
			<button class="unitButton unitButton_del" @click="delUnit()">删除</button>
		</view>

		<view v-if="null!=isGlUnit&&isGlUnit!=''" class="unitContent" style="border-top: 1px solid #2D497B;">
			<label class="unitContentTitle">
				关联其他组件
			</label>
			<label v-if="null!=isSelectUnit&&isSelectUnit!=''" style="color: #888888;">---{{isSelectUnit}}</label>
			<button v-if="nowUnitName=='Input 输入框'||nowUnitName=='Field 输入框'" class="unitButton2 unitButton_del2"
				@click="delBdUnit(isGlUnit,$event)">删除关联</button>
			<button class="unitButton2 unitButton_save2" @click="lookBdUnit(isGlUnit,$event)">查看关联组件</button>
		</view>

		<template v-for="(li,key) in unitItem">
			<label class="zbt">{{key}}
			</label>
			<!-- 如果遇到Layout布局，则动态添加分栏 -->
			<template v-if="nowUnitName=='Layout 布局'&&key=='col-props'">
				<label class="czbj">(新增都以最后一个分栏为参照)</label>
				<label class="zbt_add" @click="addCol()">新增</label>
			</template>
			<view class="title">

				<template v-if="nowUnitName=='Layout 布局'&&key=='col-props'">
					<template v-for="(li2,key2) in li[0][0]">
						<view class="titleItem" v-if="key2!='平台差异说明'&&key2!='已选值'&&key2!='repair'">
							{{key2=="可选值"?"值":key2}}
						</view>
					</template>
				</template>

				<template v-else>
					<template v-for="(li2,key2) in li[0]">
						<view class="titleItem" v-if="key2!='平台差异说明'&&key2!='已选值'&&key2!='repair'">
							{{key2=="可选值"?"值":key2}}
						</view>
					</template>
				</template>

			</view>


			<template v-if="nowUnitName=='Layout 布局'&&key=='col-props'">
				<template v-for="(li3,ind) in li">
					<view class="col_props_view">

						<template v-for="(lli,idd) in li3">

							<view class="titleCont">
								<template v-for="(li4,key3) in lli" v-if="key3!='平台差异说明'&&key3!='已选值'&&key3!='repair'">

									<view v-if="key3!='可选值'"
										:class="{'titleContItem':key3!='说明','titleContItem2':key3==='说明'}">
										{{li4}}
									</view>
									<view v-if="key3=='可选值'" class="titleContItem">
										<template v-if="dealParam(li4).length==1">
											<!-- 											<input type="text" class="kxzInput" v-model="unitItem[key][ind][idd]['已选值']" />
 --> <template v-if="lli['默认值']!='不允许修改'">
												<input type="text" maxlength="1000" class="kxzInput"
													v-model="unitItem[key][ind][idd]['已选值']" /> </template>
											<template v-else>
												{{unitItem[key][ind][idd]['已选值']}}
											</template>
										</template>
										<template v-if="dealParam(li4).length>1">
											<select class="slect_d" v-model="unitItem[key][ind][idd]['已选值']">
												<template v-for="lo in dealParam(li4)">
													<option :value="lo">{{lo}}</option>
												</template>
											</select>
										</template>
									</view>
								</template>
							</view>
						</template>
					</view>

					<view class="col_props_view2" @click="delCol(ind)">
						删除
					</view>
				</template>
			</template>

			<template v-else>
				<template v-for="(li3,kkk,ind) in li">

					<view class="titleCont">
						<template v-for="(li4,key3) in li3" v-if="key3!='平台差异说明'&&key3!='已选值'&&key3!='repair'">
							<view v-if="key3!='可选值'" :class="{'titleContItem':key3!='说明','titleContItem2':key3==='说明'}">
								{{li4}}
							</view>
							<view v-if="key3=='可选值'" class="titleContItem">
								<template v-if="dealParam(li4).length==1">
									<input type="text" maxlength="1000" class="kxzInput"
										v-model="unitItem[key][kkk]['已选值']" />

								</template>
								<template v-if="dealParam(li4).length>1">
									<!-- 单独处理输入框绑定其他组件 -->
									<select v-if="nowUnitName=='Input 输入框'&&unitItem[key][kkk]['参数']=='bdUnit'"
										class="slect_d" v-model="input_bdunit">
										<template v-for="lo in dealParam(li4)">
											<option :value="lo">{{lo}}</option>
										</template>
									</select>
									<select v-else-if="nowUnitName=='Field 输入框'&&unitItem[key][kkk]['参数']=='bdUnit'"
										class="slect_d" v-model="input_bdunit">
										<template v-for="lo in dealParam(li4)">
											<option :value="lo">{{lo}}</option>
										</template>
									</select>
									<select v-else class="slect_d" v-model="unitItem[key][kkk]['已选值']">
										<template v-for="lo in dealParam(li4)">
											<option :value="lo">{{lo}}
											</option>
										</template>
									</select>

								</template>
							</view>
						</template>
					</view>

				</template>

			</template>


		</template>
	</view>
	</view>
</template>

<script>
	import uView from "../static/uView/data.js";
	import _util from "../common/util.js";
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {
				/*页面保存确认输入开始*/
				z_modal_y: false,
				z_modal_title: null,
				z_modal_name: null,
				/*页面保存确认输入结束*/
				nowUnitName: null,
				unitItem: null,
				unitLink: null,
				nowUnitCode: null, //当前拖动、编辑中的组件
				input_bdunit: null, //当前input 输入框绑定的其他组件
				isGlUnit: null, //当前组件是否有关联组件
				isSelectUnit: null, //当前组件绑定选择类组件的名称
			}
		},

		watch: {
			//
			triggerSaveModal(v1,v2){
				//this.z_modal_y=true;
				uni.showModal({
					title: '提示',
					content: '',
					placeholderText:"请输入创建页面的名称",
					editable:true,
					success: function (res) {
						if (res.confirm) {
						    let pageName=uni.$u.trim(res.content,"all");
							if(null!=pageName&&pageName!=""){
								
							}
							else{
								uni.showToast({
									title: '页面名称不能为空',
									duration: 2000,
									icon:"error"
								});
							}
							
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			//拖动新组件时保存当前组件
			unitChangeID: async function(v1, v2) {
				//是否有需要保存的组件
				if (!this.$u.test.isEmpty(this.unitItem)) {
					let sta = await this.saveUnit(true);
					console.log("上一个组件保存状态" + sta);
					if (sta) {
						//放入新组件
						uni.$emit('checkUnitSave', {});//执行App.vue中checkUnitSave的监听事件
					}
				} else {
					//放入新组件
					uni.$emit('checkUnitSave', {});//执行App.vue中checkUnitSave的监听事件
				}
			},
			activeSecondMenuUUID: function(v1, v2) {
				//当前组件的缓存信息已删除
				if(!v1){
					this.unitItem=null;
				}
				if (this.unitDesc.hasOwnProperty(v1)) {
					this.nowUnitName = this.unitDesc[v1]["name"];
					var _unitItem = JSON.stringify(this.unitDesc[v1]["param"])
					this.unitItem = JSON.parse(_unitItem);
					this.unitLink = this.unitDesc[v1]["href"];
					this.nowUnitCode = this.$store.state.activeSecondMenuUUID;
					if (!this.$u.test.isEmpty(this.unitDesc[v1]["bdUnit"])) {
						this.isGlUnit = this.unitDesc[v1]["bdUnit"];
						this.isSelectUnit = this.unitDesc[v1]["bdUnitName"];
					} else {
						this.isGlUnit = null;
						this.isSelectUnit = null;
					}
				}
			},
			unitItem: function(v1, v2) {},
			editUnit: async function(v1, v2) {
				if(v1==this.nowUnitCode){
					return;
				}
				//保存上一个组件
				let sta = await this.saveUnit(false);
				if(sta){
					document.getElementById(v1).style.border = "2px solid #f55555";
					if(null!=v2&&v2!=""){
						try{
							document.getElementById(v2).style.border = "0px solid #f55555";
						}catch(e){
						}
					}
					var _selectUnitList = this.$store.state.selectUnitList;
					this.nowUnitName = _selectUnitList[v1]["name"];
					var _unitItem = JSON.stringify(_selectUnitList[v1]["param"])
					this.unitItem = JSON.parse(_unitItem);
					this.unitLink = _selectUnitList[v1]["href"];
					this.nowUnitCode = v1;
					if (!this.$u.test.isEmpty(_selectUnitList[v1]["bdUnit"])) {
						this.isGlUnit = _selectUnitList[v1]["bdUnit"];
						this.isSelectUnit = _selectUnitList[v1]["bdUnitName"];
					} else {
						this.isGlUnit = null;
						this.isSelectUnit = null;
					}
					if (this.nowUnitName == "Form 表单") {
						this.saveUnit(false)
					}
					uni.setStorageSync('activeSecondMenuUUID', v1);
				}
				else{
					this.$store.state.editUnit=this.nowUnitCode;
				}
				
			},
			//监听当前input输入框是否绑定其他组件
			input_bdunit: function(new_v, odl_v) {
				var _su = this.$store.state.selectUnitList;
				let _yz_type = this.unitItem["props"];
				//当前组件是否已绑定其他选择类的组件，如果绑定请删除后在绑定
				if (!this.$u.test.isEmpty(this.isGlUnit)) {
					uni.showToast({
						title: '当前已绑定' + this.isSelectUnit + ",请删除关联后在绑定。",
						duration: 2000,
						icon: "none"
					});
					return;
				}
				//如果选择绑定其他组件，则当前组件的type必须为select
				for (let yt of _yz_type) {
					if (yt["参数"] == "type") {
						if (!this.$u.test.isEmpty(yt["已选值"])) {
							if (yt["已选值"] != "select") {
								uni.showToast({
									title: '模式选择必须为select',
									duration: 2000,
									icon: "none"
								});
								return;
							}
						} else {
							uni.showToast({
								title: '模式选择不能为空，且需为select',
								duration: 2000,
								icon: "none"
							});
							return;
						}
					}
				}
				var _bd_unit_list = this.$store.state.bdUnitList;
				if (_bd_unit_list.hasOwnProperty(new_v)) {
					//当前组件是否还有未进行绑定的
					let _map = _bd_unit_list[new_v];
					let is_empty = false;
					for (let m in _map) {
						if (!_map[m]) {
							//更新当前input组件
							_su[this.nowUnitCode]["bdUnit"] = m;

							this.setSelectUnitList(_su);
							//更新绑定选择形态的组件使用情况
							_map[m] = this.nowUnitCode;
							this.setBdUnitList(_bd_unit_list);

							var _sud = this.$store.state.selectUnitList;
							_sud[m]["bdUnit"] = this.nowUnitCode;
							_su[this.nowUnitCode]["bdUnitName"] = _sud[m]["name"];
							this.isSelectUnit = _sud[m]["name"];
							this.setSelectUnitList(_sud);
							this.isGlUnit = m;

							is_empty = true;
							break;
						}
					}
					if (!is_empty) {
						uni.showToast({
							title: '当前需要绑定的组件已使用完，请将需要绑定的组件拖入创建页面中，在进行选择。',
							duration: 2000,
							icon: "none"
						});
					}
				} else {
					uni.showToast({
						title: '需要绑定组件不存在，请将需要绑定的组件拖入创建页面中，在进行选择。',
						duration: 2000,
						icon: "none"
					});
				}
			}

		},

		computed: {

			...mapState({
				activeSecondMenuUUID: state => state.activeSecondMenuUUID,
				unitDesc: state => state.selectUnitList,
				editUnit: state => state.editUnit,
				activeTopMenu: state => state.activeTopMenu,
				unitChangeID: state => state.unitChangeID,
				triggerSaveModal:state => state.triggerSaveModal
			}),
			//可选值判断(是否为数组)
			dealParam() {
				return function(v) {
					let _p = v.split("/");
					return _p;
				}
			}
		},
		methods: {
			...mapMutations(['setSelectUnitList', 'setUnitRelationship', 'setBdUnitList', 'setActiveSecondMenuUUID']),
				
			sapage(){
				if(this.$route.path=="/pages/zyPages/centerPage/preview"){
					uni.showToast({
						title: '请选择需要保存的模板页面',
						duration: 2000,
						icon: "none"
					});
				}
				else{
					this.z_modal_y=true;
				}
				
			},
			
			modalConfirm() {
				
				if (!this.$u.test.isEmpty(this.z_modal_title) && !this.$u.test.isEmpty(this.z_modal_name)) {
					var _this=this;
					//验证页面名称、标题是否存在
					let _ff=uView["已生成页面"];
				    let _isMsg="";
					let aa=_ff.filter(function(value,index,arry){
						if(value.name==_this.z_modal_title){
							_isMsg="页面标题已存在";
							return true;
						}
						else if(value.href.indexOf(_this.z_modal_name)>=0){
							_isMsg="页面名称已存在";
							return true;
						}
					    else{
							return false;
						}
						
					})
					if(aa.length>0){
						uni.showToast({
							title: _isMsg,
							duration: 5000,
							icon: "none"
						});
						return;
					}
					
					let allUnitArry = [];
					var allUnit = this.$store.state.selectUnitList;
					for (let k in allUnit) {
						allUnitArry.push(k);
						if (allUnit[k]["name"] == "Layout 布局") {
							let _p = allUnit[k]["param"]["col-props"];
							console.log(_p)
							for (let pi in _p) {
								for (let pii of _p[pi]) {
									if (pii["参数"] == "id") {
										allUnitArry.push(pii["已选值"]);
									}
								}
							}
						}
					}
					uni.request({
						url: 'http://127.0.0.1:8090/savePage',
						method: "POST",
						data: {
							param: {
								"allUnitArry": allUnitArry,
								"newPageName": _this.z_modal_name,
								"newPageTitle":_this.z_modal_title,
								"activeTopMenu":_this.$store.state.activeTopMenu,
								"activeSecondMenu":_this.$store.state.activeSecondMenu
							}
						},
						header: {},
						success: (res) => {
							console.log(res.data);
						}
					});
				} else {
					
					uni.showToast({
						title: '页面标题或者页面名称不能为空',
						duration: 2000,
						icon: "none"
					});
				}
			
			},
			modalCancel() {
			},
			//删除关联组件
			delBdUnit(id, e) {
				var _new_su = this.$store.state.selectUnitList;
				var _now_unit = _new_su[id];
				//return;
				var _gl_unit_id = "";
				//判断当前组件是否为弹出类组件
				var _db_unit_list_info = ["Calendar 日历", "Select 列选择器", "Keyboard 键盘", "Picker 选择器", "ActionSheet 操作菜单",
					"Popup 弹出层"
				]
				//弹出类
				if (_db_unit_list_info.indexOf(_now_unit["name"]) >= 0) {
					_gl_unit_id = _now_unit["bdUnit"];
					//删除bdUnitList中的使用关系
					let _bdUnitList = this.$store.state.bdUnitList;
					_bdUnitList[_now_unit["name"]][id] = false;
					this.setBdUnitList(_bdUnitList);

					//删除当前组件中bdUnit的标记
					delete _new_su[id]["bdUnit"];

					//删除组件中bdUnit的标记
					delete _new_su[_gl_unit_id]["bdUnit"];

				}
				//input类
				else {

					_gl_unit_id = _now_unit["bdUnit"];
					//删除bdUnitList中的使用关系
					let _bdUnitList = this.$store.state.bdUnitList;
					_bdUnitList[_new_su[_gl_unit_id]["name"]][_gl_unit_id] = false;
					this.setBdUnitList(_bdUnitList);

					//删除当前组件中bdUnit的标记
					delete _new_su[id]["bdUnit"];

					//删除组件中bdUnit的标记
					delete _new_su[_gl_unit_id]["bdUnit"];

				}

				this.setSelectUnitList(_new_su);

				this.isGlUnit = null;
				this.saveUnit(false);
				//window.location.reload();
			},
			//查看关联组件
			lookBdUnit(id, e) {
				try {
					document.getElementById(this.nowUnitCode).style.border = "0px solid #f55555";
				} catch (e) {
					console.log(id + "元素找不到")
				}

				let _child_list = [];
				//添加组件选中事件
				try {
					document.getElementById(id).style.border = "2px solid #f55555";
				} catch (e) {
					console.log(id + "元素找不到")
				}
				//获取当前组件的参数
				uni.$emit('getUnitDesc', {
					id: id,
					child: _child_list
				});
				e.stopPropagation();
			},
			//新增Layout 布局的分栏
			addCol() {
				var _ui = this.unitItem;
				var col_temp = [{
						"参数": "span",
						"说明": "栅格占据的列数，总12等分",
						"类型": "String | Number",
						"默认值": "0",
						"可选值": "1-12",
						"已选值": 4
					}, {
						"参数": "offset",
						"说明": "分栏左边偏移，计算方式与span相同",
						"类型": "String | Number",
						"默认值": "0",
						"可选值": "-"
					}, {
						"参数": "text-align",
						"说明": "文字水平对齐方式",
						"类型": "String",
						"默认值": "left",
						"可选值": "center/right/left"
					},
					{
						"参数": "style",
						"说明": "自定义分栏样式",
						"类型": "String",
						"默认值": "background: #d3dce6;height: 80rpx;border-radius: 8rpx;margin-top: 5px;",
						"可选值": "-",
						"已选值": "background: #d3dce6;height: 80rpx;border-radius: 8rpx;margin-top: 5px;"
					},
					{
						"参数": "id",
						"说明": "用于关联当前组件是否还有子组件",
						"类型": "String",
						"默认值": "不允许修改",
						"可选值": "-",
						"已选值": "col_props_item1",
					}
				];
				col_temp[4]["已选值"] = _util.uuid();;
				_ui["col-props"].push(col_temp);
			},
			//删除Layout 布局 指定的分栏
			delCol(v) {
				var _ui = this.unitItem;
				if (parseInt(_ui["col-props"].length) == 1) {
					uni.showToast({
						title: '至少保留一个分栏',
						duration: 2000
					});
				} else {
					_ui["col-props"].splice(v, 1);
				}
				//console.log(this.unitItem["col-props"])
			},
			//删除当前控件
			delUnit() {
				//判断当前组件是否有绑定其他组件
				var _db_unit_list_info = ["Calendar 日历", "Select 列选择器", "Keyboard 键盘", "Picker 选择器", "ActionSheet 操作菜单",
					"Popup 弹出层"
				]
				var _su_jh = this.$store.state.selectUnitList;
				var _now_unit_name_jh = _su_jh[this.nowUnitCode]["name"];
				if (_db_unit_list_info.indexOf(_now_unit_name_jh) >= 0) {
					let _bdUnitList_iio = this.$store.state.bdUnitList;
					let _isY = _bdUnitList_iio[_now_unit_name_jh][this.nowUnitCode];
					if (_isY != false) {
						uni.showToast({
							title: '当前组件有关联其他组件，请删除其关联关系后在删除',
							duration: 2000,
							icon: "none"
						});
						return;
					}
				}
				//判断Input 输入框 是否有挂载组件
				if (_now_unit_name_jh == "Input 输入框" || _now_unit_name_jh == "Field 输入框") {
					if (!this.$u.test.isEmpty(_su_jh[this.nowUnitCode]["bdUnit"])) {
						uni.showToast({
							title: '当前组件有关联其他组件，请删除其关联关系后在删除',
							duration: 2000,
							icon: "none"
						});
						return;
					}
				}

				var _uuid = this.nowUnitCode;
				var _this = this;
				uni.request({
					url: 'http://127.0.0.1:8090/templateDel',
					method: "POST",
					data: {
						param: {
							"uuid": _uuid
						}
					},
					header: {

					},
					success: (res) => {
						//从已选中的组件列表删除
						var _su = _this.$store.state.selectUnitList;
						//当前组件是否有其他子组件
						let _nowpar = this.$store.state.removeUnitRelationship;
						if (Object.keys(_nowpar).length > 0) {
							//再次验证是否为选中的组件
							if (_nowpar.hasOwnProperty(_this.nowUnitCode)) {
								let _child_list_p = _nowpar[_this.nowUnitCode];
								let _urgd = _this.$store.state.unitRelationship;
								for (let cpo in _child_list_p) {
									if (_urgd.hasOwnProperty(_child_list_p[cpo])) {
										delete _urgd[_child_list_p[cpo]];
									}
								}
								this.setUnitRelationship(_urgd);
							}
						}
						//如果当前组件也属于其他组件的子组件，也从关联关系中删除
						if (_su[_this.nowUnitCode].hasOwnProperty("parentID")) {
							let _urg = _this.$store.state.unitRelationship;
							let _parentId = _su[this.nowUnitCode]["parentID"];
							if (_urg.hasOwnProperty(_parentId)) {
								delete _urg[_parentId][this.nowUnitCode];
								this.setUnitRelationship(_urg);
							}
						}
						delete _su[_this.nowUnitCode];
						_this.setSelectUnitList(_su);
						_this.nowUnitName = null;
						_this.unitItem = {};
						//删除bdUnitList中的绑定关系
						if (_db_unit_list_info.indexOf(_now_unit_name_jh) >= 0) {
							let _bdUnitList_iio = this.$store.state.bdUnitList;
							delete _bdUnitList_iio[_now_unit_name_jh][this.nowUnitCode];
							this.setBdUnitList(_bdUnitList_iio);
						}
						//this.setActiveSecondMenuUUID(null);
					}
				});

			},
			//保存当前控件
			async saveUnit(vvv) {
				uni.showLoading({
					title: '数据处理中'
				});
				var _su = this.$store.state.selectUnitList;
				_su[this.nowUnitCode]["param"] = this.unitItem;
				this.setSelectUnitList(_su);
				//console.log(this.nowUnitCode);
				//当前保存组件需要添加事件方法
				var _unit_add_event = "";
				//自定义事件
				var _all_event_create = "";
				//组件是否使用v-model进行双向绑定
				var _unit_add_vmodel = "";
				//组件是否定义的插槽
				var _unit_add_slot = "";


				//-------------组件的常规参数设置开始-------------------
				//当前组件是否为独立组价
				if (_su[this.nowUnitCode]["param"].hasOwnProperty("props")) {
					var _uuid = this.nowUnitCode;
					var _template = _su[this.nowUnitCode]["template"];
					_template = _template.replace("id-xxx", _uuid)

					var _first_param = _su[this.nowUnitCode];
					var _join_param = "props";

					//获取当前组件所有需要初始化的事件
					var _all_event = [];
					for (let fp in _first_param["param"]) {
						if (fp.indexOf("event") >= 0) {
							_all_event = _first_param["param"][fp]
						}
					}
					var cpd = await _util.groupProps(this.nowUnitCode, _join_param, _first_param, _all_event,
						_unit_add_vmodel, _template);
					if (!cpd["statu"]) {
						return false;
					} else {
						_join_param = cpd["param"];
						_unit_add_event = cpd["event_desc"]["event_template"];
						_all_event_create = cpd["event_desc"]["event_methods"];
						_unit_add_vmodel = cpd["vmodel"];
						_template = cpd["template"];
						_unit_add_slot = cpd["unit_add_slot"];
					}
					_template = _template.replace("param-xxx", _join_param);
					//获取拖动生成后的组件点击事件的ID
					_template = _template.replace("xxxxxx", _uuid);

					//是否有事件生成
					_template = _template.replace("event-xxx", _unit_add_event);

					//是否有定义插槽
					_template = _template.replace("slot-xxx", _unit_add_slot);

					//当前组件是否form 表单的子组件
					if (!this.$u.test.isEmpty(_su[this.nowUnitCode]["parentID"]) && !this.$u.test.isEmpty(_su[_su[this
							.nowUnitCode]["parentID"]])) {
						let _parent_name = _su[_su[this.nowUnitCode]["parentID"]]["name"];
						if (_parent_name == "Form 表单") {
							//当前放入form 表单中的组件的v-model 的双向绑定的值不能为空
							let _is_have_vmodel = _su[this.nowUnitCode]["param"]["props"];
							for (let ihv of _is_have_vmodel) {
								if (ihv["参数"] == "v-model") {
									if (!this.$u.test.isEmpty(ihv["已选值"])) {
										//验证 表单数据对象.参数  参数是否为空

										if (ihv["已选值"].indexOf(".") >= 0) {
											let _pa_ca = ihv["已选值"].split(".")[1];
											if (!this.$u.test.isEmpty(_pa_ca)) {
												break;
											} else {
												uni.showToast({
													title: "当前组件:" + _su[this.nowUnitCode]["name"] + "的" + ihv[
														"参数"] + "需要在.后面加上具体参数",
													duration: 2000,
													icon: "none"
												});
												return false;
											}
										} else {
											uni.showToast({
												title: "当前组件:" + _su[this.nowUnitCode]["name"] + "的" + ihv[
													"参数"] + "格式不正确，如(fromModel.参数)",
												duration: 2000,
												icon: "none"
											});
											return false;
										}

									} else {
										uni.showToast({
											title: "当前组件:" + _su[this.nowUnitCode]["name"] + "的" + ihv["参数"] +
												"不能为空",
											duration: 2000,
											icon: "none"
										});
										return false;

									}

								}
							}
							// 如果是Slider 滑动选择器，则不生成u-form-item
							if (_su[this.nowUnitCode]["name"] != "Slider 滑动选择器") {

								let _templateChild = _su[_su[this.nowUnitCode]["parentID"]]["templateChild"];
								//获取u-form-item的参数定义
								let vmodel_but_new = "";
								let param_form_item_props_desc = "form-item-props";
								let _da_desc_i = _su[_su[this.nowUnitCode]["parentID"]];
								//获取当前组件form-item-props的参数，
								_da_desc_i["param"]["form-item-props"] = _su[this.nowUnitCode]["param"][
									"form-item-props"
								];
								var cpd = await _util.groupProps(_su[this.nowUnitCode]["parentID"],
									param_form_item_props_desc, _da_desc_i, [], vmodel_but_new, "");
								if (!cpd["statu"]) {
									return false;
								} else {
									_templateChild = _templateChild.replace("param-form-item-xxx", cpd["param"]);
									//当前组件的_unit_add_vmodel 双向绑定设置为空
									_unit_add_vmodel = "";

								}
								_templateChild = _templateChild.replace("formUnit", _template);
								_template = _templateChild;
							} else {
								_unit_add_vmodel = "";
							}
						}
					}
					var _input_mount_unit_id = null; //当前组件(input/Field)挂载的组件ID
					//当前组件为input 输入框
					if (_first_param["name"] == "Input 输入框" || _first_param["name"] == "Field 输入框") {
						//当前组件是否挂载有组件
						if (!this.$u.test.isEmpty(_first_param["bdUnit"])) {
							_input_mount_unit_id = _first_param["bdUnit"];
						}
					}


					var _this = this;
					var [error, res] = await uni.request({
						url: 'http://127.0.0.1:8090/templateUpdate',
						method: "POST",
						data: {
							param: {
								"template": _template,
								"uuid": _uuid,
								"event": _all_event_create,
								"vmodel": _unit_add_vmodel,
								"input_mount_unit_id": _input_mount_unit_id //如果挂载有组件，则把事件的实现方法，生成到挂载的组件中去
							}
						}
					});
					if (!this.$u.test.isEmpty(error)) {
						return false;
					} else {
						console.log("单个组件"+res.data)
						if (res.data == "success") {
							if (_su[this.nowUnitCode].hasOwnProperty("parentID")) {
								let _urg = _this.$store.state.unitRelationship;
								let _parentId = _su[this.nowUnitCode]["parentID"];
								if (_urg.hasOwnProperty(_parentId)) {
									_urg[_parentId][this.nowUnitCode] = _template;
									this.setUnitRelationship(_urg);
								} else {
									uni.showToast({
										title: '没有找到组件的父ID',
										duration: 2000,
										icon: "none"
									});
								}
							}
							//如果当前组件时放入到表单中，则需要更新表单
							if (!this.$u.test.isEmpty(_su[this.nowUnitCode]["parentID"]) && !this.$u.test.isEmpty(_su[
									_su[this.nowUnitCode]["parentID"]])) {
								let _parent_name = _su[_su[this.nowUnitCode]["parentID"]]["name"];
								if (_parent_name == "Form 表单") {
									uni.$emit('getUnitDesc', {
										id: _su[this.nowUnitCode]["parentID"],
										child: []
									});
								}
							}
							uni.hideLoading();
							return true;
						} else {
							return false;
						}
					}
				}
				//当前组件为组合控件
				else {
					var _uuid = this.nowUnitCode;
					var _template = null;
					var _event_group = ""; //是否有初始化事件
					var _vmodel_group = ""; //是否有初始化双向绑定事件
					var _is_from = false; //当前组合组件是否为表单，是则生成表单提交事件以及表单验证事件
					var is_form_param = "";


					//Layout 布局
					if (_su[this.nowUnitCode]["name"] == "Layout 布局") {
						//通过参数组装分栏
						let row_props = _su[this.nowUnitCode]["param"]["row-props"];
						let _rp_desc = "";
						for (let _rp of row_props) {
							if (_rp.hasOwnProperty("已选值") && _rp["已选值"] != "") {
								_rp_desc = _rp_desc + " " + _rp["参数"] + "=\"" + _rp["已选值"] + "\"  "
							}
						}
						let col_props = _su[this.nowUnitCode]["param"]["col-props"];
						let _cp_desc_all = "";
						for (let _cp in col_props) {
							let _cp_desc = "",
								_view = "  class='layoutdrop'   ",
								_viewChild = "";
							for (let _cpd of col_props[_cp]) {
								if (_cpd.hasOwnProperty("已选值") && _cpd["已选值"] != "") {
									if (_cpd["参数"] == "style") {
										_view = _view + " " + _cpd["参数"] + "=\"" + _cpd["已选值"] + "\"  ";
									} else if (_cpd["参数"] == "id") {
										_view = _view + " " + _cpd["参数"] + "=\"" + _cpd["已选值"] + "\"  ";
										_view = _view + "  @dragover.prevent @drop=\"colDrop('" + _cpd["已选值"] +
										"')\" ";
										//判断该组件是否子组件(该子组件是通过参数重新生成 、 还是复用已经生成的 这两种方式)
										var ur = this.$store.state.unitRelationship;
										if (ur.hasOwnProperty(_cpd["已选值"])) {
											let opu = ur[_cpd["已选值"]];
											for (let _uu in opu) {
												let _oi = "<!--" + _uu + "开始-->" + opu[_uu] + "<!--" + _uu + "结束-->";
												_viewChild = "\n" + _viewChild + _oi;
											}
											_viewChild = _viewChild + "\n<!--" + _cpd["已选值"] + "-->";
										} else {
											_viewChild = "<!--" + _cpd["已选值"] + "-->";
										}

									} else {
										_cp_desc = _cp_desc + " " + _cpd["参数"] + "=\"" + _cpd["已选值"] + "\"  "
									}
								}
							}
							let _cp_desc2 = "\n<u-col " + _cp_desc + ">\n<view " + _view + ">" + _viewChild +
								"</view>\n</u-col>"
							_cp_desc_all = _cp_desc_all + _cp_desc2;
						}
						_template = "<u-row id='" + _uuid + "'  onclick=\"getUnitDesc('" + _uuid + "',event)\" " +
							_rp_desc + ">" + _cp_desc_all + "\n</u-row>";
					} else if (_su[this.nowUnitCode]["name"] == "Checkbox 复选框") {
						_template = _su[this.nowUnitCode]["template"];
						var _eg_gr = "";
						//初始化CheckboxGroup的 Props与Event
						let _param_checkbox_group = _su[this.nowUnitCode]["param"]["checkboxgroup-props"];
						let _param_checkbox_group_desc = "";
						for (let pcg of _param_checkbox_group) {
							if (pcg.hasOwnProperty("已选值") && !this.$u.test.isEmpty(pcg["已选值"])) {
								_param_checkbox_group_desc = _param_checkbox_group_desc + " " + pcg["参数"] + "=\"" +
									pcg["已选值"] + "\"  "
							}
						}
						_template = _template.replace("param-checkbox-group", _param_checkbox_group_desc);
						let _check_e = _su[this.nowUnitCode]["param"]["checkboxgroup-event"][0]["已选值"];
						if (!this.$u.test.isEmpty(_check_e)) {
							_template = _template.replace("event-checkbox-group", " @change=\"" + _check_e + "\" ");
							_eg_gr += "" + _check_e + "(e) {\n";
							//是否跟v-checked实现双向绑定
							let _now_vchecked = "";
							for (let nv of _su[this.nowUnitCode]["param"]["checkbox-props"]) {
								if (nv["参数"] == "v-checked") {
									_now_vchecked = nv["已选值"];
									break;
								}
							}
							if (!this.$u.test.isEmpty(_now_vchecked)) {
								_eg_gr += "		this." + _now_vchecked + "=e;\n";
							} else {
								_eg_gr += "		console.log(e);\n";
							}
							_eg_gr += "},\n";
						} else {
							uni.showToast({
								title: '复选框组的change 事件不能为空',
								duration: 2000,
								icon: "none"
							});
							return false;
						}

						//初始化Checkbox 的 Props与Event
						let _param_check_f = _su[this.nowUnitCode]["param"]["checkbox-props"];
						let _param_check_f_desc = "";
						let event_checkbox_list_value = "";
						for (let pcf of _param_check_f) {
							if (pcf["参数"] == "dataFiled" || pcf["参数"] == "dataSource" || pcf["参数"] == "v-model" || pcf[
									"参数"] == "name") {
								if (!this.$u.test.isEmpty(pcf["已选值"])) {
									if (pcf["参数"] == "dataFiled") {
										_template = _template.replace("event-checkbox-list", pcf["已选值"]);
										event_checkbox_list_value = pcf["已选值"];
									} else if (pcf["参数"] == "dataSource") {
										_vmodel_group = event_checkbox_list_value + ":" + pcf["已选值"] + ",\n"

									} else if (pcf["参数"] == "v-model") {
										//验证数据源中是否存在该key

										let _is_key = JSON.parse(_param_check_f[1]["已选值"])[0];
										if (_is_key.hasOwnProperty(pcf["已选值"])) {
											_template = _template.replace("event-checkbox-checked", pcf["已选值"]);
										} else {
											uni.showToast({
												title: "数据源中不存在" + pcf["已选值"] + "参数",
												duration: 2000,
												icon: "none"
											});
											return false;
										}
									} else if (pcf["参数"] == "name") {
										//验证数据源中是否存在该key
										let _is_key = JSON.parse(_param_check_f[1]["已选值"])[0];
										if (_is_key.hasOwnProperty(pcf["已选值"])) {
											_template = _template.replace(/event-checkbox-name/gm, pcf["已选值"]);
										} else {
											uni.showToast({
												title: "数据源中不存在" + pcf["已选值"] + "参数",
												duration: 2000,
												icon: "none"
											});
											return false;
										}
									}
								} else {
									uni.showToast({
										title: pcf["参数"] + "不能为空",
										duration: 2000,
										icon: "none"
									});
									return false;
								}
							} else {
								if (!this.$u.test.isEmpty(pcf["已选值"])) {
									//当前已选中的值
									if (pcf["参数"] == "v-checked") {
										//如果是放到form 表单中 这不设置
										if (!this.$u.test.isEmpty(_su[this.nowUnitCode]["parentID"]) && !this.$u.test
											.isEmpty(_su[_su[this.nowUnitCode]["parentID"]])) {
											let _parent_name = _su[_su[this.nowUnitCode]["parentID"]]["name"];
											if (_parent_name != "Form 表单") {
												_vmodel_group = _vmodel_group + pcf["已选值"] + ":null,\n"
											}
										} else {
											_vmodel_group = _vmodel_group + pcf["已选值"] + ":null,\n"
										}

									} else {
										_param_check_f_desc = _param_check_f_desc + " " + pcf["参数"] + "=\"" + pcf[
											"已选值"] + "\"  "

									}
								}
							}
						}
						_template = _template.replace("param-checkbox-item", _param_check_f_desc);

						let _check_e_i = _su[this.nowUnitCode]["param"]["checkbox-event"][0]["已选值"];
						if (!this.$u.test.isEmpty(_check_e_i)) {
							_template = _template.replace("event-checkbox-item", "   @change=\"" + _check_e_i +
							"\"  ");
							_eg_gr += "" + _check_e_i + "(e) {\n";
							_eg_gr += "	    console.log(e);\n";
							_eg_gr += "},\n";
						} else {
							_template = _template.replace("event-checkbox-item", " ");
						}
						_event_group = _eg_gr;
						_template = _template.replace("id-xxx", _uuid);
						_template = _template.replace("xxxxxx", _uuid);
					} else if (_su[this.nowUnitCode]["name"] == "Radio 单选框") {
						_template = _su[this.nowUnitCode]["template"];
						//初始化RadioGroup的 Props与Event
						let _param_radio_group_info = _su[this.nowUnitCode]["param"]["radiogroup-props"];
						let _param_radio_group_desc = "";
						let _v_model_name = ""
						for (let prgi of _param_radio_group_info) {
							if (prgi.hasOwnProperty("已选值") && !this.$u.test.isEmpty(prgi["已选值"])) {
								_param_radio_group_desc = _param_radio_group_desc + " " + prgi["参数"] + "=\"" + prgi[
									"已选值"] + "\"  "
								if (prgi["参数"] == "v-model") {
									_v_model_name = prgi["已选值"];
									_vmodel_group = _vmodel_group + prgi["已选值"] + ":\"\",\n";
								}
							}
						}
						_template = _template.replace("param-radio-group", " " + _param_radio_group_desc + " ");

						let _event_radio_group_e = _su[this.nowUnitCode]["param"]["radiogroup-event"][0]["已选值"];
						if (!this.$u.test.isEmpty(_event_radio_group_e)) {
							_template = _template.replace("event-radio-group", " @change=\"" + _event_radio_group_e +
								"\" ");
							let _eg_gr = "\n" + _event_radio_group_e + "(e) {\n";
							//是否跟v-model 实现双向绑定
							if (!this.$u.test.isEmpty(_v_model_name)) {
								_eg_gr += "		this." + _v_model_name + "=e;\n";
							} else {
								_eg_gr += "		console.log(e);\n";
							}
							_eg_gr += "},\n";
							_event_group = _event_group + _eg_gr;
						} else {
							uni.showToast({
								title: '单选框组的change 事件不能为空',
								duration: 2000,
								icon: "none"
							});
							return false;
						}
						//如果是放到表单中，v-model的参数由form生成
						if (!this.$u.test.isEmpty(_su[this.nowUnitCode]["parentID"]) && !this.$u.test.isEmpty(_su[_su[
								this.nowUnitCode]["parentID"]])) {
							let _parent_name = _su[_su[this.nowUnitCode]["parentID"]]["name"];
							if (_parent_name == "Form 表单") {
								_vmodel_group = "";
							}
						}
						//初始化Radio的 Props与Event
						let _param_radio_info = _su[this.nowUnitCode]["param"]["radio-props"];
						let _param_radio_desc = "";
						let _param_radio_vmodel = "";
						for (let pri of _param_radio_info) {
							if (pri["参数"] == "dataFiled" || pri["参数"] == "dataSource" || pri["参数"] == "name") {
								if (!this.$u.test.isEmpty(pri["已选值"])) {
									if (pri["参数"] == "dataFiled") {
										_template = _template.replace("event-radio-list", pri["已选值"]);
										_param_radio_vmodel = pri["已选值"];
									} else if (pri["参数"] == "dataSource") {
										_vmodel_group = _vmodel_group + _param_radio_vmodel + ":" + pri["已选值"] + ",\n"
									} else if (pri["参数"] == "name") {
										//验证数据源中是否存在该key
										let _is_key = JSON.parse(_param_radio_info[1]["已选值"])[0];
										if (_is_key.hasOwnProperty(pri["已选值"])) {
											_template = _template.replace(/event-radio-name/gm, pri["已选值"]);
										} else {
											uni.showToast({
												title: "数据源中不存在" + pri["已选值"] + "参数",
												duration: 2000,
												icon: "none"
											});
											return false;
										}


									}
								} else {
									uni.showToast({
										title: "单选框的" + pri["参数"] + "不能为空",
										duration: 2000,
										icon: "none"
									});
									return false;
								}
							} else {
								if (pri.hasOwnProperty("已选值") && !this.$u.test.isEmpty(pri["已选值"])) {
									_param_radio_desc = _param_radio_desc + " " + pri["参数"] + "=\"" + pri["已选值"] +
										"\"  ";
								}
							}
						}
						_template = _template.replace("param-radio-item", " " + _param_radio_desc + " ");

						let _event_radio_e = _su[this.nowUnitCode]["param"]["radio-event"][0]["已选值"];
						if (!this.$u.test.isEmpty(_event_radio_e)) {
							_template = _template.replace("event-radio-item", " @change=\"" + _event_radio_e + "\" ");
							let _eg_gr = "\n" + _event_radio_e + "(e) {\n";
							_eg_gr += "	    console.log(e);\n";
							_eg_gr += "},\n";
							_event_group = _event_group + _eg_gr;
						}

						_template = _template.replace("id-xxx", _uuid);
						_template = _template.replace("xxxxxx", _uuid);
					} else if (_su[this.nowUnitCode]["name"] == "Table 表格") {
						_template = _su[this.nowUnitCode]["template"];
						//table 参数处理
						let _param_table_info = _su[this.nowUnitCode]["param"]["table-props"];
						let _param_table_desc = "";
						let _dataFiled = "";
						for (let pti of _param_table_info) {
							if (pti["参数"] == "dataFiled" || pti["参数"] == "dataSource") {
								if (!this.$u.test.isEmpty(pti["已选值"])) {
									if (pti["参数"] == "dataFiled") {
										_template = _template.replace("list-th", pti["已选值"] + ".th");
										_template = _template.replace("list-td", pti["已选值"] + ".td");
										_dataFiled = pti["已选值"];
									} else if (pti["参数"] == "dataSource") {
										_vmodel_group = _vmodel_group + _dataFiled + ":" + pti["已选值"] + ",\n";
									}
								} else {
									uni.showToast({
										title: "表格的" + pti["参数"] + "不能为空",
										duration: 2000,
										icon: "none"
									});
									return false;
								}
							} else {
								if (!this.$u.test.isEmpty(pti["已选值"])) {
									_param_table_desc = _param_table_desc + " " + pti["参数"] + "=\"" + pti["已选值"] +
										"\"  "

								}
							}
						}
						_template = _template.replace("param-table", _param_table_desc);
						//th  参数处理
						let _param_th_info = _su[this.nowUnitCode]["param"]["th-props"];
						let _param_th_desc = "";
						for (let pthd of _param_th_info) {
							if (!this.$u.test.isEmpty(pthd["已选值"])) {
								_param_th_desc = _param_th_desc + " " + pthd["参数"] + "=\"" + pthd["已选值"] + "\"  "
							}
						}
						_template = _template.replace("param-th", _param_th_desc);
						//td  参数处理
						let _param_td_info = _su[this.nowUnitCode]["param"]["td-props"];
						let _param_td_desc = "";
						for (let ptdd of _param_td_info) {
							if (!this.$u.test.isEmpty(ptdd["已选值"])) {
								_param_td_desc = _param_td_desc + " " + ptdd["参数"] + "=\"" + ptdd["已选值"] + "\"  "
							}
						}
						_template = _template.replace("param-td", _param_td_desc);

						_template = _template.replace("id-xxx", _uuid);
						_template = _template.replace("xxxxxx", _uuid);

					} else if (_su[this.nowUnitCode]["name"] == "Collapse 折叠面板") {
						_template = _su[this.nowUnitCode]["template"];
						//外层
						let collapse_props_desc = "collapse-props";
						var cpd = await _util.groupProps(_uuid, collapse_props_desc, _su[this.nowUnitCode], _su[this
							.nowUnitCode]["param"]["collapse-event"], _vmodel_group, _template);
						if (!cpd["statu"]) {
							return false;
						} else {
							console.log(cpd);
							_template = _template.replace("param-collapse", cpd["param"]);
							_template = _template.replace("collapse-event", cpd["event_desc"]["event_template"]);
							_vmodel_group = cpd["vmodel"];
							_event_group = _event_group + cpd["event_desc"]["event_methods"];
						}
						//内层
						let collapse_item_props_desc = "collapse-item-props";
						var cipd = await _util.groupProps(_uuid, collapse_item_props_desc, _su[this.nowUnitCode], _su[
							this.nowUnitCode]["param"]["collapse-item-event"], _vmodel_group, _template);
						if (!cipd["statu"]) {
							return false;
						} else {
							console.log(cipd);
							_template = _template.replace("param-collapse-item", cipd["param"]);
							_template = _template.replace("collapse-item-event", cipd["event_desc"]["event_template"]);
							_template = _template.replace("dataFiled", cipd["dataFiled"]);
							_vmodel_group = cipd["vmodel"];
							_event_group = _event_group + cipd["event_desc"]["event_methods"];
						}
						//插槽数据处理
						_template = _template.replace("slot-xxx", _unit_add_slot);
						_template = _template.replace("id-xxx", _uuid);
						_template = _template.replace("xxxxxx", _uuid);
					} else if (_su[this.nowUnitCode]["name"] == "Grid 宫格布局") {
						_template = _su[this.nowUnitCode]["template"];
						var _da_desc = _su[this.nowUnitCode];
						//外层
						let param_grid_props_desc = "grid-props";
						var cpd = await _util.groupProps(_uuid, param_grid_props_desc, _da_desc, _da_desc["param"][
							"grid-event"
						], _vmodel_group, _template);

						if (!cpd["statu"]) {
							return false;
						} else {
							_template = _template.replace("param-grid-props", cpd["param"]);
							_template = _template.replace("grid-event", cpd["event_desc"]["event_template"]);
							_template = _template.replace(/dataFiled/gm, cpd["dataFiled"]);
							_vmodel_group = cpd["vmodel"];
							_event_group = _event_group + cpd["event_desc"]["event_methods"];
						}

						//内层
						let grid_item_props_desc = "grid-item-props";
						var cipd = await _util.groupProps(_uuid, grid_item_props_desc, _da_desc, _da_desc["param"][
							"grid-item-event"
						], _vmodel_group, _template);
						if (!cipd["statu"]) {
							return false;
						} else {
							_template = _template.replace("grid-item-props", cipd["param"]);
							_template = _template.replace("grid-item-event", cipd["event_desc"]["event_template"]);
							_vmodel_group = cipd["vmodel"];
							_event_group = _event_group + cipd["event_desc"]["event_methods"];
						}

						_template = _template.replace("id-xxx", _uuid);
						_template = _template.replace("xxxxxx", _uuid);
					} else if (_su[this.nowUnitCode]["name"] == "Dropdown 下拉菜单") {
						_template = _su[this.nowUnitCode]["template"];
						_da_desc = _su[this.nowUnitCode];
						//外层
						let param_grid_props_desc = "dropdown-props";
						var cpd = await _util.groupProps(_uuid, param_grid_props_desc, _da_desc, _da_desc["param"][
							"dropdown-events"
						], _vmodel_group, _template);
						if (!cpd["statu"]) {
							return false;
						} else {
							_template = _template.replace("dropdown-props", cpd["param"]);
							_template = _template.replace("dropdown-events", cpd["event_desc"]["event_template"]);
							_event_group = _event_group + cpd["event_desc"]["event_methods"];
						}
						//内层
						let grid_item_props_desc = "dropdown-item-props";
						var cipd = await _util.groupProps(_uuid, grid_item_props_desc, _da_desc, _da_desc["param"][
							"dropdown-item-events"
						], _vmodel_group, _template);
						if (!cipd["statu"]) {
							return false;
						} else {
							_vmodel_group = cipd["vmodel"];
							_event_group = _event_group + cipd["event_desc"]["event_methods"];
						}
						//遍历生成u-dropdown-item
						let _dropdown_item = "\n";
						let _dfg = JSON.parse(_da_desc["param"]["dropdown-item-props"][1]["已选值"]);
						let _poi = 0;
						for (let dp of _dfg) {
							let _oku = _da_desc["templateChild"];
							_oku = _oku.replace("dropdown-item-events", cipd["event_desc"]["event_template"]);
							_oku = _oku.replace("dropdown-item-vmodel", dp["vmodel"]);
							_oku = _oku.replace("dropdown-item-title", dp["title"]);
							_oku = _oku.replace("dataFiled", cipd["dataFiled"] + "[" + _poi + "]['options']");
							_vmodel_group = _vmodel_group + "\n" + dp["vmodel"] + ":null,//" + dp["title"] + "--绑定值";
							_dropdown_item = _dropdown_item + "" + _oku + "\n";
							_poi++;
						}
						_template = _template.replace("templateChild", _dropdown_item);
						_template = _template.replace("id-xxx", _uuid);
						_template = _template.replace("xxxxxx", _uuid);
					} else if (_su[this.nowUnitCode]["name"] == "Form 表单") {
						_template = _su[this.nowUnitCode]["template"];
						_da_desc = _su[this.nowUnitCode];
						let param_form_props_desc = "form-props";
						var cpd = await _util.groupProps(_uuid, param_form_props_desc, _da_desc, [], _vmodel_group,
							_template);
						if (!cpd["statu"]) {
							return false;
						} else {
							_template = _template.replace("param-form-xxx", cpd["param"]);
							_vmodel_group = cpd["vmodel"]
						}
						_template = _template.replace(/FormID/gm, _uuid);

						//获取当前form表单中的子组件
						var formItem = this.$store.state.unitRelationship;
						if (formItem.hasOwnProperty(_uuid)) {
							let changeArea = "<!--" + _uuid + "-->"; //生成组件替换区域
							let _new_area = "";
							for (let _cell in formItem[_uuid]) {
								let _oi = "<!--" + _cell + "开始-->" + formItem[_uuid][_cell] + "<!--" + _cell + "结束-->";
								_new_area = _new_area + "\n" + _oi + "\n";
							}
							_new_area = _new_area + "\n<!--" + _uuid + "-->"
							_template = _template.replace(changeArea, _new_area);
						}

						_template = _template.replace("id-xxx", _uuid);
						_template = _template.replace("xxxxxx", _uuid);
						_template = _template.replace("slot-xxx", _unit_add_slot);


						//获取表单的model以及ref参数，生成表单提交事件与表单验证事件
						_is_from = true;
						let _map_l = {};
						for (let fp of _da_desc["param"]["form-props"]) {
							if (fp["参数"] == "ref") {
								_map_l["ref"] = fp["已选值"]
							} else if (fp["参数"] == "rules") {
								_map_l["rules"] = fp["已选值"]
							}
						}
						is_form_param = _map_l;
					}

					//当前组件是否form 表单的子组件
					if (!this.$u.test.isEmpty(_su[this.nowUnitCode]["parentID"]) && !this.$u.test.isEmpty(_su[_su[this
							.nowUnitCode]["parentID"]])) {
						let _parent_name = _su[_su[this.nowUnitCode]["parentID"]]["name"];
						if (_parent_name == "Form 表单") {
							let _that = this;
							var _get_param = async function(props, name) {
								let _is_have_vmodel = _su[_that.nowUnitCode]["param"][props];
								for (let ihv of _is_have_vmodel) {
									if (ihv["参数"] == name) {
										if (!_that.$u.test.isEmpty(ihv["已选值"])) {
											//验证 表单数据对象.参数  参数是否为空
											if (ihv["已选值"].indexOf(".") >= 0) {
												let _pa_ca = ihv["已选值"].split(".")[1];
												if (!_that.$u.test.isEmpty(_pa_ca)) {
													break;
												} else {
													uni.showToast({
														title: "当前组件:" + _su[_that.nowUnitCode][
															"name"] + "的" + ihv["参数"] + "需要在.后面加上具体参数",
														duration: 2000,
														icon: "none"
													});
													return false;
												}
											} else {
												uni.showToast({
													title: "当前组件:" + _su[_that.nowUnitCode]["name"] +
														"的" + ihv["参数"] + "格式不正确，如(fromModel.参数)",
													duration: 2000,
													icon: "none"
												});
												return false;
											}
										} else {
											uni.showToast({
												title: "当前组件:" + _su[_that.nowUnitCode]["name"] + "的" +
													ihv["参数"] + "不能为空",
												duration: 2000,
												icon: "none"
											});
											return false;
										}
									}
								}
								return true
							}
							//当前的组件是否与form 表单中 model 参数进行关联
							//Checkbox 复选框
							if (_su[this.nowUnitCode]["name"] == "Checkbox 复选框") {
								let _rr = await _get_param("checkbox-props", "v-checked");
								if (!_rr) {
									return false;
								}
							} else if (_su[this.nowUnitCode]["name"] == "Radio 单选框") {
								let _rr = await _get_param("radiogroup-props", "v-model");
								if (!_rr) {
									return false;
								}
							}


							let _templateChild = _su[_su[this.nowUnitCode]["parentID"]]["templateChild"];
							//获取u-form-item的参数定义
							let vmodel_but_new = "";
							let param_form_item_props_desc = "form-item-props";
							let _da_desc_i = _su[_su[this.nowUnitCode]["parentID"]];
							//获取当前组件form-item-props的参数，
							_da_desc_i["param"]["form-item-props"] = _su[this.nowUnitCode]["param"]["form-item-props"];
							var cpd = await _util.groupProps(_uuid, param_form_item_props_desc, _da_desc_i, [],
								vmodel_but_new, "");
							if (!cpd["statu"]) {
								return false;
							} else {
								_templateChild = _templateChild.replace("param-form-item-xxx", cpd["param"]);
							}
							_templateChild = _templateChild.replace("formUnit", _template);
							_template = _templateChild;
						}
					}

					var _this = this;
					var [error, res] = await uni.request({
						url: 'http://127.0.0.1:8090/templateUpdate',
						method: "POST",
						data: {
							param: {
								"template": _template,
								"uuid": _uuid,
								//"event": _all_event_create + "\n" + _event_group,
								"event":_event_group,
								"vmodel": _vmodel_group,
								"is_form_param": is_form_param
							}
						}
					});
					if (!this.$u.test.isEmpty(error)) {
						return false;
					} else {
						console.log("组合组件"+res.data)
						if (res.data == "success") {
						     //判断当前组件是否为其他组件的子组件
						     if (_su[_this.nowUnitCode].hasOwnProperty("parentID")) {
						     	let _urg = _this.$store.state.unitRelationship;
						     	let _parentId = _su[_this.nowUnitCode]["parentID"];
						     	if (_urg.hasOwnProperty(_parentId)) {
						     		_urg[_parentId][_this.nowUnitCode] = _template;
						     		_this.setUnitRelationship(_urg);
						     	} else {
						     		uni.showToast({
						     			title: '没有找到组件的父ID',
						     			duration: 2000,
						     			icon: "none"
						     		});
						     	}
						     }
						     //如果当前组件时放入到表单中，则需要更新表单
						     if (!this.$u.test.isEmpty(_su[_this.nowUnitCode]["parentID"]) && !this.$u.test
						     	.isEmpty(_su[_su[_this.nowUnitCode]["parentID"]])) {
						     	let _parent_name = _su[_su[_this.nowUnitCode]["parentID"]]["name"];
						     	if (_parent_name == "Form 表单") {
						     		uni.$emit('getUnitDesc', {
						     			id: _su[_this.nowUnitCode]["parentID"],
						     			child: []
						     		});
						     	}
						     }
						     uni.hideLoading();
							return true;
						} else {
							return false;
						}
					}
					
				}
				//-------------组件的常规参数设置开始-------------------

			}
		}
	}
</script>

<style>
	.unitContent {
		height: 50px;
		background: #f4f5f6;
		position: relative;
		line-height: 50px;
		color: #d2d2d2;
		display: flex;
		flex-direction: row;
	}

	.unitContentTitle {
		margin-left: 15px;
		color: #2D497B;
	}

	.unitButton {
		height: 30px;
		width: 60px;
		border: 0px;
		line-height: 30px;
		font-size: 14px;
		position: absolute;
		border-radius: 3px;
		color: #FFFFFF;
		top: 10px;
	}

	.unitButton2 {
		height: 25px;
		/* width: 60px; */
		border: 0px;
		line-height: 25px;
		font-size: 14px;
		position: absolute;
		border-radius: 3px;
		color: #FFFFFF;
		top: 10px;
	}

	.unitButton_save {
		background: #2D497B;
		right: 15px;

	}

	.unitButton_save2 {
		background: #f9b000;
		right: 15px;

	}

	.unitButton_del {

		background: #f55555;
		right: 100px;
	}

	.unitButton_del2 {

		background: #5baefa;
		right: 150px;
	}

	.rightContent {
		min-height: 550px;
		background: #FFFFFF;
		padding-right: 10px;
	}

	.title {
		height: 30px;
		width: 100%;
		background: #dfe2e5;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.titleItem {
		height: 30px;
		border-right: 1px solid #FFFFFF;
		width: 100%;
		text-align: center;
		line-height: 30px;
		font-size: 14px;
		color: #333333;
	}

	.titleCont {
		/* height: 30px; */
		width: 100%;
		background: #FFFFFF;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.titleContItem {
		min-height: 30px;
		border-right: 1px solid #dfe2e5;
		border-bottom: 1px solid #dfe2e5;
		width: 100%;
		text-align: center;
		line-height: 30px;
		font-size: 14px;
		color: #333333;
		word-break: break-all;
		display: -webkit-box;
		-webkit-box-orient: horizontal;
		-webkit-box-pack: center;
		-webkit-box-align: center;
		display: -moz-box;
		-moz-box-orient: horizontal;
		-moz-box-pack: center;
		-moz-box-align: center;

		display: -o-box;
		-o-box-orient: horizontal;
		-o-box-pack: center;
		-o-box-align: center;

		display: -ms-box;
		-ms-box-orient: horizontal;
		-ms-box-pack: center;
		-ms-box-align: center;

		display: box;
		box-orient: horizontal;
		box-pack: center;
		box-align: center;
	}

	.titleContItem2 {
		min-height: 30px;
		border-right: 1px solid #dfe2e5;
		border-bottom: 1px solid #dfe2e5;
		width: 100%;
		text-align: center;

		font-size: 12px;
		color: #333333;
		word-break: break-all;
		display: -webkit-box;
		-webkit-box-orient: horizontal;
		-webkit-box-pack: center;
		-webkit-box-align: center;
		display: -moz-box;
		-moz-box-orient: horizontal;
		-moz-box-pack: center;
		-moz-box-align: center;

		display: -o-box;
		-o-box-orient: horizontal;
		-o-box-pack: center;
		-o-box-align: center;

		display: -ms-box;
		-ms-box-orient: horizontal;
		-ms-box-pack: center;
		-ms-box-align: center;

		display: box;
		box-orient: horizontal;
		box-pack: center;
		box-align: center;
	}

	.zbt {
		font-size: 15px;
		font-weight: 500;
		color: #333333;
		padding-left: 15px;
	}

	.zbt_del {
		font-size: 14px;

		color: #F55555;
		padding-left: 35px;
	}

	.zbt_add {
		font-size: 14px;

		color: #2D497B;
		padding-left: 15px;
	}

	.kxzInput {
		width: 100%;
		height: 100%;
		border: 0px solid #2d497b;
		text-align: center;

	}

	.slect_d {
		height: 30px;
		width: 60%;
	}

	.col_props_view {
		border: 1px solid #2D497B;
		border-bottom: 0px;
	}

	.col_props_view2 {
		height: 30px;
		border-top: 0px;
		border: 1px solid #2D497B;
		text-align: center;
		line-height: 30px;
		color: #F55555;
		font-size: 14px;
		font-weight: bold;
	}

	.czbj {
		font-size: 12px;
		color: #888888;
	}
</style>
