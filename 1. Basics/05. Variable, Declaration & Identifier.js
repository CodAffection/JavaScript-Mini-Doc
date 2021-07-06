let summary = `
 - What is a Variable ? 
 - Declarations & Identifier
 - Rules for Naming Identifiers
 - Case Sensitivity in JS
 - <a href="xxxx" target="_blank">Video Tutorial</a> 
  `;
localStorage.setItem('topicSummary', summary);

//#region Theory 
/*
 * Variable
 It is container that hold information, associated with a name to refer in rest of the code.
 
 * Declaration & Initialization
 The process of creating new variable is called as Declarartion
 And Assigning new value to a variable is called Initialization

 * Identifier
 It's a sequence of characters in code used to name elements with in our program.
 These elements include variables, functions, properties etc.(discuused in future topics)

 * Rules for Naming Identifiers
 1. It can have Unicode letters, Digits (0->9), $, _
 2. Must start with either a Unicode letter or a $ or _
 3. Not allowed to use a js keyword as an identifier

 [Here the Unicode letters means alphabetic letters from languages across the world]
 TODO : To know more about Unicode, check out following article
 > https://bit.ly/3xXcpsW

 ! JS is case-sensitive
 JavaScript treats both uppercase and lowercase letters are treated as distinct.
 for more check out the explanation region.

*/
//#endregion

//#region Explanation

// Following statement is a declaration statement, it creates a new variable 'amount'
let amount; // Declaration Statement

// Initialization
amount = 5;

//It's possible to Declare and Initialize a variable in a single line.
let totalAmount = 10;

// JS is case-sensitive
let address;
let Address;
// both address and Address are treated as separate variables.
// eventhough they only differ in case

/* 
 ? rules for identifiers(variables, function, properties, etc)
  - it can have unicode letters,digits(0-9),$,_
  - MUST start with lettter, _, $. CAN'T BEGIN with digits(0-9).
  - not allowd use reserved keywords like if, let, etc

  Eg for valid identifier
  amount, _amount, $amount, amount123

  Eg for invalid identifier
  1amount - starting with digit
  #amount - # not allowed anywhere in identifier
  let - it's js keyword
*/

//#endregion