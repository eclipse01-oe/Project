let signUpBtn= document.querySelector('#Header > #Home > #sign-up');
let signUpPage= document.getElementsByClassName('signUpPage')[0];
const wholeBody= document.querySelectorAll('#Header, #body, #footer');

let signUpFunc= ()=> {
    signUpPage.style.display='flex';   
    wholeBody.forEach((element) =>{
        element.style.cssText=
        `filter: blur(7px)
        overflow: hidden;`;
    })
    console.log("button clicked");
    };

    signUpBtn.addEventListener("click", signUpFunc);
alert("welcome");