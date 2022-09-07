const images = ["0.jpg", "1.jpg" ]; 

const chosenImage = images[Math.floor(Math.random() * images.length)];
//console.log(chosenImage);

// <img> 태그 생성 하기
const bgImage = document.createElement("img");

bgImage.src = `${chosenImage}`;

// appendChild 이용하여 변수 넣어주기
document.body.appendChild(bgImage);