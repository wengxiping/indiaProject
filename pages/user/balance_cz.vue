<template>
  <view class="page-content">
	  <image :src="require('@/static/bg_cz.png')" class="page-content-bg"></image>
	  <u-navbar back-text="充值" title="" :background="background" :back-text-style='backStyle' back-icon-color='#FFF'>
		  <view slot="right" class="slotRight" @tap="$Router.push({name:'user_balance_cz_log'})">充值记录</view>
	  </u-navbar>
	  <view class="content-list">
		  <view class="content-item">
			  <view class="content-item-content">
				  <view class="content-item-content-title">充值到</view>
				  <view class="content-item-content-content" @tap="$Router.push({name:'user_bank_list'})">
					  <view class="blank-hide" v-if="Object.keys(bankItem).length == 0">
						  <u-icon name="plus" size="60" color="#999999"></u-icon>
					  </view>
					  <view class="blank-show" v-else>
						  <image src="" style=";" class="image-left"></image>
						  <view class="view-content">
							  <view class="view-content-top">{{bankItem.bankname}}({{bankItem.bankno}})</view>
							  <view class="view-content-bottom">该卡本次最多可转入50000</view>
						  </view>
						  <u-icon name="arrow-right" color="#2979ff" size="28"  class="image-right"></u-icon>
					  </view>

				  </view>
			  </view>
			  <view class="content-item-content-middle">
				  <view class="content-item-content-middle-title">充值金额</view>
				  <view class="content-item-content-middle-content">
					  <input type="number" class="iput-number" placeholder="请输入整数金额" v-model="money"/>
				  </view>
				  <view class="content-item-content-middle-line"></view>
			  </view>
			  <view class="content-item-group">
				 <view class="group-button-default" v-if="Object.keys(bankItem).length == 0">确定充值</view>
				  <view class="group-button" @tap="setAddmymoneyFunc()" v-else>确定充值</view>
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
				money:"",
			}
		},
		onShow(){
		},
		methods:{
			setAddmymoneyFunc(){
				uni.$u.api.setAddmymoney({bcid:this.bankItem.bankno,money:this.money}).then(ret=>{
					if(ret && ret.code==1){
						uni.$u.toast("充值成功");
					}else{
						uni.$u.toast("充值失败");
					}
				})
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
			width: calc(100% - 72rpx);position: relative;z-index: 1;margin-top: 20rpx;border-radius: 14rpx;
			height: 718rpx;background-color: #FFFFFF;

			.content-item-content
			{
				width: 100%;height: 275rpx;display: flex;justify-content: flex-start;align-items: flex-start;flex-direction: column;
				.content-item-content-title{
					font-size: 30rpx;
					font-family: PingFangSC, PingFangSC-Regular;
					font-weight: 400;
					text-align: left;
					color: #333333;
					margin-left: 30rpx;
					margin-top: 30rpx;
					margin-bottom: 16rpx;
				}
				.content-item-content-content{
					opacity: 1;
					background: #f8f8f8;
					border-radius: 14rpx;
					display: flex;justify-content: space-between;align-items: center;width: calc(100% - 60rpx);margin:0 auto 0;height: 128rpx;

					.blank-show{
						display: flex;justify-content: space-between;align-items: center;width: 100%;
						.image-left{
							margin-left: 28rpx;
							background: linear-gradient(225deg,#ff8960, #ff62a5);
							border-radius: 50%;
							width: 68rpx;height: 68rpx;
						}
						.image-right{
							margin-right: 28rpx;
						}
						.view-content
						{
							width: calc(100% - 180rpx);
							.view-content-top{
								opacity: 1;
								font-size: 30rpx;
								font-family: PingFangSC, PingFangSC-Regular;
								font-weight: 400;
								text-align: left;
								color: #333333;
							}
							.view-content-bottom{
								opacity: 1;
								font-size: 24rpx;
								font-family: PingFangSC, PingFangSC-Regular;
								font-weight: 400;
								text-align: left;
								color: #9b9b9b;
							}
						}
					}
					.blank-hide{
						width: 100%;height: 100%;
						@include flexCenter(1);
					}
				}

			}
			.content-item-content-middle
			{
				width: 100%;height: 305rpx;display: flex;justify-content: flex-start;align-items: center;flex-direction: column;
				.content-item-content-middle-title{
					width: 618rpx;
					height: 42rpx;
					opacity: 1;
					font-size: 30rpx;
					font-family: PingFangSC, PingFangSC-Regular;
					font-weight: 400;
					text-align: left;
					color: #333333;
					line-height: 42rpx;
				}
				.content-item-content-middle-content{
					width: 618rpx;
					height: 70rpx;
					opacity: 1;
					background: #eeeeee;
					margin-top: 50rpx;
					margin-bottom: 40rpx;
					.iput-number
					{
						width: 100%;height: 100%;color: #000000;font-size: 30rpx;text-indent: 12rpx;
					}
				}
				.content-item-content-middle-line
				{
					width: 618rpx;
					height: 2rpx;
					opacity: 1;
					background: #eeeeee;
				}
			}
			.content-item-group
			{
				width: 100%;height:138rpx;display: flex;justify-content: center;align-items: flex-start;
				.group-button{
					width: 638rpx;
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
                 .group-button-default{
					 width: 638rpx;
					 height: 100rpx;
					 opacity: 1;
					 background: #c9c9c9;
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
