<template>
  <view class="page-content">
	  <u-navbar back-text="购买记录" title="" :is-fixed="true" :background="background" :back-text-style='backStyle' back-icon-color='#000'>
	  </u-navbar>
	  <view class="content-list">
		  <view class="content-item" v-for="(item,index) in dataList" :key="index">
			 <view class="content-item-margin" v-if="index==0"></view>
			 <view class="content-item-content">
				 <view class="content-item-content-block">
					 <view class="content-item-content-block-1">
						 <view class="content-item-content-block-1-left">{{item.mname}}</view>
						 <view class="content-item-content-block-1-right">收益周期{{item.howday}}</view>
					 </view>
					 <view class="content-item-content-block-2">买入时间：{{item.buytime}}</view>
					 <view class="content-item-content-block-3"></view>
					 <view class="content-item-content-block-4">
						 <view class="content-item-content-block-4-left"><view class="txt1">{{item.buymoney}}</view><view class="txt2">买入</view></view>
						 <view class="content-item-content-block-4-middle"><view class="txt1">{{item.allsy}}</view><view class="txt2">预计收益</view></view>
						 <view class="content-item-content-block-4-right"><view class="txt1">+{{item.daysy}}</view><view class="txt2">当前收益</view></view>
					 </view>
				 </view>
			 </view>
		  </view>
		  
		  <u-loadmore :status="status" />
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
				dataList:[],
				status: 'noadmore',
			}
		},
		onLoad(){
			uni.$u.api.getMybulist().then(ret=>{
				if(ret && ret.code == 1)
				{
					this.dataList = this.dataList.concat(this.dataList)
				}
			})
		},
		onReachBottom(){
			console.log('here')
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
				width: 100%;height: 26rpx;
			}
			.content-item-content{
				width: 100%;height: 254rpx;
				.content-item-content-block{
					width: 100%;background-color: #FFFFFF;height: 228rpx;border-radius: 14rpx;
				}
				.content-item-content-block-1{
					display: flex;justify-content: space-between;align-items: center;padding-top: 20rpx;
					.content-item-content-block-1-left{
						height: 45rpx;
						opacity: 1;
						font-size: 32rpx;
						font-family: PingFangSC, PingFangSC-Medium;
						font-weight: 500;
						text-align: left;
						color: #333333;
						line-height: 45rpx;
						margin-left: 24rpx;
					}
					.content-item-content-block-1-right{
						height: 37rpx;
						opacity: 1;
						font-size: 26rpx;
						font-family: PingFangSC, PingFangSC-Regular;
						font-weight: 400;
						text-align: right;
						color: #5f7799;
						line-height: 37rpx;
						margin-right: 24rpx;
					}
				}
				.content-item-content-block-2{
					margin-left: 24rpx;
					width: calc(100% - 24rpx);
					height: 55rpx;
					opacity: 1;
					font-size: 26rpx;
					font-family: PingFangSC, PingFangSC-Regular;
					font-weight: 400;
					text-align: left;
					color: #9b9b9b;
					line-height: 37rpx;
					padding-bottom: 18rpx;
				}
				.content-item-content-block-3{
					height: 1rpx;
					background: #eeeeee;
				}
				.content-item-content-block-4{
					display: flex;justify-content: center;align-items: center;width: 100%;height: 106rpx;
					.content-item-content-block-4-left{
						flex:1;display: flex;justify-content: center;align-items: center;flex-direction: column;
						.txt1{
							height: 40rpx;
							opacity: 1;
							font-size: 28rpx;
							font-family: PingFangSC, PingFangSC-Regular;
							font-weight: 400;
							text-align: center;
							color: #333333;
							line-height: 40rpx;
						}
						.txt2{
							height: 33rpx;
							opacity: 1;
							font-size: 24rpx;
							font-family: PingFangSC, PingFangSC-Regular;
							font-weight: 400;
							text-align: center;
							color: #333333;
							line-height: 33rpx;
						}
					}
					.content-item-content-block-4-middle{
						flex:1;display: flex;justify-content: center;align-items: center;flex-direction: column;
						.txt1{
							height: 40rpx;
							opacity: 1;
							font-size: 28rpx;
							font-family: PingFangSC, PingFangSC-Regular;
							font-weight: 400;
							text-align: center;
							color: #333333;
							line-height: 40rpx;
						}
						.txt2{
							height: 33rpx;
							opacity: 1;
							font-size: 24rpx;
							font-family: PingFangSC, PingFangSC-Regular;
							font-weight: 400;
							text-align: center;
							color: #333333;
							line-height: 33rpx;
						}
					}
					.content-item-content-block-4-right{
						flex:1;display: flex;justify-content: center;align-items: center;flex-direction: column;
						.txt1{
							height: 40rpx;
							opacity: 1;
							font-size: 28rpx;
							font-family: PingFangSC, PingFangSC-Regular;
							font-weight: 400;
							text-align: center;
							color: #333333;
							line-height: 40rpx;
						}
						.txt2{
							height: 33rpx;
							opacity: 1;
							font-size: 24rpx;
							font-family: PingFangSC, PingFangSC-Regular;
							font-weight: 400;
							text-align: center;
							color: #333333;
							line-height: 33rpx;
						}
					}
				}
			}
		}
	}
}
</style>
