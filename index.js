// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t,e="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,r=Object.prototype,o=r.toString,i=r.__defineGetter__,a=r.__defineSetter__,f=r.__lookupGetter__,u=r.__lookupSetter__;t=function(){try{return e({},"x",{}),!0}catch(t){return!1}}()?n:function(t,e,n){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(t,e)||u.call(t,e)?(c=t.__proto__,t.__proto__=r,delete t[e],t[e]=n.value,t.__proto__=c):t[e]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,e,n.get),p&&a&&a.call(t,e,n.set),t};var c,l=t,y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),p=Object.prototype.toString,s=Object.prototype.hasOwnProperty,b="function"==typeof Symbol?Symbol.toStringTag:"";c=y&&"symbol"==typeof Symbol.toStringTag?function(t){var e,n,r,o,i;if(null==t)return p.call(t);n=t[b],i=b,e=null!=(o=t)&&s.call(o,i);try{t[b]=void 0}catch(e){return p.call(t)}return r=p.call(t),e?t[b]=n:delete t[b],r}:function(t){return p.call(t)};var w,d=c,v="function"==typeof Uint8Array,A="function"==typeof Uint8Array?Uint8Array:null,m="function"==typeof Uint8Array?Uint8Array:void 0;w=function(){var t,e,n;if("function"!=typeof A)return!1;try{e=new A(e=[1,3.14,-3.14,256,257]),n=e,t=(v&&n instanceof Uint8Array||"[object Uint8Array]"===d(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?m:function(){throw new Error("not implemented")};var _,h=w,g="function"==typeof Uint16Array,U="function"==typeof Uint16Array?Uint16Array:null,j="function"==typeof Uint16Array?Uint16Array:void 0;_=function(){var t,e,n;if("function"!=typeof U)return!1;try{e=new U(e=[1,3.14,-3.14,65536,65537]),n=e,t=(g&&n instanceof Uint16Array||"[object Uint16Array]"===d(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?j:function(){throw new Error("not implemented")};var F,S={uint16:_,uint8:h};(F=new S.uint16(1))[0]=4660;var V,B=52===new S.uint8(F.buffer)[0],E="function"==typeof DataView,O="function"==typeof ArrayBuffer,D="function"==typeof Float64Array,T="function"==typeof Float64Array?Float64Array:null,N="function"==typeof Float64Array?Float64Array:void 0;V=function(){var t,e,n;if("function"!=typeof T)return!1;try{e=new T([1,3.14,-3.14,NaN]),n=e,t=(D&&n instanceof Float64Array||"[object Float64Array]"===d(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t}()?N:function(){throw new Error("not implemented")};var P,x=V,k="function"==typeof ArrayBuffer?ArrayBuffer:null,G="function"==typeof ArrayBuffer?ArrayBuffer:void 0;P=function(){var t,e,n,r;if("function"!=typeof k)return!1;try{n=new k(16),r=n,(t=(O&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===d(r))&&"function"==typeof k.isView)&&((e=new x(n))[0]=-3.14,e[1]=NaN,t=t&&k.isView(e)&&16===n.byteLength&&-3.14===e[0]&&e[1]!=e[1])}catch(e){t=!1}return t}()?G:function(){throw new Error("not implemented")};var L,C=P,I="function"==typeof DataView?DataView:null,M="function"==typeof DataView?DataView:void 0;L=function(){var t,e,n,r;if("function"!=typeof I)return!1;try{n=new C(24),e=new I(n,8),r=e,(t=(E&&r instanceof DataView||"[object DataView]"===d(r))&&"function"==typeof e.getFloat64&&"function"==typeof e.setFloat64)&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),t=t&&e.buffer===n&&16===e.byteLength&&8===e.byteOffset&&-3.14===e.getFloat64(0)&&e.getFloat64(8)!=e.getFloat64(8))}catch(e){t=!1}return t}()?M:function(){throw new Error("not implemented")};var q=L,z=Math.floor;function H(t){var e,n,r,o;return e=new h(8),0===t||(o=(4294967295&t)>>>0,r=z(t/4294967296),n=new q(e.buffer),B?(n.setUint32(0,o,B),n.setUint32(4,r,B)):(n.setUint32(0,r,B),n.setUint32(4,o,B))),e}var J=new h(8),K=new q(J.buffer);return l(H,"assign",{configurable:!1,enumerable:!1,writable:!1,value:function(t,e,n,r){var o,i,a;if(0===t){for(a=0;a<J.length;a++)e[r]=0,r+=n;return e}for(i=(4294967295&t)>>>0,o=z(t/4294967296),B?(K.setUint32(0,i,B),K.setUint32(4,o,B)):(K.setUint32(0,o,B),K.setUint32(4,i,B)),a=0;a<J.length;a++)e[r]=J[a],r+=n;return e}}),H},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).float64ToInt64Bytes=e();
//# sourceMappingURL=index.js.map
