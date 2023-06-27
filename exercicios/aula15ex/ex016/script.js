function contar (){

var i = document.getElementById('ini')
var f = document.getElementById('fim')
var p = document.getElementById('pas')
var res = document.getElementById('res')

var inicio = Number(i.value)
var fim = Number(f.value)
var passo = Number(p.value)

if (passo <=0){
    alert ('Passo inválido. Considerando PASSO 1')
    passo = 1
}
if (inicio == 0 || fim == 0 || passo == 0){
    res.innerHTML = 'Impossível contar!'
    
} else{
    res.innerHTML = 'Contando: <br>'

    var c = inicio
    if (inicio < fim){

        while (c <= fim){
            res.innerHTML += ` ${c} \u{1F449}`
            c+=passo
        }

    } else{
        while (c >= fim){
            res.innerText += `${c} \u{1F449}`
            c -= passo
        }
    }


    res.innerHTML += `\u{1F3C1}`
}
}