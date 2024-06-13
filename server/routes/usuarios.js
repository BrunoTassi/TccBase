// routes/usuarios.js
const express = require('express');
const router = express.Router();
const connection = require('../../server/db');

router.post('/', (req, res) => {
  const { nome, cpf, email } = req.body;
  const query = 'INSERT INTO usuarios (nome, cpf, email) VALUES (?, ?, ?)';

  connection.query(query, [nome, cpf, email], (err, result) => {
    if (err) {
      console.error('Erro ao criar usuário:', err);
      res.status(500).json({ message: 'Erro interno do servidor' });
    } else {
      res.status(201).json({ id: result.insertId, nome, cpf, email });
    }
  });
});

module.exports = router;
