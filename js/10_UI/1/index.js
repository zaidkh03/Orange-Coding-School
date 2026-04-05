const box = document.createElement("div");
box.textContent = "Hover me";
box.classList.add("hover-box");

box.addEventListener("mouseover", () => {
    box.classList.add("hovered");
});

box.addEventListener("mouseout", () => {
    box.classList.remove("hovered");
});

document.body.appendChild(box);