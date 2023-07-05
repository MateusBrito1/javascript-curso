function* geradora1() {
    // Código qualquer...
    yield 'Valor 1';
    // Código qualquer...
    yield 'Valor 2';
    // Código qualquer...
    yield 'Valor 3';
}




function* geradora2 () {
    let i = 0;

    while(true) {
        yield i;
        i++
    }
}
const g2 = geradora2();



const g1 = geradora1();
console.log(g1.next().value)
console.log(g1.next().value)

for(let valor of g1) {
    console.log(valor)
}



function* geradora3 () {
    yield 0
    yield 1
    yield 2
}

function* geradora4 () {
    yield* geradora3 ();
    yield 'continua'
    yield 3
    yield 4
}

const g4 = geradora4 ();

for(let valor of g4) {
    console.log(valor) 
}


function* geradora5 () {
    yield function () {
        console.log('Etapa 1');
    }

    //Mais código por exemplo...

    yield function () {
        console.log('Etapa y2 2')
    }
}

const g5 = geradora5 ();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1()
func2()





