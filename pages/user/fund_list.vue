<template>
  <view class="page-content">
	  <u-navbar back-text="基金列表" title="" :background="background" :back-text-style='backStyle' back-icon-color='#000'>
		  <view slot="right" class="slotRight" @tap="$Router.push({name:'user_balance_bao_log'})">购买记录</view>
	  </u-navbar>
	  <view class="content-list">
		  <view class="content-item">
			  <view class="content-item-flex">基金名称</view>
			  <view class="content-item-flex">类型</view>
			  <view class="content-item-flex">收益(卢比)</view>
		  </view>
		  
		  <view class="content-item" v-for="(item,index) in dataList" :key="index">
			  <view :class="[index%2==0?'content-item-flex-s':'content-item-flex']">绿色投资混</view>
			  <view :class="[index%2==0?'content-item-flex-s':'content-item-flex']">1211</view>
			  <view :class="[index%2==0?'content-item-flex-s':'content-item-flex']">+120</view>
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
				dataList:[{},{},{},{}]
			}
		}
	}
</script>

<style scoped lang="scss">
	.slotRight{
		opacity: 1;
		font-size: 30rpx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: right;
		color: #ffffff;
		margin-right: 36rpx;
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
			width: 100%;height: 112rpx;position: relative;z-index: 1;border-radius: 14rpx;
			display: flex;justify-content: center;align-items: center;
			.content-item-flex
			{
				flex:1;flex-direction: column;text-align: center;line-height: 112rpx;height: 100%;background-color: #FFFFFF;
				opacity: 1;
				font-size: 28rpx;
				font-family: PingFangSC, PingFangSC-Medium;
				font-weight: 500;
				text-align: center;
				color: #333333;
			}
			.content-item-flex-s{
				flex:1;flex-direction: column;text-align: center;line-height: 112rpx;height: 100%;
				opacity: 1;
				font-size: 28rpx;
				font-family: PingFangSC, PingFangSC-Medium;
				font-weight: 500;
				text-align: center;
				color: #333333;
			}
			.default{
				height: 42rpx;
				opacity: 1;
				font-size: 30rpx;
				font-family: PingFangSC, PingFangSC-Medium;
				font-weight: 500;
				text-align: center;
				color: #333333;
				line-height: 42rpx;
			}
			.red{
				height: 42rpx;
				opacity: 1;
				font-size: 30rpx;
				font-family: PingFangSC, PingFangSC-Medium;
				font-weight: 500;
				text-align: center;
				color: #ff5533;
				line-height: 42rpx;
			}
			.green{
				height: 42rpx;
				opacity: 1;
				font-size: 30rpx;
				font-family: PingFangSC, PingFangSC-Medium;
				font-weight: 500;
				text-align: center;
				color: #5f7799;
				line-height: 42rpx;
			}
			
		}
	}
}
</style>
