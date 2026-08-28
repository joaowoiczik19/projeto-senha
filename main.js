const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if (tamanhoSenha > 1){
        // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    gerarSenha();
}
function aumentaTamanho(){
    if (tamanhoSenha < 20){
        tamanhoSenha = tamanhoSenha+1;
    }
    numeroSenha.textContent = tamanhoSenha;
    gerarSenha()
}

const campoSenha = document.querySelector('#campo-senha');

const letrasMaisculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';



function gerarSenha () {
    let senha = '';
    for (let i =0; i < tamanhoSenha; i++){
        let numeroAleatorio = Math.random () *letrasMaisculas.length
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + letrasMaisculas[numeroAleatorio];
    };
    campoSenha.value = senha;
}
