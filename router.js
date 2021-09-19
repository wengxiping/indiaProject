import {RouterMount,createRouter} from 'uni-simple-router';
import ROUTES from "./routeConfig"
const router = createRouter({
    platform: process.env.VUE_APP_PLATFORM,
	routes:ROUTES
});

router.beforeEach((to, from, next) => {
	if(to.loginStatus && !uni.getStorageSync("token"))
	{
		router.push({name: 'login'})
	}
	next();
});
router.afterEach((to, from) => {
	//console.log(to)
    //console.log('跳转结束')
})

export {
	router,
	RouterMount
}