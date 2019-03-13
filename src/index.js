//导入vue
import Vue from "vue";

import router from "./router.js"
//导入app组件
import app from './app.vue';
//导入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import './css/mui.css';
import './js/mui.js';
import './css/icons-extra.css'
var vm = new Vue({
	el:'#app',
	render:c=>c(app),  //将App组件挂载至vm中
	//挂载路由
	router
})