// routes/usuarios.js
const express = require('express');
const router = express.Router();
const sql = require('mssql');
const connection = require('../db');

router.post('/', (req, res) => {
  const { nome, cpf, email } = req.body;
  const query = `INSERT INTO usuarios (nome, cpf, email) VALUES (@nome, @cpf, @email)`;

  connection.request() // Usa a conexão do banco de dados para criar uma nova solicitação
    .input('nome', sql.VarChar, nome) // Define os parâmetros da consulta
    .input('cpf', sql.VarChar, cpf)
    .input('email', sql.VarChar, email)

    .query(query, (err, result) => { // Executa a consulta
      if (err) {
        console.error('Erro ao criar usuário:', err);
        res.status(500).json({ message: 'Erro interno do servidor' });
      } else {
        res.status(201).json({ id: result.recordset[0].id, nome, cpf, email });
      }
    });
});

module.exports = router;
