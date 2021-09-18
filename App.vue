<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
  @import "uview-ui/index.scss";
	/*每个页面公共css */
  page {
    background-color: #F8F8F8;
  }
  .w100 {
    width: 100%;
  }
  .image {
    width: 100%;
    height: 100%;
  }
  .gap {
    height: $gutter;
  }
  .title {
    position: relative;
    @include flexCenter(0);
    padding: 20rpx $gutter;
    .line {
      width: 8rpx;
      height: 28rpx;
      margin-right: 10rpx;
    }
    .text {
      font-size: 30rpx;
      color: #333333;
      font-weight: bold;
      line-height: 42rpx;
    }
  }
</style>
