// YOUR CODE BELOW
function bacteriaTime (currentNum, targetNum) {
  if (currentNum > targetNum) {
      return 'targetNum must be larger than currentNum';
      }
  let totalMinutes = 0; 
  while (currentNum < targetNum) {
    currentNum *= 2; //currentNum = currentNum * 2
    totalMinutes += 20; //every time currentNum is doubled, add 20 minutes to totalMinutes
  }
  return totalMinutes;
}

describe('bacteriaTime', () => {

  it('is a function', () => {
    expect(typeof bacteriaTime).toEqual('function');
  });

  it('returns the number of minutes required to reach the target', () => {
    let returnedValue = bacteriaTime(1, 8);
    expect(returnedValue).toEqual(60);
  });

  it('returns the number of minutes required to reach a large target', () => {
    let returnedValue = bacteriaTime(3, 6000);
    expect(returnedValue).toEqual(220);
  });

  it('returns a string warning if the targetNum is invalid', () => {
    let returnedValue = bacteriaTime(100, 50);
    expect(returnedValue).toEqual('targetNum must be larger than currentNum');
  });

});
