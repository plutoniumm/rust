const a = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];
function shuffle ( a ) {
      return [ a[ 0 ], a[ 2 ], a[ 4 ], a[ 6 ], a[ 8 ], a[ 10 ], a[ 11 ], a[ 9 ], a[ 7 ], a[ 5 ], a[ 3 ], a[ 1 ] ]
}

var i = 0, run = a;

for ( let i = 1;i < 2;i++ ) {
      run = shuffle( run );
      console.log( JSON.stringify( run ) );
}

run = shuffle( run );
run = run.reverse()
for ( let i = 1;i < 10;i++ ) {
      run = shuffle( run );
      console.log( JSON.stringify( run ) );
}
console.log( "------------------------------------" );

run = a;
run = shuffle( run ).reverse();
for ( let i = 1;i < 9;i++ ) {
      run = shuffle( run );
}
run = run.reverse();
for ( let i = 1;i < 11;i++ ) {
      run = shuffle( run );
      console.log( JSON.stringify( run ) );
}