(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news-detail/news-detail"],{7671:function(n,t,e){"use strict";var r=e("bf19"),u=e.n(r);u.a},"7b94":function(n,t,e){"use strict";(function(n){e("c845"),e("921b");r(e("66fd"));var t=r(e("e2b9"));function r(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},a0d1:function(n,t,e){"use strict";var r,u=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return r}))},bf19:function(n,t,e){},c5c0:function(n,t,e){"use strict";e.r(t);var r=e("eeca"),u=e.n(r);for(var a in r)"default"!==a&&function(n){e.d(t,n,(function(){return r[n]}))}(a);t["default"]=u.a},e2b9:function(n,t,e){"use strict";e.r(t);var r=e("a0d1"),u=e("c5c0");for(var a in u)"default"!==a&&function(n){e.d(t,n,(function(){return u[n]}))}(a);e("7671");var i,c=e("f0c5"),o=Object(c["a"])(u["default"],r["b"],r["c"],!1,null,"718df798",null,!1,r["a"],i);t["default"]=o.exports},eeca:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(e("a34a"));function u(n){return n&&n.__esModule?n:{default:n}}function a(n,t,e,r,u,a,i){try{var c=n[a](i),o=c.value}catch(f){return void e(f)}c.done?t(o):Promise.resolve(o).then(r,u)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(r,u){var i=n.apply(t,e);function c(n){a(i,r,u,c,o,"next",n)}function o(n){a(i,r,u,c,o,"throw",n)}c(void 0)}))}}var c={data:function(){return{detail:{},id:""}},onLoad:function(){var n=i(r.default.mark((function n(t){var e;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.id=t.id,n.next=3,this.$api.info("news",t.id);case 3:e=n.sent,this.detail=e.data;case 5:case"end":return n.stop()}}),n,this)})));function t(t){return n.apply(this,arguments)}return t}()};t.default=c}},[["7b94","common/runtime","common/vendor"]]]);