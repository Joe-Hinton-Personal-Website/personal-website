const coffeeMenu = require("./coffee_data");



  

  // print an array of all the drinks on the menu
  // Mentor Note: Try using .map

  // let allDrinks = [];
  // for (i = 0; i < coffeeMenu.length; i++) {
  //   allDrinks.push(coffeeMenu[i].name);
  // }

  // console.log(allDrinks);

    // // Review Notes
    // const drinks = coffeeData.map((drinkObject) => drinkObject.name);


// print an array of drinks that cost 5 and under
  // cycle through each object in coffeeMenu array 
    // pass value of name and price of each object to new array
    // print array

// Mentor Note: Try using .filter

// let underFive = [];
// for (i = 0; i < coffeeMenu.length; i++) {
//   if (coffeeMenu[i].price <= 5) {
//     underFive.push(coffeeMenu[i]);
//   }
// }

    // // Review Notes
    // const under5DollarDrinks = coffeeData.filter(
    //   (drinkObject) => drinkObject.price <= 5
    // );

// print an array of drinks that are priced at an even number
// Mentor Note: Try using .filter

// let evenNumber = [];
// for (i = 0; i < coffeeMenu.length; i++) {
//   if (coffeeMenu[i].price % 2 === 0) {
//     evenNumber.push(coffeeMenu[i]);
//   }
// }

// // Review Notes
// const evenPriceDrinks = coffeeData.filter(
//   (drinkObject) => drinkObject.price % === 0
// );

// print the total if you were to order one of every drink  
// let totalOfAll = 0;
// for (i = 0; i < coffeeMenu.length; i++) {
//   totalOfAll += coffeeMenu[i].price
// }

// // Review Notes
// const totalCost = coffeeData.reduce((total, drinkObject) => (total += drinkObject.price), 
// 0
// );

// print an array with all the drinks that are seasonal
// let seasonal = [];
// for (i = 0; i < coffeeMenu.length; i++) {
//   if (coffeeMenu[i].seasonal === true) {
//     seasonal.push(coffeeMenu[i].name);
//   }
// }

// // Review Notes
// const seasonalDrinks = coffeeData.filter(
//   (drinkObject) => drinkObject.seasonal);
  // automatically returns true



  // try using map and filer for this one
// print all the seasonal drinks with the words
  // "with imported beans" 
    // print after the item name

// for (i = 0; i < coffeeMenu.length; i++) {
//   if (coffeeMenu[i].seasonal === true) {
//     // console.log(`${coffeeMenu[i].name} with imported beans`)
//     console.log(coffeeMenu[i].name + "with imported beans")
//   }
  
// }



// const findSeasonal = (drink) => {
//   return drink.seasonal
// }

// const seasonalDrinks = coffeeMenu.filter(findSeasonal)
// console.table(seasonalDrinks)

// const addPhrase = (drink) => {
//   console.log(`${drink.name} with imported beans`)
// }

// seasonalDrinks.forEach(addPhrase)


