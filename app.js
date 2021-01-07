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
// const paras = document.querySelectorAll("p");

// paras.forEach(p => {
//     if (p.textContent.includes('error')){
//         p.classList.add('error');
//     }
//     if (p.textContent.includes('success')){
//         p.classList.add('success');
//     }
//     if (p.textContent.includes('has')){
//         p.classList.add('has');
//     }
// });

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

// const title = document.querySelector('h2');

// console.log(title.parentElement);
// console.log(title.nextElementSibling);
// console.log(title.previousElementSibling);

// //chaining 

// console.log(title.nextElementSibling.parentElement.children);


// const button = document.querySelector('button');

// button.addEventListener("click", () => {
//     //ul.innerHTML += '<li>soemthing new</li>'; 
//     // alternatively,
//     const li = document.createElement('li');
//     li.textContent = 'something new'
//     //ul.append(li);
//     ul.prepend(li)
// });
//  const ul = document.querySelector("ul");
// // ul.remove();


// const list = document.querySelectorAll("li");


// list.forEach(lists =>{
//     lists.addEventListener('click', e =>{
//         // console.log(e.target);
//         // console.log(lists);
//         console.log('event in LI');
//         e.stopPropagation(); // this stops events from bubbling up into UL
//         //e.target.style.textDecoration = "line-through";
//         //e.target.remove();
//     });
// });
// "e" defines the particular tag that was clicked ".target" displays the clicked tag.

//event bubbling
//we already have a reference to the ul in line 190

// ul.addEventListener("click", e => {
//     console.log(e.target);
//     //attaching event listeners to the parent tag (ul) is better way, it accomodates both the new child tags
//     if (e.target.tagName === 'LI'){
//         e.target.remove();
//     }
// });

//more about DOM events

// const copy = document.querySelector(".copy-me");

// copy.addEventListener("copy", () => {
//     console.log("gosh! my content is copy right");
// });

// const box = document.querySelector(".box");

// box.addEventListener("mousemove", e =>{
//     console.log(e)
//     console.log(e.offsetX, e.offsetY);
//     box.textContent = `x pos - ${e.offsetX}  and y pos ${e.offsetY}`; 
//     //to determine the position of the cursor in the web page.
// });

// document.addEventListener('wheel', e =>{
//     console.log(e.pageX, e.pageY);
// });
// const button = document.querySelector("button");
// const popup = document.querySelector(".popup-wrapper")
// const closeButton = document.querySelector('.popup-close');


// button.addEventListener("click", () =>{
//     popup.style.display = "block";
// });

// closeButton.addEventListener("click", () =>{
//     popup.style.display = "none";
// });
// popup.addEventListener("click", () =>{
//     popup.style.display = "none";
// });

//DATES AND TIMES
const now = new Date();

console.log(now);
console.log(typeof now);


//years, months, days times
console.log('getFullTear', now.getFullYear());
console.log('getMonth', now.getMonth());
console.log('getDate', now.getDate());
console.log('getDay', now.getDay());
console.log('getHours', now.getHours());
console.log('getMinutes', now.getMinutes());
console.log('getSeconds', now.getSeconds());

//timestamp

console.log('timestamp', now.getTime());

//date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());