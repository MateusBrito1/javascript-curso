const h1 = document.querySelector("#res");

function attHour() {
  const data = new Date();
  const options = { dateStyle: "long", timeStyle: "medium" };
  const formatedDate = data.toLocaleString("pt-BR", options);

  let sem;

  if (data.getDay() === 0) {
    sem = "domingo";
  } else if (data.getDay() === 1) {
    sem = "segunda-feira,";
  } else if (data.getDay() === 2) {
    sem = "terça-feira,";
  } else if (data.getDay() === 3) {
    sem = "quarta-feira,";
  } else if (data.getDay() === 4) {
    sem = "quinta-feira,";
  } else if (data.getDay() === 5) {
    sem = "sexta-feira";
  } else if (data.getDay() === 6) {
    sem = "sabado";
  } else {
    sem = "Semana invalida!";
  }
  h1.innerHTML = `${sem} ${formatedDate}`;
}
attHour();

setInterval(attHour, 1000);
