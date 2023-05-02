function findAverage (arrayOfNumbers) {
  let sum = 0;
  for(let i =0; i < arrayOfNumbers.length; i++) {
    let currentNumber = arrayOfNumbers[i];
    sum += currentNumber;
  }
  const average = sum / arrayOfNumbers.length;
  return average;
}

// let array = [1, 2, 3];
// const result = findAverage(array);
// console.log(result);

// arrow functions
const findAverage = (array) => {
  let sum = findSum(array);
  console.log("sum: ", sum);
  const average = sum / array.length; 
  return average;
}

let array = [1, 2, 3];
const result = findAverage(array);
console.log(result);
