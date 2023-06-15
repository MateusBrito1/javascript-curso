let valores = [8, 8, 7, 5, 1, 6, 0, 7]
/*
for (let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)      //Modo mais extenso.
} */

for (let pos in valores){                               //Modo mais simplificado e melhor. (Lendo = Para cada posição em valores.)
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)     
}