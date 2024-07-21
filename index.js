const signUpBtn= document.querySelector('#Header > #Home > #sign-up'); 
const loginBtn= document.querySelector('#Header > #Home > #login'); 
const signUpPage= document.getElementsByClassName('signUpPage')[0];
const loginPage= document.getElementsByClassName('loginPage')[0];
const cancelBtn= document.getElementsByClassName('cancel');
const wholeBody= document.querySelectorAll('#Header, #body, #footer');
const Body= document.querySelector('body');

/*sign up features*/

const signUpFunc= ()=> {
    signUpPage.style.display='flex';
    Body.style.overflow='hidden';
    wholeBody.forEach((element) =>{
        element.style.cssText=`filter: blur(7px);
        overflow: hidden;`;
    });
    console.log("sign up button clicked");
    };

    signUpBtn.addEventListener("click", signUpFunc);


    /*login features*/

    const loginFunc= ()=> {
    loginPage.style.display='flex';
    Body.style.overflow='hidden';
    wholeBody.forEach((element) =>{
        element.style.cssText=`filter: blur(7px);
        overflow: hidden;`;
    });
    console.log("login button clicked");
    };
   
    loginBtn.addEventListener("click", loginFunc);

alert("welcome");

/*screen tap to close*/

const tapScreen=()=>{
    location.reload();
}

window.onclick= (event)=> {if(event.target== signUpPage || event.target==loginPage){
        location.reload();
    } else{}
}
 

    /*cancel button to close*/

    Array.from(cancelBtn).forEach((btn) =>{
        btn.addEventListener("click", tapScreen);
        console.log("cancel btn is clicked"); 
    });