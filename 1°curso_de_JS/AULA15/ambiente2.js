let num = [5 , 8, 2, 9, 3 ]
/*
for(let pos = 0;pos<num.length;pos++){
     console.log(`A  posição ${pos}, tem o valor ${num[pos]}`)
}
*/

//simplificando  o código acima//

for(let pos in num){
    console.log(`A  posição ${pos}, tem o valor ${num[pos]}`)
}

var pos = num.indexOf(7)// vai pesquisar um elementos dentro do array

if(pos == -1){
    console.log('O valor não foi encontrado')
}else{
    
     console.log(`O valor 8 se encontra na posição ${pos}`)

}

