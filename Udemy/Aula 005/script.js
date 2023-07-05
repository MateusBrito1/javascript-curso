let nome = document.querySelector('#nome');
let sob = document.querySelector('#sobrenome');
let pes = document.querySelector('#peso');
let alt = document.querySelector ('#altura');
let res = document.querySelector('#resultado')
let form = document.querySelector('.form')
const infos = []

function enviar(event) {
    event.preventDefault();      //Evitar recarregamento da página

    if (nome.value.length == 0 || sob.value.length == 0){
        alert('Por favor, insira')
    } else {
        infos.push(nome.value) // Adicionando os valores ao array.
        infos.push(sob.value)
        infos.push(pes.value)
        infos.push(alt.value)
        res.innerHTML += `<p> Nome: ${nome.value} Sobrenome: ${sob.value} Peso: ${pes.value} Altura: ${alt.value}</p>`
    }

 }


//Forma mais simplificada de se fazer. COM FOREACH.
/*function enviar(event){
    event.preventDefault();

    const inputs = document.querySelectorAll('.form input')
    
    if(inputs.length > 0){
        inputs.forEach(input => {
            infos.push(input.value);
        });

        res.innerHTML += `<p> Nome: ${nome.value} Sobrenome: ${sob.value} Peso: ${pes.value} Altura: ${alt.value}</p>`
    } else {
        alert ('Por favor, insura os valores')
    }
}*/