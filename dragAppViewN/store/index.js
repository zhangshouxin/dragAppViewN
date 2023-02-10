import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		activeTopMenu: '基础组件',//当前选中的顶部菜单
		activeSecondMenu:null,//当前选中菜单的二级菜单
		activeSecondMenuUUID:null,//当前选中菜单的二级菜单的UUID
		selectUnitList:{},//已选组件
		editUnit:null,//当前选中的编辑组件的ID
		isNest:null,//当前拖动的组件是否放到另外一个组件当中
		unitRelationship:{},//组件间的嵌套关系{parent:child}
		removeUnitRelationship:{},//如果选中的组件存在子组件,删除时需要解除其子组件的关系
		bdUnitList:{},//可以提供给其他组件绑定的组件
		unitChangeID:null,//监听是否开始拖动组件
		
		triggerSaveModal:null,//用于触发页面保存标题与名称输入对话框
		nowPageHref:null,//当前模板、已生成页面的访问地址
	},
	mutations: {
		setActiveTopMenu(state, activeOpen) {
			state.activeTopMenu = activeOpen;
			uni.setStorageSync('activeTopMenu', activeOpen);
		},
		setActiveSecondMenu(state, activeOpen) {
			state.activeSecondMenu = activeOpen;
			uni.setStorageSync('activeSecondMenu', activeOpen);
		},
		setActiveSecondMenuUUID(state, activeOpen){
			state.activeSecondMenuUUID = activeOpen;
			uni.setStorageSync('activeSecondMenuUUID', activeOpen);
		},
		setSelectUnitList(state, uniList){
			state.selectUnitList = uniList;
			uni.setStorageSync('selectUnitList', uniList);
		},
		setUnitRelationship(state, ur){
			state.unitRelationship = ur;
			uni.setStorageSync('unitRelationship', ur);
		},
		setRemoveUnitRelationship(state, rur){
			state.removeUnitRelationship = rur;
			uni.setStorageSync('removeUnitRelationship', rur);
		},
		setBdUnitList(state, bui){
			state.bdUnitList = bui;
			uni.setStorageSync('bdUnitList', bui);
		}
	},
	getters: {
		
	},
	actions: {
		
	}
})

export default store
