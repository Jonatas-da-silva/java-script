var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} hora`)
if ( hora < 12){
    console.log('Bom dia ')

} else if ( hora <= 12){
    console.log('Boa tarde')
} else{
    console.log('Boa noite')
}