// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,u=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(f.call(t,r)||u.call(t,r)?(c=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=c):t[r]=e.value),y="get"in e,p="set"in e,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(t,r,e.get),p&&i&&i.call(t,r,e.set),t};var c=r;var l="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var y=Object.prototype.toString;var p=Object.prototype.hasOwnProperty;var v,w="function"==typeof Symbol?Symbol.toStringTag:"";v=l&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,n,o,a;if(null==t)return y.call(t);e=t[w],a=w,r=null!=(o=t)&&p.call(o,a);try{t[w]=void 0}catch(r){return y.call(t)}return n=y.call(t),r?t[w]=e:delete t[w],n}:function(t){return y.call(t)};var s=v,b="function"==typeof Uint8Array;var A="function"==typeof Uint8Array?Uint8Array:null;var _,d="function"==typeof Uint8Array?Uint8Array:void 0;_=function(){var t,r,e;if("function"!=typeof A)return!1;try{r=new A(r=[1,3.14,-3.14,256,257]),e=r,t=(b&&e instanceof Uint8Array||"[object Uint8Array]"===s(e))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?d:function(){throw new Error("not implemented")};var m=_,g="function"==typeof Uint16Array;var h="function"==typeof Uint16Array?Uint16Array:null;var U,j="function"==typeof Uint16Array?Uint16Array:void 0;U=function(){var t,r,e;if("function"!=typeof h)return!1;try{r=new h(r=[1,3.14,-3.14,65536,65537]),e=r,t=(g&&e instanceof Uint16Array||"[object Uint16Array]"===s(e))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?j:function(){throw new Error("not implemented")};var F,S={uint16:U,uint8:m};(F=new S.uint16(1))[0]=4660;var V=52===new S.uint8(F.buffer)[0],E="function"==typeof DataView;var O="function"==typeof ArrayBuffer;var B="function"==typeof Float64Array;var D="function"==typeof Float64Array?Float64Array:null;var N,P="function"==typeof Float64Array?Float64Array:void 0;N=function(){var t,r,e;if("function"!=typeof D)return!1;try{r=new D([1,3.14,-3.14,NaN]),e=r,t=(B&&e instanceof Float64Array||"[object Float64Array]"===s(e))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?P:function(){throw new Error("not implemented")};var T=N,k="function"==typeof ArrayBuffer?ArrayBuffer:null;var x,G="function"==typeof ArrayBuffer?ArrayBuffer:void 0;x=function(){var t,r,e,n;if("function"!=typeof k)return!1;try{e=new k(16),n=e,(t=(O&&n instanceof ArrayBuffer||"[object ArrayBuffer]"===s(n))&&"function"==typeof k.isView)&&((r=new T(e))[0]=-3.14,r[1]=NaN,t=t&&k.isView(r)&&16===e.byteLength&&-3.14===r[0]&&r[1]!=r[1])}catch(r){t=!1}return t}()?G:function(){throw new Error("not implemented")};var L=x,C="function"==typeof DataView?DataView:null;var M,q="function"==typeof DataView?DataView:void 0;M=function(){var t,r,e,n;if("function"!=typeof C)return!1;try{e=new L(24),r=new C(e,8),n=r,(t=(E&&n instanceof DataView||"[object DataView]"===s(n))&&"function"==typeof r.getFloat64&&"function"==typeof r.setFloat64)&&(r.setFloat64(0,-3.14),r.setFloat64(8,NaN),t=t&&r.buffer===e&&16===r.byteLength&&8===r.byteOffset&&-3.14===r.getFloat64(0)&&r.getFloat64(8)!=r.getFloat64(8))}catch(r){t=!1}return t}()?q:function(){throw new Error("not implemented")};var z=M,H=Math.floor;function I(t){var r,e,n,o;return r=new m(8),0===t||(o=(4294967295&t)>>>0,n=H(t/4294967296),e=new z(r.buffer),V?(e.setUint32(0,o,V),e.setUint32(4,n,V)):(e.setUint32(0,n,V),e.setUint32(4,o,V))),r}var J=new m(8),K=new z(J.buffer);function Q(t,r,e,n){var o,a,i;if(0===t){for(i=0;i<J.length;i++)r[n]=0,n+=e;return r}for(a=(4294967295&t)>>>0,o=H(t/4294967296),V?(K.setUint32(0,a,V),K.setUint32(4,o,V)):(K.setUint32(0,o,V),K.setUint32(4,a,V)),i=0;i<J.length;i++)r[n]=J[i],n+=e;return r}c(I,"assign",{configurable:!1,enumerable:!1,writable:!1,value:Q});export{Q as assign,I as default};
//# sourceMappingURL=mod.js.map
