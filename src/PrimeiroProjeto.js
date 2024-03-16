let nomeUsuario = "Gabriela"
let xpUsuario = 9980
let nivelUsuario = ""

if (xpUsuario <= 1000) {
  nivelUsuario = "Ferro"
// Menor ou igual a

} else if (xpUsuario <= 2000) {
  nivelUsuario = "Bronze"
// Menor ou igual a

} else if (xpUsuario <= 6000) {
  nivelUsuario = "Prata"
// Menor ou igual a

} else if (xpUsuario <= 7000) {
  nivelUsuario = "Ouro"
// Menor ou igual a

} else if (xpUsuario <= 8000) {
    nivelUsuario = "Platina"
// Menor ou igual a

} else if (xpUsuario <= 9000) {
  nivelUsuario = "Ascendente"
// Menor ou igual a

} else if (xpUsuario <= 10000) {
  nivelUsuario = "Imortal"
// Menor ou igual a

} else if (xpUsuario >= 10001) {
  nivelUsuario = "Radiante"
// Maior ou igual a

}

console.log("O Herói de nome " + nomeUsuario + " está no nível de " + nivelUsuario)