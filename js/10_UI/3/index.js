const btn = document.createElement("button");
const content = document.createElement("div");

btn.textContent = "Toggle";
content.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aliquid, non expedita eaque voluptatum excepturi iusto architecto enim suscipit dolore. Quis pariatur et fuga harum sunt provident atque minima molestiae.";
content.classList.add("content-box");

btn.addEventListener("click", () => {
  content.classList.toggle("hidden");
});

document.body.append(btn, content);