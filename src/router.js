//导入路由 vue-router
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import home from './tabbar/home.vue';
import member from './tabbar/member.vue';
import char from './tabbar/char.vue';
import search from './tabbar/search.vue';
import supermarket from './tabbar/supermarket.vue';
import about from './xiangqing/about.vue';
import reg from './xiangqing/reg.vue';
var router = new VueRouter({
	routes:[
        {path:'/',redirect:'/home'},
		{ path: '/home', component: home },
		{ path: '/member', component: member },
		{ path: '/char', component: char },
		{ path: '/search', component: search },
		{path:'/home/supermarket', component:supermarket},
		{path:'/home/supermarket/about',component:about},
		{path:'/member/reg',component:reg}
	],
	linkActiveClass:"mui-active"
})
export  default router//导入vue
import Vue from "vue";