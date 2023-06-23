falaOi();

function falaOi (){
    console.log('oie')
}

//First-class (obj de primeira class)

const souUmDado = function (){
    console.log('sou um dado')
};

souUmDado();


//Ex:

/*function executaFuncao (funcao){
    funcao();
}

executaFuncao(souUmDado)*/


//Arrow function 

const funcaoArrow = () => {
    console.log('Sou uma arrow function')
}

funcaoArrow();