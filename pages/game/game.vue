<template>
  <view>
    <view class="game-top">
      <image src="/static/game-bg.png" mode="widthFix" class="top-image"></image>
      <view class="left-info">
        <text class="text">Period</text>
        <text class="small">20210310281</text>
      </view>
      <view class="right-info">
        <text class="text">Count Down</text>
        <view class="u-margin-top-8">
          <u-count-down :timestamp="timestamp" :show-hours="false" color="#FF5533" separator-color="#ffffff" height="40"></u-count-down>
        </view>
      </view>
    </view>
    <view class="g-list">
      <view class="g-top">
        <view class="gbox">
          <image src="/static/g-c1.png" mode="scaleToFill" class="image"></image>
          <text class="text">JOIN GREEN</text>
        </view>
        <view class="gbox">
          <image src="/static/g-c2.png" mode="scaleToFill" class="image"></image>
          <text class="text">JOIN GREEN</text>
        </view>
        <view class="gbox">
          <image src="/static/g-c3.png" mode="scaleToFill" class="image"></image>
          <text class="text">JOIN GREEN</text>
        </view>
      </view>
      <view class="g-foot">
        <view class="g-cell" v-for="(item, index) in 10" :key="index">
          <text class="text">{{ index }}</text>
          <image :src="`/static/ag${index%3+1}.png`" mode="scaleToFill" class="image"></image>
        </view>
      </view>
      <view class="rginfo">
        <text class="text">Historical record Query</text>
      </view>
    </view>
    <!-- 中奖记录 -->
    <view class="info-box">
      <view class="title">
        <image src="/static/icon/line.png" mode="aspectFit" class="line"></image>
        <text class="text">中奖记录</text>
      </view>
      <view class="record-list">
        <view class="cell u-line-1" v-for="(item, index) in 2" :key="index">
          <text>恭喜46546*46546，用户获得70000卢比大奖</text>
        </view>
      </view>
    </view>
    <!-- 投注记录 -->
    <view class="info-box">
      <view class="title">
        <image src="/static/icon/line.png" mode="aspectFit" class="line"></image>
        <text class="text">投注记录</text>
      </view>
      <view class="in-table">
        <view class="in-th">
          <text class="text">PREIOD</text>
          <text class="text">PRICE</text>
          <text class="text">NUMBER</text>
          <text class="text">RESULT</text>
        </view>
        <view class="in-td">
          <view class="cell" v-for="(item, index) in 4" :key="index">
            <view class="c-td">
              <text class="text">0165158</text>
            </view>
            <view class="c-td">
              <text class="text">18002</text>
            </view>
            <view class="c-td">
              <text class="text">1</text>
            </view>
            <view class="c-td">
              <text style="background-color: #866FFF;" class="rint"></text>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="gap"></view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        timestamp: 3400,
      };
    }
  }
</script>

<style lang="scss">
.game-top {
  display: flex;
  padding-top: 88rpx;
  height: 204rpx;
  position: relative;
  padding-left: 26rpx;
  padding-right: 26rpx;
  justify-content: space-between;
  .right-info {
    @extend .left-info;
    align-items: flex-end;
  }
  .text {
    font-size: 28rpx;
    line-height: 40rpx;
    color: #FFFFFF;
  }
  .left-info {
    position: relative;
    z-index: 2;
    flex: 1;
    display: flex;
    flex-direction: column;
    .small {
      font-size: 33rpx;
      color: #FFFFFF;
      line-height: 46rpx;
      margin-top: 5rpx;
    }
  }
  .top-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 204rpx;
    z-index: 0;
  }
}
.g-list {
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  .g-top {
    display: flex;
    justify-content: space-evenly;
  }
  .gbox {
    display: flex;
    position: relative;
    width: 252rpx;
    height: 140rpx;
    .text {
      position: absolute;
      width: 100%;
      height: 100%;
      font-size: 26rpx;
      color: #FFFFFF;
      @include flexCenter(2);
    }
  }
  .g-foot {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10rpx;
    width: 100%;
    box-sizing: border-box;
    .g-cell {
      width: 20%;
      width: 146rpx;
      height: 146rpx;
      @include flexCenter(2);
      position: relative;
      .text {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        @include flexCenter(2);
        width: 100%;
        height: 100%;
        color: #FFFFFF;
        font-size: 42rpx;
      }
    }
  }
  .rginfo {
    @include flexCenter(0);
    justify-content: flex-end;
    padding: 28rpx 32rpx;
    .text {
      font-size: 26rpx;
      color: #9B9B9B;
      line-height: 37rpx;
    }
  }
}
.info-box {
  margin-top: $gutter;
  background-color: #FFFFFF;
}
.record-list {
  display: flex;
  flex-direction: column;
  padding: 0 $gutter 8rpx;
  .cell {
    background-color: rgba($color: #FF5533, $alpha: 0.1);
    border-radius: 14rpx;
    color: #FF5533;
    font-size: 24rpx;
    height: 66rpx;
    @include flexCenter(2);
    margin-bottom: 20rpx;
  }
}
.in-table {
  padding: 0 $gutter 28rpx;
  display: flex;
  flex-direction: column;
  .in-th {
    @include flexCenter(0);
    height: 76rpx;
    background: linear-gradient(to right, #FF62A5, #FF8961);
    border-radius: 14rpx;
    .text {
      flex: 1;
      display: block;
      border-right: 1rpx solid #FFFFFF;
      height: 30rpx;
      font-size: 26rpx;
      color: #FFFFFF;
      text-align: center;
      &:last-child {
        border-right: none;
      }
    }
  }
  .in-td {
    @include flexCenter(0);
    flex-direction: column;
    width: 100%;
    .cell {
      background-color: #F8F8F8;
      height: 88rpx;
      width: 100%;
      flex: 1;
      display: flex;
      border-radius: 14rpx;
      &:nth-child(2n-1) {
        background-color: #FFFFFF;
      }
      .c-td {
        flex: 1;
        text-align: center;
        height: 88rpx;
        @include flexCenter(2);
        .text {
          display: flex;
          text-align: center;
          justify-content: center;
          border-right: 1rpx solid #E6E6E6;
          flex: 1;
          line-height: 30rpx;
        }
        .rint {
          width: 32rpx;
          height: 32rpx;
          display: block;
          margin: 0 auto;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
