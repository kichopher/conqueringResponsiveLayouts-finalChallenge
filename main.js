
const navToggleButton = document.querySelector(".nav-toggle")

navToggleButton.addEventListener("click", () => {
    const nav = document.querySelector(".nav")
    nav.classList.toggle("hidden") //toggle display
})
