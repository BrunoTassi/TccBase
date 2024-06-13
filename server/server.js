// server.js
const express = require('express');
const usuariosRouter = require('../server/routes/usuarios'); // Importa as rotas de usuários

const app = express();
const port = 3000;

app.use(express.json()); // Middleware para analisar o corpo das solicitações JSON
app.use('/api/usuarios', usuariosRouter); // Define a rota para o endpoint de usuários

app.listen(port, () => {
  console.log(`Servidor Node.js rodando em http://localhost:${port}`);
});
