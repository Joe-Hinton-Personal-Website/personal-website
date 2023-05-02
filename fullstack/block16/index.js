// 
/*
-console.log or debug solution while coding
-test all three customer objects when a solution has been found
-write a function called "refillTotal" that calculates the cost of prescription before any discounts
  -store result in a variable
-write a function called "applySubscription" that applies a 25% discount after refill total has been calculated
  -store result in a variable
-write a function called "coupon" that applies a $10 discount after subscription discount has been calculated
  -store result in a variable
-return ${finalAmount} at the end script
 -finalAmount is the result of (cost - subscription - coupon)

*/



const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
}

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
}

const currentCustomer = timmy;

function totalPrice (customer) {
  return customer.pricePerRefill * customer.refills;
}

let calcTotalPrice = totalPrice(currentCustomer); 
// if customer has a subscription
  // apply 25% discount
// else
  // return calcTotalPrice
function subscription (customer) {
  if (customer.subscription === true) {
    // return console.log("hello");
    return calcTotalPrice - (calcTotalPrice * .25);
  }
  else {
    return calcTotalPrice;
  }
}

let subscriptionPrice = subscription(currentCustomer); 

function coupon (customer) {
  if(customer.coupon === true) {
    return subscriptionPrice - 10;
  } else {
    return subscriptionPrice;
  }
}

let thisIsAVariable = coupon(currentCustomer); 

console.log(`Your grand total is ${thisIsAVariable}`);

// console.log("Your grand total is " + thisIsAVariable)           
