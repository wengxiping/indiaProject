<template>
  <view class="page-content">
	   <image :src="require('@/static/jj_list_bg.png')" class="page-content-bg"></image>
	  <u-navbar back-text="基金列表" title="" :background="background" :back-text-style='backStyle' back-icon-color='#FFF'>
		  <view slot="right" class="slotRight" @tap="$Router.push({name:'user_balance_bao_log'})">购买记录</view>
	  </u-navbar>
	  <view class="content-list">
		  <view class="content-item">
			  <view class="content-item-flex">基金名称</view>
			  <view class="content-item-flex">基金周期(天)</view>
			  <view class="content-item-flex">收益比率</view>
		  </view>
		  
		  <view class="content-item" v-for="(item,index) in dataList" :key="index" @tap="buy(item)">
			  <view :class="[index%2==0?'content-item-flex-s':'content-item-flex']">{{item.mname}}</view>
			  <view :class="[index%2==0?'content-item-flex-s':'content-item-flex']">{{item.howday}}</view>
			  <view :class="[index%2==0?'content-item-flex-s':'content-item-flex']">{{item.mpl}}</view>
		  </view>
	  </view>
	<u-mask :show="maskBuyStatus">
	  <view class="tang" style="width: 70%;">
	    <image src="/static/icon/close.png" mode="aspectFit" class="close" @click="maskBuyStatus = false"></image>
	    <view class="tbox">
			<view class="tbox-img" style="width: 100%;position: relative;">
			   <image src="/static/jj_dialog.png" mode="widthFix" style="width: 100%;"/>
			   <view class="" style="position: absolute;top:0;height: 100%;width: 100%;display: flex;justify-content: flex-start;align-items: center;">
				   <view style="margin-left: 50rpx;color: #FFF;font-size: 34rpx;">{{maskBuyStatusName}}</view>
			   </view>
			</view>
	      <view class="tang-cont">
			  <view class="t1">
				  <view class="t1-title">购买基金金额 (卢比)</view>
				  <input type="number" v-model="buyMoney" class="t1-title-input"/>
			  </view>
	          <view class="cont" @tap="keyboardShow=true">
				  <view class="cont-title">输入支付密码</view>
				  <u-message-input  class="cont-title-msg" :maxlength="maxLength" mode="bottomline" :font-size="30" :width="51" :value="messageValue"  :breathe="true" :disabled-keyboard="true"></u-message-input>
			  </view>
	        <view class="btn" @click="buyAction">
	          <text class="text" >购买</text>
	        </view>
	      </view>
	    </view>
	  </view>
	</u-mask>
	  
	  <u-keyboard ref="uKeyboard" :mask="false" mode="number" :tooltip="false" :cancel-btn="false" :confirm-btn="false" tips="支付安全保护中" :random="true" v-model="keyboardShow" @change="changeKeyboard" @backspace="backspace">
	  			
	  </u-keyboard>
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
				buyMoney:"",
				dmid:0,
				dataList:[],
				maxLength:6,
				show:true,
				maskBuyStatus:false,
				maskBuyStatusName:"",
				messageValue:'',
				keyboardShow:false
			}
		},
		onLoad()
		{
			uni.$u.api.getAddmlist().then(ret=>{
				if(ret && ret.code == 1)
				{
					this.dataList = ret.data
				}
			})
		},
		methods:{
			changeKeyboard(val)
			{
				this.messageValue+=val
				console.log(this.messageValue)
				if(this.messageValue.length == this.maxLength)
				{
					this.keyboardShow= false
					
				}
			},
			backspace(){
				this.messageValue=this.messageValue.slice(0,this.messageValue.length-1)
			},
			buy(value)
			{
				this.maskBuyStatusName = value.mname
				this.dmid = value.dmid
				this.maskBuyStatus = true
			},
			buyAction(){
				this.maskBuyStatus = false
				uni.$u.api.setBuyaddm({dmid:this.dmid,buymoney:this.buyMoney,zfpd:this.messageValue}).then(ret=>{
				    uni.$u.toast(ret.msg)
				})
				this.messageValue=""
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
.page-content-bg{
		width: 100vw;height: 176rpx;position: fixed;
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

.tang {
  width: 640rpx;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  .close {
    position: absolute;
    right: -30rpx;
    top: -30rpx;
    width: 60rpx;
    height: 60rpx;
    z-index: 10;
  }
  .tbox {
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 14rpx;
    .tang-cont {
      display: flex;
      flex-direction: column;
      padding: 36rpx 50rpx;
    }
    .t1 {
      width: 100%;
	  .t1-title{
		  width: 100%;
		  font-size: 32rpx;
		  color: #333333;
	  }
	  .t1-title-input{
		  margin: 10rpx 0;
		  width: 100%;
		  height: 50rpx;
		  opacity: 1;
		  background: #f8f8f8;
		  font-size: 28rpx;
	  }
    }
    .cont {
		margin-top: 20rpx;
       .cont-title{
		   width: 100%;
		   font-size: 32rpx;
		   color: #333333;
	   }
	   .cont-title-msg{
		   width: 100%;
		   margin: 10rpx 0;
		   border-bottom: 1rpx solid #f8f8f8;
	   }
    }
    .btn {
      margin-top: 20rpx;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      height: 80rpx;
      background: linear-gradient(225deg,#ff8960, #ff62a5);
      border-radius: 14rpx;
      @include flexCenter(2);
      .text {
        color: #FFFFFF;
        font-size: 30rpx;
      }
    }
  }
}
</style>
