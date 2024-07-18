let att = document.querySelector('#att');
let attTentativas = document.querySelector('.att-tentativas');
let reinicio = document.querySelector('#reinicio');
let winner = document.querySelector('#win');
let attMen = document.querySelector('#attMen')
let attTent = document.querySelector('#attTent')
let pergunta = document.querySelector('#pergunta')

// Gera um valor aleatorio
let aleatorio = () => Math.ceil(Math.random() * 100);
let ale = aleatorio()

let tentativas = 1;
let venceu = false; // Ta aqui so de enfeite por enquanto rs

// Escuta o evento de envio do form
document.querySelector('#form').addEventListener('submit', abobora)

// Função principal
function abobora(evento){
    evento.preventDefault()
    let perguntaReal = Number(pergunta.value)
    
    if(!pergunta.value == ''){
        
        if(perguntaReal > ale){
            att.innerHTML = `Muito alto`
        } else if(perguntaReal < ale) {
            att.innerHTML = `Muito baixo`
        } else {
            console.log('Muito bem')
            venceu = true;
            win()
        }

        attVisual()
        console.log(venceu)
        console.log(perguntaReal)
    }
}

// Resposta visual para o usuario
function attVisual(){
    attTentativas.classList.add('att-background')
    attTentativas.innerHTML = `Tentativas: ${tentativas++}`
    setTimeout(() => {
        attTentativas.classList.remove('att-background')    
    }, 300)
}

// Chama uma tela de vitoria
function win(){
    winner.style.display = 'block'
    attMen.innerHTML = `Muito bem! </br> O número secreto era: ${ale}</br>`
    attTent.innerHTML = `Você usou ${tentativas} tentativas.`;
}

// Limpa os parametros para reiniciar o jogo
function resetGame(){
    attMen.innerHTML = ''
    attTent.innerHTML = ''
    pergunta.value = '';
    tentativas = 1;
    venceu = false;
    ale = aleatorio()
    winner.style.display = 'none'
    attTentativas.innerHTML = `Tentativas: ${tentativas}`;
}