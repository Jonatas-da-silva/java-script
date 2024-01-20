function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length ==0){
        window.alert('[ERRO] Faltam dados')
    } else{
        res.innerHTML = 'Contando:'
        var inicio = Number(inicio.value)
        var fim= Number(fim.value)
        var passo = Number(passo.value)

        for(var c = inicio; c <= fim; c += passo){
            res.innerHTML += ` ${c}  `

        }
    }
}
