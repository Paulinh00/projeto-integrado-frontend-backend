# Projeto Integrado - Frontend + Backend

🔗 **Vídeo de Demonstração:** [YouTube - Apresentação do Sistema](https://www.youtube.com/watch?v=HEa0rTvJ7Q8)

Sistema web completo desenvolvido com React (Vite) no frontend e Node.js + Express + MySQL no backend.  
O objetivo é gerenciar um CRUD de usuários com visualização, cadastro, edição e exclusão.

---

## 🚀 Tecnologias Utilizadas

### Frontend
- React com Vite
- Tailwind CSS para estilização
- Fetch API para comunicação com backend

### Backend
- Node.js
- Express
- MySQL

---

## 📂 Estrutura do Projeto

```
/
├── back
│   ├── index.js              # Servidor Express
│   ├── db.js                 # Conexão com MySQL
│   ├── Routes/users.js       # Rotas de usuário
│   └── Controllers/users.js  # Lógica de CRUD
│
├── front/paulo
│   ├── src
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── components
│   │       ├── MiniTelaAdicionar.jsx
│   │       ├── MiniTelaEditar.jsx
│   │       └── MiniTelaExcluir.jsx
│   └── index.html
```

---

## 🛠️ Passo a Passo para Rodar o Projeto

1. Clone o repositório:
```bash
git clone https://github.com/Paulinh00/projeto-integrado-frontend-backend.git
```

2. Importe o banco de dados MySQL:
- Abra o MySQL Workbench.
- Vá em **Server > Data Import**.
- Selecione o arquivo `Dump20250424.sql`.
- Clique em **Start Import**.

3. Instale as dependências do backend:
```bash
cd back
npm install
```

4. Inicie o servidor backend:
```bash
npm start
```

5. Instale as dependências do frontend:
```bash
cd ../front/paulo
npm install
```

6. Inicie o frontend:
```bash
npm run dev
```

7. Acesse o sistema:
```
http://localhost:5173
```

---

## 👨‍💻 Desenvolvedor
- **Paulinho**  
- Projeto para disciplina de Experiência Criativa - 2025

---

## 📂 Exportação do Banco
Arquivo `.sql` incluído na raiz: `Dump20250424.sql`

---

## ✅ Critérios atendidos
- [x] CRUD Completo
- [x] Validações e tratamento de erro
- [x] Organização de pastas
- [x] Integração completa frontend + backend
- [x] Repositório GitHub + vídeo explicativo

