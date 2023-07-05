function myCallBack (callback) {  
    setTimeout(function (){
        console.log("Se interessou por esse filme?") //Faz algo aqui dentro, que seria a pergunta, e quando terminar, chama o callback. 
        callback();
    }, 1000) //Que executará após 1segundo as perguntas abaixo.
}

function finalCallBack () { //Faço uma função para chamar as outras funções que será executada após o callback.
    console.log("Então você vai gostar desse também!") 
    console.log("Seja bem-vindo ao nosso catálogo de filmes!")
}

myCallBack(finalCallBack); //Chamo o myCallback para executar a função primeira, e logo após o finalCallBack, que está destinado a ser chamado após a execução do primeiro.

//- - - - - - - - - - - - - - //

/*Callback é uma função que será executada dentro de outra, no momento que você achar pertinente. Daí o objeto é pra isso mesmo que você descreveu, geralmente para que uma função seja executada após outra função. Esse processo pode continuar quantas vezes você preferir, uma função, que chama outra, que chama outra, etc. Atualmente usamos muito mais promises do que callbacks*/



