const signUpBtn= document.querySelector('#Header > #Home > #sign-up');
const signUpPage= document.getElementsByClassName('signUpPage')[0];
const loginPage= document.getElementsByClassName('loginPage')[0];
const wholeBody= document.querySelectorAll('#Header, #body, #footer');
const Body= document.querySelector('body');

const signUpFunc= ()=> {
    signUpPage.style.display='flex';
    Body.style.overflow='hidden';
    wholeBody.forEach((element) =>{
        element.style.cssText=`filter: blur(7px);
        overflow: hidden;`;
    }) 
    console.log("button clicked");
    };

    signUpBtn.addEventListener("click", signUpFunc);
alert("welcome");

const tapScreen=  ()=> {
    signUpPage.style.display='none';
    Body.style.overflow='scroll';
    wholeBody.forEach((element)=>{
        element.style.cssText=`filter: blur(0);
        overflow: scroll;`;)
    };

    window.onclick=tapScreen;