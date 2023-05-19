// INCOMPLETE!!!! Check GitHub for full answer
function mostVowels (string) {
  let mostVowelsWord = '';
  let mostVowelsCount = 0;
  let wordsArray = string.split(' ');
  wordsArray = wordsArray.slice(0, wordsArray.length - 1);
  let vowels = "aeiouAEIUO"
  for (let i =0; i < wordsArray.length; i++) {
    let currentWord = wordsArray[i];
    let currentVowelsCount = 0;
    for (let j = 0; j < currentWord.length; j++) {
      let currentLetter = currentWord[j];
      if(vowels.includes(currentLetter)) { //if is a vowel
        currentVowelsCount++;
      }
    }
    if (currentVowelsCount > mostVowelsCount) {
      mostVowelsCount = currentVowelsCount;
      mostVowelsWord = currentWord;
    }
  }
  if (mostVowelsWord.replace(".", "")) {
    return mostVowelsWord.slice(0, mostVowelsWord.length-1);
  }
  return mostVowelsWord;
}

describe('mostVowels', () => {

  it('is a function', () => {
    expect(typeof mostVowels).toEqual('function');
  });

  it('returns a string', () => {
    let returnedValue = mostVowels('Wit beyond measure is man\'s greatest treasure.');
    expect(typeof returnedValue).toEqual('string');
  });

  it('returns the word with the most vowels', () => {
    let returnedValue = mostVowels('Wit beyond measure is man\'s greatest treasure.');
    expect(returnedValue).toEqual('measure');
  });

  it('returns the word with the most vowels even if it\'s the last string in the sentence', () => {
    let returnedValue = mostVowels('Give her hell from us, Peeves.');
    expect(returnedValue).toEqual('Peeves');
  });

  it('returns an empty string if none of the inputted words have vowels', () => {
    let returnedValue = mostVowels('why dry my sly lynx?');
    expect(returnedValue).toEqual('');
  });

});
