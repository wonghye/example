const loginInput = document.querySelector("#login input");
const loginButton = document.querySelector("#login button");

function onLoginBC() {
    const usern = loginInput.value;
    if (usern === "") {
        alert("Please wirte your name");
    } else if(usern.length > 15) {
        alert("Your name is too long.")
    }
}

loginButton.addEventListener("click", onLoginBC);