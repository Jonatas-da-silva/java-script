function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >=0 && hora < 12){
        //BOM DIA
        img.src = 'manhacortada.png'
        document.body.style.backgroundColor = '#8FB78D'
    } else if(hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'tardecortada.png'
        document.body.style.backgroundColor ='#BF8558'
    } else {
        // boa noite
        img.src = 'noitecortada.png'
        document.body.style.backgroundColor ='#3A4753'
    }
}
