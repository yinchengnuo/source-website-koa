(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8197eaf2"],{"01c0":function(t,e,n){t.exports=n.p+"img/15.e300cd7a.jpg"},"0271":function(t,e,n){t.exports=n.p+"img/19.0b3bae60.jpg"},"02f4":function(t,e,n){var i=n("4588"),o=n("be13");t.exports=function(t){return function(e,n){var r,s,c=String(o(e)),a=i(n),l=c.length;return a<0||a>=l?t?"":void 0:(r=c.charCodeAt(a),r<55296||r>56319||a+1===l||(s=c.charCodeAt(a+1))<56320||s>57343?t?c.charAt(a):r:t?c.slice(a,a+2):s-56320+(r-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var i=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},"046c":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"iconfont"},[t._v("")])},o=[],r={name:"Gift"},s=r,c=n("2877"),a=Object(c["a"])(s,i,o,!1,null,null,null);e["a"]=a.exports},"09d2":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"video-header"},[n("VideoHeaderSwiper"),n("a",{staticClass:"join",on:{click:t.toAbout}},[t._v("查看活动")])],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("swiper",{ref:"mySwiper",staticClass:"video-header-swiper",attrs:{options:t.swiperOption},on:{click:t.toAbout}},t._l(t.activity,function(e,i){return n("swiper-slide",{key:i},[n("div",{staticClass:"name"},[n("span",{staticStyle:{color:"orange"}},[t._v("# ")]),t._v(t._s(e)),n("span",{staticStyle:{color:"orange"}},[t._v(" #")])]),n("div",{staticClass:"bg"},t._l(t.bgs,function(t,e){return n("img",{key:e,staticClass:"bg-item",attrs:{src:t}})}),0)])}),1)},s=[],c={name:"VidoHeaderSwiper",data:function(){return{swiperOption:{autoplay:!0,loop:!0},activity:["表情包挑战赛","逆天大长腿","乐器show专场","古风美少女","富聊好声音","舞林争霸"],bgs:[n("baa1"),n("c110"),n("c51e"),n("95f7"),n("01c0"),n("182e"),n("de40"),n("41d8"),n("0271"),n("a8a5"),n("849d"),n("f59f"),n("6376")]}},methods:{toAbout:function(){this.$router.push({name:"About"})}},computed:{swiper:function(){return this.$refs.mySwiper.swiper}}},a=c,l=(n("500c"),n("2877")),u=Object(l["a"])(a,r,s,!1,null,"4933f7e2",null),f=u.exports,p={name:"VidoHeader",components:{VideoHeaderSwiper:f},data:function(){return{activity:["表情包挑战赛","逆天大长腿","乐器show专场","古风美少女","富聊好声音","舞林争霸"]}},methods:{toAbout:function(){this.$router.push({name:"About"})}}},d=p,v=(n("a59e"),Object(l["a"])(d,i,o,!1,null,"18787328",null));e["a"]=v.exports},"0b44":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"iconfont"},[t._v("")])},o=[],r={name:"Fowared"},s=r,c=n("2877"),a=Object(c["a"])(s,i,o,!1,null,null,null);e["a"]=a.exports},"0b81":function(t,e,n){},"0bfb":function(t,e,n){"use strict";var i=n("cb7c");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"0ef6":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"iconfont"},[t._v("")])},o=[],r={name:"Liked"},s=r,c=n("2877"),a=Object(c["a"])(s,i,o,!1,null,null,null);e["a"]=a.exports},"131f":function(t,e,n){},"182e":function(t,e,n){t.exports=n.p+"img/16.612145d8.jpg"},"1ace":function(t,e,n){},"214f":function(t,e,n){"use strict";n("b0c5");var i=n("2aba"),o=n("32e9"),r=n("79e5"),s=n("be13"),c=n("2b4c"),a=n("520a"),l=c("species"),u=!r(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var p=c(t),d=!r(function(){var e={};return e[p]=function(){return 7},7!=""[t](e)}),v=d?!r(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[p](""),!e}):void 0;if(!d||!v||"replace"===t&&!u||"split"===t&&!f){var m=/./[p],h=n(s,p,""[t],function(t,e,n,i,o){return e.exec===a?d&&!o?{done:!0,value:m.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}}),b=h[0],g=h[1];i(String.prototype,t,b),o(RegExp.prototype,p,2==e?function(t,e){return g.call(t,this,e)}:function(t){return g.call(t,this)})}}},2651:function(t,e,n){"use strict";var i=n("0b81"),o=n.n(i);o.a},"2cd9":function(t,e,n){},"2f21":function(t,e,n){"use strict";var i=n("79e5");t.exports=function(t,e){return!!t&&i(function(){e?t.call(null,function(){},1):t.call(null)})}},"37ed":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"iconfont",on:{click:t.clicked}},[t._v("")])},o=[],r={name:"Play",methods:{clicked:function(){this.$emit("clicked")}}},s=r,c=n("2877"),a=Object(c["a"])(s,i,o,!1,null,null,null);e["a"]=a.exports},"395a":function(t,e,n){},"41d8":function(t,e,n){t.exports=n.p+"img/18.727fc585.jpg"},4917:function(t,e,n){"use strict";var i=n("cb7c"),o=n("9def"),r=n("0390"),s=n("5f1b");n("214f")("match",1,function(t,e,n,c){return[function(n){var i=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,i):new RegExp(n)[e](String(i))},function(t){var e=c(n,t,this);if(e.done)return e.value;var a=i(t),l=String(this);if(!a.global)return s(a,l);var u=a.unicode;a.lastIndex=0;var f,p=[],d=0;while(null!==(f=s(a,l))){var v=String(f[0]);p[d]=v,""===v&&(a.lastIndex=r(l,o(a.lastIndex),u)),d++}return 0===d?null:p}]})},"500c":function(t,e,n){"use strict";var i=n("131f"),o=n.n(i);o.a},"520a":function(t,e,n){"use strict";var i=n("0bfb"),o=RegExp.prototype.exec,r=String.prototype.replace,s=o,c="lastIndex",a=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t[c]||0!==e[c]}(),l=void 0!==/()??/.exec("")[1],u=a||l;u&&(s=function(t){var e,n,s,u,f=this;return l&&(n=new RegExp("^"+f.source+"$(?!\\s)",i.call(f))),a&&(e=f[c]),s=o.call(f,t),a&&s&&(f[c]=f.global?s.index+s[0].length:e),l&&s&&s.length>1&&r.call(s[0],n,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(s[u]=void 0)}),s}),t.exports=s},"55dd":function(t,e,n){"use strict";var i=n("5ca1"),o=n("d8e8"),r=n("4bf8"),s=n("79e5"),c=[].sort,a=[1,2,3];i(i.P+i.F*(s(function(){a.sort(void 0)})||!s(function(){a.sort(null)})||!n("2f21")(c)),"Array",{sort:function(t){return void 0===t?c.call(r(this)):c.call(r(this),o(t))}})},"5a71":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("swiper",{ref:"mySwiper",staticClass:"video-recommend-swiper",attrs:{options:t.swiperOption},on:{slideChange:t.callback}},[n("div",{staticClass:"swiper-scrollbar",attrs:{slot:"scrollbar"},slot:"scrollbar"}),n("swiper-slide",{staticClass:"item"},[t._l(t.recommendVideoInfo["热门视频"],function(t,e){return n("SmallVideoListItem",{key:e,attrs:{videoInfo:t,index:e}})}),n("div",{staticClass:"white"}),n("WatchMore",{attrs:{name:"热门小视频"}})],2),n("swiper-slide",{staticClass:"item"},[t._l(t.recommendVideoInfo["最新视频"],function(t,e){return n("SmallVideoListItem",{key:e,attrs:{videoInfo:t,index:e}})}),n("div",{staticClass:"white"}),n("WatchMore",{attrs:{name:"最新小视频"}})],2)],1)},o=[],r=n("8f3e"),s=n("0e00"),c={name:"VideoRecommendSwiper",components:{SmallVideoListItem:r["a"],WatchMore:s["a"]},props:["activeClass","name","recommendVideoInfo"],data:function(){return{swiperOption:{scrollbar:{el:".swiper-scrollbar"}}}},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},methods:{callback:function(){this.$emit("slide",this.swiper.activeIndex)}},mounted:function(){this.swiper.slideTo(this.activeClass)},watch:{activeClass:function(t,e){this.swiper.slideTo(t)}}},a=c,l=(n("9e8b"),n("2877")),u=Object(l["a"])(a,i,o,!1,null,"f4a7f492",null);e["a"]=u.exports},"5b45":function(t,e,n){"use strict";var i=n("948b"),o=n.n(i);o.a},"5f1b":function(t,e,n){"use strict";var i=n("23c6"),o=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var r=n.call(t,e);if("object"!==typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},6376:function(t,e,n){t.exports=n.p+"img/23.c9640ced.jpg"},"79ea":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"iconfont"},[t._v("")])},o=[],r={name:"Comments"},s=r,c=n("2877"),a=Object(c["a"])(s,i,o,!1,null,null,null);e["a"]=a.exports},"7b75":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"live-info"},[n("div",{ref:"top",staticClass:"top"},[n("div",{ref:"userInfo",staticClass:"user-info"},[n("div",{staticClass:"user-pic",on:{click:t.toUserIndex}},[n("img",{staticClass:"pic",attrs:{src:t.userInfo.userpic}})]),n("div",{staticClass:"user-name",on:{click:t.toUserIndex}},[t._v(t._s(t.userInfo.name))]),n("a",{staticClass:"focus",on:{click:t.toAbout}},[t._v("关注")])]),t.liveEnded?t._e():n("div",{staticClass:"people",style:{width:t.width+"px"}},t._l(t.poepleNum,function(e,i){return n("div",{key:i,staticClass:"people-pic",style:{background:"url("+t.watcherInfo.userpic+") no-repeat center",backgroundSize:"100%"},on:{click:function(e){return t.showPeople(t.watcherInfo,i)}}},[n("div",{staticClass:"vlevel"},[t._v("V4")])])}),0)]),n("div",{staticClass:"bottom"},[n("div",{staticClass:"id"},[t._v("富聊ID:"+t._s(t.userInfo.userid))])])])},o=[],r=n("774e"),s=n.n(r),c={name:"LiveInfo",props:["userInfo","watcherInfo","liveEnded"],data:function(){return{poepleNum:s()({length:Math.ceil(10*Math.random())}),width:0}},methods:{toUserIndex:function(){this.$emit("toUserIndex",this.userInfo.userid)},showPeople:function(t,e){this.$emit("showPeople",t,e+1)},toAbout:function(){this.$router.push({name:"About"})}},mounted:function(){var t=document.body.offsetWidth/100;this.width=this.$refs.top.offsetWidth-this.$refs.userInfo.offsetWidth-2*t-1}},a=c,l=(n("2651"),n("2877")),u=Object(l["a"])(a,i,o,!1,null,null,null);e["a"]=u.exports},"849d":function(t,e,n){t.exports=n.p+"img/21.15f71963.jpg"},"8f3e":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"small-video-list-item",style:{background:"url("+t.videoInfo.cover+") no-repeat center",backgroundSize:"32vw"},on:{click:t.toVideo}},[0===t.index||1===t.index||2===t.index?n("span",{staticClass:"hot"},[t._v("热门")]):t._e(),n("div",{staticClass:"play-shadow"},[n("Play",{staticClass:"play"})],1),n("div",{staticClass:"like-shadow"},[n("Liked",{staticClass:"liked"}),n("span",{staticClass:"liked-num"},[t._v(t._s(t.videoInfo.like_num))])],1)])},o=[],r=(n("7f7f"),n("37ed")),s=n("0ef6"),c={name:"SmallVideoListItem",props:["videoInfo","index"],components:{Play:r["a"],Liked:s["a"]},methods:{toVideo:function(){var t="";"VideoOne"===this.$route.name?t="VideoTwo":"VideoTwo"===this.$route.name?t="VideoThr":"VideoThr"===this.$route.name?t="VideoOne":"SmallVideoList"===this.$route.name&&(t="VideoOne"),this.$router.push({name:t,params:{videoInfo:this.videoInfo}})}}},a=c,l=(n("5b45"),n("2877")),u=Object(l["a"])(a,i,o,!1,null,"5637d278",null);e["a"]=u.exports},"948b":function(t,e,n){},"95f7":function(t,e,n){t.exports=n.p+"img/14.b0c41c5c.jpg"},"9e8b":function(t,e,n){"use strict";var i=n("1ace"),o=n.n(i);o.a},a21f:function(t,e,n){var i=n("584a"),o=i.JSON||(i.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},a59e:function(t,e,n){"use strict";var i=n("2cd9"),o=n.n(i);o.a},a8a5:function(t,e,n){t.exports=n.p+"img/20.19f83d94.jpg"},b0c5:function(t,e,n){"use strict";var i=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},baa1:function(t,e,n){t.exports=n.p+"img/11.4d4fd2e1.jpg"},bd33:function(t,e,n){},c110:function(t,e,n){t.exports=n.p+"img/12.5a985eb2.jpg"},c51e:function(t,e,n){t.exports=n.p+"img/13.caaf2d8b.jpg"},c548:function(t,e,n){"use strict";var i=n("bd33"),o=n.n(i);o.a},de40:function(t,e,n){t.exports=n.p+"img/17.8ce5f4f4.jpg"},e476:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"open-in-app",on:{click:t.toAbout}},[t._v("\n  APP内打开\n")])},o=[],r={name:"OpenIApp",methods:{toAbout:function(){this.$router.push({name:"About"})}}},s=r,c=(n("e508"),n("2877")),a=Object(c["a"])(s,i,o,!1,null,"f22bb8e6",null);e["a"]=a.exports},e508:function(t,e,n){"use strict";var i=n("395a"),o=n.n(i);o.a},f1d6:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"video-head-cover"},[n("swiper",{ref:"myCoverSwiper",staticClass:"cover-swiper",attrs:{options:t.swiperOption}},[t._l(t.coverrecommendVideoInfo,function(e,i,o){return n("swiper-slide",{key:o},t._l(e,function(t,e){return n("SmallVideoListItem",{key:e,attrs:{videoInfo:t,index:e}})}),1)}),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2),n("div",{staticClass:"replay",on:{click:t.replay}},[t._v("↻重播")]),n("div",{staticClass:"watch-more",on:{click:t.more}},[t._v("查看更多")])],1)},o=[],r=(n("55dd"),n("7f7f"),n("8f3e")),s={name:"VideoHeadCover",components:{SmallVideoListItem:r["a"]},data:function(){return{swiperOption:{autoplay:!0,pagination:{el:".swiper-pagination",type:"progressbar"}},coverrecommendVideoInfo:{0:[],1:[],2:[],3:[],4:[],5:[]}}},computed:{swiper:function(){return this.$refs.myCoverSwiper.swiper}},methods:{replay:function(){this.$emit("replay")},more:function(){this.$emit("more")}},created:function(){var t=this;this.$http.get("/smallvideolist").then(function(e){var n=[];e.data.data.forEach(function(t){t.name&&n.push(t)}),n.sort(function(t,e){return e.like_num-t.like_num}),t.coverrecommendVideoInfo["0"]=n.slice(24,27),t.coverrecommendVideoInfo["1"]=n.slice(27,30),t.coverrecommendVideoInfo["2"]=n.slice(30,33),t.coverrecommendVideoInfo["3"]=n.slice(33,36),t.coverrecommendVideoInfo["4"]=n.slice(36,39),t.coverrecommendVideoInfo["5"]=n.slice(39,42)})}},c=s,a=(n("c548"),n("2877")),l=Object(a["a"])(c,i,o,!1,null,null,null);e["a"]=l.exports},f499:function(t,e,n){t.exports=n("a21f")},f59f:function(t,e,n){t.exports=n.p+"img/22.852147f9.jpg"}}]);