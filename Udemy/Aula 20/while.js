/*let i = 0;

while (i <= 60){
    console.log(i)
    i++
}*/

function random (min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);    //Pega em duas casa decimais.
}

const min = 1;
const max = 50;

let rand = random(min, max)

while (rand !== 20){
    rand = random(min, max);
    console.log(rand)
}


do {
    rand = random(min, max)
    console.log(rand)
} while (rand !== 20);