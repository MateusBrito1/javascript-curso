const divParagrafos = document.querySelector('.div-paragrafos')
const paragrafos = document.querySelectorAll('p')

const boddd = document.querySelector('.trocar')

const styleBody = getComputedStyle(document.body);

const colorbody = styleBody.background;
const backgroundcolorBody = styleBody.backgroundColor;
console.log(colorbody)


for (let p of paragrafos){
    p.style.background = 'rgb(65, 139, 158)'
    p.style.color = 'white'
}

function mudarCor (body){
    boddd.style.background = 'purple'
}

mudarCor();