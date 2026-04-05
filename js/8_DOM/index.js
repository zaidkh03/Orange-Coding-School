const element = document.getElementById("testId")
element.style.color = "red"

const sui = document.querySelector("div")
sui.innerText = "difoubiivdnco"

// 1
const list = document.getElementById("list");
const target = document.getElementById("target");

console.log("Children:", list.children);

console.log("First Child:", list.firstElementChild);
console.log("Last Child:", list.lastElementChild);

console.log("Next sibling:", target.nextElementSibling);
console.log("Previous sibling:", target.previousElementSibling);
console.log("Children:", list.children);


// 2
const card = document.createElement("div");
const title = document.createElement("h2");
const desc = document.createElement("p");
const img = document.createElement("img");

title.textContent = "me";
desc.textContent = "suiiiiiiiiiiiiiiiiiiiiiiii";
img.setAttribute("src", "IMG_8367.jpg");
img.style.width = "200px"

card.classList.add("card");

card.appendChild(title);
card.appendChild(desc);
card.appendChild(img);

document.body.appendChild(card);

// 3
const root = document.getElementById("root")
const ul = root.children[0]
const li3 = ul.children[2]

console.log(li3)

// 4
const listt = document.getElementById("ex4")
const ul2 = listt.children[0]


const OldLi = document.getElementById("two")
const newLi = document.createElement("li")
newLi.textContent = "new li"
newLi.classList.add("new")
ul2.replaceChild(newLi, OldLi)

console.log(listt)
