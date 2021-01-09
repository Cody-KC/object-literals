const form = document.querySelector(".signup-form");
const feedback = document.querySelector('.feedback');
//const username = document.querySelector('#username');
const usernamePattern = /^[a-zA-Z0-9]{6,10}$/;


form.addEventListener('submit', e =>{
    e.preventDefault();
    //console.log(username.value);
    console.log(form.username.value);
    //basic form validation
    const username = form.username.value
   

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

//keyboard events
//new event listener for the live feedback

form.username.addEventListener("keyup", e =>{
    //console.log(e.target.value, form.username.value);
    console.log(e);
    if(usernamePattern.test(e.target.value)){
        //console.log("passed");
        form.username.setAttribute("class", "success");
        
    }  else{
        //console.log("failed");
        form.username.setAttribute("class", "fail");
    }
});
