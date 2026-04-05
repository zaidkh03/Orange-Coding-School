const colorBox = document.createElement("div");
colorBox.classList.add("color-box");

document.body.appendChild(colorBox);

let colors = ["red", "blue", "green", "purple"];
let index = 0;

setInterval(() => {
  index = (index + 1) % colors.length;
  colorBox.style.backgroundColor = colors[index];
}, 1000);