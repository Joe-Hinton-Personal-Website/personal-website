const dinner = {
  cheeseburger: 12,
  steak: 20,
  soup: 8,
  macAndCheese: 14,
  cheyenne: 16, 
  currency: "dollar",
};

// let food = Object.keys(dinner);

// console.log(food);

// let prices = Object.values(dinner);
// prices.pop();
// console.log(prices);

let prices = [];
for (let key in dinner) {
  let value = dinner[key];
  prices.push(value);
} 


// 4.1
// let total = 0;
// for (let i = 0; i < prices.length; i++) {
//   const price = prices[i];
//   total += price;
// }

// console.log(total);

// 4.2
// prices.forEach
// 4.3
// prices.reduce
// 4.4
// prices.map

