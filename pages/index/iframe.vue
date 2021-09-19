<template>
	<view>
		<u-navbar back-text="返回" :background="background" title="任务中" :customBack="goHome">
			 <view slot="right" class="slotRight"><u-count-down :timestamp="taskTime" :show-hours="false" color="#FF5533" separator-color="#FF5533" height="40" @end="cutdownEnd"></u-count-down></view>
		</u-navbar>
		<view class="iframe-content">
			<!--  -->
		   <iframe :src="urlTime.taskurl" class='iframe' frameborder="0"></iframe>	
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background:{
					background:"none"
				},
				taskTime:15,
				urlTime:{}
			}
		},
		
		onLoad() {
			this.urlTime = this.$route.params
			this.taskTime = this.urlTime.tasktime
		},
		methods: {
			goHome(){
				uni.navigateBack({
					delta:1
				})
			},
			cutdownEnd(){
				uni.$u.api.setTasklist({taskid:this.urlTime.taskid,tasktime:this.urlTime.tasktime}).then(ret=>{
					uni.$u.toast(ret.msg)
				})
			}
		}
	}
</script>

<style scoped lang="less">
.slotRight{
	opacity: 1;
	font-size: 30rpx;
	font-family: PingFangSC, PingFangSC-Regular;
	font-weight: 400;
	text-align: right;
	color: #ffffff;
	margin-right: 36rpx;
}
.iframe-content{
	width: 100%;
	height: calc(100vh - 88rpx);
	.iframe{
		width: 100%;
		height:100%;
	}
}
</style>
