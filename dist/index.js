/** @license Apache-2.0 */

'use strict';

/**
* Evaluate the Kronecker delta.
*
* @module @stdlib/math-base-special-kronecker-delta
*
* @example
* var kroneckerDelta = require( '@stdlib/math-base-special-kronecker-delta' );
*
* var v = kroneckerDelta( 3.14, 3.14 );
* // returns 1.0
*
* v = kroneckerDelta( 3.14, 0.0 );
* // returns 0.0
*
* v = kroneckerDelta( NaN, 3.14 );
* // returns NaN
*
* v = kroneckerDelta( 3.14, NaN );
* // returns NaN
*
* v = kroneckerDelta( NaN, NaN );
* // returns NaN
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
