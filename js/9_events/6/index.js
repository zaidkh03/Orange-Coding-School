const toggleBtn = document.createElement("button");
const section = document.createElement("div");

toggleBtn.textContent = "Toggle";
section.textContent = "Hidden Content";
section.classList.add("box");

toggleBtn.addEventListener("click", () => {
  section.classList.toggle("hidden");
});

document.body.append(toggleBtn, section);