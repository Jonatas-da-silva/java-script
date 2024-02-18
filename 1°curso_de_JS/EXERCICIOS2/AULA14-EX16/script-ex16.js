function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length ==0){
        res.innerHTML = 'Impossível contar'
    } else{
        res.innerHTML = 'Contando: <br>'
        var inicio = Number(inicio.value)
        var fim= Number(fim.value)
        var passo = Number(passo.value)


        if(passo <= 0){
            window.alert('Passo inválido!')
        }
        
        if( inicio < fim){
            //contagem crescente
             for(var c = inicio; c <= fim; c += passo){
            res.innerHTML += ` ${c} \u{1F449} `
            }

        }else{
            //Contagem regressiva
            for(var c  = inicio; c >= fim; c -= passo){
                res.innerHTML += ` ${c} \u{1F449} `
                
            }

        }

        res.innerHTML += `\u{1f3c1}`
       
    }
}
