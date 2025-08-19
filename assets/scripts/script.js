// Garantir um id unico para cada item criado
let idItemList = 0

const newItemInput = document.getElementById("new-item-input") // campo do input
const form = document.querySelector("form") // formulário
const listItem = document.querySelector(".list") // UL da lista de compras
const alert = document.querySelector("#alert") // alerta de exclusão
const buttonCloseAlert = document.getElementById("close-alert") // botão de fechar alerta

// Evento do botão Adicionar item
form.onsubmit = (event) => {
  event.preventDefault() // evita que a página recarregue

  const value = newItemInput.value.trim() // pega o valor do input sem espaços
  if (!value) {
    return
  }

  addNewListItem(value)
  idItemList++ // incrementa o ID para o próximo item
  newItemInput.value = ""
}

function addNewListItem(value) {
  // Criação de elementos HTML locais para sempre inserir um novo
  const newListItem = document.createElement("li")
  const newInput = document.createElement("input")
  const newLabel = document.createElement("label")
  const newButton = document.createElement("button")

  // Adiciona classes e atributos para o input (checkbox)
  newInput.type = "checkbox"
  newInput.name = "list-item"
  newInput.id = "item-" + idItemList
  newInput.setAttribute("aria-label", "Marcar item como pego")
  newInput.classList.add("list-item-checkbox")

  // Configura o label para o checkbox
  newLabel.setAttribute("for", "item-" + idItemList)
  newLabel.textContent = value
  newLabel.classList.add("list-item-description")

  // Configura o botão de deletar
  newButton.type = "button"
  newButton.setAttribute("aria-label", "Excluir item da lista de compras")
  newButton.classList.add("list-item-delete")

  // Adiciona todos os elementos dentro do <li>
  newListItem.classList.add("list-item")
  newListItem.append(newInput, newLabel, newButton)

  // Adiciona o <li> na lista (no início). Assim o mais recente sempre virá primeiro
  listItem.prepend(newListItem)
}

listItem.addEventListener("click", (event) => {
  // dentro da lista, verifica se o item clicado contém a classe list-item-delete
  if (event.target.classList.contains("list-item-delete")) {
    // se o item clicado tiver a classe, então vai pegar o pai desse item clicado
    const item = event.target.closest("li") // pega o <li> pai do item clicado

    if (item) {
      item.remove()
    } // remove apenas o item clicado

    alert.classList.remove("sr-only") // mostra alerta
  }
})

buttonCloseAlert.addEventListener("click", (event) => {
  event.preventDefault()

  alert.classList.add("sr-only")
})
