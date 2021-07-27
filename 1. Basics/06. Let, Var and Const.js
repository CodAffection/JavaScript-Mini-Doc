let summary = `
 - let vs var vs const. 
 - Scope
 - Redeclaration
 - Hoisting
 - Best practices.
 - <a href="https://bit.ly/3kZAyf9" target="_blank">Video Tutorial</a> 
  `;
localStorage.setItem('topicSummary', summary);

//#region Theory
/*

* let, var, and const 
- three keywords used to create js variables.
- all variable declaration startes with any of these keywords.
- var was there in js from beginning, 
  but both let and const introduced in ES6 or in th year 2015.

* You could create multiple variable in a statement as follows.
use comma after each variable.
let a=1, b=2, c=3;

TODO : pre-requisites topics
1. Block Statement
2. Function (will be discussed in separate file)
3. Scope (will be discussed in separate file)
4. Hoisting (will be discussed in separate file)

1. Block Statement
Used to group multiple statements within a pair of curly brackets. eg,
{
    statement 1
    statement 2
    statement 3
}

Following table shows the summary of comparison with let and var.
here let and const has same behaviour.


                  Var          X         Let & Const
------------------------------------------------------
Block Scope       NO                        YES

Global Scope      YES                       NO

Create Global
Object Property   YES                       NO

Can be 
Redeclared        YES                       NO

Hoistable         YES                       NO

* const keyword
it's variables are known as CONSTANTS.
these variables must be initialised in their declaration statement.
and in rest of the program it's value can't be changed.


* *** Best Practice on using let, var and const
Order Priority => const => let => var.
use constants if you know value of the variable is not going to change in rest of the program,
if change of value is necessary go for let
if you have a specific reason to leave the variable in global scope then use var.

? why constants comes before let.
eventhough let and const has some behaviour in above comparison table,
like same scope, hoisting behaviour and no-redeclaration.
js engine already knows in advance, that constants are not going to change in rest of the program.
Hence in terms of memory management, the engine only need to take few precautions than changing
let variables.

? why var variable has the least priority. 
var variables should be avoided wherever possible, because of following reasons.
- it gives top most scope (global scope) to it's variables, so variable reserves the memory
for a long time than it actually needed.
- because of wide availability, you may accidently redeclare or reassign the var variable,
  the overriden variable might be from an another library.
- hoisting behaviour of variable creates confusion in developer.like whether it is already
initilised or not.

*/
//#endregion

//#region Explanation

//TODO : Program 1 - Compare scopes.
let letOutsideA = 1; //available anywhere in this file
var varOutsideA = 2; //global scope

//block statement
{
    let letBlockA = 1; // only available to this block
    var varBlockA = 2; // no block scope, so available in global scope
}

function sample() {
    let letFuncA = 1; // within the function
    var varFuncA = 2; // within the function
}

// TODO : Program 2 - Re-declaration
let reLet = 1;
//let reLet =11; //! Not Possible to redeclare in same scope.
// but possoble in a different scope like block statement or Function.

var reVar = 2;
var reVar = 22; // Possible redeclare in same scope.

//TODO : Program 3 - Hoisting
// let not available before its declaration statement
// console.log(hoistLet). //! Not Possible.

// var variables are hoisted.
// can be accessed before declaration statement.
// before declaration all variables has the value 'undefined'
console.log(hoistVar); // * prints 'undefined'

let hoistLet = 1;
var hoistVar = 2;

//#endregion