<template>
  <view class="page-content">
	  <image :src="require('@/static/balance.png')" class="page-content-bg"></image>
	  <u-navbar back-text="余额宝" title="" :background="background" :back-text-style='backStyle' back-icon-color='#FFF'>
		  <view slot="right" class="slotRight" @tap="$Router.push({name:'user_balance_bao_log'})">购买记录</view>
	  </u-navbar>
	  <view class="content-list">
		  <view class="content-item">
			  <view class="content-item-content">
				  <view class="content-item-content-title">可用余额(卢比)</view>
				  <view class="content-item-content-value">{{myadm}}</view>
			  </view>
              <view class="content-item-jj">
				  <view class="content-item-jj-left">
					  <view class="content-item-jj-left-t">基金名称</view>
					  <view class="content-item-jj-left-b">{{last.mname}}</view>
				  </view>
				  <view class="content-item-jj-right">
					  <view class="content-item-jj-right-t">收益(卢比)</view>
					  <view class="content-item-jj-right-b">{{last.mpl}}</view>
				  </view>
			  </view>
			  <view class="content-item-group">
				  <view class="left-button" @tap="$Router.push({name:'user_fund_list'})">转入</view>
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
				myadm:"0.00",
				"last": {
				  "mname": "绿色投资混",
				  "mpl": "12.01"
				}
				
			}
		},
		onLoad() {
			uni.$u.api.getMyadm().then(ret=>{
				if(ret && ret.code == 1)
				{
					this.myadm = ret.data.myadm?ret.data.myadm:"0.00"
					this.last = ret.data.last?ret.data.last:{ "mname": "绿色投资混","mpl": "12.01"}
					console.log(ret.data)
				}else{
					// uni.$u.toast('')
				}
			})
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
			width: calc(100% - 72rpx);position: relative;z-index: 1;margin-top: 20rpx;border-radius: 14rpx;
			background-color: #FFFFFF;
			
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
			
			.content-item-jj{
				width: 100%;height: 200rpx;display: flex;justify-content: center;align-items: center;
				.content-item-jj-left{
					flex:1;display: flex;justify-content: center;align-items: center;flex-direction: column;
					.content-item-jj-left-t{
						opacity: 1;
						font-size: 26rpx;
						font-family: PingFangSC, PingFangSC-Regular;
						font-weight: 400;
						text-align: center;
						color: #9b9b9b;
					}
					.content-item-jj-left-b{
						opacity: 1;
						font-size: 28rpx;
						font-family: PingFangSC, PingFangSC-Regular;
						font-weight: 400;
						text-align: center;
						color: #333333;
						margin-top: 6rpx;
					}
				}
				.content-item-jj-right{
					flex:1;display: flex;justify-content: center;align-items: center;flex-direction: column;
					.content-item-jj-right-t{
						opacity: 1;
						font-size: 26rpx;
						font-family: PingFangSC, PingFangSC-Regular;
						font-weight: 400;
						text-align: center;
						color: #9b9b9b;
					}
					.content-item-jj-right-b{
						margin-top: 6rpx;
						opacity: 1;
						font-size: 28rpx;
						font-family: PingFangSC, PingFangSC-Regular;
						font-weight: 400;
						text-align: center;
						color: #333333;
					}
				}
			}
			
			.content-item-group
			{
				width: 100%;height:220rpx;display: flex;justify-content: center;align-items: center;background-color: #FFF;
				border-radius: 20rpx;
				.left-button{
					width: 622rpx;
					height: 100rpx;
					opacity: 1;
					background: linear-gradient(225deg,#ff8960, #ff62a5);
					border-radius: 14rpx;
					opacity: 1;
					font-size: 30rpx;
					font-family: PingFangSC, PingFangSC-Regular;
					font-weight: 400;
					text-align: center;
					color: #f8f8f8;
					line-height: 100rpx;
				}
				
			}
		}
	}
}
</style>
