let signUpBtn= document.querySelector('#Header > #Home > #sign-up');
let signUpPage= document.getElementsByClassName('signUpPage')[0];
const wholeBody= document.querySelectorAll('#Header, #body, #footer');
const Body= document.querySelector('body');

let signUpFunc= ()=> {
    signUpPage.style.display='flex';   
    wholeBody.forEach((element) =>{
        element.style.filter=' blur(7px)';
        Body.style.overflow='hidden'; 
    }) 
    console.log("button clicked");
    };

    signUpBtn.addEventListener("click", signUpFunc);
alert("welcome");