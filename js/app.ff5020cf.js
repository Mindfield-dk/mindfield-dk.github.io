(function(t){function e(e){for(var r,u,i=e[0],c=e[1],l=e[2],s=0,d=[];s<i.length;s++)u=i[s],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function u(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-267ece8c":"c2e61073","chunk-2d22d746":"bc7a9495","chunk-695bd04f":"8ed5b914"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(t);var l=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(s);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[t]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{attrs:{id:"app"}},[n("navigation"),n("b-container",{staticClass:"main"},[n("router-view"),n("footer",{staticClass:"footer mt-auto"},[n("p",[t._v("© 2020 Mindfield (Build: "+t._s(t.build)+")")])])],1)],1)},a=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"light"}},[n("b-navbar-brand",{attrs:{to:"/"}},[t._v("Mindfield")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:"/"}},[t._v("Home")]),n("b-nav-item",{attrs:{to:"/about"}},[t._v("About")]),n("b-nav-item",{attrs:{to:"/test"}},[t._v("Test")])],1)],1)],1)},i=[],c={},l=c,s=n("2877"),f=Object(s["a"])(l,u,i,!1,null,"67a48e7d",null),d=f.exports,p={components:{navigation:d},data:function(){return{build:"55"}}},b=p,v=(n("034f"),Object(s["a"])(b,o,a,!1,null,null,null)),h=v.exports,m=(n("d3b7"),n("8c4f"));r["default"].use(m["a"]);var g=[{path:"/",name:"Home",component:function(){return n.e("chunk-267ece8c").then(n.bind(null,"bb51"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/test",name:"Test",component:function(){return n.e("chunk-695bd04f").then(n.bind(null,"78c1"))}}],y=new m["a"]({mode:"history",base:"/",routes:g}),w=y,_=n("2f62");r["default"].use(_["a"]);var j=new _["a"].Store({state:{},mutations:{},actions:{},modules:{}}),O=n("5f5b");n("ab8b"),n("2dd8");r["default"].use(O["a"]),r["default"].config.productionTip=!1,new r["default"]({router:w,store:j,render:function(t){return t(h)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.ff5020cf.js.map