function hora(){
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 10
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //Bom Dia
        imagem.src = 'pexels-gül-işık-3837464.jpg'
        document.body.style.backgroundClip = 'rgb(255, 235, 205)'
    }else if(hora >= 12 && hora < 18){
        //Boa Tarde
        imagem.src = 'pexels-anderson-martins-2386144 tarde.jpg'
    }else{
        //Boa Noite
        imagem.src = 'pexels-brenoanp-1136575 mais uma noite.jpg'
    }
}
