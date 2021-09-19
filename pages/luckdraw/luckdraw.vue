<template>
  <view>
    <view class="page-luck-draw">
      <image src="/static/luck-bg.png" mode="widthFix" class="luck-bg"></image>
      <view class="lk-title">
        <text class="text">lucky wheel</text>
		<view class="text-view">
			<view class="text-view-top">当前奖金池金额</view>
			<view class="text-view-bottom">{{allmoney}}卢比</view>
		</view>
        <!-- <image src="/static/luck-title.png" mode="aspectFit" class="lk-t"></image> -->
      </view>
      <view class="luck-content">
        <image src="/static/luck-box.png" mode="aspectFit" class="lk-m"></image>
        <view class="lk-wheel" @click="startCallBack">
          <LuckyWheel
            ref="luckyWheel"
            width="630rpx"
            height="630rpx"
            :blocks="blocks"
            :prizes="prizes"
            :buttons="buttons"
            :defaultStyle="defaultStyle"
            @start="startCallBack"
            @end="endCallBack"
          />
        </view>
        <text class="al-count">剩余免费次数<text class="count">{{cjsum}}</text>次</text>
      </view>
    </view>
    <!-- 我的中奖记录 -->
    <view class="info-box">
      <view class="title">
        <image src="/static/icon/line.png" mode="aspectFit" class="line"></image>
        <text class="text">我的中奖记录</text>
      </view>
      <view class="record-list">
        <view class="cell u-line-1" v-for="(item, index) in mydrawlist" :key="index">
          <text>{{item.username}} {{item.zjscore}}</text>
        </view>
      </view>
    </view>
    <!-- 中奖记录 -->
    <view class="info-box">
      <view class="title">
        <image src="/static/icon/line.png" mode="aspectFit" class="line"></image>
        <text class="text">中奖记录</text>
      </view>
      <view class="record-list record-gray">
        <view class="cell u-line-1" v-for="(item, index) in drawuserList" :key="index">
          <text>{{item.username}} {{item.zjscore}}</text>
        </view>
      </view>
    </view>
    <view class="gap"></view>
  </view>
</template>

