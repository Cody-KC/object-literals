// console.log('hello world')

// //primitive value

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log (`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;

// console.log (`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// //reference value

// const userOne = {name: 'cody', age: 28};
// const userTwo = userOne;

// console.log(userOne,userTwo);

// userOne.age = 30;

// console.log(userOne,userTwo);

//INTERACT WITH THE BROWSER

//DOCUMENT OBJECT MODEL (DOM)
// query selectors are used to grab elements in the HTML
const para = document.querySelector('body > h1');

console.log(para);

//grabbing multiple elememts

// const paras = document.querySelectorAll('p');

// paras.forEach (para => {
//     console.log(para)
// });
// console.log(paras[2]);

const errors = document.querySelectorAll(".error");

console.log(errors);