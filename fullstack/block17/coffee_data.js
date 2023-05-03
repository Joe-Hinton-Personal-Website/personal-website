// Prompt 1:
// Clean the coffee_data file:

// checklist:
  // a. all prices should be numbers
  // b. all items should be strings
  // c. objects and properties should have commas separating them
  // d. connect the coffee_data.js file to the index.js file

// print an array of all the drinks on the menu
// print an array of drinks that cost 5 and under
// print an array of drinks that are priced at an even number
// print the total if you were to order one of every drink  
// print an array with all the drinks that are seasonal
// print all the seasonal drinks with the words
  // "with imported beans" 
    // print after the item name

const coffeeMenu = [
  {
      name: "cappuccino",
      price: 8,
      seasonal: false,
  },
  {
      name: "espresso",
      price: 5,
      seasonal: false,
  },
  {
      name: "latte",
      price: 5,
      seasonal: false,
  },
  {
      name: "affogato",
      price: 9,
      seasonal: true,
  }, 
  {
      name: "macchiato",
      price: 6,
      seasonal: false,
  },
  {
      name: "americano",
      price: 7,
      seasonal: false,
  },
  {
      name: "iced coffee",
      price: 6,
      seasonal: false,
  },
  {
      name: "frappe",
      price: 8,
      seasonal: false,
  },
  {
      name: "cuban espresso",
      price: 10,
      seasonal: true,
  },
]

module.exports = coffeeMenu