let att = document.querySelector('#att');
let attTentativas = document.querySelector('.att-tentativas');
let reinicio = document.querySelector('#reinicio')
let winner = document.querySelector('#win');

let aleatorio = Math.ceil(Math.random() * 100);
 
let tentativas = 1;
let venceu = false;

document.querySelector('#form').addEventListener('submit', abobora)

function abobora(evento){
    evento.preventDefault()
    let pergunta = Number(document.querySelector('#pergunta').value)
    
    if(!pergunta == ''){
        
        if(pergunta > aleatorio){
            att.innerHTML = `Muito alto`
            console.log('Muito alto')
        } else if(pergunta < aleatorio) {
            att.innerHTML = `Muito baixo`
            console.log('Muito baixo')

        } else {
            att.innerHTML = `Muito bem! O número secreto era: ${aleatorio}`
            console.log('Muito bem')
            venceu = true;
            win()
        }

        attVisual()
        console.log(venceu)
    }
}

function attVisual(){
    attTentativas.classList.add('att-background')
    attTentativas.innerHTML = `Tentativas: ${tentativas++}`
    setTimeout(() => {
        attTentativas.classList.remove('att-background')    
    }, 300)
}

function win(){
    winner.style.display = 'block'
}

function resetGame(){
    tentativas = 0;
    venceu = false;
    attTentativas.innerHTML = `Tentativas: ${tentativas}`
    winner.style.display = 'none'
}

console.log(venceu)
console.log(aleatorio)
