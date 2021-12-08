
/* Calculo de mádio nota do aluno. */


// ENTRADA DE DADOS 

let primeiro_nota = parseFloat(prompt("Digite a primeira NOTA:"))
let segunda_nota = parseFloat(prompt("Digite a segunda NOTA:"))
let terceiro_nota = parseFloat(prompt("Digite a terceira NOTA:"))
let quarta_nota = parseFloat(prompt("Digite a quarta NOTA:"))

// PROCESSAMENTO DE DADOS

let media_nota = (primeiro_nota + segunda_nota + terceiro_nota + quarta_nota) /4

// SAIDA DE DADOS

alert("NOTA do aluno: " + media_nota)