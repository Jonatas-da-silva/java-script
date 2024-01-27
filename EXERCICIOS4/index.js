function adicionar(){
    let num = document.querySelector('#num')
    let tab = document.querySelector('#tab')
    
    let value = num.value
    let list = [value]
    
    if(value <= 0){
        window.alert('0 não está entre 1 e 100')
    }else{
        
        let item =document.createElement('option')
        item.text = ` ${value} Adicionado`
        tab.appendChild(item)

    }
   
    

}