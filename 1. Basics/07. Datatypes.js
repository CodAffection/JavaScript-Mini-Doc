let summary = `
 - Datatypes in JS
 - Dynamically typed language
 - 'typeof' operator
 - Mutable and Immutable
 - <a href="https://bit.ly/3C8K3i8" target="_blank">Video Tutorial</a> 
`
localStorage.setItem('topicSummary', summary);

//#region - Theory
/*
  ! DataTypes
  * Primitives(* they are their own, they are not derived any other data types)
       - Boolean
       - null 
       - undefined
       - Number
       - BigInt
       - String
       - Symbol
  * Object
  
  We don't have to specify the datatype while declaring a variable.
  hence we could assign any of the above type to a single varible at various stage of the program.
  Hence Javascript is called as // * Dynamically typed language. 
  Which is not possible many programming languages like c, c#, java, etc.
  
  ! Boolean
  Indicates the logic Yes or No.
  * true, false
  
  ! null
  * null
  meant to denote non-existent or absence of a value.
  
  ! undefined
  * undefined
  denotes the variable is declared but not yet initialized.
  
  ! Number
  Numeric values -> integer, floating-point numbers, +Infinity, -Infinity, NaN.
  Eg : 54, 5.4.

  Safe Range : -(2^53-1) to 2^53-1.
  Beyond safe range, you might loose the precision.
    
  ! BigInt
  used to stores integer numbers greater than Safest integer that Number type can store.
  can't store floating point numbers
  declaration : use suffix-n or use BigInt function.

  ! String
  sequence of characters enclosed within quotes.
  
  !Symbols
  returns uneaque values, which can't be recreated.
  
 * typeof operator can used to check data type of a value/ variable. 
 Syntax : typeof [variable_name]; //returns type of the variable.

 * Mutable and Immutable.
 Objects are immutable, because we can make modifications within it,
 whithout reclaring the object.
 That's not the case with primitive datatypes. their value can't be
 changed. Hence they are called as Immutable.
  for example 5. we can't change anything within 5. like we do
 in objects ({...}) like updating values of propeties in it.

 */
//#endregion Theory

//#region - Explanation

//TODO 1. boolean
let isActive = true;
let isLoggedIn = false;

//TODO 2. null 
// practical situation where null is more appropriate.
let teamleadId;
// each employee has an id. with this variable we store id of 
// his/her team lead.
// if the person is a manager or head of department
// he won't have any teamlead. so that case the value //* null
// is more approapriate.

//TODO 3. undefined
let x;
console.log(x);
// variable not initialized, so undefined will be printed.

//TODO 4. Numbers
let a = 47;//integer
a = 3.4;//floating number(contains floating point decimal, numbers with fraction)

//largest integer number that can be stored in a number type.
console.log(Number.MAX_SAFE_INTEGER)

//TODO 5. Bigint
//only integers, not floating-point numbers
a = 34n
a = BigInt(34)

//TODO 6. String
let name = 'Olivia Jhonas';
let gender = 'male';

//TODO 7. Object
let student ={
     admissionNumber : 934875,
     name : 'Trevor',
     batch : 2022
}

//TODO 8. Symbol
let symbol1 = Symbol('abc');
let symbol2 = Symbol('abc');
// === compares two variable/ value. true means they are equal, else false.
console.log(symbol1 === symbol2);
// prints false. symbols returns unique values always.

//#endregion - Explanation