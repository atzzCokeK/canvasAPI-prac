const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// fillRect
ctx.fillStyle = "blue";
ctx.fillRect(20, 20, 150, 100);
ctx.fillStyle = "red";
ctx.fillRect(200, 10, 100, 100);

// strokeRect
ctx.lineWidth = 5;
ctx.strokeStyle = "green";
ctx.strokeRect(10, 200, 100, 100);

// clearRect
ctx.clearRect(25, 25, 140, 90);

// fillText
ctx.font = "30px Arial";
ctx.fillStyle = "purple";
ctx.fillText("Hello World", 400, 50);

// strokeText
ctx.lineWidth = 1;
ctx.strokeStyle = "yellow";
ctx.strokeText("Hello World", 400, 200);
