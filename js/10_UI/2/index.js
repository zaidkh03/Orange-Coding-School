const select = document.createElement("select");
const img = document.createElement("img");
const breakk = document.createElement("br")

const countries = {
  usa: "https://flagcdn.com/w320/us.png",
  uk: "https://flagcdn.com/w320/gb.png",
  france: "https://flagcdn.com/w320/fr.png"
};

for (let key in countries) {
  const option = document.createElement("option");
  option.value = key;
  option.textContent = key.toUpperCase();
  select.appendChild(option);
}

select.addEventListener("change", (e) => {
  img.src = countries[e.target.value];
});

document.body.append(select, breakk, img);