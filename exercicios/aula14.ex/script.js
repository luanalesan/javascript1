function verificar(){
    var year= new Date()
    var anoatual = year.getFullYear()

    var data = document.getElementById('ano')
    var sex = document.getElementsByName('radsex')
    var res = document.getElementById('res')
    var ano = Number(data.value)
    var idade = anoatual - ano
    var img = document.getElementById("foto")


    if (ano == 0 || ano > anoatual){
        window.alert ('Erro! Verifique os valores!')
    }

    var genero = ''
   
    if (sex [0].checked) {
        genero = 'homem'

        if (idade >= 0 && idade < 12){
            img.src = 'menino.png'
        } else if (idade >= 12 && idade <25){
            img.src = 'homemjovem.png'
        } else if (idade >= 25 && idade < 65){
            img.src = 'homemadulto.png'
        } else{
            img.src = 'idoso.png'
        }

    } else if (sex [1].checked) {
        genero = 'mulher'
        if (idade >= 0 && idade < 12){
            img.src = 'menina.png'
        } else if (idade >= 12 && idade <25){
            img.src = 'mulherjovem.png'
        } else if (idade >= 25 && idade < 65){
            img.src = 'mulheradulta.png'
        } else{
            img.src = 'idosa.png'
        }
    }

    res.style.textAlign = 'center'
    res.innerHTML = `Você é ${genero} e tem ${idade} anos.`
        res.appendChild(img)


}

