function substituirPalavra(antigaPalavra, novaPalavra){
    let frase = 'Eu gosto de programar em JavaScript. JavaScript é divertido!'

    while(frase.includes(antigaPalavra)){
        frase = frase.replace(antigaPalavra, novaPalavra)
    }
    console.log(frase)
}

substituirPalavra('JavaScript', 'C#')  // WIN!!!