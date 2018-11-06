!function(t){function e(e){for(var r,u,i=e[0],s=e[1],c=e[2],h=0,d=[];h<i.length;h++)u=i[h],o[u]&&d.push(o[u][0]),o[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);for(l&&l(e);d.length;)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={0:0},a=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/vue-doughnut-chart/";var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=s;a.push([14,1]),n()}([function(t,e,n){var r=n(11);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(5).default)("053d31e6",r,!0,{})},function(t,e,n){var r=n(13);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(5).default)("eca511ae",r,!0,{})},,,,,,,,,function(t,e,n){"use strict";var r=n(0);n.n(r).a},function(t,e,n){(t.exports=n(4)(!1)).push([t.i,"\n.doughnut_chart[data-v-3588ee75] {\n  position: relative;\n}\n.doughnut_chart_value[data-v-3588ee75] {\n    position: absolute;\n    font-size: 18px;\n}\n",""])},function(t,e,n){"use strict";var r=n(1);n.n(r).a},function(t,e,n){(t.exports=n(4)(!1)).push([t.i,"",""])},function(t,e,n){"use strict";n.r(e);var r=n(6),o={name:"DoughnutChart",props:{percent:{type:Number,default:0},foregroundColor:{type:String,default:"#1993ff"},backgroundColor:{type:String,default:"#ecf6ff"},strokeWidth:{type:Number,default:10},radius:{type:Number,default:85},width:{type:Number,default:200},height:{type:Number,default:200},visibleValue:{type:Boolean,default:!1}},data:function(){return{}},computed:{largeArc:function(){return this.percent<50?0:1},x:function(){return 100},y:function(){return 100-this.radius},endX:function(){return-Math.sin(this.radians)*this.radius+100-1e-4},endY:function(){return Math.cos(this.radians)*this.radius+100},radians:function(){return(this.percent/100*360-180)*Math.PI/180},z:function(){return 100===this.percent?"z":""},dBg:function(){return"M ".concat(this.x," ").concat(this.y," A ").concat(this.radius," ").concat(this.radius," 0 1 1 ").concat(this.x-1e-4," ").concat(this.y," z")},d:function(){return"M ".concat(this.x," ").concat(this.y," A ").concat(this.radius," ").concat(this.radius," 0 ").concat(this.largeArc," 1 ").concat(this.endX," ").concat(this.endY," ").concat(this.z)},valueFromBottom:function(){return this.height/2-this.strokeWidth},valueFromLeft:function(){return this.width/2-this.strokeWidth},valueStyle:function(){return{color:this.foregroundColor,bottom:"".concat(this.valueFromBottom,"px"),left:"".concat(this.valueFromLeft,"px")}}}},a=(n(10),n(2)),u=Object(a.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"doughnut_chart"},[n("svg",{staticClass:"doughnut_chart_svg",attrs:{width:t.width,height:t.height,viewBox:"0 0 200 200"}},[n("path",{attrs:{d:t.dBg,fill:"transparent",stroke:t.backgroundColor,"stroke-width":t.strokeWidth}}),t._v(" "),n("path",{attrs:{d:t.d,fill:"transparent",stroke:t.foregroundColor,"stroke-width":t.strokeWidth}})]),t._v(" "),t.visibleValue?n("div",{staticClass:"doughnut_chart_value",style:t.valueStyle},[t._v("\n    "+t._s(t.percent)+"%\n  ")]):t._e()])},[],!1,null,"3588ee75",null);u.options.__file="DoughnutChart.vue";var i={name:"App",components:{DoughnutChart:u.exports},data:function(){return{percent:25}}},s=(n(12),Object(a.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"title has-text-centered"},[t._v("Welcome to Vue-Doughtnut-Chart")]),t._v(" "),n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("DoughnutChart",{attrs:{percent:t.percent,visibleValue:!0}})],1),t._v(" "),n("div",{staticClass:"column"},[n("DoughnutChart",{attrs:{percent:t.percent,visibleValue:!0,foregroundColor:"green"}})],1),t._v(" "),n("div",{staticClass:"column"},[n("DoughnutChart",{attrs:{percent:t.percent,visibleValue:!0,foregroundColor:"red"}})],1),t._v(" "),n("div",{staticClass:"column"},[n("DoughnutChart",{attrs:{percent:t.percent,visibleValue:!0,foregroundColor:"purple"}})],1)]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.percent,expression:"percent"}],attrs:{type:"range",min:"0",step:"1",max:"100"},domProps:{value:t.percent},on:{__r:function(e){t.percent=e.target.value}}}),t._v(" "+t._s(t.percent)+"% "),n("br")])},[],!1,null,"42723a16",null));s.options.__file="App.vue";var c=s.exports;new r.a({el:"#app",render:function(t){return t(c)}})}]);