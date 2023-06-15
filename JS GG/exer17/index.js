function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')             //Pode ser querySelector
    var res = document.getElementById('res')    
    if (fAno.value.length == 0 || fAno.value > ano) {       //'fano.value.length' Diz que se a caixa estiver vazia ou se o 'fano.value > ano' for acima de Ano atual ele irá dar erro, pois ultrapassa do nosso ano atual. 
        window.alert('Tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')    // Pegando o nome do radio com uma var de FormularioSex
        var idade = ano - (fAno.value)                    //Pegando o ano que está em getfullYear - o ano digitado que estará no fano.value.
        var gênero = ''
        var img = document.createElement('img')            //Aqui  cria uma tag img, como se fosse html <img>
        img.setAttribute('id', 'foto')                     //Aqui  cria um id para a img com a id chamada 'foto'
        if (fsex[0].checked){                             // Checked ou opções ao todo sempre começa com [0] e logo após [1]. Quando clicar nessa opção aparecerá Homem.
            gênero = 'Homem'
            if (idade >=0 && idade < 10){
                    //Criança
            }   else if (idade < 21) {
                    //Jovem
            }   else if (idade < 50){
                    //Adulto
                    img.setAttribute('src', 'imagens/h-adulto.png')         //chama a img com um 'src' origem, e depois o local da imagem.
            }   else {
                    //Idoso
            }
        } else if (fsex[1].checked) { 
            gênero = 'Mulher'
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'imagens/bebe-m.png')               //chama a img com um 'src' origem, e depois o local da imagem.
        }   else if (idade < 21) {
                //Jovem
        }   else if (idade < 50){
                //Adulto
        }   else {
                //Idoso
                img.setAttribute('src', 'imagens/idosa-m.jpg')
        }
        }
        res.style.textAlign = 'Center'                     // Para centralizar o texto.
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)                               //Adicionar um elemento, e é o elemento IMG. 
    }       
}