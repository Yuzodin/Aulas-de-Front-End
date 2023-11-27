var agora = new Date()
var hora = agora.getHours()
if (hora < 12) {
    console.log(`Agora são ${hora} horas da manhã. Bom dia!`)
}else if(hora == 12){
    console.log(`Agora é meio dia. Boa tarde!`)
}else if(hora <= 18){
    console.log(`Agora são ${hora} horas da tarde. Boa tarde!`)
}else if(hora <= 23){
    console.log(`Agora são extamente ${hora} horas da noite. Boa noite!`)
}