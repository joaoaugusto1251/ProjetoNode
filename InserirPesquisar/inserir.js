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

connection.query("INSERT INTO tb_alunos(nome, email) VALUES ('João', 'joao@gmail.com')", function(err, result){
    if(!err){
        console.log('Usuário inserido com sucesso!');
    }else{
        console.log('Erro ao cdastrar usuário');
    }
});