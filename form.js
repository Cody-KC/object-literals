// const form = document.querySelector(".signup-form");
// const feedback = document.querySelector('.feedback');
// //const username = document.querySelector('#username');
// const usernamePattern = /^[a-zA-Z0-9]{6,10}$/;


// form.addEventListener('submit', e =>{
//     e.preventDefault();
//     //console.log(username.value);
//     console.log(form.username.value);
//     //basic form validation
//     const username = form.username.value
   

//     if (usernamePattern.test(username)){
//         //feedback good info
//         feedback.textContent = 'that username is valid';
//     } else{
//         //feedback help
//         feedback.textContent = 'username must contain letters only and be between 6-10 characters long';
//     };
// });

//testing regex

// const username = 'codyKINGS67';
// const pattern = /^[a-zA-Z]{6,}$/;

// let result = pattern.test(username);

// console.log(result);

// if(result){
//     console.log('regex passed the test');
// } else{
//     console.log('regex failed the test');
// };

//keyboard events
//new event listener for the live feedback

// form.username.addEventListener("keyup", e =>{
//     //console.log(e.target.value, form.username.value);
//     console.log(e);
//     if(usernamePattern.test(e.target.value)){
//         //console.log("passed");
//         form.username.setAttribute("class", "success");
        
//     }  else{
//         //console.log("failed");
//         form.username.setAttribute("class", "fail");
//     }
// });

//DATES AND TIMES
// const now = new Date();

// console.log(now);
// console.log(typeof now);


// //years, months, days times
// console.log('getFullTear', now.getFullYear());
// console.log('getMonth', now.getMonth());
// console.log('getDate', now.getDate());
// console.log('getDay', now.getDay());
// console.log('getHours', now.getHours());
// console.log('getMinutes', now.getMinutes());
// console.log('getSeconds', now.getSeconds());

// //timestamp

// console.log('timestamp', now.getTime());

// //date strings
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());

// time stamps

const before = new Date("February 1 2020 7:30:50");
const now = new Date();

//console.log(now.getTime(), before.getTime());

const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff/1000/60);
const hours = Math.round(mins/60);
const days = Math.round(hours/24);

console.log(mins, hours, days);

console.log(`The blog was created ${days} ago`);

//converting time stamps into date objects
const timestamp = 0;
console.log(new Date(timestamp));


//DIGITAL CLOCK
const clock = document.querySelector(".clock");

//function that updates time on the digital clock
const tick = () =>{
    const now = new Date();

    const hours = now.getHours();
    const mins = now.getMinutes();
    const secs = now.getSeconds();

    //console.log(hours, mins, secs);

    const html = `
    <span>${hours}</span> :
    <span>${mins}</span> :
    <span>${secs}</span> 
    `;

    clock.innerHTML = html;
};

setInterval(tick, 1000);




