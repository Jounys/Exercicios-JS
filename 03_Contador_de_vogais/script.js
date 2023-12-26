const vogais = ['a','e','i','o','u'];

function contarVogais(palavra){
    let contadorVogais = 0;

    for(let posicao = 0; posicao < palavra.length; posicao++){
        //console.log(palavra)
        if(vogais.includes(palavra[posicao])){ // includes() verifica dentro do array de vogais e depois compara com a palavra identificando quantas vogais tem dentro
            contadorVogais++;
        };
    };
    console.log(`Na palavra ${palavra} tem ${contadorVogais} vogais`);
};

contarVogais('ameixa');