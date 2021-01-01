//  FILTER METHOD
// Iterates an arrays and filters out, does not completely change the array into a new one.

//const scores = [10, 15, 20, 25, 30, 5,];

// const filteredScores = scores.filter((score) => {
//     return score > 20;
// });
// console.log(filteredScores);

const users = [
    {name: "cody", premium: true},
    {name: "kings", premium: false},
    {name: "jason", premium: false},
    {name: "smith", premium: true}
]

const premiumUsers = users.filter((user)=>{
    return user.premium;
})
console.log(premiumUsers);

//  MAP METHOD
// Iterates the array and maps out a completely new array, its also a non destructive method.

const prices = [10, 20, 30, 40, 50, 60, 70];

// const salePrices = prices.map((price) => {
// return price/2;
// });
// console.log(salePrices);

// const products = [
//     {name: "gold", price:20},
//     {name: "silver", price:10},
//     {name: "copper", price:70},
//     {name: "iron", price:50},
//     {name: "bronze", price:30},
// ];

// const newPrices = products.map((product) =>{
//     if ( product.price > 30 ) {
//         // product.price = product.price / 2;
//         // return product; this method will destroy the original array and make it destructive method
//         return {name:product.name, price:product.price/2};
//     } else {
//         return {name:product.name, price:product.price};
//     }
// });

// console.log(newPrices, products);

//REDUCE METHOD
// it does not return a new array, it returns any single value
// from the array

//const scores = [10, 20, 30, 40, 50, 60, 70, 80];

// const result = scores.reduce((acc, curr)=>{
//     if (curr > 50){
//         acc++;
//     };
//     return acc;
// }, 0);

// console.log(result);

// //const scores = [
//     {player:"mario", score:30},
//     {player:"cody", score:90},
//     {player:"mario", score:75},
//     {player:"mandy", score:50},
//     {player:"mario", score:80},
//     {player:"cody", score:10},
//     {player:"cody", score:70}
// ];

// adding up the total score for mario using the reduce method

// const marioTotal = scores.reduce((acc, curr) =>{
//     if (curr.player === "mario"){
//         acc += curr.score;
//     } return acc;
// }, 0)

// const codysTotal = scores.reduce((acc, curr) =>{
//     if (curr.player === "cody"){
//         acc += curr.score;
//     } return acc;
// }, 0)
//console.log(`mario's total score is ${marioTotal}, cody's total score is ${codysTotal}`);

//reduce method is used to return a single value, which is based on the accumulator and current
//as we iterate the array

//FIND METHOD
//a new array method, it returns the value of the first element that passes a test 
//of the call back function

const scores = [10, 20, 30, 50, 40, 70, 80];

const firstHighScore = scores.find((score)=>{
    return score > 50;
});

console.log(firstHighScore);

//SORT METHOD
//sort an array to rearrage maybe in alphabetical order for strings or increasing order for numbers
// this is a destructive method

//sorting strings
const names = ["cody", "kingsley", "dalu", "fred", "alfred"];

names.sort();
names.reverse();
console.log(names);

//sorting numbers
const numbers = [10, 25, 5, 67, 18, 29, 40, 2.5, 100];

numbers.sort((a,b) => {
    return b-a;
})

// numbers.sort();
numbers.reverse();
console.log(numbers);

const players = [
    {name: "cody", score: 40},
    {name: "dalu", score: 80},
    {name: "kingsley", score: 10},
    {name: "kaycey", score: 30},
    {name: "alfred", score: 90}
];

// players.sort((a,b)=>{
//     if (a.score > b.score){
//         return -1;
//     } else if (b.score > a.score){
//         return 1;
//     } else{
//         return 0;
//     }
// });

players.sort((a,b)=>{
   return b.score - a.score;
})
console.log(players);

//CHAINING ARRAY METHODS

const products = [
    {name: "banana", price: 40},
    {name: "mango", price: 80},
    {name: "orange", price: 10},
    {name: "apple", price: 30},
    {name: "pineapple", price: 5}
];

// const filtered = products.filter((product) => {
//     return product.price > 20;
// });
// const promos = filtered.map((product)=>{
//     return `the ${product.name} is ${product.price/2} euros`;
// });

// a quicker way of doing this is by chaining

const promos = products
.filter(product => product.price > 20)
.map(product => `the ${product.name} is ${product.price/2} euros`);

console.log(promos);