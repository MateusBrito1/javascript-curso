const elementos= [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
]

const container = document.querySelector ('.container')
let createrDiv = document.createElement ('div')

for (let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i];
    let createrTag = document.createElement(tag);
    let createrText = document.createTextNode(texto);
    createrTag.appendChild(createrText);
    createrDiv.appendChild(createrTag);
}

container.appendChild(createrDiv);