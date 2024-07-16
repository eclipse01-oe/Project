let signUpBtn= document.querySelector('#Header > #Home > #sign-up');
let signUpPage= document.getElementsByClassName('signUpPage')[0];
const wholeBody= document.querySelectorAll('#Header, #body, #footer');

let signUpFunc= ()=> {
    signUpPage.style.cssText= `display: flex;`;  
    wholeBody.style.cssText= `filter: blur(8px);
    overflow-y: hidden; `;
    console.log("button clicked");
    };

    signUpBtn.addEventListener("click", signUpFunc);
alert("welcome");