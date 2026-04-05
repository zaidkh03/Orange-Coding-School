const text = document.getElementById("text")
const par= document.getElementById("par")

text.addEventListener("input", (e) => {
    par.textContent = e.target.value
})
