let signUpBtn= document.querySelector('#Header > #Home > #sign-up');
let signUpPage= document.querySelector('.signUpPage');

let signUpFunc= ()=> {
    signUpPage.style.cssText= `display: flex;`;
    console.log("button clicked");
    };

    signUpBtn.addEventListener("click", signUpFunc);
alert("welcome");