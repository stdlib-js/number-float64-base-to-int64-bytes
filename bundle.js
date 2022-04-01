// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).float64ToInt64Bytes=n()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(t){return!1}},r=Object.defineProperty,e=Object.prototype,o=e.toString,a=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,u=e.__lookupSetter__;var c=r,l=function(t,n,r){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l="value"in r)&&(f.call(t,n)||u.call(t,n)?(c=t.__proto__,t.__proto__=e,delete t[n],t[n]=r.value,t.__proto__=c):t[n]=r.value),y="get"in r,p="set"in r,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(t,n,r.get),p&&i&&i.call(t,n,r.set),t},y=n()?c:l;var p=function(t,n,r){y(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})};var v=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var s=function(){return v&&"symbol"==typeof Symbol.toStringTag},b=Object.prototype.toString,w=b;var d=function(t){return w.call(t)},A=Object.prototype.hasOwnProperty;var m=function(t,n){return null!=t&&A.call(t,n)},_="function"==typeof Symbol?Symbol.toStringTag:"",h=m,g=_,U=b;var j=d,F=function(t){var n,r,e;if(null==t)return U.call(t);r=t[g],n=h(t,g);try{t[g]=void 0}catch(n){return U.call(t)}return e=U.call(t),n?t[g]=r:delete t[g],e},S=s()?F:j,V=S,B="function"==typeof Uint8Array;var E="function"==typeof Uint8Array?Uint8Array:null,O=function(t){return B&&t instanceof Uint8Array||"[object Uint8Array]"===V(t)},D=E;var T=function(){var t,n;if("function"!=typeof D)return!1;try{n=new D(n=[1,3.14,-3.14,256,257]),t=O(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t};var N="function"==typeof Uint8Array?Uint8Array:void 0,P=function(){throw new Error("not implemented")},x=T()?N:P,k=S,G="function"==typeof Uint16Array;var L="function"==typeof Uint16Array?Uint16Array:null,C=function(t){return G&&t instanceof Uint16Array||"[object Uint16Array]"===k(t)},I=L;var M=function(){var t,n;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,65536,65537]),t=C(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t};var q,z="function"==typeof Uint16Array?Uint16Array:void 0,H=function(){throw new Error("not implemented")},J={uint16:M()?z:H,uint8:x};(q=new J.uint16(1))[0]=4660;var K=52===new J.uint8(q.buffer)[0],Q=S,R="function"==typeof DataView;var W=function(t){return R&&t instanceof DataView||"[object DataView]"===Q(t)},X=S,Y="function"==typeof ArrayBuffer;var Z=function(t){return Y&&t instanceof ArrayBuffer||"[object ArrayBuffer]"===X(t)},$=S,tt="function"==typeof Float64Array;var nt="function"==typeof Float64Array?Float64Array:null,rt=function(t){return tt&&t instanceof Float64Array||"[object Float64Array]"===$(t)},et=nt;var ot=function(){var t,n;if("function"!=typeof et)return!1;try{n=new et([1,3.14,-3.14,NaN]),t=rt(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t};var at,it="function"==typeof Float64Array?Float64Array:void 0,ft=function(){throw new Error("not implemented")};at=ot()?it:ft;var ut="function"==typeof ArrayBuffer?ArrayBuffer:null,ct=Z,lt=at,yt=ut;var pt=function(){var t,n,r;if("function"!=typeof yt)return!1;try{r=new yt(16),(t=ct(r)&&"function"==typeof yt.isView)&&((n=new lt(r))[0]=-3.14,n[1]=NaN,t=t&&yt.isView(n)&&16===r.byteLength&&-3.14===n[0]&&n[1]!=n[1])}catch(n){t=!1}return t};var vt,st="function"==typeof ArrayBuffer?ArrayBuffer:void 0,bt=function(){throw new Error("not implemented")};vt=pt()?st:bt;var wt="function"==typeof DataView?DataView:null,dt=W,At=vt,mt=wt;var _t=function(){var t,n,r;if("function"!=typeof mt)return!1;try{r=new At(24),n=new mt(r,8),(t=dt(n)&&"function"==typeof n.getFloat64&&"function"==typeof n.setFloat64)&&(n.setFloat64(0,-3.14),n.setFloat64(8,NaN),t=t&&n.buffer===r&&16===n.byteLength&&8===n.byteOffset&&-3.14===n.getFloat64(0)&&n.getFloat64(8)!=n.getFloat64(8))}catch(n){t=!1}return t};var ht="function"==typeof DataView?DataView:void 0,gt=function(){throw new Error("not implemented")},Ut=_t()?ht:gt,jt=Math.floor,Ft=K,St=x,Vt=Ut,Bt=jt;var Et=function(t){var n,r,e,o;return n=new St(8),0===t||(o=(4294967295&t)>>>0,e=Bt(t/4294967296),r=new Vt(n.buffer),Ft?(r.setUint32(0,o,Ft),r.setUint32(4,e,Ft)):(r.setUint32(0,e,Ft),r.setUint32(4,o,Ft))),n},Ot=K,Dt=Ut,Tt=jt,Nt=new x(8),Pt=new Dt(Nt.buffer);var xt=Et;return p(xt,"assign",(function(t,n,r,e){var o,a,i;if(0===t){for(i=0;i<Nt.length;i++)n[e]=0,e+=r;return n}for(a=(4294967295&t)>>>0,o=Tt(t/4294967296),Ot?(Pt.setUint32(0,a,Ot),Pt.setUint32(4,o,Ot)):(Pt.setUint32(0,o,Ot),Pt.setUint32(4,a,Ot)),i=0;i<Nt.length;i++)n[e]=Nt[i],e+=r;return n})),xt}));
//# sourceMappingURL=bundle.js.map
