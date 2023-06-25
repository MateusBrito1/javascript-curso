(function (idade, peso, altura, callback){
    const sobrenome = 'Melo'
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome(`Meu nome é: Mateus`))
    }

    falaNome();
    console.log(`Minha idade é ${idade}, peso: ${peso} e altura: ${altura}`)
    
})(22, 67, 1.74)

// - - - - - - -  other exemple - -- - - - - - - -  - - //

(function() {
    let idade = 18;
    console.log('Olá', ' ' + idade + '!')
})();

//Basicamente é uma função imediata. as variaveis globais não se aplicam á ela. não se intereferem. logo, isso não polue o código.

