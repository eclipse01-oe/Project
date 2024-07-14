alert("welcome");
let signUpBtn= document.querySelector('#Header > #Home > #sign-up');
let signUpPage= document.querySelector('.signUpPage');

let signUpFunc= ()=> {
    signUpPage.style.cssText= `display: flex;`;
    };

    signUpBtn.addEventListener("click", signUpFunc);
 