<template>
	<view style="overflow:scroll;"><!--组件插入开始--><!--组件插入结束-->
	</view>
	
</template>
<script>
	/*删除1开始*/
	import uView from "../../../static/uView/data.js";
	import _util from " ../../../common/util.js"
	/*删除1结束*/

	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {

				//每次生成、修改组件时都重新生成每个组件双向绑定的值
				/*组件初始化值区域开始*/aha:true,/*组件初始化值区域结束*/
			}
		},
		methods: {
			/*删除2开始*/
			...mapMutations(['setSelectUnitList', 'setUnitRelationship']),

			colDrop(v) {
				this.$store.state.isNest = v;
			},
			clearP() {
				var _su_ = {};
				this.setSelectUnitList(_su_);
				var _ur = {};
				this.setUnitRelationship(_ur);
			},
			
			/*删除2结束*/

			/*表单提交事件初始化开始*/
//提交事件
/*表单提交事件初始化结束*/
			//每次生成、修改组件时都重新生成每个组件的事件
			/*方法生成区域开始*/test(){},/*方法生成区域结束*/
		},

		computed: {
			/*删除3开始*/
			...mapState({
				activeTopMenu: state => state.activeTopMenu
			})
			/*删除3结束*/
		},
		components: {

		},
		onShow: function() {
			
		},
		updated(){
			
		},
		//该方法暂时用于设置表单参数设置的初始化
		onReady() {
			
			/*删除4开始*/
			setTimeout(()=>{
							if (!this.$u.test.isEmpty(uni.getStorageSync('activeSecondMenuUUID'))) {
								_now_click_unit = uni.getStorageSync('activeSecondMenuUUID');
								let isUnitCz = document.getElementById("" + _now_click_unit);
								if (isUnitCz) {
									console.log("标记当前元素")
									setTimeout("document.getElementById(\"" + uni.getStorageSync('activeSecondMenuUUID') +
										"\").style.border = \"2px solid #f55555\";", 500)
								} else {
									console.log("当前缓存的组件不存在，删除当前组件的缓存信息");
				
				// 					var ll = this.$store.state.selectUnitList;
				// 					delete ll[_now_click_unit];
				// 					this.setSelectUnitList(ll);
				
				// 					this.$store.state.activeSecondMenuUUID = null;
				// 					uni.removeStorageSync('activeSecondMenuUUID');
				// 					uni.removeStorageSync('activeSecondMenu');
				
								}
							}
			},1000)
			            
						/*删除4结束*/
			
			/*表单参数验证初始化开始*/
//参数验证区域
/*表单参数验证初始化结束*/
		},
		/*删除5开始*/
		onNavigationBarButtonTap(e) {
			var _this = this;
			if (e.text == "清空页面") {
				uni.showModal({
					title: '啊哈',
					content: '是否清空当前页面所有组件',
					success: function(res) {
						if (res.confirm) {
							uni.request({
								url: 'http://127.0.0.1:8090/clearPage',
								method: "POST",
								data: {
									param: {}
								},
								header: {

								},
								success: (res) => {
									console.log(res.data);
									_this.clearP();
									uni.clearStorage();
									//uni.setStorageSync('isUseClear', true);
									window.location.reload();
								}
							});
						} else if (res.cancel) {

						}
					}
				});

			} else if (e.text == "未挂载组件") {
				var _mount_unit_list_bd = this.$store.state.bdUnitList; //所有可挂载的组件
				var _arry_mount = [];
				//还没有进行挂载的组件
				for (let mu1 in _mount_unit_list_bd) {
					for (let mu2 in _mount_unit_list_bd[mu1]) {
						if (!_mount_unit_list_bd[mu1][mu2]) {
							_arry_mount.push(mu1 + "@" + mu2)
						}
						//console.log(mu1+"----"+mu2+"-----"+_mount_unit_list_bd[mu1][mu2])
					}
				}
				if (_arry_mount.length > 0) {
					uni.showActionSheet({
						itemList: _arry_mount,
						success: function(res) {
							let id = _arry_mount[res.tapIndex].split("@")[1];
							try {
								if (null != _now_click_unit) {
									if (null != document.getElementById(_now_click_unit)) {
										document.getElementById(_now_click_unit).style.border =
											"0px solid #f55555";
									}
								}
								document.getElementById(id).style.border = "2px solid #f55555";
							} catch (e) {
								console.log(e)
							}
							uni.$emit('getUnitDesc', {
								id: id,
								child: []
							});

						},
						fail: function(res) {
							console.log(res.errMsg);
						}
					});
				} else {
					uni.showToast({
						title: '当前没有可挂载的组件',
						duration: 2000,
						icon: "none"
					});
				}

			} else if (e.text == "保存") {
                 
				if (Object.keys(this.$store.state.selectUnitList).length > 0) {
					this.$store.state.triggerSaveModal = _util.uuid();
				} else {
					uni.showToast({
						title: '当前页面没有选择任何组件',
						duration: 2000,
						icon: "none"
					});
				}

			}
		},
		/*删除5结束*/
	}

	/*删除6开始*/
	var _now_click_unit = null; //当前已选中编辑中的组件
	/**
	 * @param {Object} id 当前点击组件ID
	 * @param {Object} e  当前点击组件的dom
	 */
	function getUnitDesc(id, e) {

		if (null != _now_click_unit) {
			if (null != document.getElementById(_now_click_unit)) {
				document.getElementById(_now_click_unit).style.border = "0px solid #f55555";
			}
		}
		//Layout 布局/CellGroup 单元格组(如果选中的当前两种组件，下一步执行删除操作，需要将其子组件的关联删除)
		let _classN = document.getElementById(id).className;
		let _child_list = [];
		if (_classN == "u-row") {
			let _u_col = document.getElementById(id).getElementsByClassName("layoutdrop");
			for (let _uc of _u_col) {
				_child_list.push(_uc.getAttribute("id"));
			}
		} else if (_classN == "u-cell-box") {
			_child_list.push(id);
		}
		//添加组件选中事件
		//document.getElementById(id).style.border = "2px solid #f55555";
		_now_click_unit = id;
		//获取当前组件的参数
		uni.$emit('getUnitDesc', {
			id: id,
			child: _child_list
		});
		e.stopPropagation();
	}
	window.getUnitDesc = getUnitDesc;
	/*删除6结束*/
</script>


<style>
	page {
		border: 2px solid #2d497b;
		border-radius: 5px;
		width: 90%;
		margin: 0 auto;
	}

	.u_form_add {
		height: 60px;
		border: 1px solid #888888;
		margin: 10px;
		border-radius: 5rpx;
		line-height: 60px;
		font-size: 14px;
		color: #888888;
		text-align: center;
	}

	.cellGroupAdd {
		text-align: center;
		height: 120rpx;
		line-height: 120rpx;
		font-size: 13px;
		color: #888888;
		
	}
</style>
