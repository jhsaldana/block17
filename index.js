//connect to coffee_data.js
const coffeeMenu = require("./coffee_data.js");
console.log(coffeeMenu)

//print array of all drinks on menu
const coffeeNames = coffeeMenu.map(coffee => coffee.name);
console.log(coffeeNames);

//print array of drinks that cost under 5
const fiveCoffee = coffeeMenu.filter(coffee => coffee.price <= 5);
console.log(fiveCoffee)

//print array of drinks priced at an even number
const evenCoffee = coffeeMenu.filter(coffee => coffee.price % 2 === 0);
console.log(evenCoffee);

//print total if you were to order one of every drink
//const coffeeTotal = coffeeMenu.reduce((total, coffee) => total + coffee.price, 0);
//console.log(coffeeTotal);

//print array with all drinks that are seasonal
const seasonalCoffee = coffeeMenu.filter(coffee => coffee.seasonal === true);
console.log(seasonalCoffee);

//print all seasonal drinks with added words "with imported beans" after item name example: affogato with imported beans 
const seasonalCoffeeWithBeans = seasonalCoffee.map(coffee => coffee.name +  " with imported beans");
console.log(seasonalCoffeeWithBeans);
