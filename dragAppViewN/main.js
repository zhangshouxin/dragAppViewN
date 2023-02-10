import Vue from 'vue'
import App from './App'

import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

import store from './store'
// 引入全局uView


Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}
Vue.prototype.$adpid = "pc12138"

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
