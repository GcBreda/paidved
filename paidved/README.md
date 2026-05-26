# paidved 🛒

Site de e-commerce com compra em 1 clique. Construído com **React + TypeScript + Vite**.

---

## 🖥️ Como abrir no VSCode e rodar

### Passo 1 — Instale as ferramentas necessárias

Você vai precisar de:

1. **Node.js** (versão 18 ou superior)
   - Acesse: https://nodejs.org
   - Baixe a versão **LTS** e instale normalmente.
   - Para verificar se está instalado, abra o terminal e digite:
     ```
     node -v
     ```

2. **VSCode**
   - Acesse: https://code.visualstudio.com
   - Baixe e instale.

---

### Passo 2 — Abra a pasta no VSCode

1. Abra o **VSCode**
2. Vá em **File → Open Folder**
3. Selecione a pasta **paidved** que você baixou
4. Clique em **Open**

---

### Passo 3 — Abra o terminal integrado

No VSCode, pressione:
- **Windows/Linux**: `Ctrl + '` (acento grave) ou vá em **Terminal → New Terminal**
- **Mac**: `Cmd + '`

---

### Passo 4 — Instale as dependências

No terminal que abriu, digite e pressione Enter:

```bash
npm install
```

Aguarde terminar (pode levar alguns segundos).

---

### Passo 5 — Rode o projeto

```bash
npm run dev
```

Você verá algo assim no terminal:

```
  VITE v5.x.x  ready in 300ms

  ➜  Local:   http://localhost:5173/
```

---

### Passo 6 — Veja no navegador

Abra seu navegador e acesse:
```
http://localhost:5173
```

O site estará rodando! 🎉

---

## 📁 Estrutura do projeto

```
paidved/
├── index.html              ← Página base HTML
├── package.json            ← Dependências do projeto
├── tsconfig.json           ← Configuração TypeScript
├── vite.config.ts          ← Configuração do Vite
└── src/
    ├── main.tsx            ← Ponto de entrada React
    ├── App.tsx             ← Componente principal (toda a lógica)
    ├── App.module.css      ← Estilos CSS do site
    └── index.css           ← Estilos globais + variáveis de cor
```

---

## 🎨 Cores usadas

| Variável        | Cor        | Uso                  |
|-----------------|------------|----------------------|
| `--red`         | `#E02020`  | Botões, destaques    |
| `--black`       | `#111111`  | Fundo escuro, texto  |
| `--white`       | `#FFFFFF`  | Fundo principal      |
| `--off-white`   | `#F8F8F5`  | Seções alternadas    |

---

## 🔧 Extensões recomendadas para o VSCode

Instale para uma melhor experiência:

- **ES7+ React/Redux/React-Native snippets** — atalhos para React
- **Prettier** — formata o código automaticamente
- **TypeScript Importer** — facilita imports
- **CSS Modules** — autocomplete para `.module.css`

Para instalar: no VSCode, pressione `Ctrl+Shift+X` e pesquise pelo nome.
