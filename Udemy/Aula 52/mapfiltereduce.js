const numeros = [5, 7, 8, 9, 10, 20, 30, 87, 65, 91, 55, 48];

const numsPrimes = numeros
  .filter((valor) => valor % 2 === 0)
  .map((valor) => valor * 2)
  .reduce((acc, valor) => acc + valor)
console.log(numsPrimes);




//[ 8, 10, 20, 30, 48 ], [ 8, 10, 20, 30, 48 ], 232.
