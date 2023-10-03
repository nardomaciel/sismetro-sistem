var valor;
var operacao;
var num;
var memoria = 0

function efet_soma() {
    if (typeof valor != typeof undefined && typeof operacao != typeof undefined) {
        valor = operacao(valor, Number(document.getElementById("valor").value));
    }
    else {
        valor = Number(document.getElementById("valor").value);
        document.getElementById("valor").value = "";
    }

    operacao = soma;
}
function efet_subtracao() {
    if (typeof valor != typeof undefined && typeof operacao != typeof undefined) {
        valor = operacao(valor, Number(document.getElementById("valor").value));
    }
    else {
        valor = Number(document.getElementById("valor").value);
        document.getElementById("valor").value = "";
    }

    operacao = subtracao;
}
function efet_multiplicacao() {
    if (typeof valor != typeof undefined && typeof operacao != typeof undefined) {
        valor = operacao(valor, Number(document.getElementById("valor").value));
    }
    else {
        valor = Number(document.getElementById("valor").value);
        document.getElementById("valor").value = "";
    }

    operacao = multiplicacao;
}
function efet_divisao() {
    if (typeof valor != typeof undefined && typeof operacao != typeof undefined) {
        valor = operacao(valor, Number(document.getElementById("valor").value));
    }
    else {
        valor = Number(document.getElementById("valor").value);
        document.getElementById("valor").value = "";
    }

    operacao = divisao;
}





function efet_porcent() {
    document.getElementById("valor").value = porcent(Number(document.getElementById("valor").value), valor)
}
// aaaaaaaaaaaaaaaaaaaaaaaaa

function add_num() {
    valor = mais_num(Number(document.getElementById("valor").value))
}

function subt_num() {
    valor = men_num(Number(document.getElementById("valor").value))
}
function apag_memoria(){
    memoria = 0
    return console.log(memoria)
}
function most_memo(){
    document.getElementById("valor").value = memoria
    
}
function resultado() {
    document.getElementById("valor").value = operacao(valor, Number(document.getElementById("valor").value))
    valor = undefined
    operacao = undefined
}
function add_ponto(){
    if(!document.getElementById("valor").value.includes(".")){
        document.getElementById("valor").value = document.getElementById("valor").value.concat(".");
    }
}
function inserirNum(num) {
    document.getElementById("valor").value = document.getElementById("valor").value.concat(num);
}
function exc_num() {
    document.getElementById("valor").value = document.getElementById("valor").value.substring(0, document.getElementById("valor").value.length - 1)
}
function apagar() {
    document.getElementById("valor").value = document.getElementById("valor").value.substring(0, document.getElementById("valor").value.length - document.getElementById("valor").value.length) 
}


function soma(n1, n2) {
    return n1 + n2;
}
function subtracao(n1, n2) {
    return n1 - n2;
}
function multiplicacao(n1, n2) {
    return n1 * n2;
}
function divisao(n1, n2) {
    return n1 / n2;
}
function porcent(n1, n2) {
    if (typeof n2 == typeof undefined) {
        return (n1 / 100)
    }
    else {
        return (n2 / 100) * n1
    }
}
function mais_num(n1){
    memoria += n1
    return console.log(memoria)
}
function men_num(n1){
    memoria -= n1
    return console.log(memoria)
}


let n1 = document.getElementById("n1")
let n2 = document.getElementById("n2")
function somar() {
    document.getElementById("resultado").value = soma(Number(n1.value), Number(n2.value))
}