function tabuada(){
    var num = document.getElementById('numero')
    var resultado = document.getElementById('tabuada')
    if(num.value.length == 0){
        window.alert('Digite um número')
    }else{
        
        var num = Number(num.value)
        var c = 1
        resultado.innerHTML = ''
        while(c <= 10){
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num * c}`
            item.value = `tab${c}`
            resultado.appendChild(item)
            c++
        }
    }
    
    
}
