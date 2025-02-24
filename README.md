<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# toInt64Bytes

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert an integer-valued [double-precision floating-point number][ieee754] to a signed 64-bit integer byte array according to host byte order (endianness).



<section class="usage">

## Usage

```javascript
import float64ToInt64Bytes from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-int64-bytes@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { assign } from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-int64-bytes@esm/index.mjs';
```

#### float64ToInt64Bytes( x )

Converts an integer-valued [double-precision floating-point number][ieee754] to a signed 64-bit integer byte array according to host byte order (endianness).

```javascript
var out = float64ToInt64Bytes( 4294967297.0 );
// returns <Uint8Array>
```

#### float64ToInt64Bytes.assign( x, out, stride, offset )

Converts an integer-valued [double-precision floating-point number][ieee754] to a signed 64-bit integer byte array according to host byte order (endianness) and assigns results to a provided output array.

```javascript
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs';

var out = new Uint8Array( 16 );
var y = float64ToInt64Bytes.assign( 4294967297.0, out, 2, 1 );
// returns <Uint8Array>

var bool = ( y === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The functions assume that the input value is less than the maximum safe [double-precision floating-point][ieee754] integer plus one (i.e., `2**53`).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import toBinaryStringUint8 from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-uint8-base-to-binary-string@esm/index.mjs';
import float64ToInt64Bytes from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-int64-bytes@esm/index.mjs';

var bytes;
var str;
var sgn;
var x;
var i;
var j;

str = [ '', '', '', '', '', '', '', '', '' ];
x = 1;

for ( i = 0; i < 54; i++ ) {
    sgn = ( i&1 ) ? -1 : 1;
    bytes = float64ToInt64Bytes( x*sgn );
    for ( j = 0; j < bytes.length; j++ ) {
        str[ j ] = toBinaryStringUint8( bytes[ j ] );
    }
    console.log( '%s2**%d => %s', ( sgn < 0 ) ? '-' : '+', i, str.join( ' ' ) );
    x *= 2;
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/number-float64/base/to-int32`][@stdlib/number/float64/base/to-int32]</span><span class="delimiter">: </span><span class="description">convert a double-precision floating-point number to a signed 32-bit integer.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/number-float64-base-to-int64-bytes.svg
[npm-url]: https://npmjs.org/package/@stdlib/number-float64-base-to-int64-bytes

[test-image]: https://github.com/stdlib-js/number-float64-base-to-int64-bytes/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/number-float64-base-to-int64-bytes/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/number-float64-base-to-int64-bytes/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/number-float64-base-to-int64-bytes?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/number-float64-base-to-int64-bytes.svg
[dependencies-url]: https://david-dm.org/stdlib-js/number-float64-base-to-int64-bytes/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/number-float64-base-to-int64-bytes/tree/deno
[deno-readme]: https://github.com/stdlib-js/number-float64-base-to-int64-bytes/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/number-float64-base-to-int64-bytes/tree/umd
[umd-readme]: https://github.com/stdlib-js/number-float64-base-to-int64-bytes/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/number-float64-base-to-int64-bytes/tree/esm
[esm-readme]: https://github.com/stdlib-js/number-float64-base-to-int64-bytes/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/number-float64-base-to-int64-bytes/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/number-float64-base-to-int64-bytes/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/number/float64/base/to-int32]: https://github.com/stdlib-js/number-float64-base-to-int32/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
