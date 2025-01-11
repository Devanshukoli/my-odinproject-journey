const btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
    console.log('something', e.target)
    e.target.style.backgroundColor = "blue";
})


const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        alert(btn.id)
    })
})