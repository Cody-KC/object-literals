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

//const para = document.querySelector('p');

// console.log(para.innerText);

// para.innerText = 'guten morgen';

// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText+= 'new text'
// });

//changing HTML in a div 

// const content = document.querySelector('.content');

// console.log(content.innerHTML);

// if you want to update the html element

//content.innerHTML = '<h2>This is a new content</h2>'

// const people = ['mario', 'luigi', 'cody'];

// people.forEach(person =>{
//     content.innerHTML += `<p>${person}</p>`;
// });


//updating attributes of HTML elements
//getting and setting attributes

// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));

// link.setAttribute('href', 'https://www.cody.de');
// link.innerText = 'Cody first website';

// const message = document.querySelector('p');

// console.log(message.getAttribute("class"));
// message.setAttribute("class", "success");

// //setting attribute for classes that doesnt exist before

// message.setAttribute("style", "color:green");

//changing css styles

// const title = document.querySelector("h1");

// //title.setAttribute("style", "margin:50px"); //this process overrides the previous style in the HTML

// console.log(title.style);
// console.log(title.style.color);

// title.style.margin = "50px";
// title.style.color = "blue";
// title.style.color = '';

// const content = document.querySelector("p");
// console.log(content.classList);
// content.classList.add("error");
// content.classList.remove("error");
// content.classList.add("success");


//advanced adding and removing of classes
const paras = document.querySelectorAll("p");

paras.forEach(p => {
    if (p.textContent.includes('error')){
        p.classList.add('error');
    }
    if (p.textContent.includes('success')){
        p.classList.add('success');
    }
    if (p.textContent.includes('has')){
        p.classList.add('has');
    }
});

//how to toggle classes
// if an element has a class, we remove it, if it doesnt we add it.

// const title = document.querySelector('.title');

// title.classList.toggle('text');
// title.classList.toggle('text');

//Parent children and  siblings

const article = document.querySelector('article');

// console.log(article.children);

// console.log(Array.from(article.children))
//conversion into an array does not alter the previous state of article.children

// Array.from(article.children).forEach(child => {
//     child.classList.add('article-element')
// })

const title = document.querySelector('h2');

console.log(title.parentElement);
console.log(title.nextElementSibling);