"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=o(function(p,q){
var v=require('@stdlib/assert-is-little-endian/dist'),_=require('@stdlib/array-uint8/dist'),w=require('@stdlib/array-dataview/dist'),y=require('@stdlib/math-base-special-floor/dist'),A=4294967295,E=4294967296;function L(e){var r,i,t,a;return r=new _(8),e===0||(a=(e&A)>>>0,t=y(e/E),i=new w(r.buffer),v?(i.setUint32(0,a,v),i.setUint32(4,t,v)):(i.setUint32(0,t,v),i.setUint32(4,a,v))),r}q.exports=L
});var I=o(function(B,U){
var s=require('@stdlib/assert-is-little-endian/dist'),c=require('@stdlib/array-uint8/dist'),O=require('@stdlib/array-dataview/dist'),S=require('@stdlib/math-base-special-floor/dist'),W=4294967295,g=4294967296,F=new c(8),u=new O(F.buffer);function h(e,r,i,t){var a,l,n;if(e===0){for(n=0;n<F.length;n++)r[t]=0,t+=i;return r}for(l=(e&W)>>>0,a=S(e/g),s?(u.setUint32(0,l,s),u.setUint32(4,a,s)):(u.setUint32(0,a,s),u.setUint32(4,l,s)),n=0;n<F.length;n++)r[t]=F[n],t+=i;return r}U.exports=h
});var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),T=f(),N=I();D(T,"assign",N);module.exports=T;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
