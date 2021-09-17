import App from './App'

import Vue from 'vue'
// main.js
import uView from "uview-ui";
Vue.use(uView);
import {router,RouterMount} from './router'  
Vue.use(router)
import minx from './minx.js'  
Vue.mixin(minx)

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
// http拦截器，将此部分放在new Vue()和app.$mount()之间，才能App.vue中正常使用
import httpInterceptor from '@/request/http.interceptor.js';
Vue.use(httpInterceptor, app);

// http接口API抽离，免于写url或者一些固定的参数
import httpApi from '@/request/http.api.js';
Vue.use(httpApi, app);
// #ifdef H5
RouterMount(app,router,'#app')
// #endif
// #ifndef H5
	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif