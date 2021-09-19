<template>
  <view class="page-content">
	  <image :src="require('@/static/level_bg.png')" class="page-content-bg"></image>
	  <u-navbar back-text="VIP等级" title="" :background="background" :back-text-style='backStyle' back-icon-color='#FFF'></u-navbar>
	  <view class="content-list">
		  <view class="content-list-item" v-for="(item,index) in levelList" :key="index">
			  <view class="item-margin-top" v-if="index==0"></view>
			  <view class="item-bg" @click="buyClick(item)">
				  <view class="item">
				  	<view class="item-image"><image :src="require('@/static/bg_level'+(index+1)+'.png')"/></view>
					<view class="item-bottom">
						升级所需：{{item.money}}
					</view>
				  	<view class="item-content">
						<view class="item-content-left">
							<view class="item-content-left-name">{{item.vipname}}</view>
							<view class="item-content-left-subname">可完成任务故量：{{item.tasksum}}</view>
						</view>
						<view class="item-content-right">
							<!-- https://www.uviewui.com/common/logo.png -->
							<image :src="item.thumb"></image>
						</view>
					</view>
				  </view>
			  </view>
			 
		  </view>
	  			<!-- 正文内容 -->
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
				levelList:[
					
				// 	{vipname:"平民",tasksum:5,backgroundSrc:require('@/static/bg_level1.png'),thumb:require('@/static/bg_level_icon1.png'),money:'1000',levelTime:'2021.07.27-2021.09.20'},
				// 	{vipname:"子爵",tasksum:5,backgroundSrc:require('@/static/bg_level1.png'),thumb:require('@/static/bg_level_icon1.png'),money:'1000',levelTime:'2021.07.27-2021.09.20'},
				// 	{vipname:"伯爵",tasksum:5,backgroundSrc:require('@/static/bg_level1.png'),thumb:require('@/static/bg_level_icon1.png'),money:'1000',levelTime:'2021.07.27-2021.09.20'},
				// 	{vipname:"侯爵",tasksum:5,backgroundSrc:require('@/static/bg_level1.png'),thumb:require('@/static/bg_level_icon1.png'),money:'1000',levelTime:'2021.07.27-2021.09.20'},
				// 	{vipname:"公爵",tasksum:5,backgroundSrc:require('@/static/bg_level1.png'),thumb:require('@/static/bg_level_icon1.png'),money:'1000',levelTime:'2021.07.27-2021.09.20'},
				// 	{vipname:"国王",tasksum:30,backgroundSrc:require('@/static/bg_level1.png'),thumb:require('@/static/bg_level_icon1.png'),money:'1000',levelTime:'2021.07.27-2021.09.20'},
				
				]
			}
		},
		onLoad() {
			uni.$u.api.getVipInfo().then(ret=>{
				if(ret && ret.code == 1)
				{
					this.levelList = ret.data
				}
				console.log(ret)
			})
		},
		methods:{
			buyClick(item)
			{
				if(item.buym>0)
				{
				  uni.showModal({
				  	content: '是否购买?',
				  	success: function (res) {
				  		if (res.confirm) {
				  			uni.$u.api.setBuyvip({vipid:item.vipid}).then(ret=>{
				  				if(ret && ret.code == 1)
				  				{
				  					uni.$u.toast(ret.data.msg)
				  				}else{
				  					uni.$u.toast("购买失败")
				  				}
				  			})
				  		}
				  	}
				  });
				}else{
					uni.$u.toast("余额不足,需要请充值")
				}
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
		width: 100%;display: flex;justify-content: center;align-items: center;flex-direction: column;
		.content-list-item{
			width: 100%;display: flex;justify-content: center;align-items: center;flex-direction: column;
			.item-bg{
				width: calc(100% - 52rpx);height: 216rpx;
				.item{
					width: 100%;height: calc(100% - 26rpx);position: relative;
				  .item-image{
					  position: absolute;width: 100%;height: 100%;
					  image{width: 100%;height: 100%;}
				  }
				  .item-bottom{
					  border-radius: 0px 0px 14rpx 14rpx;position: absolute;bottom: 0;width: 100%;height:48rpx; background: linear-gradient(270deg,rgba(0,0,0,0.00), rgba(0,0,0,0.20) 100%);
					  font-size: 24rpx;
					  font-family: PingFangSC, PingFangSC-Medium;
					  font-weight: 500;
					  text-align: left;
					  color: #ffffff;
					  line-height: 33rpx;
					  display: flex;justify-content: flex-start;align-items: center;
					  padding-left: 32rpx;
					  }
				  .item-content
				  {
					  position: absolute;z-index:1;width: 100%;height:100%;display: flex;justify-content: space-between;flex-direction: row;align-items: center;
					  .item-content-left{
						  width: 486rpx;
						  height: 100%;
						  display: flex;justify-content: flex-start;align-items: flex-start;padding-left: 68rpx;
						  .item-content-left-name{
							  font-size: 46rpx;
							  font-family: PingFangSC, PingFangSC-Medium;
							  font-weight: 500;
							  text-align: left;
							  color: #414159;
							  line-height: 65rpx;
							  letter-spacing: 3rpx;
							  margin-top: 38rpx;
						  }
						  .item-content-left-subname
						  {
							  font-size: 24rpx;
							  font-family: PingFangSC, PingFangSC-Regular;
							  font-weight: 400;
							  text-align: left;
							  color: #414159;
							  line-height: 33rpx;
							  margin-top: 64rpx;
							  margin-left: 10rpx;
						  }
					  }
					  .item-content-right
					  {
						  width: 190rpx;height: 190rpx;margin-right: 22rpx;
						  image{width: 100%;height: 100%;}
					  }
					  
				  }
				}
			}
			
			.item-margin-top{width: 100%;height: 16rpx;}
		}
		
	}
}
</style>
