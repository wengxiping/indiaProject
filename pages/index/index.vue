<template>
  <view>
    <view class="top-image">
      <image src="/static/img1.png" mode="widthFix" class="image"></image>
    </view>
    <view class="notice">
      <image src="/static/icon/notice.png" mode="aspectFit" class="notice-icon"></image>
      <u-notice-bar mode="horizontal" type="none" :volume-icon="false" :list="notice" color="#333333" font-size="26"></u-notice-bar>
    </view>
    <!-- 非实时数据 -->
    <view class="info-box">
      <view class="title">
        <image src="/static/icon/line.png" mode="aspectFit" class="line"></image>
        <text class="text">收入(非实时数据)</text>
      </view>
      <view class="grid-list" v-if="loginStatus">
        <view class="g-item" v-for="(item, index) in gridList" :key="index">
          <text class="text">{{ item.title }}</text>
          <text class="small">{{ item.content }}</text>
        </view>
      </view>
	  <view class="grid-list" v-else>
		  <view  style="height:384rpx;text-align: center;width: 100%;line-height: 384rpx;display: flex;justify-content: center;align-items: center;">
			 <u-button :ripple="true" type="primary" @tap="$Router.push({name:'login'})">登录可查看</u-button>
		  </view>
	  </view>
    </view>
    <!-- 任务大厅 -->
    <view class="info-box">
      <view class="title">
        <image src="/static/icon/line.png" mode="aspectFit" class="line"></image>
        <text class="text">任务大厅</text>
      </view>
      <view class="rwlist">
        <view class="rw-img" v-for="(item, index) in taskList" :key="index" @tap="link_href(item.taskurl)">
          <image :src="item.taskpic" mode="scaleToFill" class="image" :title="item.taskpic"></image>
        </view>
		<view class="rw-img"></view>
      </view>
    </view>
    <!-- 会员列表 -->
    <view class="info-box">
      <view class="title">
        <image src="/static/icon/line.png" mode="aspectFit" class="line"></image>
        <text class="text">会员列表</text>
      </view>
      <view class="viplist">
        <view class="vipm1">
          <text class="v-title">新会员</text>
          <view class="im-cell" v-for="(item, index) in reguserList" :key="index">
            <text class="text">恭喜{{item.username}}新会员</text>
          </view>
        </view>
        <view class="vipm2">
          <text class="v-title">转盘中奖</text>
          <view class="im-cell" v-for="(item, index) in drawuserList" :key="index">
            <text class="text">恭喜{{item.username}} 中奖</text>
          </view>
        </view>
        <view class="vipm3">
          <text class="v-title">红蓝中奖</text>
          <view class="im-cell" v-for="(item, index) in balluserList" :key="index">
            <text class="text">恭喜{{item.username}} 中奖</text>
          </view>
        </view>
      </view>
    </view>
    <view class="gap"></view>
    <u-mask :show="show">
      <view class="tang" style="width: 70%;">
        <image src="/static/icon/close.png" mode="aspectFit" class="close" @click="show = false"></image>
        <view class="tbox">
          <image src="/static/tbg.png" mode="widthFix" class="w100"></image>
          <view class="tang-cont">
            <text class="t1">{{title_en}}</text>
            <text class="cont">{{msg_en}}</text>
            <view class="btn" @click="show = false">
              <text class="text">我知道了</text>
            </view>
          </view>
        </view>
      </view>
    </u-mask>
  </view>
</template>

