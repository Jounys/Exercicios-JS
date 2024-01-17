// Verificar se a letra ja foi enviada e se for verdade retornar -(menos) uma vida
// Add as letras enviadas em um array para comparação futura
// Verificar se a letra está correta e imprimir na tela
let letras = []
let vida = 5
let palavraAleatoria = ['arroz', 'carne', 'feijao', 'maria', 'tapioca', 'cafe']

const numAleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
const pegarPalavra = () => palavraAleatoria[numAleatorio(0, palavraAleatoria.length - 1)]
let forca = pegarPalavra()

document.getElementById('botaoEnviar').addEventListener('click', jogar)

function jogar(){
    const txt = document.getElementById('txt').value
    const res = document.getElementById('res')
    const vidaMostrar = document.getElementById('vida')
    const letrasForca = document.getElementById('letras')

    // Add as letras do user no array e se não for true perde uma vida e verifica se a letra ja foi enviado perdendo uma vida tbm
    if(letras.includes(txt)){
        alert('letras ja enviada')
        vida--
        vidaMostrar.innerHTML = `Vidas: ${vida}`
    } else {
        letras.push(txt)
        if(!forca.includes(txt)){
            alert('Errado! Perdeu uma vida')
            vida--
            vidaMostrar.innerHTML = `Vidas: ${vida}`
        }
        letrasForca.innerHTML += `${txt} `
    }

    if(vida <= 0){
        alert('Fim de jogo. Você perdeu!')
    }

    let array = forca.split('')
    let letrasAdivinhadas = '';

    if(txt.trim() === ''){
        alert('Digite uma letra.')
    } else {
        for(let i = 0; i < array.length; i++){
            if(letras.includes(array[i])){ 
                letrasAdivinhadas += `${array[i]} `    
            } else {
                letrasAdivinhadas += '_ ';
            }
        }
        res.innerHTML = letrasAdivinhadas;
        console.log(letrasAdivinhadas)
    }

    if (forca.split('').every(letra => letras.includes(letra))) {
        alert('Parabéns! Você acertou a palavra!');
        console.log(forca.split(''))
        // Aqui você pode fazer o que desejar ao acertar a palavra, por exemplo, reiniciar o jogo.
    }
    
    console.log(letras)
    console.log(vida)
}