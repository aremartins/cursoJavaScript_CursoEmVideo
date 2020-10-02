var idade = 67;
console.log (`Você tem ${idade} anos`)
if( idade < 16) {
    console.log("Não vota")
}else if (idade < 18 || idade >= 67) {
        console.log("voto opcional")
    }else if (idade > 18) {
        console.log("voto obrigatório")
    }