// Only Odds

/*
-declare a variable with an array
-use a for loop
-return only odd number from the original array
-if there is only one odd number, return an array with that single value
*/

// let odds = [];
// let array = [2, 4, 6, 8, 11, 20, 15, 22];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 !=0){
// odds.push(array[i]);
//   }
// }

// console.log(odds); 

//------------------------------------------------

// Vowel vs Consonant
/*
-declare a variable with an array of vowels
-use a for loop
  -return the following statement:
    -the initial variable or word
    -"has"
    -number of consonants
    -"and"
    -number of vowels

// */

// let numCons = [];
// let numVowel = [];
// let word = hello;
// let vowels = ["a", "e", "i", "o", "u"];

// for (let  i = 0; i < word.length; i++) {

// }
// const vowels = ["a", "e", "i", "o", "u"];

// let word ="hello";
// let consonantCount = 0;
// let vowelCount = 0;
// for (let i =0; i < word.length; i++) {
//   let currentChar = word[i];
//   if (vowels.includes(currentChar)) {
//     vowelCount++;
//   } else {
//     consonantCount++;  }
//   }

// console.log(consonantCount);









// -----------------------------------

// Reverse Array
/*
-create an array of numbers
-push number from array to an empty array in reverse
-console.log result
*/

// let reverseNumber = [];
// let numbers = [1, 2, 3, 4, 5];

// for (i = numbers.length - 1; i >= 0; i--) {
//   reverseNumber.push(numbers[i]);
// }
// console.log(reverseNumber);
// let reverseNumbers = numbers.reverse();



/*This does not work because numbers are not pushed into 
an array */

// let number = [1, 2, 3, 4, 5];
// let reverseNumber = [];
// for (let i = number.length - 1; i>= 0; i--)



// ------------------------------------

// FizzBuzz
/*
-create a loop that prints the numbers 1-100
  -for each multiple of 3, print "Fizz" instead of the number
  -for each multiple of 5, print "Buzz" instead of the number
  -for numbers that are multiples of both 3 and 5, print FizzBuzz
    instead of the number
  */


// for (let i = 1; i < 101; i++) {
//   if (i % 15 === 0) console.log("FizzBuzz");
//   else if (i % 3 === 0) console.log("Fizz");
//   else if (i % 5 === 0) console.log("buzz");
//   else console.log(i);
// }


