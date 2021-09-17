// 如果没有通过拦截器配置域名的话，可以在这里写上完整的URL(加上域名部分)
// 登录注册
const registerUrl = "/api/public/?service=Login.userMobileReg";
const loginUrl = "/api/public/?service=Login.codeLogin";//手机号登录
const getPhoneCodeUrl = "/api/public/?service=Login.getCode";//获取验证码
//首页 
const getNewNoticeUrl ="/api/Notice/api?api_name=get_new_notice";//获取公告  get
const getTasklistUrl="/api/Usercode/api?api_name=get_tasklist";//获取任务
const getRtuserdateUrl="/api/Notice/api?api_name=get_ptuserdate";//首页取平台三个数据
const getuserinfoUrl ="/api/Usercode/api?api_name=get_userinfo";//首页获得个人收益信息
//转盘
const getDrawinfoUrl ="/api/Notice/api?api_name=get_drawinfo";//获取转盘信息
const getStartDrawtUrl="/api/usercode/api?api_name=get_startdrawt";//开始抽奖
const getMydrawinfoUrl="/api/usercode/api?api_name=get_mydrawinfo";//取我的转盘信息
//下注游戏
const getBallconfigUrl="api/Notice/api?api_name=get_ballconfig";//获取下注信息
const getBallzjlistUrl = "api/Notice/api?api_name=get_ballzjlist";//取色球中奖记录
//我的

const install = (Vue, vm) => {
	
	let register = (params = {}) => vm.$u.post(registerUrl, params);
	let login = (params = {}) => vm.$u.post(loginUrl, params);
	let getPhoneCode = (params = {}) => vm.$u.post(getPhoneCodeUrl, params);
	
	let getNewNotice = (params = {}) => vm.$u.get(getNewNoticeUrl,params);
	let getTasklist = (params = {}) => vm.$u.get(getTasklistUrl,params);
	let getRtuserdate = (params = {}) => vm.$u.get(getRtuserdateUrl,params);
	let getuserinfo = (params = {}) => vm.$u.get(getuserinfoUrl,params);
	
	let getDrawinfo = (params = {}) => vm.$u.get(getDrawinfoUrl,params);
	let getStartDrawt = (params = {}) => vm.$u.get(getStartDrawtUrl,params);
	let getMydrawinfo = (params = {}) => vm.$u.get(getMydrawinfoUrl,params);
	
	
	let getBallconfig = (params = {}) => vm.$u.get(getBallconfigUrl,params);
	let getBallzjlist = (params = {}) => vm.$u.get(getBallzjlistUrl,params);
	
	vm.$u.api = {register, login,getPhoneCode,getNewNotice,getTasklist,getRtuserdate,getuserinfo,getDrawinfo,getStartDrawt,getMydrawinfo,getBallconfig,getBallzjlist};
}

export default {
	install
}