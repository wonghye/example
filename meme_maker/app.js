const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width=800;
canvas.height=800;

ctx.fillRect(50,50,100,40);
ctx.strokeRect(200,300, 100,30)