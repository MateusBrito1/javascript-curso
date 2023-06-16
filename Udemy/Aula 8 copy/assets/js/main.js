//Caputar o evento de submit do formulario
const form = document.getElementById('form')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Evento previnido.')
    pegarResultado('Olá mundo!')
});

function pegarResultado (msg){
    const resultado = document.getElementById('resultado')
    resultado.innerHTML = `<p>${msg}</p>`
}




