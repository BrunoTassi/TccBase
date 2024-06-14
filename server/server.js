const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Configuração do CORS
const corsOptions = {
  origin: 'http://localhost:4200', // URL do cliente Angular
  optionsSuccessStatus: 200 // Alguns navegadores requerem um status 200 para métodos OPTIONS
};

app.use(cors(corsOptions)); // Use o CORS com as opções configuradas
app.use(express.json()); // Middleware para parsear JSON

// Importar e usar as rotas de usuários
const usuariosRouter = require('./routes/usuarios');
app.use('/api/usuarios', usuariosRouter);

app.listen(port, () => {
  console.log(`Servidor Node.js rodando em http://localhost:${port}`);
});
