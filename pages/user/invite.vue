<template>
  <view class="page-content">
	  <image :src="require('@/static/bg_invite.png')" class="page-content-bg"></image>
	  <u-navbar back-text="邀请好友" title="" :background="background" :back-text-style='backStyle' back-icon-color='#FFF'></u-navbar>
	  <view class="content-list">
		  <view class="content-list-item-top">
			  <view class="image-user"><image src="" class="image-user-image"></image></view>
			  <view class="invite-code">123654</view>
		  </view>
		  <view class="image1"><image :src="require('@/static/invite_line.png')"></image></view>
		  <view class="image2"><image :src="require('@/static/invite_line.png')"></image></view>
		  <view class="content-list-item-bottom">
			  <view class="content-invite">立即邀请</view>
			  <view class="item-title">邀请规则</view>
			  <view class="item-content">
				  左手交易手续费，右手项目上币费，在疯狂增长的数字货币市场，交易所毋容置疑是最大赢家，许多创业者对其趋之若鹜。同时，黑客针对交易所的安全攻击越来越多，监管所带性也越来越大。 规则一：左手交易手续费，右手项目上币费在疯狂增长的数字货币市场。 规则二：左手交易手续费，右手项目上币费在疯狂增长的数字货币市场。 左手交易手续费，右手项目上币费，在疯狂增长的数字货币市场，交易所毋容置疑是最大赢家，同时，黑客针对交易所的安全攻击越来越多，监管所带来的不确定性也越来越大。
				  左手交易手续费，右手项目上币费，在疯狂增长的数字货币市场，交易所毋容置疑是最大赢家，许多创业者对其趋之若鹜。同时，黑客针对交易所的安全攻击越来越多，监管所带性也越来越大。 规则一：左手交易手续费，右手项目上币费在疯狂增长的数字货币市场。 规则二：左手交易手续费，右手项目上币费在疯狂增长的数字货币市场。 左手交易手续费，右手项目上币费，在疯狂增长的数字货币市场，交易所毋容置疑是最大赢家，同时，黑客针对交易所的安全攻击越来越多，监管所带来的不确定性也越来越大。
				  左手交易手续费，右手项目上币费，在疯狂增长的数字货币市场，交易所毋容置疑是最大赢家，许多创业者对其趋之若鹜。同时，黑客针对交易所的安全攻击越来越多，监管所带性也越来越大。 规则一：左手交易手续费，右手项目上币费在疯狂增长的数字货币市场。 规则二：左手交易手续费，右手项目上币费在疯狂增长的数字货币市场。 左手交易手续费，右手项目上币费，在疯狂增长的数字货币市场，交易所毋容置疑是最大赢家，同时，黑客针对交易所的安全攻击越来越多，监管所带来的不确定性也越来越大。
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
		width: 100vw;height: 100vh;position: fixed;
	}
	.content-list
	{
		width: calc(100% - 36rpx);display: flex;justify-content: flex-start;align-items: center;flex-direction: column;position: relative;z-index: 1;
		margin: 0 auto 0;opacity: 1;
		height: calc(100% - 88rpx);
		.content-list-item-top{
			width: 100%;display: flex;justify-content: center;align-items: center;flex-direction: column;
			height: 230rpx;position: relative;background-color: #FFF;border-top-left-radius: 20rpx;border-top-right-radius:20rpx ;
			.image-user{
				position: absolute;top:-60rpx;
				width: 140rpx;
				height: 140rpx;
				opacity: 1;
				border: 6rpx solid #ffffff;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: #FFFFFF;
				.image-user-image{
					width: 120rpx;
					height: 120rpx;
					border: 6rpx solid #ffffff;
					border-radius: 50%;
					background-color: #3F536E;
					overflow: hidden;
				}
			}
			.invite-code{
				position: absolute;top:110rpx;
				width: 620rpx;
				height: 100rpx;
				opacity: 1;
				background: #f5f5f5;
				line-height: 100rpx;
				text-align: center;
				border-radius: 14rpx;
				font-size: 30rpx;
				font-family: PingFangSC, PingFangSC-Regular;
				font-weight: 400;
				text-align: center;
				color: #9b9b9b;
			}
			
		}
		.image1{
			width: 100%;height: 30rpx;
			image{width: 100%;height: 100%;}
		}
		.image2{
			transform: rotate(180deg);
			width:  100%;height: 30rpx;
			image{width: 100%;height: 100%;}
		}
		.content-list-item-bottom
		{
			width: 100%;height: calc(100% - 320rpx);display: flex;justify-content: flex-start;align-items: center;flex-direction: column;background-color: #FFFFFF;
			border-bottom-left-radius: 20rpx;border-bottom-right-radius:20rpx ;
			.content-invite{
				width: 620rpx;
				height: 100rpx;
				opacity: 1;
				background: linear-gradient(225deg,#ff8960, #ff62a5);
				border-radius: 14rpx;
				opacity: 1;
				font-size: 30rpx;
				font-family: PingFangSC, PingFangSC-Regular;
				font-weight: 400;
				text-align: center;
				line-height: 100rpx;
				color: #ffffff;
			}
			.item-title
			{
				width: 602rpx;
				opacity: 1;
				font-size: 30rpx;
				font-family: PingFangSC, PingFangSC-Medium;
				font-weight: 500;
				text-align: left;
				color: #333333;
				margin-top: 50rpx;
				margin-bottom: 10rpx;
			}
			.item-content
			{
				width: 602rpx;
				opacity: 1;
				font-size: 26rpx;
				font-family: PingFangSC, PingFangSC-Regular;
				font-weight: 400;
				text-align: justify;
				color: #666666;
				line-height: 50rpx;
				overflow-y: scroll;
			}
		}
		
	}
}
</style>
