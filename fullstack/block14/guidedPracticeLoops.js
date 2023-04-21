let sentence = "There once was a donkey named Eeyore";
let count = 0;
for (let i = 0; sentence.length; i++) {
if (sentence[i] === "e" || sentence[i] === "E") {
  count++;
  }
}

console.log(count);