/* Array para receber os valores adicionados*/
let list = []

function adicionar(){
    let num = document.querySelector('#num')
    let tab = document.querySelector('#tab')
    
    let value = num.value
    
    
    if(value <= 0 || value >100){
        window.alert('0 não está entre 1 e 100')
        
    }else{
        if(list.indexOf(value) == -1){
        let item =document.createElement('option')
        item.text = ` ${value} Adicionado`
        tab.appendChild(item)
    
        list.push(value)
       
    }else{
        window.alert(`O valor ${value} já foi adicionado `)

    }
    num.value = ''
    num.focus()
       
    }
   
    

}

function finalizar(){
    if(tab.length == 0){
        window.alert('Nenhum valor foi adicionado')
    }else{
        let res = document.getElementById('res')
        let mai = document.getElementById('Mai')
        let men = document.getElementById('men')
        let s = document.getElementById('soma')
        let m = document.getElementById('media')

       let total = list.length
    res.innerHTML =` O total de número adicionado são ${total}`

    let maior = Math.max(...list)
    mai.innerHTML = `O maior valor adicionado foi; ${maior}`

    let menor = Math.min(...list)
    men.innerHTML = `O menor valor adicioando foi ; ${menor}`

    let soma = list.reduce((acc, val)=> acc + parseInt(val), 0)
    s.innerHTML = `A soma entres os valores da lista é: ${soma} `
    
    let media = soma / total
    m.innerHTML = `A média dos valores é; ${media}`
    }
    

 

}