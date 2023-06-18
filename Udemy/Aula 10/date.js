
let sem;

switch (new Date().getDay()){
    case 0:
        sem = "domingo"
        break;
    case 1:
        sem = "segunda"
        break;
    default:
}

console.log(sem)


if (new Date().getDay() === 0){
    sem = 'Bom domingo, usuario!'
} else if (new Date().getDay() === 1) {
    sem = 'Boa segunda, usuario!'
} else if (new Date().getDay() === 2){
    sem = 'Boa terça, usuario!'
} else if (new Date().getDay() === 3){
    sem = 'Boa quarta, usuario'
} else if (new Date().getDay() === 4){
    sem = 'Boa quinta, usuario'
} else if (new Date(). getDay() === 5){
    sem = 'Boa sexta, usuario'
} else if (new Date(). getDay() === 6){
    sem = 'Bom sabado, usuario' 
} else {
    sem = 'Semana invalida!'
}

console.log(sem)


const diaDaSemana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
   
  const data = new Date();
   
  console.log(`Hoje é ${diaDaSemana[data.getDay()]}`);