// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-little-endian@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dataview@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.1-esm/index.mjs";function r(t){var r,d,m,a;return r=new s(8),0===t||(a=(4294967295&t)>>>0,m=i(t/4294967296),d=new n(r.buffer),e?(d.setUint32(0,a,e),d.setUint32(4,m,e)):(d.setUint32(0,m,e),d.setUint32(4,a,e))),r}var d=new s(8),m=new n(d.buffer);function a(t,s,n,r){var a,l,o;if(0===t){for(o=0;o<d.length;o++)s[r]=0,r+=n;return s}for(l=(4294967295&t)>>>0,a=i(t/4294967296),e?(m.setUint32(0,l,e),m.setUint32(4,a,e)):(m.setUint32(0,a,e),m.setUint32(4,l,e)),o=0;o<d.length;o++)s[r]=d[o],r+=n;return s}t(r,"assign",a);export{a as assign,r as default};
//# sourceMappingURL=index.mjs.map
