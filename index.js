let signUpBtn= document.querySelector('#Header > #Home > #sign-up');
let signUpPage= document.querySelector('.signUpPage');

let signUpFunc= ()=> {
    console.log("Button clicked!")
    signUpPage.style.cssText= `display: flex;`;
    };

    signUpBtn.addEventListener("click", signUpFunc);
alert("welcome");