console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
} // end helloName
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return a personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'

function helloName(name) {
  console.log('in helloName');
  return `Hello, ${name}!`;
} // end helloName

// Remember to call the function to test
  console.log('should say "Hello, Liz!"', helloName('Liz')); //Output: Hello, Liz!


// 3. Function to add two numbers together & return the result
function addNumbers(num0, num1) {
  console.log('in addNumbers');
  let sum = num0 + num1;
  return sum;
  // return firstNumber + secondNumber;
} // end add Numbers

//Test
console.log(`The sum of 4 and 5 is:`, addNumbers(4,5)); //Output: 9
console.log(`The sum of 32.452 and 42.143 is:`, addNumbers(32.452,42.143)); //Output: 74.595


// 4. Function to multiply three numbers & return the result
function multiplyThree(num0, num1, num2){
  console.log('in multiplyThree');
  let product = num0 * num1 * num2;
  return product;
} //end multiplyThre1

//Test
console.log(`The product of 1 * 1 * 1 is:`, multiplyThree(1,1,1)); //Output: 1
console.log(`The product of 2 * 6 * 4 is:`, multiplyThree(2,6,4)); //Output: 48
console.log(`The product of 12 * 4 * 198 is:`, multiplyThree(12,4,198)); //Output: 9504


// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  console.log('in isPositive');
  if ( number > 0 ){
    return true;
  } else {
    return false;
  }
} // end isPositive

//Test
console.log('The number 4 is positive:', isPositive(4)); //Output: true
console.log('The number -1 is positive:', isPositive(-1)); //Output: false

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) ); //Output: true
console.log( 'isPositive - should say false', isPositive(0) ); //Output: false
console.log( 'isPositive - should say false', isPositive(-3) ); //Output: false


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast(array) {
  console.log('in getLast');
  if (array.length > 0) {
    return array[array.length-1]; // returns last value within array
  } else {
    return;
  } // array is empty
} // end getLast

//Test
console.log('The last value in the array is:', getLast([3,4,4,2])); //Output: 2
console.log('The last value in the array is:', getLast(['Apples', 'Oranges', 'Banana', 'Blueberries'])); //Output: Blueberries
console.log('The last value in the array is:', getLast([])); //Output: undefined
console.log('The last value in the array is:', getLast([81, 34, 243, 13432, 123421, 493, 3245, 4596.1])); //Output: 4596.1


// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  console.log('in find');
  for (let i=0; i<array.length; i++){
    if (array[i] === value) {
      return true; // value is found
    } // value does not exist within array
  } return false; // end loop
} // end find

//Test
console.log('Is the number 8 within this array?', find(8, [3, 4, 5, 6, 7, 8, 3, 1])); //Output: true
console.log('Is the number 8 within this array?', find(8, [3, 4, 3, 1])); //Output: false
console.log('Is the number Jamie in the class?', find('Jamie', ['Rob', 'Charlie', 'Selena', 'Jamie', 'Calvin'])); //Output: true
console.log('Is the number Jamie in the class?', find('Jamie', ['Rob', 'Charlie', 'Selena', 'Calvin'])); //Output: false

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  console.log('in isFirstLetter');
  if (letter.charAt(0) === string.charAt(0)) {
    return true; //First letters are the same
  } else {
    return false; //First letters are not the same
  }
} // end isFirstLetter

//Test
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') ); //Output: true
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') ); //Output: false

// 8b. Third letter test (**EXTRA PRACTICE**)
function isThirdLetter(letter, string) {
  console.log('in isThirdLetter');
  if (letter.charAt(0) === string.charAt(2)) {
    return true; // Third letters are the same
  } else {
    return false; // Third letters are not the same
  }
} // end isThirdLetter

//Test
console.log( 'isThirdLetter - should say true', isThirdLetter('l', 'Ralph') ); //Output: true
console.log( 'isThirdLetter - should say false', isThirdLetter('z', 'apple') ); //Output: false

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  console.log('in sumAll');
  let sum = 0;
  for (let i=0; i<array.length; i++) {
    sum+=array[i];
  } // TODO: loop to add items
  return sum;
} // end sumAll

//Test
console.log('Sum of all items within array:', sumAll([4, 5, 6, 7])); //Output: 22
console.log('Sum of all items within array:', sumAll([234, 23566, 23677, 346734])); //Output: 394211


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function positiveNumbers(array) {
  console.log('in positiveNumbers');

} // end positiveNumbers

console.log('The new array is:', positiveNumbers([-3, -1, -4, -1, -2]) );

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
