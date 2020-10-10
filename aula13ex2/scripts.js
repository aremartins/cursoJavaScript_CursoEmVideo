function enviar() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML= ''
        for (let c = 0; c <= 10; c ++) {
             item = document.createElement('option')
             item.text = `${c} X ${n} = ${c*n}`
             tab.appendChild(item)
        }
    }
    
}
