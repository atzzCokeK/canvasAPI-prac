const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// // fillRect
// ctx.fillStyle = "blue";
// ctx.fillRect(20, 20, 150, 100);
// ctx.fillStyle = "red";
// ctx.fillRect(200, 10, 100, 100);

// // strokeRect
// ctx.lineWidth = 5;
// ctx.strokeStyle = "green";
// ctx.strokeRect(10, 200, 100, 100);

// // clearRect
// ctx.clearRect(25, 25, 140, 90);

// // fillText
// ctx.font = "30px Arial";
// ctx.fillStyle = "purple";
// ctx.fillText("Hello World", 400, 50);

// // strokeText
// ctx.lineWidth = 1;
// ctx.strokeStyle = "yellow";
// ctx.strokeText("Hello World", 400, 200);

// // Paths
// // Triangle
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(100, 200);
// // ctx.lineTo(50, 50);
// ctx.closePath();
// ctx.fillStyle = "coral";
// ctx.fill();

// ctx.beginPath();
// ctx.moveTo(200, 50);
// ctx.lineTo(150, 200);
// ctx.lineTo(250, 200);
// ctx.closePath();
// ctx.stroke();

// // Rectangle
// ctx.beginPath();
// ctx.rect(300, 50, 150, 100);
// ctx.fillStyle = "teal";
// ctx.fill();

// Animation-1
const circleProps = {
  x: 200,
  y: 200,
  size: 30,
  xd: 5,
  yd: 4,
};

function drawCircle() {
  ctx.beginPath();
  ctx.arc(circleProps.x, circleProps.y, circleProps.size, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCircle();

  circleProps.x += circleProps.xd;
  circleProps.y += circleProps.yd;

  if (
    circleProps.x + circleProps.size > canvas.width ||
    circleProps.x - circleProps.size < 0
  ) {
    circleProps.xd *= -1;
  }

  if (
    circleProps.y + circleProps.size > canvas.height ||
    circleProps.y - circleProps.size < 0
  ) {
    circleProps.yd *= -1;
  }

  requestAnimationFrame(update);
}

update();
