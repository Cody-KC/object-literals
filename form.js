const form = document.querySelector(".signup-form");
const feedback = document.querySelector('.feedback');
//const username = document.querySelector('#username');


form.addEventListener('submit', e =>{
    e.preventDefault();
    //console.log(username.value);
    console.log(form.username.value);
    //basic form validation
    const username = form.username.value
    const usernamePattern = /^[a-zA-Z]{6,12}$/

    if (usernamePattern.test(username)){
        //feedback good info
        feedback.textContent = 'that username is valid';
    } else{
        //feedback help
        feedback.textContent = 'username must contain letters only and be between 6-10 characters long';
    };
});

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


