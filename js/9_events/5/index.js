const minus = document.createElement("button");
const plus = document.createElement("button");
const display = document.createElement("p");

minus.textContent = "-";
plus.textContent = "+";
display.textContent = "0";

let count = 0;

function updateUI() {
  display.textContent = count;

  display.classList.remove("positive", "negative", "zero");

  if (count > 0) {
    display.classList.add("positive");
  } else if (count < 0) {
    display.classList.add("negative");
  } else {
    display.classList.add("zero");
  }
}

plus.addEventListener("click", () => {
  count++;
  updateUI();
});

minus.addEventListener("click", () => {
  count--;
  updateUI();
});

document.body.append(minus, display, plus);