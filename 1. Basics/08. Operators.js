let summary = `
 - Operator Vs Operand 
 - Expression Vs Statement
 - Operators in JS
 - Truthy and Falsy Values
 - Operator Precedence and Associativity
 - <a href="https://bit.ly/37u3iEW" target="_blank">Video Tutorial</a> 
`
localStorage.setItem('topicSummary', summary);

//#region Theory
/*
? operator and operands
  'OPERATOR' specifies an operation on the data which yields a value.
  data on which operator act is  called 'OPERAND'.

TODO : Expression Vs Statement.
Statement is a complete set of instruction to perform a particular action.
like 
1. printing value to dev. console.
> console.log('message');

2. declaring or assigning values to variables
> let a=4, b=5, c;
> c=6;

Expression is a unit of code that can be evaluated to a value.
Eg.

> let a=5;---> here '5' is an expression, bcz, it's a value;
> let b = a*2; ---> 'a*2' can be evaluated to value, so it's also an expression.
> if(a>6){...}  ---> here 'a<6' can be evaluated to a boolean value. so it's an expression.



!  Assignment           Arithmetic                  Logical            Comparison
   =                    +, -, *, /                  AND(&&)            Equal(==) X !=
   +=, -=, *=, /=       %, **, ++, --               OR(||)             Strict Equal(===) X !==
   x &&= y, x ||= y     unary negation(-)           NOT(!)             Greater than(>), >=
   x ??= y              unary plus(+)                                  Less than(<), <=

   [See CodeSnippets Region for explanation per operator.]

 Skipped Bitwise operators.(Useful in rare situation where math is included.)

  TODO : Extra Operator - will be explained under other topics.
  String Operators(string) + Unary Operator [delete(object),typeof] + Conditional ternary operator(control flow- if) + Relational Operators[in,instanceOf (Object)]

  ? What is falsy and truthy values.
  Ans. values false, undefined, null,0, -0, 0n, NaN, '',"" are treated as falsy in boolean context.
  so they are called as falsy values. and everything else is truthy.


  Operators Precedence.
  Ref  Precedence Table: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

  Precedence determines order of executing operators in an expression.


*/
//#endregion

//#region CodeSnippets
let a = 8, b = 3, result = 0;
//standard arithmetic operations
result = a + b;
result = a - b;
result = a * b;
result = a / b;
// modulus operator - returns reminder
result = a % b;
// expenentiation operator - a^b;
result = a ** b;

// compound assignment operators
// when immediate/ adjacent variables 
// on both sides of the equals to operator are same
// js has short-hand operators - compound assignment operators

a = a + b;
// with compound assignment operator
a += b;
// and for rest of the basic arithmatic operators also.
a -= b;
a *= b;
a /= b;

// increment and decrement operators
// operators for incrementing or decrementing
// variables by one unit.
a = a + 1;
// is similar to
a++; //post increment

a = a - 1;
// can be written like this
a--; //post decrement

// above operators are post increment version
// means if we assign their value to another variable like this
b = a++;
// if a is 1, 1 is returned and assigned to the variable b;
// then increment value of to 2, (same steps for post decrement)

// the same decrement or decrement can also be done like
++a; // pre increment
--a; // pre decrement
// operation is same, when these operations result stores into 
// a variable the assignment happens after their operation (increment/ decrement).


// TODO : Unary Nagation. (-)
// Switch sign of the number. from +ve to -ve and viz.
let i = 5;
console.log(-i); // prints -5;

//TODO : Unary Plus. (+)
// convert number string to number data type.
let j = '5'; // type of b is string 
let c = +b; // type of c becomes number.

// TODO : Comparison Operators (==,!=, ===, !==)
// Comparison Operators are used in boolean context,
// where js expect either true or false, eg if statement
// normal equals operator ==
console.log(5 == 5);// prints true
console.log(5 == 6);// prints false
console.log('6' == 6);// prints true, doesn't care about datatype
// only compare the value.
// not equal to operator !=, check if they are not equal or not
console.log(5 != 4); // prints true
console.log(5 != 5); // prints false
console.log(5 != '5'); // prints false, doesn't care about datatype

