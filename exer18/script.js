function carregar(){ 
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem') 
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12) {
        img.src = 'manhã.jpg'
        document.body.style.background = '#E6B701'
    }  else if (hora < 18) {
        img.src = 'tarde.jpg'
        document.body.style.background = '#FBE3BB'
    }  else {
        img.src = 'noite.jpg'
        document.body.style.background = '#0E172D'
    }

}


