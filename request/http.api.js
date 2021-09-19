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
const setTasklistUrl ="/api/Usercode/api?api_name=set_tasklist";//完成任务
//转盘
const getDrawinfoUrl ="/api/Notice/api?api_name=get_drawinfo";//获取转盘信息
const getStartDrawtUrl="/api/usercode/api?api_name=get_startdraw";//开始抽奖
const getMydrawinfoUrl="/api/usercode/api?api_name=get_mydrawinfo";//取我的转盘信息
//下注游戏
const getBallconfigUrl="api/Notice/api?api_name=get_ballconfig";//获取下注信息
const getBallzjlistUrl = "api/Notice/api?api_name=get_ballzjlist";//取色球中奖记录
const getMyballlistUrl="/api/usercode/api?api_name=get_myballlist";//取我的色球中奖信息
const setMyballUrl ="/api/usercode/api?api_name=set_myball";//色球下注
//我的
const getVipInfoUrl = "/api/usercode/api?api_name=get_vipinfo"; //取Vip信息
const setBuyvipUrl = "/api/usercode/api?api_name=set_buyvip"; //VIP购买
const getMyinfoUrl = "/api/usercode/api?api_name=get_myinfo"; //取VIP与余额
const getMybanklistUrl = "/api/usercode/api?api_name=get_mybanklist"; //取银行卡信息
const setAddmymoneyUrl="api/usercode/api?api_name=set_addmymoney";//余额充值
const setMyoutmoneyUrl = "/api/usercode/api?api_name=set_myoutmoney"; //余额提现
const setAddmybanknoUrl = "/api/usercode/api?api_name=set_addmybankno"; //添加银行卡
const getMyczlistUrl = "/api/usercode/api?api_name=get_myczlist"; //充值提现记录

const getAddmlistUrl="/api/usercode/api?api_name=get_addmlist";//获取基金列表
const setBuyaddmUrl="/api/usercode/api?api_name=set_buyaddm";//购买基金
const getMyadmUrl = "api/usercode/api?api_name=get_myadm";//我的余额宝
const getMybulistUrl = "api/usercode/api?api_name=get_mybulist";//我的购买记录
const setMyzfpdUrl ="api/usercode/api?api_name=set_myzfpd";//支付密码设置
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
	let getMyballlist = (params = {}) => vm.$u.get(getMyballlistUrl,params);
	let setMyball = (params = {}) => vm.$u.get(setMyballUrl,params);

	let getVipInfo = (params = {}) => vm.$u.get(getVipInfoUrl,params);
	let setBuyvip = (params = {}) => vm.$u.get(setBuyvipUrl,params);
	let getMyinfo = (params = {}) => vm.$u.get(getMyinfoUrl,params);
	let getMybanklist = (params = {}) => vm.$u.get(getMybanklistUrl,params);
	let setAddmymoney = (params = {}) => vm.$u.get(setAddmymoneyUrl,params);
	let setMyoutmoney = (params = {}) => vm.$u.get(setMyoutmoneyUrl,params);
	let setAddmybankno= (params = {}) => vm.$u.get(setAddmybanknoUrl,params);
	let getMyczlist = (params = {}) => vm.$u.get(getMyczlistUrl,params);
	let getAddmlist = (params = {}) => vm.$u.get(getAddmlistUrl,params);
	
	let getMyadm = (params = {}) => vm.$u.get(getMyadmUrl,params);
	let getMybulist= (params = {}) => vm.$u.get(getMybulistUrl,params);
    let setBuyaddm= (params = {}) => vm.$u.get(setBuyaddmUrl,params);
	let setMyzfpd= (params = {}) => vm.$u.get(setMyzfpdUrl,params);
	
	let setTasklist= (params = {}) => vm.$u.get(setTasklistUrl,params);
	
	vm.$u.api = {setTasklist,setMyzfpd,setBuyaddm,getMybulist,getMyadm,getAddmlist,getVipInfo,setBuyvip,getMyinfo,getMybanklist,setAddmymoney,getMyczlist,setAddmybankno,setMyoutmoney,register, login,getPhoneCode,getNewNotice,getTasklist,getRtuserdate,getuserinfo,getDrawinfo,getStartDrawt,getMydrawinfo,getBallconfig,getBallzjlist,getMyballlist,setMyball};
}

export default {
	install
}
