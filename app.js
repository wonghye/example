const loginForm = document.querySelector("#login");
const loginInput = document.querySelector("#login input");
//const loginButton = document.querySelector("#login button");
//const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const usern = loginInput.value;
    console.log(usern);
    //greeting.innerText = "Hello " + usern;
    // `${변수명}`
    greeting.innerHTML = `Hello ${usern}`; // string 변수를 하나로 합쳐줌
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
    /*
    if (usern === "") {
        alert("Please wirte your name");
    } else if(usern.length > 15) {
        alert("Your name is too long.")
    }
    */
}

/*
function hdLinkClick(event){
    event.preventDefault();
    console.log(event);
    alert("clicked!!");
}
*/

//loginButton.addEventListener("click", onLoginBC);
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", hdLinkClick);