const requestTimeOut="请求超时"
const phoneError="手机号格式不正确"
const getCodeFail = "发送验证码成功"
const getCodeSuccess = "发送验证码失败"
const loginSuccess = "登录成功"
const registerSuccess = "注册成功"
const registerFail="注册失败"
const loginFail ="登录失败,请稍后再试"
export default {
    install(Vue, vm) {
        vm.$u.msg = {phoneError,getCodeFail, getCodeSuccess, loginSuccess,loginFail,registerSuccess,registerFail,requestTimeOut}
    }
}
