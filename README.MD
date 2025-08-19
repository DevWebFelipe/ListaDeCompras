## README - QuickList

# QuickList - Lista de Compras

QuickList é uma aplicação web simples e intuitiva para gerenciar listas de compras. Permite adicionar, marcar como concluído e remover itens, com feedback visual para o usuário.

---

## Índice

- [Descrição](#descrição)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Fluxo da Aplicação](#fluxo-da-aplicação)
- [Detalhes de Implementação](#detalhes-de-implementação)
- [Observações](#observações)

---

## Descrição

QuickList foi desenvolvida para facilitar o gerenciamento de listas de compras, tornando o processo rápido e eficiente. O usuário pode adicionar itens, marcar como concluídos e remover itens, recebendo alertas visuais para cada ação.

---

## Funcionalidades

- Adicionar novos itens à lista de compras.
- Marcar itens como concluídos (checkbox).
- Remover itens específicos da lista.
- Exibir alerta ao remover um item.
- Fechar alerta manualmente.

---

## Tecnologias Utilizadas

- **HTML5**: Estrutura da aplicação.
- **CSS3**: Estilização baseada em layout do Figma.
- **JavaScript (ES6+)**: Lógica de manipulação da lista e eventos.

---

## Estrutura de Pastas

```

/ (raiz do projeto)
│
├── index.html
├── assets/
│ ├── css/
│ │ └── index.css
│ └── scripts/
│ └── script.js
└── README.md

```

---

## Fluxo da Aplicação

```mermaid
graph TD
   A[Usuário digita item no campo de texto] --> B[Clica em "Adicionar item"]
   B --> C[JS intercepta evento submit]
   C --> D[Valida se o campo não está vazio]
   D -->|Válido| E[Cria novo item na lista]
   E --> F[Adiciona <li> com checkbox, label e botão de remover]
   F --> G[Limpa campo de texto para novo item]

   subgraph Remoção de Item
   H[Usuário clica no botão "X"] --> I[Evento delegado identifica o alvo]
   I --> J[Remove o <li> correspondente]
   J --> K[Exibe alerta de remoção]
   K --> L[Usuário pode fechar alerta manualmente]
   end
```

---

## Detalhes de Implementação

- **IDs únicos**: Cada item recebe um ID exclusivo para associar checkbox e label.
- **Função `addNewListItem(value)`**: Cria dinamicamente os elementos necessários e adiciona à lista.
- **Delegação de eventos**: Listeners únicos para ações de remoção, tornando o código escalável.
- **Validação**: Impede a adição de itens vazios e limpa o campo após adicionar.
- **Alertas**: Feedback visual ao remover itens, com opção de fechar manualmente.

---

## Observações

- O layout segue as definições do Figma.
- Toda a lógica de manipulação da lista é feita em JavaScript puro.
- A delegação de eventos garante performance e escalabilidade.
- O projeto é facilmente adaptável para novas funcionalidades.
