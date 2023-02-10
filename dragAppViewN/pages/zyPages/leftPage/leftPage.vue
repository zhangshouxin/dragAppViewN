<template>
	<view class="uni-container">
		
		<view class="uni-panel" v-for="(item, index) in list" :key="item.id">
			<view class="uni-panel-h" :id="item.name"  @click="triggerCollapse(index)" draggable="true" @dragstart="fileDragStart($event,item.href)" >
				<text class="uni-panel-text">{{item.name}}</text>
				<label v-if="activeTopMenu=='已生成页面'" style="color: #F55555;" @click="delPage(item)">删除</label>
			</view>
	
		</view>
	</view>
</template>
<script>
	import uView from '../../../static/uView/data.js';
	import _ut from '../../../common/util.js';
	import {
		mapState,
		mapMutations
	} from 'vuex';
	
	export default {
		data() {
			return {
				list:uView[this.$store.state.activeTopMenu]
			}
		},
		watch: {
			activeTopMenu:function(v1,v2){
				this.list=uView[v1];
			}
		},
		
		computed: {
			...mapState({
				activeTopMenu: state => state.activeTopMenu
			})
		},
		methods: {
			...mapMutations(['setActiveSecondMenu']),
			triggerCollapse(e) {
			},
			fileDragStart(e,h){
				this.$store.state.nowPageHref=h;
				this.setActiveSecondMenu(e.target.id);
			},
			//删除已生成的页面
			delPage(v){
				uni.request({
					url: 'http://127.0.0.1:8090/delAlaPage',
					method: "POST",
					data: {
						param: {
							uuid:v.id,
							href:v.href
						}
					},
					header: {},
					success: (res) => {
						console.log(res.data);
					}
				});
			}
			
		
		}
		
	}
	
	
</script>

<style>
	@import '../../../common/uni-nvue.css';
</style>
