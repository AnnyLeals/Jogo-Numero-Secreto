let listaNumSorteados = [];
let numeroSecreto = gerarNumero();
let tentativas = 1;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;    
}

function exibirMensagemInicial() {
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10');
}

    exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibirTexto('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let msgTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTexto('p', msgTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
       
    } else {
        if(chute > numeroSecreto) {
            exibirTexto('p', 'O número secreto é menor');
        } else {
            exibirTexto('p', 'O número secreto é maior');
        }
        tentativas++;  
    }
    limpaCampo();
    }

function gerarNumero() {
  return parseInt(Math.random() * 10 + 1);  
}

function limpaCampo() {
    chute = document.querySelector('input');
    chute.value = '';    
}

function nvJogo() {
    limpaCampo();
    numeroSecreto = gerarNumero();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}