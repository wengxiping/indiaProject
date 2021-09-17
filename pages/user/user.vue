<template>
  <view>
    <view class="user-top">
      <image src="/static/userbg.png" mode="widthFix" class="w100"></image>
      <view class="user-info">
        <text class="user-title">我的中心</text>
        <view class="user-cell" 
          @tap="$Router.push({name:'login'})">
          <u-avatar src="/static/avatar.png" size="118" :show-level="hasLogin" level-icon="/static/icon/level.png"></u-avatar>
          <text class="name">Hi，你未登录</text>
          <image src="/static/icon/icon-edit.png" mode="aspectFit" class="edit-info" v-if="hasLogin"></image>
        </view>
      </view>
    </view>
    <view class="user-links">
      <view class="cell" v-for="(item, index) in cellList" :key="index" @tap="$Router.push({name:item.path})">
        <image :src="item.icon" mode="aspectFit" class="icon"></image>
        <text class="text">{{ item.name }}</text>
        <u-icon name="arrow-right" size="30" color="#C2C4CA"></u-icon>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        cellList: [
          {
            icon: '/static/icon/c1.png',
            name: 'VIP等级',
			path:"user_level",
          },{
            icon: '/static/icon/c2.png',
            name: '余额',
			path:"user_balance",
          },{
            icon: '/static/icon/c3.png',
            name: '余额宝',
			path:"user_balance_bao",
          },{
            icon: '/static/icon/c4.png',
            name: '邀请好友',
			path:"user_invite",
          },{
            icon: '/static/icon/c5.png',
            name: '设置',
			path:"user_setting",
          }
        ]
      };
    },
    computed: {
      hasLogin () {
        return false
      }
    },
    methods: {
    
    }
  }
</script>

<style lang="scss">
.user-top {
  padding-top: 106rpx;
  .w100 {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
  .user-info {
    position: relative;
    z-index: 2;
    padding: 0 $gutter;
    .user-title {
      font-size: 36rpx;
      color: #FFFFFF;
      padding: 0 4rpx 20rpx;
      display: block;
      line-height: 50rpx;
    }
    .user-cell {
      width: 100%;
      height: 194rpx;
      background: #ffffff;
      border-radius: 14rpx;
      padding: 38rpx 28rpx;
      box-shadow: 0rpx 0rpx 20rpx -10rpx rgba(0,0,0,0.06); 
      @include flexCenter(0);
      .name {
        font-size: 32rpx;
        color: #333333;
        margin-left: $gutter;
        flex: 1;
      }
    }
    .edit-info {
      width: 48rpx;
      height: 48rpx;
    }
  }
}
.user-links {
  padding: 20rpx $gutter;
  .cell {
    background-color: #FFFFFF;
    height: 102rpx;
    border-radius: 14rpx;
    box-shadow: 0rpx 0rpx 20rpx -10rpx rgba(0,0,0,0.06); 
    margin-top: $gutter;
    @include flexCenter(0);
    padding: 0 28rpx;
    .icon {
      width: 44rpx;
      height: 44rpx;
    }
    .text {
      flex: 1;
      font-size: 30rpx;
      color: #333333;
      margin-left: 20rpx;
    }
  }
}
</style>
