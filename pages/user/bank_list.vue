<template>
	<view class="page-content">
		  <u-navbar back-text="提现到" title="" :background="background" :back-text-style='backStyle' back-icon-color='#000'>
			 <view slot="right" class="slotRight" @tap="$Router.push({name:'user_bank_add'})">添加银行卡</view>
		  </u-navbar>
		  <view class="content-list">
			  <view class="content-item" v-for="(item,index) in dataList" :key="index">
				 <view class="content-item-top" v-if="index==0"></view>
				 <view class="content-item-content">
					 <view class="content-item-content-block" :style="{'background':item.backgroud}">
						 <view class="content-item-content-block-top">
							 <view class="left"><image src="" class="left-image"/></view>
							 <view class="middle">
								 <view class="middle-top">汇丰银行信用卡(8899)</view>
								 <view class="middle-bottom">该卡本次最多可转入50000</view>
							 </view>
							 <view class="txt">解绑</view>
						 </view>
						 <view class="content-item-content-block-bottom">**** 2222 6666 8888</view>
					 </view>
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
					background:"#FFFFFF"
				},
				backStyle:{
					color:"#000"
				},
				dataList:[{backgroud:'linear-gradient(121deg,#27347d 10%, #3045b6 90%)'},
				{backgroud:'linear-gradient(144deg,#d05f2d 3%, #ffa100)'},
				{backgroud:'linear-gradient(121deg,#3e90ba 10%, #30b686 90%)'}]
			}
		}
	}
</script>

<style scoped lang="scss">
.page-content{
	width: 100vw;height: 100vh;position: relative;
	.slotRight{
		opacity: 1;
		font-size: 30rpx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: right;
		color: #000000;
		margin-right: 36rpx;
	}
    .content-list
	{
		width: 100%;height: calc(100% - 88rpx);background-color: #f8f8f8;display: flex;justify-content: flex-start;align-items: center;flex-direction: column;
		.content-item
		{
			width: calc(100% - 52rpx);
			.content-item-top{
				width:100%;height: 36rpx;
			}
			.content-item-content{
				width:100%;;margin: 0 auto 0;height: 296rpx;
				.content-item-content-block
				{
					width: 100%;height: 260rpx;opacity: 1;box-shadow: 0px 5px 8px 0px rgba(170,170,170,0.09);border-radius: 10rpx;
					.content-item-content-block-top
					{
						display: flex;justify-content: flex-start;align-items: flex-start;width: 100%;height: 190rpx;padding-top: 28rpx;
						padding-left: 28rpx;
						.left{width: 62rpx;height: 62rpx;background-color: red;border-radius: 50%;.left-image{width: 100%;height: 100%;}}
						.middle{
							margin-left: 14rpx;width: calc(100% - 160rpx);
							.middle-top{
								opacity: 1;
								font-size: 30rpx;
								font-family: PingFangSC, PingFangSC-Medium;
								font-weight: 500;
								text-align: left;
								color: #ffffff;
								line-height: 42rpx;
							}
							.middle-bottom{
								opacity: 1;
								font-size: 24rpx;
								font-family: PingFangSC, PingFangSC-Regular;
								font-weight: 400;
								text-align: left;
								color: #ffffff;
								line-height: 33rpx;
							}
						}
						.txt
						{
							opacity: 0.35;
							font-size: 28rpx;
							font-family: PingFangSC, PingFangSC-Regular;
							font-weight: 400;
							text-align: right;
							color: #ffffff;
							line-height: 40rpx;
						}
					}
					.content-item-content-block-bottom
					{
						font-size: 30rpx;
						font-family: PingFangSC, PingFangSC-Medium;
						font-weight: 500;
						text-align: right;
						color: #ffffff;
						line-height: 42rpx;
						letter-spacing: 1rpx;
						margin-right: 28rpx;
					}
				}
			}
			
		}
		
	}
}
</style>
