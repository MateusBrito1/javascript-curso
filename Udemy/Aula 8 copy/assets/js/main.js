//Caputar o evento de submit do formulario
let peso = document.getElementById('peso')
let altura = document.getElementById('altura')
const form = document.getElementById('form')



form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Evento previnido.')
});




