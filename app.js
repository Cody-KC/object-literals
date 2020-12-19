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
// const para = document.querySelector('body > h1');

// console.log(para);

//grabbing multiple elememts

// const paras = document.querySelectorAll('p');

// paras.forEach (para => {
//     console.log(para)
// });
// console.log(paras[2]);

//const errors = document.querySelectorAll(".error");

//console.log(errors);

// get element by ID
// const title = document.getElementById('page-title');

// console.log(title);

// // get element by thier class name

// const errors = document.getElementsByClassName("error");

// console.log(errors);

// //get element by their tag ncame

// const paras = document.getElementsByTagName('p')

// console.log(paras);
// console.log(paras[2]);

const para = document.querySelector('p');

// console.log(para.innerText);

// para.innerText = 'guten morgen';

// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText+= 'new text'
// });

//changing HTML in a div 

const content = document.querySelector('.content');

console.log(content.innerHTML);

// if you want to update the html element

//content.innerHTML = '<h2>This is a new content</h2>'

const people = ['mario', 'luigi', 'cody'];

people.forEach(person =>{
    content.innerHTML += `<p>${person}</p>`;
});

