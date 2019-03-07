/*
Compose should return a function that is the composition of a list of functions of arbitrary length.
Each function is called on the return value of the function that follows.

You can think of compose as moving right to left through its arguments.

Example
var greet = function(name){ return 'hi: ' + name;}
var exclaim = function(statement) { return statement.toUpperCase() + '!';}

var welcome = compose(greet, exclaim);
welcome('phillip'); //=> 'hi: PHILLIP!'
*/

const compose = (...args) => x => args.reduceRight((value, func) => func(value), x)
