let num = [7,8,5,4,9,1]
num[3] = 6
num.push(2) //inclui na ultima posição do array
num.length
num.sort() // ordena em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições`)

console.log('Imprimindo os valores com estrutura for mais simplificada ')
for(let pos in num) {
    console.log(`A posição ${pos} tem o valor  ${num[pos]} `)
}

console.log('Imprimindo os valores com estrutura de repetição for')
for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor  ${num[pos]} `)
}


console.log("Como encontrar valores dentro de um array")
valores = [1,2,3,4,5,6]
let pos = valores.indexOf(5) // colocamos como parâmetro o numero que estmaos pesquisando dentro do array
if (pos == -1) { //o js atribui -1 qnd nao encontra um valor
    console.log('O valor não foi encontrado')
}else {
    console.log(`O valor está na posição ${pos}`)
}

