<template>	<!-- 	<view style="height: 100%;display: flex;flex-direction: row;justify-content: flex-start;flex-wrap: wrap;">
 -->
	<view style="height: 100%;">
		<!--组件插入开始--><!--组件插入结束-->

	</view>

</template>
<script>
	import uView from "../../../static/uView/data.js";
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
			//每次生成、修改组件时都重新生成每个组件的事件
			/*方法生成区域开始*/test(){}/*方法生成区域结束*/
		},
		computed: {
			...mapState({
				activeTopMenu: state => state.activeTopMenu
			})
		},
		components: {

		},
		onShow: function() {

			if (!this.$u.test.isEmpty(uni.getStorageSync('activeSecondMenuUUID'))) {
				_now_click_unit = uni.getStorageSync('activeSecondMenuUUID');
				setTimeout("document.getElementById(\"" + uni.getStorageSync('activeSecondMenuUUID') +
					"\").style.border = \"2px solid #f55555\";", 500)
			}
		},
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
							uni.navigateTo({
								url: '/pages/tabBar/API/API'
							});
						}
					}
				});

			}
		},
	}
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
		document.getElementById(id).style.border = "2px solid #f55555";
		_now_click_unit = id;
		//获取当前组件的参数
		uni.$emit('getUnitDesc', {
			id: id,
			child: _child_list
		});
		e.stopPropagation();
	}
	window.getUnitDesc = getUnitDesc;
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
		height: 90rpx;
		line-height: 90rpx;
		font-size: 13px;
		color: #888888;
	}
</style>
