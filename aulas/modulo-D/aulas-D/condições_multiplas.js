let agora = new Date()
let diaSem= agora.getDay()
/* 
 0 = domingo
 1=segunda
 2=terça
 3=quarta
 4=quinta
 5=sexta
 6=sábado
*/
switch(diaSem){
    case 0:
        console.log('Domingo')
        break;
    case 1:
        console.log('Segunda-feira')
        break;
    case 2:
        console.log('Terça-feira')
        break;
    case 3:
        console.log('Quarta-feira')
        break;
    case 4:
        console.log('Quinta-feira')
        break;
    case 5:
        console.log('Sexta-feira')
        break;
    case 6:
        console.log('Sábado')
        break;
    default:
        console.log('[ERRO] Dia da semana inválido')
}