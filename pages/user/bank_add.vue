<template>
	<view class="page-content">
		  <u-navbar back-text="添加银行卡" title="" :background="background" :back-text-style='backStyle' back-icon-color='#000'>
		  </u-navbar>
		  <view class="content-list">
			  <view class="margin-top"></view>
			  <view class="content-form">
				  <view class="content-form-line">
					  <view class="content-form-label">姓名</view>
					  <view class="content-form-input"><input v-model="form.bankuser" type="text" placeholder="请输入持卡人姓名" placeholder-class="content-form-input-place" class="content-form-input-input"/></view>
				  </view>

				  <view class="content-form-line content-form-line-margin">
					  <view class="content-form-label">身份证</view>
					  <view class="content-form-input"><input  v-model="form.banksfz" type="text" placeholder="请输入证件号" placeholder-class="content-form-input-place" class="content-form-input-input"/></view>
				  </view>

				  <view class="content-form-line content-form-line-margin">
					  <view class="content-form-label">开户银行</view>
					  <view class="content-form-input"><input  v-model="form.bankname" type="text" placeholder="请输入证件号" placeholder-class="content-form-input-place" class="content-form-input-input"/></view>
				  </view>

				  <view class="content-form-line content-form-line-margin">
					  <view class="content-form-label">银行卡号</view>
					  <view class="content-form-input"><input  v-model="form.bankno"  type="number" placeholder="请输入银行卡号" placeholder-class="content-form-input-place" class="content-form-input-input"/></view>
				  </view>
			  </view>

			  <view class="group-button">
<!--				  <view class="button" @click.parent="show = true">添加银行卡</view>-->
				  <view class="button" @tap="addBankFunc">添加银行卡</view>
			  </view>
		  </view>
		<!-- <view class="fixed-middle" v-if="show">
			  <u-message-input :dot-fill="true"   value=""  :breathe="true" style="background-color: #FFFFFF;"></u-message-input>
			  <view class="paynotice">支付密码不能是重复、连续的数字</view>
		  </view> -->
		  <u-keyboard ref="uKeyboard" mode="number" :cancelBtn="false" tips="支付安全保护中" :random="true" v-model="show" @change="changeKeyboard" @backspace="backspace">
			<view slot="default" style="margin-bottom: 60rpx;">
				  <u-message-input :maxlength="maxLength" :value="messageValue"  :breathe="true" :disabled-keyboard="true"></u-message-input>
				  <view class="paynotice">支付密码不能是重复、连续的数字</view>
			  </view>
		  </u-keyboard>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				maxLength:6,
				show:false,
				background:{
					background:"#FFFFFF"
				},
				backStyle:{
					color:"#000"
				},
				dataList:[{backgroud:'linear-gradient(121deg,#27347d 10%, #3045b6 90%)'},
				{backgroud:'linear-gradient(144deg,#d05f2d 3%, #ffa100)'},
				{backgroud:'linear-gradient(121deg,#3e90ba 10%, #30b686 90%)'}],
				messageValue:"",
				form:{
					bankuser:"",
					bankname:"",
			        bankno:"",
					banksfz:""
				}
			}
		},
		methods:{
			changeKeyboard(val)
			{
				this.messageValue+=val
				if(this.messageValue.length == this.maxLength){
					this.show = false
				}
			},
			backspace(){
				this.messageValue=this.messageValue.slice(0,this.messageValue.length-1)
			},
			addBankFunc()
			{
				uni.$u.throttle(()=>{
					uni.$u.api.setAddmybankno(this.form).then(ret=>{
						uni.$u.toast(ret.msg)
						if(ret && ret.code==0)
						{
							uni.navigateBack({
								delta:1
							})
						}
					})
				})
			}

		}
	}
</script>

<style scoped lang="scss">
	.paynotice{
		display: flex;justify-content: center;align-items: center;
		opacity: 1;
		font-size: 30rpx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		color: #999999;
	}
	.fixed-middle{
		background-color: #000;position: fixed;top:0;z-index: 10074;width: 100vw;height: 100vh;display: flex;justify-content: center;align-items: center;flex-direction: column;
	}
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
		width: 100%;height: calc(100% - 88rpx);background-color: #ffffff;display: flex;justify-content: flex-start;align-items: center;flex-direction: column;
		.margin-top{width: 100%;height: 56rpx;}
		.content-form
		{
			width: calc(100% - 112rpx);margin: 0 auto 0;
			.content-form-line-margin{
				margin-top: 40rpx;
			}
			.content-form-line{
				width: 100%;
				.content-form-label{
					height: 42rpx;
					opacity: 1;
					font-size: 30rpx;
					font-family: PingFangSC, PingFangSC-Regular;
					font-weight: 400;
					text-align: left;
					color: #333333;
					line-height: 42rpx;
					width: 100%;
				}
				.content-form-input
				{
					margin-top: 6rpx;
					width: 100%;
					height: 88rpx;
					opacity: 1;
					background: #f8f8f8;
					border-radius: 14rpx;
					.content-form-input-input{
						opacity: 1;
						font-size: 30rpx;
						font-family: PingFangSC, PingFangSC-Regular;
						font-weight: 400;
						text-align: left;
						color: #000;
						width: 100%;height: 100%;
						text-indent: 28rpx;
					}
					.content-form-input-place{
						opacity: 1;
						font-size: 30rpx;
						font-family: PingFangSC, PingFangSC-Regular;
						font-weight: 400;
						text-align: left;
						color: #cccccc;

					}
				}
			}

		}

		.group-button
		{
			width: 638rpx;
			height: 100rpx;
			margin-top: 189rpx;
			opacity: 1;
			background: linear-gradient(225deg,#ff8960, #ff62a5);
			border-radius: 14rpx;
			.button{
				line-height: 100rpx;
				text-align: center;
				opacity: 1;
				font-size: 30rpx;
				font-family: PingFangSC, PingFangSC-Regular;
				font-weight: 400;
				text-align: center;
				color: #f8f8f8;
			}
		}

	}
}
</style>
