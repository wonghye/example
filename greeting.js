const loginForm = document.querySelector("#login");
const loginInput = document.querySelector("#login input");
//const loginButton = document.querySelector("#login button");
//const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USER_NAME = "usern";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const usern = loginInput.value;
    localStorage.setItem(USER_NAME, usern);
    //console.log(usern);
    //greeting.innerText = "Hello " + usern;
    // `${변수명}`
    paintGreet(usern);
    
    /*
    if (usern === "") {
        alert("Please wirte your name");
    } else if(usern.length > 15) {
        alert("Your name is too long.")
    }
    */
}
function paintGreet(usern){
    greeting.innerText = `Hello ${usern}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
const saveName = localStorage.getItem(USER_NAME);
    if(saveName == null){
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit", onLoginSubmit);
    }else{
        paintGreet();
    }
