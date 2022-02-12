const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// fillRect
ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 100, 100);
ctx.fillStyle = "red";
ctx.fillRect(200, 10, 100, 100);

// strokeRect
ctx.lineWidth = 5;
ctx.strokeStyle = "green";
ctx.strokeRect(10, 200, 100, 100);
