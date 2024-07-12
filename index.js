let signUp= document.querryselector('#home, #sign-up');
let body= document.body;

let signUpFunc= ()=> { 
    body.style.cssText=`
    display: relative;
    opacity: 0.5;`;
    signUp.style.cssText=`
    display: absolute;
    position: fixed;`
}