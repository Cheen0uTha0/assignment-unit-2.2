// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We made a variable called name and set Dane as name.
// We check if name is same value same type as Mary. Dane is not the same as Mary, so
// console.log('Hi, Mary!'). Will not print
// We then check else, So
// We console.log('How do you do?')

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We made a variable called secret.
// We made a variable called code and set 123 as code.
// We check if code is equal to 123. code is 123.
// We check if code is same value same type as 123. True, so
// We made secret set to string super. super will print.
// We made code multiply 2. code is now 246.
// We check if code is greater than 250. False so,
// We made secret set as string duper. duper will not print.
// We console.log(secret)

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We made a variable called isStudent and set true as isStudent.
// We made a variable called age and set 34 as age.
// We made a variable called zip and set 55407 as zip.
// We check if isStudent is same value same type as true and is zip greater than 80000. False, so
// console.log('You're a student on the West Coast!'). Will not print.
// We check else if isStudent same value same type as false or age is lessser than 30. False, so
// console.log('What are your hobbies?'). Will not print.
// We check else if isStudent same value same type as true. True, so
// We console.log('Welcome to Prime!')
// console.log('How about the weather?'). Will not print.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

// FIX - colorOne = 'red' , instruction ask to set colorOne to 'blue'.
// Should be colorOne = 'blue';
// FIX - colorTwo = 'blue' , instruction ask to set colorTwo to 'red'.
// Should be colorTwo = 'red';

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - { colorOne = 'purple'; } , instruction ask to set colorOne and colorTwo to 'purple'.
// Should be { colorOne and colorTwo = 'purple'; }

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

