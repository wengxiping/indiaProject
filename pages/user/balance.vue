<template>
  <view class="page-content">
	  <image :src="require('@/static/balance.png')" class="page-content-bg"></image>
	  <u-navbar back-text="余额" title="" :background="background" :back-text-style='backStyle' back-icon-color='#FFF'></u-navbar>
	  <view class="content-list">
		  <view class="content-item">
			  <view class="content-item-content">
				  <view class="content-item-content-title">可用余额(卢比)</view>
				  <view class="content-item-content-value">1690</view>
			  </view>
			  <view class="content-item-group">
				  <view class="left-button" @tap="$Router.push({name:'user_balance_tx'})">提现</view>
				  <view class="right-button" @tap="$Router.push({name:'user_balance_cz'})">充值</view>
			  </view>
		  </view>
	  </view>
  </view>
</template>

<script>
	export default {
		data(){
			return {
				background:{
					background:"none"
				},
				backStyle:{
					color:"#FFF"
				},
				
			}
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
			width: calc(100% - 72rpx);position: relative;z-index: 1;margin-top: 20rpx;border-radius: 14rpx;
			height: 494rpx;background-color: #FFFFFF;
			
			.content-item-content
			{
				width: 100%;height: calc(100% - 220rpx);display: flex;justify-content: center;align-items: center;flex-direction: column;
				.content-item-content-title
				{
					text-align: center;
					height: 40rpx;
					line-height: 40rpx;
					font-size: 28rpx;
					font-family: PingFangSC, PingFangSC-Regular;
					font-weight: 400;
					text-align: center;
					color: #9b9b9b;
				}
				.content-item-content-value
				{
					text-align: center;
					font-size: 78rpx;
					height: 110rpx;
					line-height: 110rpx;
					font-family: PingFangSC, PingFangSC-Medium;
					font-weight: 500;
					text-align: center;
					color: #333333;
				}
			}
			.content-item-group
			{
				width: 100%;height:220rpx;display: flex;justify-content: center;align-items: center;
				.left-button{
					width: 302rpx;
					height: 100rpx;
					background-color: #F5F5F5;
					opacity: 1;
					border-radius: 14rpx;
					color:#262628;
					font-size: 30rpx;
					font-family: PingFangSC, PingFangSC-Regular;
					font-weight: 400;
					text-align: center;
					color: #262628;
					line-height: 100rpx;
				}
				.right-button{
					margin-left: 18rpx;
					width: 302rpx;
					height: 100rpx;
					line-height: 100rpx;
					opacity: 1;
					background: linear-gradient(225deg,#ff8960, #ff62a5);
					border-radius: 14rpx;
					font-size: 30rpx;
					font-family: PingFangSC, PingFangSC-Regular;
					font-weight: 400;
					text-align: center;
					color: #f8f8f8;
				}
			}
		}
	}
}
</style>
