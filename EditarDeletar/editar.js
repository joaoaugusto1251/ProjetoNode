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

connection.query("UPDATE tb_alunos SET nome = 'Augusto' WHERE id = 1", function(err, result){
    if(!err){
        console.log('Usuário editado com sucesso!');
    }else{
        console.log('Erro ao cdastrar usuário');
    }
});