let agora = new Date()
let hora = agora.getHours
if(hora <= 12){
    console.log(`Agora são exatamente ${hora} horas,  bom dia!`)
}else if(hora <= 18){
    console.log(`Agora são exatamente ${hora} horas, boa tarde`)
}else{
    console.log(`Boa noite`)
}