<script>
  import LuckyWheel from 'uni-luck-draw/lucky-wheel'
    export default {
      components: { LuckyWheel },
      data () {
        return {
          blocks: [
            { padding: '13px', background: 'transparent' }
          ],
          prizes: [
			  
          //   { title: '1', background: '#F9D4FF', fonts: [{ text: '6', top: '16%', fontSize: '34rpx', fontWeight: 'bold' }],imgs: [{ src: require('@/static/vc1.png'), width: '62rpx', top: '70rpx' }] },
          //   { title: '2', background: '#ffffff', fonts: [{ text: '10', top: '16%', fontSize: '34rpx', fontWeight: 'bold' }],imgs: [{ src: require('@/static/vc1.png'), width: '62rpx', top: '70rpx' }] },
          //   { title: '3', background: '#F9D4FF', fonts: [{ text: '2000', top: '16%', fontSize: '34rpx', fontWeight: 'bold' }],imgs: [{ src: require('@/static/vc1.png'), width: '62rpx', top: '70rpx' }] },
          //   { title: '4', background: '#ffffff', fonts: [{ text: '1', top: '16%', fontSize: '34rpx', fontWeight: 'bold' }],imgs: [{ src: require('@/static/vc1.png'), width: '62rpx', top: '70rpx' }] },
          //   { title: '5', background: '#F9D4FF', fonts: [{ text: '8888', top: '16%', fontSize: '34rpx', fontWeight: 'bold' }],imgs: [{ src: require('@/static/vc1.png'), width: '62rpx', top: '70rpx' }] },
          //   { title: '6', background: '#ffffff', fonts: [{ text: '500000', top: '16%', fontSize: '34rpx', fontWeight: 'bold' }],imgs: [{ src: require('@/static/vc1.png'), width: '62rpx', top: '70rpx' }] },
          //   { title: '7', background: '#F9D4FF', fonts: [{ text: '800', top: '16%', fontSize: '34rpx', fontWeight: 'bold' }],imgs: [{ src: require('@/static/vc1.png'), width: '62rpx', top: '70rpx' }] },
          //   { title: '8', background: '#ffffff', fonts: [{ text: '666', top: '16%', fontSize: '34rpx', fontWeight: 'bold' }],imgs: [{ src: require('@/static/vc1.png'), width: '62rpx', top: '70rpx' }] },
          
		  ],
          buttons: [
            {
              radius: '50%',
              x: 1, y: 1, borderRadius: 10,
              imgs: [{
                src: require('@/static/luck-start.png'),
                width: '100%',
                height: '100%',
                top: '-100%'
              }]
            },
          ],
          defaultStyle: {
            fontColor: '#6300FF',
            fontSize: '14px'
          },
          zj_message:{level:'',zjmoney:''},
          cjsum:0,
          allmoney:0,//奖金池
          mydrawlist:[],
          drawuserList:[]
        }
      },
      onShow(){
        this.getDrawinfoFunc();
        this.getMydrawInfoFunc();
      },
      methods: {
        startCallBack () {
          if(!this.loginStatus){uni.$u.toast("请先登录");return}
		  this.getStartDrawtFunc()
         
        },
        endCallBack (prize) {
          uni.showModal({
            content: `恭喜你抽中${this.zj_message.zjmoney}卢比`,
            showCancel: false
          })
        },
        //抽奖
        getStartDrawtFunc(){
		  let param ={}
		  let self = this
		   if(this.cjsum == 0){param.yesmoney = 'yes'}
          uni.$u.api.getStartDrawt(param).then(ret=>{
			 uni.$u.toast(ret.msg);
             if (ret && ret.code == 1)
             {
			   this.cjsum--
               this.zj_message = ret.data
			   this.$refs.luckyWheel.play()
			   setTimeout(() => {
				   let stopIndex=1
				  self.prizes.forEach((item,index)=>{
					  if(item.level == ret.data.level)
					  {
						  stopIndex = index+1
					  }
				  })
			     self.$refs.luckyWheel.stop(stopIndex)
			   }, 3000)
             }else{
              
             }
          })
        },
        getDrawinfoFunc()
        {
          uni.$u.api.getDrawinfo().then(ret=>{
			  console.log(ret)
                if(ret && ret.code == 1)
                {
                  this.drawuserList = ret.data.drawuser
                  this.allmoney = ret.data.allmoney
				  console.log(ret.data.drawconfig)
				  let _arr=[];
				  ret.data.drawconfig.forEach((item,index)=>{
					  _arr.push({ title: item.zjmoney,'level':item.level, background: index%2==0?'#F9D4FF':'#ffffff', fonts: [{ text: item.zjmoney, top: '16%', fontSize: '34rpx', fontWeight: 'bold' }],imgs: [{ src: require('@/static/vc1.png'), width: '62rpx', top: '70rpx' }] })
				  })
				  this.prizes=_arr
                }else{
                  uni.$u.toast(uni.$u.msg.requestTimeOut);
                }
          })
        },
        getMydrawInfoFunc(){
          uni.$u.api.getMydrawinfo().then(ret=>{
             if(ret && ret.code == 1){
               this.cjsum = ret.data.cjsum
               this.mydrawlist = ret.data.mydrawlist
             }else{
               uni.$u.toast(uni.$u.msg.requestTimeOut);
             }
          })
        }
      }
    }
</script>

<style lang="scss">
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
  &.record-gray {
    .cell {
      background-color: rgba($color: #8899BB, $alpha: 0.1);
      color: #5F7799;
      height: 76rpx;
    }
  }
}
.page-luck-draw {
  height: 1148rpx;
  position: relative;
  .luck-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
  }
  .lk-title {
    @include flexCenter(2);
    flex-direction: column;
    padding: 107rpx 0 0;
    position: relative;
    z-index: 1;
    .text {
      font-size: 36rpx;
      color: #FFFFFF;
      line-height: 50rpx;
    }
    .lk-t {
      width: 494rpx;
      height: 132rpx;
      margin-top: 20rpx;
    }
  }
  
  .text-view{
	   @include flexCenter(2);
	   flex-direction: column;
	   height: 132rpx;
	  
	   .text-view-top{
		   font-size: 50rpx;
		   color: #FFDF89;
		   font-weight: 500;
	   }
	   .text-view-bottom{
		   font-size: 46rpx;
		   color: #FFDF89;
	   }
  }
  
  .luck-content {
    position: relative;
    width: 651rpx;
    height: 784rpx;
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    .al-count {
      position: absolute;
      bottom: 30rpx;
      left: 0;
      width: 100%;
      @include flexCenter(2);
      font-size: 32rpx;
      color: #FFFFFF;
      .count {
        color: #FFE800;
        margin: 0 10rpx;
      }
    }
    .lk-m {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }
  }
  .lk-wheel {
    position: relative;
    z-index: 2;
    padding-top: 16rpx;
  }
}
</style>