<script>
	export default {
		data() {
			return {
        show: false,
        notice: ['尊敬的各位用户，本应用将于2021.7.27更新，不便之处请海谅解'],
        gridList: [
          {
            title: '可用余额(元)',
            content: '0.00'
          },{
            title: '昨天收入',
            content: '+0.00'
          },{
            title: '今天收入',
            content: '+0.00'
          },{
            title: '本周收入',
            content: '0.00'
          },{
            title: '本月收入',
            content: '+0.00'
          },{
            title: '上个月收入',
            content: '+0.00'
          },{
            title: '总额',
            content: '0.00'
          },{
            title: '今天任务完成',
            content: '0 time'
          },{
            title: '今天离开次数',
            content: '0 shan'
          }
        ],
        reguserList:[],
        drawuserList:[],
        balluserList:[],
        taskList:[],
        title_en:"",
        msg_en:"",
		istj:0,
	}
},
        onLoad() {
			 this.getNewNoticeFun();
        	 
        },
		onShow() {
            this.getUserInfoFunc();
            this.getRtuserdateFunc();
            this.getTaskFunc();
		},
		methods: {
          getNewNoticeFun(){
            uni.$u.api.getNewNotice().then(ret=>{
              if(ret && ret.code == 1)
              {
                this.notice = [ret.data[0].title_en]
                this.title_en = ret.data[0].title_en
                this.msg_en = ret.data[0].msg_en
				this.istj = ret.data[0].istj
				this.show = this.istj==1?true:false
              }else{
                uni.$u.toast(uni.$u.msg.requestTimeOut)
              }
            })
          },
          getUserInfoFunc()
          {
            uni.$u.api.getuserinfo().then(ret=>{
              if(ret && ret.code == 1)
              {
                this.gridList[0].content = ret.data.kymoney
                this.gridList[1].content = ret.data.lastday
                this.gridList[2].content = ret.data.today
                this.gridList[3].content = ret.data.weekmoney
                this.gridList[4].content = ret.data.monthmoney
                this.gridList[5].content = ret.data.lastmmoney
                this.gridList[6].content = ret.data.fullmoney
                this.gridList[7].content = ret.data.tasktimeday
                this.gridList[8].content = ret.data.lksumday
              }else{
                uni.$u.toast(uni.$u.msg.requestTimeOut)
              }
            })
          },
          getRtuserdateFunc()
          {
            uni.$u.api.getRtuserdate().then(ret=>{
              if(ret && ret.code == 1)
              {
                this.reguserList = ret.data.reguser
                this.drawuserList = ret.data.drawuser
                this.balluserList = ret.data.balluser
              }else{
                uni.$u.toast(uni.$u.msg.requestTimeOut)
              }
            })
          },
          getTaskFunc()
          {
            uni.$u.api.getTasklist().then(ret=>{
				console.log(ret.data)
              if(ret && ret.code == 1)
              {
                this.taskList = ret.data
              }else{
                uni.$u.toast(uni.$u.msg.requestTimeOut)
              }
            })
          },
          link_href(url)
          {
            uni.$u.toast(url)
          }
		}
	}
</script>

<style lang="scss">
.top-image {
  width: 100%;
  height: 422rpx;
  background-color: #eee;
}
.notice {
  @include flexCenter(0);
  background-color: #FFFFFF;
  .notice-icon {
    width: 54rpx;
    height: 40rpx;
    margin-left: 26rpx;
  }
}
.info-box {
  margin-top: $gutter;
  background-color: #FFFFFF;
}
.grid-list {
  display: flex;
  flex-wrap: wrap;
  padding: 0 16rpx 28rpx;
  .g-item {
    width: 226rpx;
    height: 128rpx;
    background-color: rgba($color: #8899BB, $alpha: 0.1);
    border-radius: 14rpx;
    @include flexCenter(2);
    margin-left: 10rpx;
    margin-top: 10rpx;
    flex-direction: column;
    .text {
      font-size: 24rpx;
      line-height: 33rpx;
      color: #5F7799;
    }
    .small {
      font-size: 30rpx;
      color: #FF5533;
      line-height: 42rpx;
      margin-top: 4rpx;
    }
  }
}
.rwlist {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4rpx 28rpx;
  .rw-img {
    width: 218rpx;
    height: 100rpx;
    margin-left: 22rpx;
    margin-top: 10rpx;
    margin-bottom: 12rpx;
  }
}
.viplist {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4rpx 28rpx;
  .v-title {
    width: 160rpx;
    height: 40rpx;
    @include flexCenter(2);
    font-size: 26rpx;
    color: #FFFFFF;
    border-radius: 50px;
    margin: 24rpx auto 6rpx;
  }
  .im-cell {
    @include flexCenter(2);
    height: 100rpx;
    padding: 20rpx 10rpx;
    .text {
      font-size: 24rpx;
      line-height: 30rpx;
      color: #FFFFFF;
    }
    &:nth-child(2n-1) {
      background-color: rgba($color: #ffffff, $alpha: 0.2);
    }
  }
  .vipm1 {
    width: 218rpx;
    height: 496rpx;
    background: linear-gradient(236deg,#ffc800 26%, #ffa000 91%);
    border-radius: 14rpx;
    margin-left: 22rpx;
    margin-top: 10rpx;
    .v-title {
      background-color: #FF9900;
    }
  }
  .vipm2 {
    @extend .vipm1;
    background: linear-gradient(236deg,#ff8960 26%, #ff62a5 91%);
    .v-title {
      background-color: #FF4444;
    }
  }
  .vipm3 {
    @extend .vipm1;
    background: linear-gradient(236deg,#00bbff 26%, #3478ff 91%);
    .v-title {
      background-color: #3478FF;
    }
  }
}
.tang {
  width: 640rpx;
  position: absolute;
  top: 50%;
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
      font-size: 34rpx;
      color: #333333;
      line-height: 48rpx;
      padding-bottom: 28rpx;
      text-align: center;
    }
    .cont {
      font-size: 28rpx;
      color: #666666;
      line-height: 50rpx;
    }
    .btn {
      margin-top: 60rpx;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      height: 100rpx;
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
