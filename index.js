let signUpBtn= document.querySelector('#header > #home > #sign-up');
let signUpPage= document.querySelector('.signUpPage')

let signUpFunc= ()=> {
    signUpPage.style.cssText= `display: flex;`;
}

signUpBtn.addEventListener("click", signUpFunc);

alert("welcom");