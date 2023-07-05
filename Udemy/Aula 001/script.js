const numero = Number(prompt('Qual é o seu numero?'))
const texto = document.getElementById('texto')
const numeroTitulo = document.getElementById('numero-titulo')


numeroTitulo.innerHTML = numero;
texto.innerHTML = ''
texto.innerHTML += `<p> A raiz quadrada de ${numero ** 0.5} </p>`
texto.innerHTML += `<p> ${numero} é inteiro: ${Number.isInteger(numero)} </p>`
texto.innerHTML += `<p> ${numero} é Nan: ${Number.isNaN(numero)} </p>`
texto.innerHTML += `<p> Arredondando para baixo: ${Math.floor(numero)} </p>`
texto.innerHTML += `<p> Arredondando para cima: ${Math.ceil(numero)} </p>`
texto.innerHTML += `<p> Com duas casas decimais: ${numero.toFixed(2)}</p>`
