// Unfinished Loop - Bug Fixing #1
// https://www.codewars.com/kata/55c28f7304e3eaebef0000da/train/javascript

// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

function createArray( number ){
    let newArray = [];
    
    for( let i = 1; i <= number; i++ ) {
      newArray.push( i );
    }
    
    return newArray;
  }