//strict equals to operator ===
// first of check the datatype and then value in it.
console.log(5 === 5);// prints true
console.log(5 === 6);// prints false
console.log('6' === 6);// prints false, datatype matters
// strict not equal to operator !==, same 
console.log(5 !== 4); // prints true
console.log(5 !== 5); // prints false
console.log(5 !== '5'); // prints true, datatype matters

// TODO : >, >=, <, <=
// greater than operator >
console.log(5 > 3);//prints true
console.log(5 > 7);//prints false
console.log(5 > 5);//* prints false

// greater than or equal to operator >
console.log(5 >= 3);//prints true
console.log(5 >= 7);//prints false
console.log(5 >= 5);//* prints true

// less than operator <
console.log(3 < 5);//prints true
console.log(3 < 1);//prints false
console.log(3 < 3);//* prints false

// less than or equal to operator <
console.log(3 <= 5);//prints true
console.log(3 <= 1);//prints false
console.log(3 <= 3);//* prints true


// TODO : Logical Operators.
// Operators AND(&&), OR(||), NOT(!)
// They expect boolean operands.

// AND &&
// Oprand1 && Operand2
// returns true, only when both operand are true. else false will returned.

//eg. check given no. is 2 digit
let number1;
if (number1 > 9 && number1 < 100) {
  console.log('given no. is a 2 digit number.')
}


// OR ||
// Oprand1 || Operand2
// returns true, if any of the operand is true. else false will returned.

//eg. check today is weekend or not.
let dayOfWeek = 'Mon';
if (dayOfWeek == 'Sun' || dayOfWeek == 'Sat') {
  console.log('Weekend');
}

// NOT !
// just switch the boolean from true to false or false to true.
console.log(!false); // prints true.
console.log(!true); // prints false.


// TODO : Compound Assignment - &&=, ||=, ??=

// &&= Logical And Assignment
// assignment works only when LHS is truthy.
let x = 1;
let y = 0;

x &&= 2; //x is truthy, so assignment works
y &&= 2; //y is falsy, so  no assignment

// ||=  Logical Or Assignment
// assignment works only when LHS is falsy
x ||= 2; //x is truthy, so  no assignment
y ||= 2; //y is falsy, so  assignment works

// ??= Nullish Assignment
// assignment works only when LHS is nullish(null or undefined).
let z;
z ??= 5;//assignment works bcz, z is nullish
z = 5;
z ??= 6; // no assignment, bcz, z is not nullish.

// ^ you might see red squiggly line for above 3 assignment operators(normally indicate program error)
// Here it's not an error, these operators are latest addition to JS, meaning your IDE or Extension are not
// Compactible with latest JS Version.


// TODO : Operator Precedence.
let result1 = 3 + 5 * 2;
// if no precedence were assigned. 
// and if we execute from left to right.
// it would be evaluated as follows.

// 8 *2 (first addition)
// 16

// * But actually it is executed in following order
// 3 + 10 ( first multiplication)
// 13

// Here multiplication got more precedence than addition.
// you could ref. mdn operator precedence table.

// if you want to do it like first addition then multiplication
// you can group such operations with a pair of paranthesis
// bcz, grouping has highest precedence than anything else

let result2 = (3 + 5) * 2;
// now execution order will be, first addition -> multiplication.


// in precedence table, there are operators with same precedence in that case
// associativity is mentioned. left-to-right or right-to-left.

let operand1, operand2;
operand1 = operand2 = 3;
// here same operator (=), came twise, so same precedence
// so look for associativity. for =, it right to left.
// so first operand2 is assigned with 3, 
// and then the same 3 is assigned to operand1. 


//one more eg.
let result3 = 4 + 5 * 2 - 4;
// based on precedence, multiplication happens first
// 4 + 10 -4; // now + and - has some precedence, 
// so as per their associativity left to right order execution happens
// 14-4
// 10

//#endregion