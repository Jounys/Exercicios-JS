// Verificar se a letra ja foi enviada e se for verdade retornar -(menos) uma vida
// Add as letras enviadas em um array para comparação futura
// Verificar se a letra está correta e imprimir na tela
let palavraAleatoria = ['arroz', 'carne', 'feijao', 'maria', 'tapioca', 'cafe', 'macarrao', 'munguza', 'frango', 'joao', 'fernando', 'rita', 'rebeca', 'josefa', 'wilson', 'ilza', 'rian', 'zara', 'suzi', 'luva', 'cadeira', 'telivisao']

const res = document.getElementById('res')
const numAleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
const pegarPalavra = () => palavraAleatoria[numAleatorio(0, palavraAleatoria.length - 1)]
let vida = 6
let letras = []
let forca = pegarPalavra()

document.getElementById('dicaInicial').innerHTML = `Dica: Tem ${forca.length} letras.`
document.getElementById('botaoEnviar').addEventListener('click', jogar)

function jogar(){
    const txt = document.getElementById('txt').value.trim().toLowerCase();
    const mostrarVida = document.getElementById('vida');
    const letrasForca = document.getElementById('letras');

    if(txt === ''){
        alert('Digite uma letra.')
    }

    // Add as letras do user no array e se não for true perde uma vida e verifica se a letra ja foi enviado perdendo uma vida tbm
    if(letras.includes(txt)){
        alert('letras já enviada.')
        vida--
    } else {
        letras.push(txt)
        if(!forca.includes(txt)){
            alert('Errado! Perdeu uma vida.')
            vida--
        }
        letrasForca.innerHTML += `${txt} `
    }

    if(vida <= 0){
        alert('Fim de jogo. Você perdeu!')
        reiniciarJogo();
    }

    atualizarPalavra()
    mostrarVida.innerHTML = `Vidas: ${vida}`;

    if (forca.split('').every(letra => letras.includes(letra))) {
        alert('Parabéns! Você acertou a palavra!');
        console.log(forca.split(''))
        reiniciarJogo();
        // Aqui você pode fazer o que desejar ao acertar a palavra, por exemplo, reiniciar o jogo.
    }

    document.getElementById('txt').value = '';
    document.getElementById('txt').focus();
    
    console.log(letras)
    console.log(vida)
}

function atualizarPalavra(){
    let letrasAdivinhadas = '';

    for(let i = 0; i < forca.length; i++){
        if(letras.includes(forca[i])){
            letrasAdivinhadas += `${forca[i]} `
        } else {
            letrasAdivinhadas += '_ '
        }
    }
    res.innerHTML = letrasAdivinhadas
}

function reiniciarJogo(){
    letras = [];
    vida = 8;
    forca = pegarPalavra();
    location.reload(true);

    document.getElementById('txt').value = '';
    document.getElementById('res').innerHTML = '';
    document.getElementById('letras').innerHTML = '';
    document.getElementById('vida').innerHTML = `Vidas: ${vida}`;
}