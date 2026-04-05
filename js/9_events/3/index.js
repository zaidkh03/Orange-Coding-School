const input3 = document.createElement("input");
const addBtn = document.createElement("button");
const ul = document.createElement("ul");

addBtn.textContent = "Add";

addBtn.addEventListener("click", () => {
  if (input3.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = input3.value;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.classList.add("delete");

  li.appendChild(delBtn);
  ul.appendChild(li);

  input3.value = "";
});

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

document.body.append(input3, addBtn, ul);