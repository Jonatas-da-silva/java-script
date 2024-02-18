//---Funcão para saber se um número é ímpar----//
function parimp(n){
    if(n%2 == 0){
        return 'par'
    }else{
        return'ímpar'
    }
    
}
let res = parimp(5)
console.log(`O número é ${res}`)