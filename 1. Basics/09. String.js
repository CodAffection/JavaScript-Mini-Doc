let summary = `
- String
- Template Strings
- String Interpolation
- Escape Sequence in a String
- String Concatenation
- Find length of a String
- String Primitive vs String Object
- String Operations
- <a href="https://bit.ly/37u3iEW" target="_blank">Video Tutorial</a> 
`;
localStorage.setItem('topicSummary', summary);

//! Theory
//#region - Theory
/*
  * What is a String.
  Sequence of charactors enclosed withing in double("") or single('') quotation.

  'sample string goes here'
  "sample string goes here, with double quotes"

    
  ! template strings.
  introduce in ES6.
  string must be enclosed within backticks(` - backticks).
  string literal can spread over multiple lines.
  placeholder syntax
  
  speacial characters : \n \t  etc.
  
  escaping characters with backslash(\) : \' \" \\ etc.
  
  string properties.
  length return no. of characters within the string.
  
  string operators.
  '+' operator can be used for concating strings.
  
  TODO: String Functions
  *1. Functions for Inspection
  charAt(index) - returns charactor at a given string
  charCodeAt(index) - returns unicode number of the character at given index.
  indexOf(sub_string) - returns index of first match for given substing
  lastIndexOf(sub_string) - returns index of last match for given substing
  startsWith(sub_string) - returns boolean, indicating whether string starts with the sub_string or not.
  endsWith(sub_string) - returns boolean, indicating whether string ends with the sub_string or not.
  includes(sub_string) - returns boolean, indicating whether the substring is present anywhere in the string.

  *2. Functions for Modification
  concat(string1, string2) - return a big string, after concating given strings
  repeat(no_of_repeatition) - resulting will the repeatition of original string with given no. of times.
  substring & slice (startIndex, endIndex) - returns a substring within given index range, endIdex not included.
  splite(splite_by_string) - returns an array, after spliting entire string by given splite_string(eg. white space)
  toLowerCase & toUpperCase
  trim, trimStart & trimEnd - removes white space from both ends.
 */
//#endregion - Theory

//! Explanation
//#region - Explanation
let fullName = "Ashton Cox",
    streetAddress = "25 St. James's Street";
// if apostraphy is part of the string, then wrap the string with "".
// if double quotes is part of the string, then wrap the string with ''.

// * escape sequence 
let address = "14th Floor, Smithson Plaza \n25 St. James's Street \nLondon";
// special characters are used to accomplish certain operations within
// the string itself.

// * escaping charactors with '\'
console.log('St. James\'s Street')
// print: c:\Program Files;
console.log('c:\\Program Files')

//TODO : Complete list of Escape Sequences in JavaScript
https://mzl.la/3smujDU

// ! template string
let address2 = `14th Floor, Smithson Plaza
25 St. James's Street
London`
console.log(address2);

let greetings = `Good Morning, ${fullName}!`;
console.log(greetings);
// here ${variable} will be replaced with the variable value.
// this way of generating string is called //* String Interpolation
// and this portion ${variable} is called //* placeholder

//#endregion - Theory