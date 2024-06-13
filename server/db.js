// db.js
const sql = require('mssql');

const config = {
  user: 'login_de_adm',
  password: 'abc123',
  server: 'localhost', // ou o nome do servidor SQL
  database: 'dbTcc',
  options: {
    encrypt: false, // Use true para Azure SQL
    trustServerCertificate: true // Use para desenvolvimento
  }
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Conectado ao SQL Server');
    return pool;
  })
  .catch(err => {
    console.error('Erro de conexão ao SQL Server', err);
    process.exit(1);
  });

module.exports = {
  sql, poolPromise
};
