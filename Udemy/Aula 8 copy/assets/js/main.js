//Caputar o evento de submit do formulario

const form = document.getElementById('#form')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Evento previnido.')
});




