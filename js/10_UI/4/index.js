const breakk = document.createElement("br")

const textarea = document.createElement("textarea");

const boldBtn = document.createElement("button");
boldBtn.textContent = "Bold";

const underlineBtn = document.createElement("button");
underlineBtn.textContent = "Underline";

const fontSize = document.createElement("input");
fontSize.type = "number";
fontSize.placeholder = "Size";

const fontSelect = document.createElement("select");
["Arial", "Courier New", "Georgia"].forEach(font => {
  const option = document.createElement("option");
  option.value = font;
  option.textContent = font;
  fontSelect.appendChild(option);
});

// events
boldBtn.addEventListener("click", () => {
  textarea.classList.toggle("bold");
});

underlineBtn.addEventListener("click", () => {
  textarea.classList.toggle("underline");
});

fontSize.addEventListener("input", (e) => {
  textarea.style.fontSize = e.target.value + "px";
});

fontSelect.addEventListener("change", (e) => {
  textarea.style.fontFamily = e.target.value;
});

document.body.append(boldBtn, underlineBtn, fontSize, fontSelect,breakk, textarea);