const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'escola'
});

connection.connect(function(err) {
    if (err) console.error('Erro ao realizar a conexão com BD ' + err.stack); return;
});

connection.query('SELECT * FROM tb_alunos', function(err, rows, fields) {
    if(!err){
        console.log('Resultado: ', rows);
    }else{
        console.log('Erro ao realizar a consulta');
    }
});