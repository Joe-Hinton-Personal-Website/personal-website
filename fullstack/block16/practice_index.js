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



// --------------------------

// function refillTotal(timmy, sarah, rocky) {
//   let keyTimmy = timmy.pricePerRefill;
//   let keySarah = sarah.pricePerRefill;
//   let keyRocky = rocky.pricePerRefill;
//   console.log(keyTimmy);
// }


// ------------------------------


// function refillTotal (arbitraryName1) {
//   return customer.pricePerRefill;
//   let pricePerRefill = total;
// }

// function applySubscription (arbitraryName2);
//   return (refillTotal * .25 + refillTotal);
//   let sub = (refillTotal) - (refillTotal * .25);
  
//   function coupon (arbitraryName3) {
//     return (sub - 10);
//     let finalAmount = (sub - 10);
//   }

//   function final (arbitraryName4) {
//     return  finalAmount; 
//   }

//  --------------------

// function refillTotal (object) {
//   return object.pricePerRefill;
//   let refillTotalValue = object.pricePerRefill;

//   function applySubscription (refillTotal) {
//     return (refillTotalValue) - (refillTotalValue * .25);
//     let subApplied = (refillTotalValue) - (refillTotalValue * .25);

//   function coupon (subApplied) {
//     return (subApplied - 10);
//     let finalAmount = "$" (subApplied - 10);
//   }

//   }
// }






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


// function refillTotal (customerName) {
//   return customerName.pricePerRefill;

// }

// function subscription (arbitraryName) {
//   const total = refillTotal(customer)
// }


// function cost (customer) {
//   const pricePerRefill = customer.pricePerRefill
// }

// cost(timmy)

function bareCost (customer) {
  return (customer.pricePerRefill)
}

function subscription (customer) {
  const bareCostConst = bareCost(customer);
  return bareCostConst - (bareCostConst * .25)
}

function coupon (customer) {
  return (bareCost - 10);
}

console.log(coupon(timmy));