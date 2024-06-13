
const sql = require('mssql');

const dbConfig = {
  user: 'login_de_adm',
  password: 'abc123',
  server: 'localhost', // ou o nome do servidor SQL
  database: 'dbTcc',
  options: {
    encryp t: false, // Use isso se você estiver usando Azure SQL. Pode ser false para outros ambientes.
    trustServerCertificate: true // Use isso para ignorar erros de certificado em ambientes de desenvolvimento.
  }
};

//const connection = mysql.createConnection({
//  host: 'localhost',
//  user: 'login_de_adm',
//  password: 'abc123',
//  database: 'dbTcc'
//});

const pool = new sql.ConnectionPool(dbConfig);
pool.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados SQL Server:', err);
  } else {
    console.log('Conexão bem-sucedida ao banco de dados SQL Server');
  }
});

module.exports = pool;
