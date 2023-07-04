const form = document.getElementById("my-form");
const radius = document.getElementById("radius");
const output = document.getElementById("volume")


const numberOfDecimals = 2

form.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
    e.preventDefault();
    const r = Number(radius.value);
    if (Number.isNaN(r)) return;
    const volume = (4 / 3) * Math.PI * r**3
    console.log("volume:", volume)
    output.value = volume.toFixed(numberOfDecimals)
}

document.addEventListener("DOMContentLoaded", () =>
    console.log("The HTML page loaded successfully"))

document.addEventListener("keyup", (event) => console.log (event.keyCode) )
form.addEventListener("pointerenter", ()=>console.log("The pointer is inside the form"))
form.addEventListener("pointerleave", ()=>console.log("The pointer left the form"))

document.addEventListener("resize", () => alert("You resized the window!"))

window.addEventListener("blur", ()=> {
    const body = document.querySelector("body")
    body.style.backgroundColor = "orange";
})

window.addEventListener("focus", ()=> {
    const body = document.querySelector("body")
    body.style.backgroundColor = "white";
})