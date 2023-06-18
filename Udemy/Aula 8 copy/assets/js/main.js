// Caputar evento de submit do formulário
const form = document.querySelector ('#form')

form.addEventListener('submit', function (event) {
    event.preventDefault();
    addValores()
    setandoResposta();
    setandoNivel();
});


let peso, altura; // Declaração global das variaveis peso e altura

//Adicionando valores e referenciando aos inputs.
function addValores(){
    const inputPeso = document.querySelector('#peso')
    const inputAltura = document.querySelector('#altura')

     peso = Number(inputPeso.value);
     altura = Number(inputAltura.value);
}

//Metodo de calculo do IMC.
function getIMC(){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

//Gerando Paragrafo do IMC.
function setandoResposta (){
    const resultado = document.querySelector ('#resultado')
    const paragrafo = document.createElement("p")
    paragrafo.classList.add('paragrafo-principal')

    const imc = getIMC ();
    const nivel = nivelIMC(imc);

    resultado.appendChild(paragrafo);
    paragrafo.innerHTML = `O seu IMC é ${imc}`
}
//Gerando paragrafo do Nivel.
function setandoNivel (){
    const resultado = document.querySelector('#resultado')
    const parag = document.createElement("p")
    parag.classList.add('paragrafo-nivel')

    const imc = getIMC();
    const nivel = nivelIMC(imc);

    parag.innerHTML = `O seu nivel é ${nivel}`
    resultado.appendChild(parag);
    
    
}

//Condições do IMC

function nivelIMC (imc){ 
    let nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

if (imc >= 39.9) return nivel [5]
if (imc >= 34.9) return nivel [4]
if (imc >= 29.9) return nivel [3]
if (imc >= 24.9) return nivel [2]
if (imc >= 18.5) return nivel [1]
if (imc < 18.5)  return nivel [0] 

}





