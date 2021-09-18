(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-game-game"],{"050d":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-count-down",props:{timestamp:{type:[Number,String],default:0},autoplay:{type:Boolean,default:!0},separator:{type:String,default:"colon"},separatorSize:{type:[Number,String],default:30},separatorColor:{type:String,default:"#303133"},color:{type:String,default:"#303133"},fontSize:{type:[Number,String],default:30},bgColor:{type:String,default:"#fff"},height:{type:[Number,String],default:"auto"},showBorder:{type:Boolean,default:!1},borderColor:{type:String,default:"#303133"},showSeconds:{type:Boolean,default:!0},showMinutes:{type:Boolean,default:!0},showHours:{type:Boolean,default:!0},showDays:{type:Boolean,default:!0},hideZeroDay:{type:Boolean,default:!1}},watch:{timestamp:function(t,e){this.clearTimer(),this.start()}},data:function(){return{d:"00",h:"00",i:"00",s:"00",timer:null,seconds:0}},computed:{itemStyle:function(){var t={};return this.height&&(t.height=this.height+"rpx",t.width=this.height+"rpx"),this.showBorder&&(t.borderStyle="solid",t.borderColor=this.borderColor,t.borderWidth="1px"),this.bgColor&&(t.backgroundColor=this.bgColor),t},letterStyle:function(){var t={};return this.fontSize&&(t.fontSize=this.fontSize+"rpx"),this.color&&(t.color=this.color),t}},mounted:function(){this.autoplay&&this.timestamp&&this.start()},methods:{start:function(){var t=this;this.clearTimer(),this.timestamp<=0||(this.seconds=Number(this.timestamp),this.formatTime(this.seconds),this.timer=setInterval((function(){if(t.seconds--,t.$emit("change",t.seconds),t.seconds<0)return t.end();t.formatTime(t.seconds)}),1e3))},formatTime:function(t){t<=0&&this.end();var e=0,i=0,n=0,a=0;e=Math.floor(t/86400),i=Math.floor(t/3600)-24*e;var o=null;o=this.showDays?i:Math.floor(t/3600),n=Math.floor(t/60)-60*i-24*e*60,a=Math.floor(t)-24*e*60*60-60*i*60-60*n,o=o<10?"0"+o:o,n=n<10?"0"+n:n,a=a<10?"0"+a:a,e=e<10?"0"+e:e,this.d=e,this.h=o,this.i=n,this.s=a},end:function(){this.clearTimer(),this.$emit("end",{})},clearTimer:function(){this.timer&&(clearInterval(this.timer),this.timer=null)}},beforeDestroy:function(){clearInterval(this.timer),this.timer=null}};e.default=n},"0665":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-countdown"},[t.showDays&&(t.hideZeroDay||!t.hideZeroDay&&"00"!=t.d)?i("v-uni-view",{staticClass:"u-countdown-item",style:[t.itemStyle]},[i("v-uni-view",{staticClass:"u-countdown-time",style:[t.letterStyle]},[t._v(t._s(t.d))])],1):t._e(),t.showDays&&(t.hideZeroDay||!t.hideZeroDay&&"00"!=t.d)?i("v-uni-view",{staticClass:"u-countdown-colon",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"colon"==t.separator?"4rpx":0}},[t._v(t._s("colon"==t.separator?":":"天"))]):t._e(),t.showHours?i("v-uni-view",{staticClass:"u-countdown-item",style:[t.itemStyle]},[i("v-uni-view",{staticClass:"u-countdown-time",style:{fontSize:t.fontSize+"rpx",color:t.color}},[t._v(t._s(t.h))])],1):t._e(),t.showHours?i("v-uni-view",{staticClass:"u-countdown-colon",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"colon"==t.separator?"4rpx":0}},[t._v(t._s("colon"==t.separator?":":"时"))]):t._e(),t.showMinutes?i("v-uni-view",{staticClass:"u-countdown-item",style:[t.itemStyle]},[i("v-uni-view",{staticClass:"u-countdown-time",style:{fontSize:t.fontSize+"rpx",color:t.color}},[t._v(t._s(t.i))])],1):t._e(),t.showMinutes?i("v-uni-view",{staticClass:"u-countdown-colon",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"colon"==t.separator?"4rpx":0}},[t._v(t._s("colon"==t.separator?":":"分"))]):t._e(),t.showSeconds?i("v-uni-view",{staticClass:"u-countdown-item",style:[t.itemStyle]},[i("v-uni-view",{staticClass:"u-countdown-time",style:{fontSize:t.fontSize+"rpx",color:t.color}},[t._v(t._s(t.s))])],1):t._e(),t.showSeconds&&"zh"==t.separator?i("v-uni-view",{staticClass:"u-countdown-colon",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"colon"==t.separator?"4rpx":0}},[t._v("秒")]):t._e()],1)},o=[]},"096d":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uCountDown:i("50f8").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"game-top"},[i("v-uni-image",{staticClass:"top-image",attrs:{src:"/static/game-bg.png",mode:"widthFix"}}),i("v-uni-view",{staticClass:"left-info"},[i("v-uni-text",{staticClass:"text"},[t._v("Period")]),i("v-uni-text",{staticClass:"small"},[t._v("20210310281")])],1),i("v-uni-view",{staticClass:"right-info"},[i("v-uni-text",{staticClass:"text"},[t._v("Count Down")]),i("v-uni-view",{staticClass:"u-margin-top-8"},[i("u-count-down",{attrs:{timestamp:t.timestamp,"show-hours":!1,color:"#FF5533","separator-color":"#ffffff",height:"40"}})],1)],1)],1),i("v-uni-view",{staticClass:"g-list"},[i("v-uni-view",{staticClass:"g-top"},[i("v-uni-view",{staticClass:"gbox"},[i("v-uni-image",{staticClass:"image",attrs:{src:"/static/g-c1.png",mode:"scaleToFill"}}),i("v-uni-text",{staticClass:"text"},[t._v("JOIN GREEN")])],1),i("v-uni-view",{staticClass:"gbox"},[i("v-uni-image",{staticClass:"image",attrs:{src:"/static/g-c2.png",mode:"scaleToFill"}}),i("v-uni-text",{staticClass:"text"},[t._v("JOIN GREEN")])],1),i("v-uni-view",{staticClass:"gbox"},[i("v-uni-image",{staticClass:"image",attrs:{src:"/static/g-c3.png",mode:"scaleToFill"}}),i("v-uni-text",{staticClass:"text"},[t._v("JOIN GREEN")])],1)],1),i("v-uni-view",{staticClass:"g-foot"},t._l(10,(function(e,n){return i("v-uni-view",{key:n,staticClass:"g-cell"},[i("v-uni-text",{staticClass:"text"},[t._v(t._s(n))]),i("v-uni-image",{staticClass:"image",attrs:{src:"/static/ag"+(n%3+1)+".png",mode:"scaleToFill"}})],1)})),1),i("v-uni-view",{staticClass:"rginfo"},[i("v-uni-text",{staticClass:"text"},[t._v("Historical record Query")])],1)],1),i("v-uni-view",{staticClass:"info-box"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-image",{staticClass:"line",attrs:{src:"/static/icon/line.png",mode:"aspectFit"}}),i("v-uni-text",{staticClass:"text"},[t._v("中奖记录")])],1),i("v-uni-view",{staticClass:"record-list"},t._l(t.getMyballlist,(function(e,n){return i("v-uni-view",{key:n,staticClass:"cell u-line-1"},[i("v-uni-text",[t._v("恭喜"+t._s(e.username)+"，用户获得"+t._s(e.ballmoney)+"卢比大奖")])],1)})),1)],1),i("v-uni-view",{staticClass:"info-box"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-image",{staticClass:"line",attrs:{src:"/static/icon/line.png",mode:"aspectFit"}}),i("v-uni-text",{staticClass:"text"},[t._v("投注记录")])],1),i("v-uni-view",{staticClass:"in-table"},[i("v-uni-view",{staticClass:"in-th"},[i("v-uni-text",{staticClass:"text"},[t._v("PREIOD")]),i("v-uni-text",{staticClass:"text"},[t._v("PRICE")]),i("v-uni-text",{staticClass:"text"},[t._v("NUMBER")]),i("v-uni-text",{staticClass:"text"},[t._v("RESULT")])],1),i("v-uni-view",{staticClass:"in-td"},t._l(t.getBallzjlist,(function(e,n){return i("v-uni-view",{key:n,staticClass:"cell"},[i("v-uni-view",{staticClass:"c-td"},[i("v-uni-text",{staticClass:"text"},[t._v(t._s(e.drawno))])],1),i("v-uni-view",{staticClass:"c-td"},[i("v-uni-text",{staticClass:"text"},[t._v(t._s(e.ballmoney))])],1),i("v-uni-view",{staticClass:"c-td"},[i("v-uni-text",{staticClass:"text"},[t._v(t._s(e.ballsum))])],1),i("v-uni-view",{staticClass:"c-td"},[i("v-uni-text",{staticClass:"rint",staticStyle:{"background-color":"#866FFF"}})],1)],1)})),1)],1)],1),i("v-uni-view",{staticClass:"gap"})],1)},o=[]},"0a4a":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* uni.scss */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-countdown[data-v-19d52df4]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-countdown-item[data-v-19d52df4]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:%?2?%;border-radius:%?6?%;white-space:nowrap;-webkit-transform:translateZ(0);transform:translateZ(0)}.u-countdown-time[data-v-19d52df4]{margin:0;padding:0;line-height:1}.u-countdown-colon[data-v-19d52df4]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0 %?5?%;line-height:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-bottom:%?4?%}.u-countdown-scale[data-v-19d52df4]{-webkit-transform:scale(.9);transform:scale(.9);-webkit-transform-origin:center center;transform-origin:center center}',""]),t.exports=e},"310c":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{timestamp:3400,nowtimestap:Date.parse(new Date)/1e3,getMyballlist:[],getBallzjlist:[]}},onLoad:function(){this.getBallConfigFunc(),this.getBallzjlistFunc(),this.getMyballlistFunc()},methods:{getBallConfigFunc:function(){var e=this;t("log"," at pages/game/game.vue:105"),uni.$u.api.getBallconfig({}).then((function(t){t&&1==t.code&&(e.timestamp=e.nowtimestap>=t.data.nextkjtime?0:t.data.nextkjtime-e.nowtimestap)}))},getBallzjlistFunc:function(){var e=this;uni.$u.api.getBallzjlist({}).then((function(i){i&&1==i.code&&(t("log",i," at pages/game/game.vue:117"),e.getBallzjlist=i.data.zjball)}))},getMyballlistFunc:function(){this.loginStatus&&uni.$u.api.getMyballlist({}).then((function(t){t&&t.code}))},setMyballFunc:function(){uni.$u.api.setMyball({}).then((function(t){t&&t.code}))}}};e.default=i}).call(this,i("0de9")["log"])},"399d":function(t,e,i){"use strict";i.r(e);var n=i("096d"),a=i("44ce");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("9a89");var s,l=i("f0c5"),r=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"62d84bf5",null,!1,n["a"],s);e["default"]=r.exports},"44ce":function(t,e,i){"use strict";i.r(e);var n=i("310c"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"50f8":function(t,e,i){"use strict";i.r(e);var n=i("0665"),a=i("7a74");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("71cb");var s,l=i("f0c5"),r=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"19d52df4",null,!1,n["a"],s);e["default"]=r.exports},"672d":function(t,e,i){var n=i("a8f6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("56abf320",n,!0,{sourceMap:!1,shadowMode:!1})},"71cb":function(t,e,i){"use strict";var n=i("d3d8"),a=i.n(n);a.a},"7a74":function(t,e,i){"use strict";i.r(e);var n=i("050d"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"9a89":function(t,e,i){"use strict";var n=i("672d"),a=i.n(n);a.a},a8f6:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* uni.scss */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.game-top[data-v-62d84bf5]{display:-webkit-box;display:-webkit-flex;display:flex;padding-top:%?88?%;height:%?204?%;position:relative;padding-left:%?26?%;padding-right:%?26?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.game-top .right-info[data-v-62d84bf5]{-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.game-top .text[data-v-62d84bf5]{font-size:%?28?%;line-height:%?40?%;color:#fff}.game-top .left-info[data-v-62d84bf5], .game-top .right-info[data-v-62d84bf5]{position:relative;z-index:2;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.game-top .left-info .small[data-v-62d84bf5], .game-top .right-info .small[data-v-62d84bf5]{font-size:%?33?%;color:#fff;line-height:%?46?%;margin-top:%?5?%}.game-top .top-image[data-v-62d84bf5]{position:absolute;top:0;left:0;width:100%;height:%?204?%;z-index:0}.g-list[data-v-62d84bf5]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;background-color:#fff}.g-list .g-top[data-v-62d84bf5]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;justify-content:space-evenly}.g-list .gbox[data-v-62d84bf5]{display:-webkit-box;display:-webkit-flex;display:flex;position:relative;width:%?252?%;height:%?140?%}.g-list .gbox .text[data-v-62d84bf5]{position:absolute;width:100%;height:100%;font-size:%?26?%;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.g-list .g-foot[data-v-62d84bf5]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:0 %?10?%;width:100%;box-sizing:border-box}.g-list .g-foot .g-cell[data-v-62d84bf5]{width:20%;width:%?146?%;height:%?146?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:relative}.g-list .g-foot .g-cell .text[data-v-62d84bf5]{position:absolute;left:0;top:0;z-index:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%;height:100%;color:#fff;font-size:%?42?%}.g-list .rginfo[data-v-62d84bf5]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;padding:%?28?% %?32?%}.g-list .rginfo .text[data-v-62d84bf5]{font-size:%?26?%;color:#9b9b9b;line-height:%?37?%}.info-box[data-v-62d84bf5]{margin-top:%?26?%;background-color:#fff}.record-list[data-v-62d84bf5]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:0 %?26?% %?8?%}.record-list .cell[data-v-62d84bf5]{background-color:rgba(255,85,51,.1);border-radius:%?14?%;color:#f53;font-size:%?24?%;height:%?66?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-bottom:%?20?%}.in-table[data-v-62d84bf5]{padding:0 %?26?% %?28?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.in-table .in-th[data-v-62d84bf5]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?76?%;background:-webkit-linear-gradient(left,#ff62a5,#ff8961);background:linear-gradient(90deg,#ff62a5,#ff8961);border-radius:%?14?%}.in-table .in-th .text[data-v-62d84bf5]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:block;border-right:%?1?% solid #fff;height:%?30?%;font-size:%?26?%;color:#fff;text-align:center}.in-table .in-th .text[data-v-62d84bf5]:last-child{border-right:none}.in-table .in-td[data-v-62d84bf5]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:100%}.in-table .in-td .cell[data-v-62d84bf5]{background-color:#f8f8f8;height:%?88?%;width:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;border-radius:%?14?%}.in-table .in-td .cell[data-v-62d84bf5]:nth-child(2n-1){background-color:#fff}.in-table .in-td .cell .c-td[data-v-62d84bf5]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;height:%?88?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.in-table .in-td .cell .c-td .text[data-v-62d84bf5]{display:-webkit-box;display:-webkit-flex;display:flex;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-right:%?1?% solid #e6e6e6;-webkit-box-flex:1;-webkit-flex:1;flex:1;line-height:%?30?%}.in-table .in-td .cell .c-td .rint[data-v-62d84bf5]{width:%?32?%;height:%?32?%;display:block;margin:0 auto;border-radius:50%}',""]),t.exports=e},d3d8:function(t,e,i){var n=i("0a4a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("04455ce7",n,!0,{sourceMap:!1,shadowMode:!1})}}]);