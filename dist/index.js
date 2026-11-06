"use strict";var o=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw r=0,e}}};var f=o(function(p,q){"use strict";var v=require("@stdlib/assert-is-little-endian"),_=require("@stdlib/array-uint8"),w=require("@stdlib/array-dataview"),y=require("@stdlib/math-base-special-floor"),A=4294967295,E=4294967296;function L(i){var r,e,t,a;return r=new _(8),i===0||(a=(i&A)>>>0,t=y(i/E),e=new w(r.buffer),v?(e.setUint32(0,a,v),e.setUint32(4,t,v)):(e.setUint32(0,t,v),e.setUint32(4,a,v))),r}q.exports=L});var I=o(function(B,U){"use strict";var s=require("@stdlib/assert-is-little-endian"),c=require("@stdlib/array-uint8"),O=require("@stdlib/array-dataview"),S=require("@stdlib/math-base-special-floor"),W=4294967295,g=4294967296,F=new c(8),u=new O(F.buffer);function h(i,r,e,t){var a,l,n;if(i===0){for(n=0;n<F.length;n++)r[t]=0,t+=e;return r}for(l=(i&W)>>>0,a=S(i/g),s?(u.setUint32(0,l,s),u.setUint32(4,a,s)):(u.setUint32(0,a,s),u.setUint32(4,l,s)),n=0;n<F.length;n++)r[t]=F[n],t+=e;return r}U.exports=h});var D=require("@stdlib/utils-define-nonenumerable-read-only-property"),T=f(),N=I();D(T,"assign",N);module.exports=T;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
