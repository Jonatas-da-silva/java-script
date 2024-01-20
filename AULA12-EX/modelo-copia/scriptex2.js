function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if ( fano.value.length == 0 ||Number(fano.value) > ano){
        window.alert('[ERRO] Verifique se os dados estão corretos e tente novamente')  
    } else{
        var fsex = document.getElementsByName('radsex') 
        var idade = ano - Number(fano.value)       
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex [0].checked){
            gênero = 'Homem'
            if(idade >=0 &&  idade <=10){
                img.setAttribute('src', 'bebecortado.png')

            }else if( idade <21){
                img.setAttribute('src', 'hjovem.png')

            }else if(idade <50){
                img.setAttribute('src', 'homemcortado.png')

            }else{
                img.setAttribute('src', 'velhor.png')

            }
        } else if(fsex [1].checked){
            gênero = 'Mulher'
            if(idade >=0 &&  idade <=10){
                img.setAttribute('src', 'bebcortada.png')

            }else if( idade <21){
                img.setAttribute('src', 'mjovem.png')
            }else if(idade <50){
                img.setAttribute('src', 'madulta.png')
            }else{
                img.setAttribute('src', 'mvelha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com idade ${idade} anos`
        res.appendChild(img)
    }
}
