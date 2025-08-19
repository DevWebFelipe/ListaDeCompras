let idItemList = 0

const newItemInput = document.getElementById("new-item-input")
const form = document.querySelector("form")
form.onsubmit = (event) => {
  event.preventDefault()

  addNewListItem()

  idItemList++
}

const listItem = document.querySelector(".list")
function addNewListItem() {
  const newListItem = document.createElement("li")
  const newInput = document.createElement("input")
  const newLabel = document.createElement("label")
  const newButton = document.createElement("button")

  newListItem.classList.add("list-item")

  newInput.classList.add("list-item-checkbox")
  newInput.setAttribute("type", "checkbox")
  newInput.setAttribute("name", "list-item")
  newInput.setAttribute("id", "item-" + idItemList)
  newInput.setAttribute("aria-label", "Marcar item como pego")

  newLabel.classList.add("list-item-description")
  newLabel.setAttribute("for", "item-" + idItemList)
  newLabel.textContent = newItemInput.value

  newButton.classList.add("list-item-delete")
  newButton.setAttribute("aria-label", "Excluir item da lista de compras")
  newButton.setAttribute("type", "button")

  newButton.addEventListener("click", () => {
    alert.classList.remove("sr-only")
  })

  newListItem.append(newInput, newLabel, newButton)
  listItem.prepend(newListItem)
}

const alert = document.querySelector("#alert")
const buttonListItemDelete = document.getElementsByClassName("list-item-delete")
buttonListItemDelete.onsubmit = (event) => {
  event.preventDefault()

  alert.classList.remove("sr-only")
}

const buttonCloseAlert = document.getElementById("close-alert")
buttonCloseAlert.addEventListener("click", (event) => {
  event.preventDefault()

  alert.classList.add("sr-only")
})
