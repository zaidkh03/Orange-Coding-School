// const a = document.getElementById("a");
// const ank = document.getElementById("ank")

// a.addEventListener("click", (e) => {
//     console.log("e:", e.type);
//     // e.preventDefault()
//     console.log("target:", e.target.value);
//     console.log("current:", e.currentTarget);
//     e.stopPropagation()
// }, { once: true });

// ank.addEventListener("click", (e) =>{
//     e.preventDefault()
//     console.log("sui")
// })

// 1
const btn = document.getElementById("child")
btn.addEventListener("click", (e) => {
    if (btn.innerText == "click") {
        btn.innerText = "clicked"
    } else {
        btn.innerText = "click"
    }
      btn.classList.toggle("mainBtn");

})
