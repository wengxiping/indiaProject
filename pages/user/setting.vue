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
		  <view class="content-item">
		  	<view class="content-item-margin"></view>
			<view class="content-item-content">
				 <image :src="require('@/static/accout_setting.png')"></image>
				 <view class="c">支付设置</view>
				  <u-icon name="arrow-right" color="#c2c4ca" size="28"  class="image-right"></u-icon>
			</view>
		  </view>
		  <view class="content-item">
		  	<view class="button">退出登录</view>
		  </view>
	  </view>
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
			}
		},
		onReachBottom(){
			
		}
	}
</script>

<style scoped lang="scss">
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
