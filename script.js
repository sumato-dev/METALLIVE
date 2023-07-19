let usuarios = [];

function cadastro(){
    let nome = document.getElementById('nome')
    let email = document.getElementById('email')
    let senha = document.getElementById('senha')

    let usuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    usuarios.push(usuario);

}