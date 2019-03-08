/*
Pipe composes a series of functions and returns the resulting function.
Each function is called on the return value of the preceding function.

You can think of pipe as moving left to right through its arguments.

Example
var add2 = function(number){ return number + 2; }
var multiplyBy3 = function(number){ return number * 3; }

pipe(add2, multiplyBy3)(5) //=> 21
pipe(add2, multiplyBy3, multiplyBy3)(5) //=> 63
*/

const pipe = (...args) => x => args.reduce((value, func) => func(value), x)
