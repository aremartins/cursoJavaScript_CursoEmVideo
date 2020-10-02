var agora = new Date();
var hora = agora.getTime();
console.log(`Agora são exatamente ${hora} horas`);
if (hora > 1 && hora <= 12) {
    console.log("Bom dia!")
} else if (hora >= 12 || hora <= 18) {
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}