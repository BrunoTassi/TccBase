// db.js
const mysql = require('mysql');

const dbConfig = {
  host: 'localhost',
  user: 'login_de_adm',
  password: 'abc123', // Substitua pela senha definida
  database: 'dbTcc'
};

const connection = mysql.createConnection(dbConfig);

connection.connect((error) => {
  if (error) {
    console.error('Erro ao conectar ao banco de dados MySQL:', error);
    throw error;
  }
  console.log('Conexão bem-sucedida ao banco de dados MySQL');
});

module.exports = connection;
