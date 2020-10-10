function contar() {
    var n1 = document.getElementById('n1')
    var n2 = document.getElementById('n2')
    var n3 = document.getElementById('n3')
    var res =document.getElementById('msg')
    var i = Number(n1.value)
    var p = Number(n2.value)
    var f = Number(n3.value)
    if (n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0){
        res.innerHTML = "Impossível contar!"
    }else if (n2.value == 0){
        window.alert('Passo inválido! Considerando passo 1')
    } else {
        res.innerHTML = "Contando..."
        for (let c = i ; c <= f; c += p ){
        //window.alert(i)
        res.innerHTML += ` ${c} \u{1F603}`
    

    }
    
        
    }

    

}