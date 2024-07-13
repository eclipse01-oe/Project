let signUp= document.querryselector('#home > #sign-up');
let body= document.body;

let signUpFunc= ()=> {
    signUp.style.cssText= `display: flex;`;
}

signUp.addEventListener("click", signUpFunc);