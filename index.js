const input = document.getElementById("input");
const button = document.querySelector(".button");
const elementos = document.querySelector(".elementos");

window.addEventListener("load", () => {
    input.focus();
})

button.addEventListener("click", () => {
    let hijo = document.createElement("div");
    hijo.textContent = input.value;
    hijo.classList.add("dinamico")
    elementos.appendChild(hijo);
    input.value = "";
})

elementos.addEventListener("dblclick", (e) => {
    let hijo = e.target;
    elementos.removeChild(hijo);
})

elementos.addEventListener("click", (e) => {
    let hijo = e.target;
    hijo.classList.toggle("dinamico-seleccionado");
})


