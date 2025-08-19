# QuickList - Lista de Compras

## Descrição da aplicação

QuickList é uma aplicação web simples que permite ao usuário adicionar e remover itens de uma lista de compras de forma dinâmica.

### Funcionalidades

- Adicionar novos itens à lista.
- Marcar itens como concluídos (checkbox).
- Remover itens específicos da lista.
- Exibir alerta quando um item é removido.
- Fechar alerta manualmente.

### Estrutura HTML

- `<form>`: Formulário para adicionar novos itens.
- `<ul class="list">`: Lista que armazena os itens.
- `<div id="alert">`: Alerta que é exibido ao remover um item.

### Fluxo da aplicação

```mermaid
graph TD
    A[Usuário digita no input] --> B[Clica em 'Adicionar item']
    B --> C[Evento submit é interceptado pelo JS]
    C --> D[Faz trim e verifica valor vazio]
    D -->|valor válido| E[Chama addNewListItem]
    E --> F[Cria <li> com input, label e botão]
    F --> G[Adiciona <li> na UL da lista]
    G --> H[Input limpo para novo item]

    subgraph Deleção
    I[Usuário clica em botão X] --> J[Evento delegado no UL]
    J --> K[Verifica se target possui class 'list-item-delete']
    K --> L[Pega <li> mais próximo com closest 'li']
    L --> M[Remove <li> do DOM]
    M --> N[Mostra alerta removido]
    end

    O[Usuário clica no botão de fechar alerta] --> P[Evento remove classe sr-only do alerta]
```

### Pontos importantes do código JS

1. **Contador `idItemList`**: garante IDs únicos para cada checkbox.
2. **Função `addNewListItem(value)`**:

   - Cria dinamicamente `<li>`, `<input>`, `<label>` e `<button>`.
   - Adiciona atributos e classes para acessibilidade e estilo.
   - Adiciona o item na lista usando `appendChild`.

3. **Delegação de eventos para remoção**:

   - Evita criar listeners individuais para cada botão.
   - Verifica se o alvo do clique é um botão de deletar.
   - Remove apenas o `<li>` correspondente.

4. **Alertas**:

   - Mostra quando um item é removido.
   - Pode ser fechado manualmente.

5. **Validação de input**:

   - Evita criar itens vazios.
   - Limpa o campo após adicionar.

### Principais erros corrigidos

- Não criar elementos fora da função `addNewListItem`.
- Não usar `onsubmit` em botões.
- Não tentar adicionar listeners diretamente em elementos dinâmicos com `getElementsByClassName`.
- Garantir que cada item é independente e removível individualmente.
- Delegação de eventos para remover itens dinamicamente adicionados.

### Tecnologias utilizadas

- HTML5
- CSS3 (classes já definidas no Figma)
- JavaScript (ES6+)

### Estrutura de arquivos

```
index.html
assets/
  css/index.css
  scripts/script.js
```

### Observações

- O layout e as classes seguem o Figma fornecido.
- A lógica de adição e remoção de itens é totalmente controlada pelo JavaScript.
- Delegação de eventos torna o código escalável para qualquer quantidade de itens.
