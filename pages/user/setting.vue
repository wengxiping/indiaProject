<template>
  <view class="page-content">
	  <u-navbar back-text="设置" title="" :is-fixed="true" :background="background" :back-text-style='backStyle' back-icon-color='#000'>
	  </u-navbar>
	  <view class="content-list">
		  <view class="content-item">
			 <view class="content-item-margin"></view>
			 <view class="content-item-content">
				 <image :src="require('@/static/accout_safe.png')"></image>
				 <view class="c">账号与安全</view>
				  <u-icon name="arrow-right" color="#c2c4ca" size="28"  class="image-right"></u-icon>
			 </view>
		  </view>
		   <!-- @tap="$Router.push({name:'user_setting_pwd'})" -->
		  <view class="content-item" @tap="show=true">
		  	<view class="content-item-margin"></view>
			<view class="content-item-content">
				 <image :src="require('@/static/accout_setting.png')"></image>
				 <view class="c">支付设置</view>
				  <u-icon name="arrow-right" color="#c2c4ca" size="28"  class="image-right"></u-icon>
			</view>
		  </view>
		  <view class="content-item">
		  	<view class="button" @tap="logout">退出登录</view>
		  </view>
	  </view>
	  <u-keyboard ref="uKeyboard" mode="number"  :dot-enabled="false" tips="支付安全保护中" :random="true" v-model="show" @change="changeKeyboard" @backspace="backspace">
	  			<view slot="default" style="margin-bottom: 60rpx;">
	  				  <u-message-input :maxlength="maxLength" :value="messageValue"  :breathe="true" :disabled-keyboard="true" style="padding: 20rpx 0;"></u-message-input>
					 
					 <!-- <view class="paynotice" v-if="passwordStatus==1 && secondPasswordStatus==1">新密码</view>
					  <view class="paynotice" v-if="passwordStatus==2 && secondPasswordStatus==1">旧新密</view>
					  <view class="paynotice" v-if="passwordStatus==2 && secondPasswordStatus==2">新密码</view> -->
					  
					  <!-- <view class="paynotice" v-if="secondPasswordStatus==3">再次确认新密</view> -->
					  <view class="" v-if="passwordStatus == 1">
						  <view class="paynotice" v-if="secondPasswordStatus==1">新密码</view>
					  </view>
					  <view class="" v-if="passwordStatus == 2">
						  <view class="paynotice" v-if="secondPasswordStatus==1">旧新密</view>
						  <view class="paynotice" v-if="secondPasswordStatus==2">新密码</view>
					  </view>
					  <view class="paynotice" v-if="secondPasswordStatus==3">再次确认新密</view>
					  
					  
	  			 </view>
	  </u-keyboard>
  </view>
</template>

<script>
	export default {
		data(){
			return {
				background:{
					background:"#FFFFFF"
				},
				backStyle:{
					color:"#000"
				},
				show:false,
				maxLength:6,
				oldpassword:"",
				password:"",
				messageValue:"",
				secondPasswordStatus:1,
			}
		},
		onLoad() {
			this.checkStatusPwd()
		},
		methods:{
			changeKeyboard(val)
			{
			    this.messageValue+=val	
				console.log(this.messageValue,this.password)
				if(this.messageValue.length == this.maxLength){
					
					if(this.passwordStatus == 1 && this.password=="")
					{
						this.password = this.messageValue
						this.secondPasswordStatus = 3
					}else if(this.passwordStatus == 1 && this.password!=""){
						if(this.password !=this.messageValue)
						{
							uni.$u.toast("两次密码不一样")
						}else{
							this.show = false
							uni.$u.api.setMyzfpd({zfp:this.passwordStatus,npassword:this.password,opassword:this.oldpassword}).then(ret=>{
								 uni.$u.toast(ret.msg)
							})
						}
						this.secondPasswordStatus = 1
						this.password = ""
					}
					
					if(this.passwordStatus == 2 && this.oldpassword=="")
					{
						this.oldpassword = this.messageValue
						this.messageValue=""
						this.secondPasswordStatus = 2
					}else if(this.passwordStatus == 2 && this.oldpassword!=""){
						if(this.passwordStatus == 2 && this.password=='')
						{
							this.password = this.messageValue
							this.secondPasswordStatus = 3
						}else{
							this.secondPasswordStatus = 1
							if(this.password!=this.messageValue){
								uni.$u.toast("新密码不一样")
							}else{
								this.show = false
								uni.$u.api.setMyzfpd({zfp:this.passwordStatus,npassword:this.password,opassword:this.oldpassword}).then(ret=>{
									 uni.$u.toast(ret.msg)
								})
							}
							this.oldpassword = ""
							this.password = ""
						}
					}
					this.messageValue=""
				}
			},
			backspace(){
				this.messageValue=this.messageValue.slice(0,this.messageValue.length-1)
			},
			logout(){
				uni.showModal({
					title:"温馨提示",
					content:"是否要退出登录?",
					success(ret) {
						if(ret.confirm)
						{
							uni.setStorageSync("loginStatus",false);
							uni.removeStorageSync("token")
							uni.removeStorageSync("userInfo")
							uni.navigateBack({
								delta:1
							})
						}
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.paynotice{
		display: flex;justify-content: center;align-items: center;font-size: 30rpx;
	}
.page-content{
	width: 100vw;height: 100vh;position: relative;
	.page-content-bg{
		width: 100vw;position: fixed;top:0;
	}
	.content-list
	{
		width: 100%;display: flex;justify-content: flex-start;align-items: center;flex-direction: column;
		height: calc(100% - 88rpx);background-color: #F8F8F8;
		.content-item
		{
			width: calc(100% - 72rpx);position: relative;z-index: 1;border-radius: 14rpx;
			.content-item-margin{
				width: 100%;height: 46rpx;
			}
			.content-item-content{
				display: flex;justify-content: flex-start;align-items: center;
				width: 698rpx;
				height: 102rpx;
				opacity: 1;
				background: #ffffff;
				border-radius: 14rpx;
				image{width: 44rpx;height: 44rpx;margin-left: 28rpx;}
				.c{
					width: calc(100% - 120rpx);
					padding-left: 20rpx;
				}
			}
			.button{
				margin-top: 176rpx;
				width: 100%;
				height: 102rpx;
				opacity: 1;
				background: #ffffff;
				border-radius: 14rpx;
				opacity: 1;
				font-size: 30rpx;
				font-family: PingFangSC, PingFangSC-Regular;
				color: #ff5533;
				text-align: center;
				line-height: 102rpx;
			}
			
			
		}
	}
}
</style>
