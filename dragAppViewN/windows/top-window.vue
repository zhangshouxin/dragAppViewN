<template>
	<view class="top-window-header">
		<view class="left-header logo">
			<navigator class="logo" >
			<text style="font-weight: 600;font-size: 16px;">{{activeTopMenu}}</text>
			</navigator>
		</view>
		<custom-tab-bar class="tab-bar-flex" direction="horizontal" :selected="selected[activeTopMenu]" :show-icon="false"  @onTabItemTap="toSecondMenu" />
		
	</view>
</template>

<script>
	import {
		mapMutations,
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				selected:{
					"基础组件":0,
					"表单组件":1,
					"数据组件":2,
					"反馈组件":3,
					"布局组件":4,
					"导航组件":5,
					"其他组件":6,
					"模板":7,
					"已生成页面":8
				}
			}
		},
		
		watch: {
			
		},
		mounted() {
			
		},
		computed: {
			...mapState({
				activeTopMenu: state => state.activeTopMenu,
			})
		},
		methods: {
			...mapMutations(['setActiveTopMenu']),
			toSecondMenu(e) {
				if(e.pagePath!="模板"&&e.pagePath!="已生成页面"){
					uni.redirectTo({
					    url: "/pages/zyPages/centerPage/centerPage"
					});
				}
				else{
					//预览模板页面、已生成页面
					uni.redirectTo({
					    url: "/pages/zyPages/centerPage/preview"
					});
				}
				this.setActiveTopMenu(e.pagePath);
			}
		}
	}
</script>

<style>
	.top-window-header {
		height: 60px;
		padding: 0 15px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		border-bottom: 1px solid #e1e1e1;
		background-color: #FFFFFF;
		color: #333;
	}
	.logo {
		display: flex;
		flex-direction: row;
		align-items: center;
		flex: 1;
	}
	.logo image {
		height: 30px;
		width: 30px;
	}
	.logo text {
		margin-left: 8px;
	}
	.right-header {
		display: flex;
		flex-direction: row;
		color: #333;
	}
	.right-header-item {
		line-height: 25px;
		margin-left: 40px;
		cursor: pointer;
		font-size: 16px;
	}
	.active {
		color: #4cd964;
		border-bottom: 2px solid;
	}
	.tab-bar-flex {
		width: 660px;
	}
	.phone-link {
		padding-left: 20px;
		cursor: pointer;
	}
</style>
