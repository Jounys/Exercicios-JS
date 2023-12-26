function substituirPalavra(antigaPalavra, novaPalavra){
    let frase = 'Eu gosto de programar em JavaScript. JavaScript é divertido!'
    
    for(let pos = 0; pos < frase.length; pos++){
        if(antigaPalavra.includes(frase[pos])){
            frase = frase.replace(antigaPalavra, novaPalavra)
        }
    }
    console.log(frase)
}

substituirPalavra('JavaScript', 'c#')  // WIN!!!