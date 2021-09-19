<template>
  <view class="page-content">
	  <u-navbar back-text="充值记录" title="" :is-fixed="true" :background="background" :back-text-style='backStyle' back-icon-color='#000'>
	  </u-navbar>
	  <view class="content-list">
		  <view class="content-item" v-if="Object.keys(dataList).length == 0" style="width: 100%;height: 100%;display: flex;justify-content: center;align-items: center;">
		  			暂无数据
		  </view>
		  <view class="content-item" v-for="(item,index) in dataList" :key="index" v-else>
			 <view class="content-item-margin" v-if="index==0"></view>
			 <view class="content-item-content">
				 <view class="content-item-content-block">
					 <view class="content-item-content-block-top">
						 <view class="left">充值</view>
						 <view class="right">+{{item.czmoney}}</view>
					 </view>
					 <view class="content-item-content-block-bottom">
						 <view class="left">{{item.ctime}}</view>
						 <view class="right">余额：{{item.lastmoney}}</view>
					 </view>
				 </view>
			 </view>
		  </view>
		  
		  <!-- <u-loadmore :status="status" /> -->
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
				status: 'loadmore',
				page:1
			}
		},
		onLoad() {
			this.getMyczlistFunc()
		},
		methods:{
			getMyczlistFunc(){
				uni.$u.api.getMyczlist({type:1,page:this.page}).then(ret=>{
					if(ret && ret.code == 1)
					{
						// if(ret.data.length>0)
						this.dataList = this.dataList.concat(ret.data)
						
					}
				})
			}
		},
		onReachBottom(){
			this.page++
			this.getMyczlistFunc();
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
				width: 100%;height: 150rpx;
				.content-item-content-block
				{
					width: 100%;padding: 0 24rpx;height: 124rpx;background-color: #FFFFFF;border-radius: 14rpx;
					
					.content-item-content-block-top
					{
						display: flex;justify-content: space-between;align-items: center;padding: 20rpx 0 6rpx 0;
						.left{
							height: 45rpx;
							opacity: 1;
							font-size: 32rpx;
							font-family: PingFangSC, PingFangSC-Medium;
							font-weight: 500;
							text-align: left;
							color: #333333;
							line-height: 45rpx;
						}
					}
					.content-item-content-block-bottom{
						display: flex;justify-content: space-between;align-items: center;
						.left{
							height: 33rpx;
							opacity: 1;
							font-size: 24rpx;
							font-family: PingFangSC, PingFangSC-Regular;
							font-weight: 400;
							text-align: left;
							color: #9b9b9b;
							line-height: 33rpx;
						}
						.right{
							height: 33rpx;
							opacity: 1;
							font-size: 24rpx;
							font-family: PingFangSC, PingFangSC-Regular;
							font-weight: 400;
							text-align: right;
							color: #9b9b9b;
							line-height: 33rpx;
						}
					}
				}
			}
		}
	}
}
</style>
