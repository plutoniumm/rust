const math = require( 'mathjs' );

// CONSTANTS
const rt2 = 2 ** 0.5;
const inv_rt2 = 1 / ( 2 ** 0.5 );
const i = math.complex( 0, 1 );
const _i = math.complex( 0, -1 );

// QUBITS
const one = [ 0, 1 ];
const zero = [ 1, 0 ];
const plus = [ inv_rt2, inv_rt2 ];
const minus = [ inv_rt2, -inv_rt2 ];

// MATRICES
const $H = math.multiply( inv_rt2, math.matrix( [ [ 1, 1 ], [ 1, -1 ] ] ) );
const $X = math.matrix( [ [ 0, 1 ], [ 1, 0 ] ] );
const $Y = math.matrix( [ [ 0, _i ], [ i, 0 ] ] );
const $Z = math.matrix( [ [ 1, 0 ], [ 0, -1 ] ] );
const CNOT = math.matrix( [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 0, 1 ], [ 0, 0, 1, 0 ] ] );

// GATES
const H = ( v ) => math.multiply( v, $H )._data[ 0 ];
const X = ( v ) => math.multiply( v, $X )._data[ 0 ];
const Y = ( v ) => math.multiply( v, $Y )._data[ 0 ];
const Z = ( v ) => math.multiply( v, $Z )._data[ 0 ];
const CX = ( v, u ) => math.multiply( math.kron( v, u ), CNOT )._data[ 0 ];

console.log( CX( one, zero ) );