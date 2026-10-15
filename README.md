# Estudos de React (aulas IFSP)

Repositório com exercícios de React feitos durante as aulas do curso de Análise e Desenvolvimento de Sistemas no IFSP. Contém dois projetos Vite independentes.

## Projetos

### Raiz (`/`) – página sobre Devil May Cry
- Componente `Planetas` exibe título e capa do jogo.
- Componente `Terra` recebe **props** (`descricao` e um objeto `desc`) e mostra informações sobre o personagem Vergil, com um carrossel do Bootstrap.

### `site/` – lista de cientistas
- Renderiza uma lista a partir de um array de objetos (`src/assets/data.js`) usando `map` e `key`.
- Função utilitária `getImageUrl` monta a URL da imagem de cada cientista.
- Os arquivos `App - Copia.jsx` e `App - Copia (2).jsx` são versões anteriores de exercícios (renderização condicional, listas), mantidos como referência.

## Tecnologias
- React 18
- Vite 5
- Bootstrap 5 (projeto raiz)
- ESLint

## Como rodar
Pré-requisito: Node.js (18 ou superior).

```bash
# projeto da raiz
npm install
npm run dev

# projeto da pasta site
cd site
npm install
npm run dev
```

Depois, abra o endereço exibido no terminal (por padrão `http://localhost:5173`).

## Estrutura
```
.
├── src/                 # projeto Devil May Cry
│   ├── App.jsx
│   └── components/Planetas.jsx (+ Planetas.css)
└── site/                # projeto lista de cientistas
    └── src/
        ├── App.jsx
        ├── assets/data.js
        └── components/utils.jsx
```

## Aprendizados
- Criação de componentes funcionais e uso de JSX
- Passagem de dados por **props** (strings e objetos)
- Renderização de listas com `map` e uso correto de `key`
- Integração do Bootstrap em um projeto React
