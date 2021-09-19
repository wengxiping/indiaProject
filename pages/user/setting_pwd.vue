<template>
  <view class="page-content">
	  <u-navbar back-text="密码设置" title="" :is-fixed="true" :background="background" :back-text-style='backStyle' back-icon-color='#000'>
	  </u-navbar>
	  <view class="content-list">
		  <view class="list-item">
			  <view class="label">新密码：</view><view class="iput"><input type="password" class="iput-p" v-model="password"/></view>
		  </view>
		  <view class="list-item">
		  	<view class="label">确认密码：</view><view class="iput"><input type="password" class="iput-p" v-model="setpassword"/></view>
		  </view>
		  <u-keyboard ref="uKeyboard" mode="number"   tips="支付安全保护中" :random="true" :mask="!show" v-model="show" @change="changeKeyboard" @backspace="backspace">
		  			
		  </u-keyboard>
	  </view>
《  </view>
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
				password:"",
				setpassword:'',
				show:true
			}
		},
		onLoad() {
			this.checkStatusPwd()
		},
		methods:{
			
		},
		onReachBottom(){
			
		}
	}
</script>

<style scoped lang="scss">
	.paynotice{
		display: flex;justify-content: center;align-items: center;
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
		.list-item{
			width: 100%;height:80rpx;display: flex;justify-content: center;align-items: flex-end;border-bottom: 1rpx solid #F0AD4E;
			.label{
				width: 160rpx;height: 100%;display: flex;justify-content: flex-end;align-items: center;
			}
			.iput{
				width: calc(100% - 160rpx);height: 100%;
				.iput-p{
					width: 80%;height: 100%;
				}
			}
		}
		
	}
}
</style>
