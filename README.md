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

# Kronecker Delta

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate the [Kronecker delta][kronecker-delta].

<section class="intro">

The [Kronecker delta][kronecker-delta] is defined as

<!-- <equation class="equation" label="eq:kronecker_delta" align="center" raw="\delta_{ij} = \begin{cases} 1 & \textrm{if}\ i = j \\ 0 & \textrm{if}\ i \neq j\end{cases}" alt="Kronecker delta."> -->

<div class="equation" align="center" data-raw-text="\delta_{ij} = \begin{cases} 1 &amp; \textrm{if}\ i = j \\ 0 &amp; \textrm{if}\ i \neq j\end{cases}" data-equation="eq:kronecker_delta">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/kronecker-delta/docs/img/equation_kronecker_delta.svg" alt="Kronecker delta.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-kronecker-delta
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var kroneckerDelta = require( '@stdlib/math-base-special-kronecker-delta' );
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

```javascript
var linspace = require( '@stdlib/array-base-linspace' );
var kroneckerDelta = require( '@stdlib/math-base-special-kronecker-delta' );

var x = linspace( -1.0, 1.0, 101 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( 'kronecker(%d,%d) = %d', x[ i ], 0.0, kroneckerDelta( x[ i ], 0.0 ) );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/kronecker_delta.h
```

#### stdlib_base_kronecker_delta( i, j )

Evaluates the Kronecker delta.

```c
double v = stdlib_base_kronecker_delta( 3.0, 3.0 );
// returns 1.0
```

The function accepts the following arguments:

-   **i**: `[in] double` input value.
-   **j**: `[in] double` input value.

```c
double stdlib_base_kronecker_delta( const double i, const double j );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/kronecker_delta.h"
#include <stdio.h>

int main() {
    double x[] = { 3.0, 4.0, 5.0, 5.0 };

    double y;
    int i;
    for ( i = 0; i < 4; i += 2 ) {
        y = stdlib_base_kronecker_delta( x[ i ], x[ i+1 ] );
        printf( "kronecker_delta(%lf, %lf) = %lf\n", x[ i ], x[ i+1 ], y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/dirac-delta`][@stdlib/math/base/special/dirac-delta]</span><span class="delimiter">: </span><span class="description">evaluate the Dirac delta function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

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
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-kronecker-delta/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-kronecker-delta/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-kronecker-delta/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-kronecker-delta/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-kronecker-delta/main/LICENSE

[kronecker-delta]: https://en.wikipedia.org/wiki/Kronecker_delta

<!-- <related-links> -->

[@stdlib/math/base/special/dirac-delta]: https://github.com/stdlib-js/math-base-special-dirac-delta

<!-- </related-links> -->

</section>

<!-- /.links -->
