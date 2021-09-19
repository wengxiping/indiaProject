import Vue from 'vue'
import App from './App'

import uView from "uview-ui";
Vue.use(uView);

import {router,RouterMount} from './router'
Vue.use(router)
import store from "./store/"
import vuexStore from "./store/$u.mixin"
Vue.mixin(vuexStore);
Vue.config.productionTip = false
App.mpType = 'app'
import minx from './minx.js'
Vue.mixin(minx)
const app = new Vue({
    ...App,
	store
})
// http拦截器，将此部分放在new Vue()和app.$mount()之间，才能App.vue中正常使用
import httpInterceptor from '@/request/http.interceptor.js';
Vue.use(httpInterceptor, app);

// http接口API抽离，免于写url或者一些固定的参数
import httpApi from '@/request/http.api.js';
Vue.use(httpApi, app);
import noticeMessage from "@/const"
Vue.use(noticeMessage,app)
// #ifdef H5
RouterMount(app,router,'#app')
// #endif
// #ifndef H5
	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif
