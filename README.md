<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# Kronecker Delta

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate the [Kronecker delta][kronecker-delta].

<section class="intro">

The [Kronecker delta][kronecker-delta] is defined as

<!-- <equation class="equation" label="eq:kronecker_delta" align="center" raw="\delta_{ij} = \begin{cases} 1 & \textrm{if}\ i = j \\ 0 & \textrm{if}\ i \neq j\end{cases}" alt="Kronecker delta."> -->

```math
\delta_{ij} = \begin{cases} 1 & \textrm{if}\ i = j \\ 0 & \textrm{if}\ i \neq j\end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="\delta_{ij} = \begin{cases} 1 &amp; \textrm{if}\ i = j \\ 0 &amp; \textrm{if}\ i \neq j\end{cases}" data-equation="eq:kronecker_delta">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/kronecker-delta/docs/img/equation_kronecker_delta.svg" alt="Kronecker delta.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import kroneckerDelta from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-kronecker-delta@esm/index.mjs';
```

#### kroneckerDelta( i, j )

Evaluates the [Kronecker delta][kronecker-delta].

```javascript
var v = kroneckerDelta( 3.14, 3.14 );
// returns 1.0

v = kroneckerDelta( 3.14, 0.0 );
// returns 0.0

v = kroneckerDelta( NaN, 3.14 );
// returns NaN

v = kroneckerDelta( 3.14, NaN );
// returns NaN

v = kroneckerDelta( NaN, NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import linspace from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-linspace@esm/index.mjs';
import kroneckerDelta from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-kronecker-delta@esm/index.mjs';

var x = linspace( -1.0, 1.0, 101 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( 'kronecker(%d,%d) = %d', x[ i ], 0.0, kroneckerDelta( x[ i ], 0.0 ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/dirac-delta`][@stdlib/math/base/special/dirac-delta]</span><span class="delimiter">: </span><span class="description">evaluate the Dirac delta function.</span>

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

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-kronecker-delta.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-kronecker-delta

[test-image]: https://github.com/stdlib-js/math-base-special-kronecker-delta/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-kronecker-delta/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-kronecker-delta/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-kronecker-delta?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-kronecker-delta.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-kronecker-delta/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-kronecker-delta/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-kronecker-delta/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-kronecker-delta/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-kronecker-delta/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-kronecker-delta/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-kronecker-delta/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-kronecker-delta/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-kronecker-delta/main/LICENSE

[kronecker-delta]: https://en.wikipedia.org/wiki/Kronecker_delta

<!-- <related-links> -->

[@stdlib/math/base/special/dirac-delta]: https://github.com/stdlib-js/math-base-special-dirac-delta/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
