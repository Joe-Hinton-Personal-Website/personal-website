/*
-define variables 
  -budget
  -price1
  -price2
*/

let budget = (1);
let price1 =(1);
let price2 = (2);

/*
-define a function that returns the sum of the two prices before tax
*/

function sumOfGifts (placeHolder1, placeHolder2) {
  return price1 + price2;
}

/*
-invoke sumOfGifts function with price1 and price2 variables
-store the return of this function in a new variable labeled giftTotal
*/

let giftTotal = sumOfGifts(price1, price2);


/*
-define a function (addTax) that returns the cost of giftTotal plus tax (8%)
*/

function addTax (giftTotal) {
  return giftTotal + (giftTotal * .08);
}



/*
-invoke addTax function by passing in giftTotal variable.
  -store return of this function in variable labeled giftsWithTax
*/
let giftsWithTax = addTax(giftTotal);

/*
-define a function that compares giftsWithTax and the budget variable
  -if budget is greater than or equal to giftsWithTax
    -return true
*/

function holidayShopping (giftsWithTax, budget) {
  if (budget >= giftsWithTax ){
    return true; 
  } else {
    return false;
  }
}

const checkFunction = holidayShopping(giftsWithTax, budget);
console.log(checkFunction);


