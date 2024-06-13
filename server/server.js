// server.js
const express = require('express');
const usuariosRouter = require('./routes/usuarios'); // Importa as rotas de usuários
const db = require('./db'); // Importa a conexão com o banco de dados

const app = express();
const port = 3000;

app.use(express.json()); // Middleware para analisar o corpo das solicitações JSON
app.use('/api/usuarios', usuariosRouter); // Define a rota para o endpoint de usuários

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor Node.js rodando em http://localhost:${port}`);
});
