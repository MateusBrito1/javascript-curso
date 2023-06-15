function gerar(){
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        alert('Por favor, insira um número!')
    } else {
        let n = Number(num.value)       //Transformando em number e dando valor ao number.
        tab.innerHTML = ''              //Limpa o conteudo atual do select.
        for (let i = 1; i <= 10; i++){
            let resultado = n * i
            tab.innerHTML += `<option>${n} x ${i} = ${resultado}</option>`
        }
    }   
    
}
