<template>
	<view class="left-window-style">
		<view class="second-menu">
		<component is="leftPage"></component>
		</view>
	</view>
</template>

<script>
	import leftPage from '@/pages/zyPages/leftPage/leftPage.vue';
	export default {
		data() {
			return {
				
			}
		},
		
		components: {
			
			leftPage
		},
		computed: {
			
		},
		watch: {
			
		},
		methods: {
			
		}
	}
</script>

<style>
	@import '../common/uni-nvue.css';

	.left-window-style {
		min-height: calc(100vh - var(--top-window-height));
		background-color: #f8f8f8;
		
	}

	.second-menu {
		width: 100%;
		background-color: #F8F8F8;
		
	}

	.icon-image {
		width: 30px;
		height: 30px;
	}
</style>
