const container = document.createElement("div");

for (let i = 0; i < 4; i++) {
  const card = document.createElement("div");
  card.textContent = `Card ${i + 1}`;
  card.classList.add("card");

  container.appendChild(card);
}

container.addEventListener("click", (e) => {
  if (!e.target.classList.contains("card")) return;

  const cards = container.children;

  for (let c of cards) {
    c.classList.remove("active");
  }

  e.target.classList.add("active");
});

document.body.appendChild(container);