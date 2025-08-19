const button = document.querySelector("button")

button.addEventListener("click", (event) => {
  event.preventDefault()
})

const buttonCloseAlert = document.getElementById("close-alert")
const alert = document.querySelector("#alert")

buttonCloseAlert.addEventListener("click", (event) => {
  event.preventDefault()

  alert.classList.add("sr-only")
})
