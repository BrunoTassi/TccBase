// routes/usuarios.js
const express = require('express');
const router = express.Router();
const sql = require('mssql');
const db = require('../db'); // Importa a conexão com o banco de dados

router.post('/', async (req, res) => {
  const { nome, cpf, email } = req.body;
  const query = `INSERT INTO usuarios (nome, cpf, email) VALUES (@nome, @cpf, @email)`;

  try {
    const pool = await db.connect(); // Conecta ao banco de dados
    const result = await pool.request()
      .input('nome', sql.VarChar, nome)
      .input('cpf', sql.VarChar, cpf)
      .input('email', sql.VarChar, email)
      .query(query);

    res.status(201).json({ id: result.recordset[0].id, nome, cpf, email });
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

module.exports = router;
