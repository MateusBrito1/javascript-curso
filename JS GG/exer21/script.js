function contar (){
    let inicio = document.getElementById('ini')
    let fim = document.getElementById('fi')
    let passo = document.getElementById('pass')
    let res = document.getElementById ('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
            alert('Por favor, insira um número!')
    } else {
            res.innerHTML = 'Contando: '
            let i = Number(inicio.value)
            let f = Number(fim.value)
            let p = Number(passo.value)
        if (i < f){
            for(let contador = i; contador <= f; contador += p){
                res.innerHTML += ` ${contador}`
            }
        } else {
            for (let contador = i; contador >= f; contador -= p){
                res.innerHTML += ` ${contador}`
            }
        }
    }   
}