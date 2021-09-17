<template>
  <view class="login-content">
    <image src="/static/logo.png" mode="aspectFit" class="logo"></image>
    <text class="info-text">Hello join us \n Sign in with our account</text>
    <view class="write-form">
      <input type="number" v-model="form.user_login" placeholder="请输入手机号" class="wf-phone" />
      <view class="wcode-box u-margin-top-44">
        <input type="number" v-model="form.code" placeholder="请输入验证码" class="wf-phone" />
        <view class="get-code" v-if="!setCodeStatus" @tap="getCode()">
          <text class="text">获取验证码</text>
        </view>
		
		<view class="get-code-default" v-else>
		  <text class="text">{{setTime}}s后重复发送</text>
		</view>
		
      </view>
    </view>
    <view class="form-btn" v-if="form.user_login && form.code" @tap="login">
      <text class="text">登录</text>
    </view>
	<view class="form-btn-default" v-else>
	  <text class="text">登录</text>
	</view>
    <view class="fm-links">
      <text class="text">还没有账号? <text class="go-register" @tap="$Router.push({name:'register'})">点击注册</text></text>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          user_login: '',
          code: ''
        }
      };
    },
    methods: {
     getCode(){
		if(uni.$u.test.mobile(this.form.user_login))
		{
			 uni.$u.throttle(async()=>{
				 uni.$u.api.getPhoneCode({mobile:this.form.user_login}).then(ret=>{
					 console.log(ret)
					 if(ret && ret.code==1)
					 {
						 this.getCodeResetTime();
						 uni.$u.toast("发送验证码成功");
					 }
				 })
			 })
		}else{
			uni.$u.toast("手机号格式不正确");
		}
	 },
	 login(){
		 uni.$u.throttle(async()=>{
		 	 uni.$u.api.login(this.form).then(ret=>{
		 		 console.log(ret)
		 		 if(ret && ret.code==1)
		 		 {
		 			 this.getCodeResetTime();
		 			 uni.$u.toast("发送验证码成功");
		 		 }
		 	 })
		 })
	 }
    }
  }
</script>

<style lang="scss">
page {
  background-color: #FFFFFF;
}
.login-content {
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.logo {
  width: 302rpx;
  height: 60rpx;
  margin: calc(136rpx + var(--status-bar-height)) auto 0;
}
.info-text {
  padding: 78rpx 0 0;
  font-size: 30rpx;
  line-height: 36rpx;
  color: #4a4a4a;
  text-align: center;
}
.form-btn-default{
	margin-top: 176rpx;
	margin-left: auto;
	margin-right: auto;
	width: 650rpx;
	height: 100rpx;
	background: #c9c9c9;
	border-radius: 14rpx;
	@include flexCenter(2);
	.text {
	  color: #999999;
	  font-size: 30rpx;
	}
}
.get-code-default{
		margin-right: 6rpx;
		width: 266rpx;
		height: 88rpx;
		background: #c9c9c9;
		border-radius: 14rpx;
		font-size: 30rpx;
		color: #999999;
		@include flexCenter(2);
	}
.write-form {
  padding: 172rpx 50rpx 0;
  .wcode-box {
    position: relative;
    @include flexCenter(0);
    background-color: #F5F5F5;
    border-radius: 14rpx;
    .wf-phone {
      flex: 1;
    }
    .get-code {
      margin-right: 6rpx;
      width: 266rpx;
      height: 88rpx;
      background: linear-gradient(225deg,#ff8960, #ff62a5);
      border-radius: 14rpx;
      font-size: 30rpx;
      color: #FFFFFF;
      @include flexCenter(2);
    }
  }
  .wf-phone {
    height: 100rpx;
    border-radius: 14rpx;
    background-color: #F5F5F5;
    text-align: center;
    position: relative;
  }
}
.form-btn {
  margin-top: 176rpx;
  margin-left: auto;
  margin-right: auto;
  width: 650rpx;
  height: 100rpx;
  background: linear-gradient(225deg,#ff8960, #ff62a5);
  border-radius: 14rpx;
  @include flexCenter(2);
  .text {
    color: #FFFFFF;
    font-size: 30rpx;
  }
}
.fm-links {
  margin-top: 70rpx;
  text-align: center;
  font-size: 30rpx;
  color: #9B9B9B;
  line-height: 42rpx;
  .go-register {
    color: #333;
    margin-left: 10rpx;
  }
}
</style>
