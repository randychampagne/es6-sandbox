/*
  Calculate the average of all the numbers passed in using command line arguments using the ... syntax.
*/

var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
  let commaSep = val.split(',');
  commaSep.forEach(val => {
    if(val !== '') args.push(+val);
  });
});

// write a function called `avg` here that calculates the average.
var avg = function(...numbers) {
  return numbers.reduce((sum, x)=> sum+=x) / numbers.length;
};


console.log(avg(...args));