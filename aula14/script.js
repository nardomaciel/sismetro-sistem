var valor;
var operacao;
var num;

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




function resultado() {
    document.getElementById("valor").value = operacao(valor, Number(document.getElementById("valor").value))
    valor = undefined
    operacao = undefined
}
function inserirNum(num) {
    document.getElementById("valor").value = document.getElementById("valor").value.concat(num);
}
function exc_num() {
    document.getElementById("valor").value = document.getElementById("valor").value.substring(0, document.getElementById("valor").value.length - 1)
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

let n1 = document.getElementById("n1")
let n2 = document.getElementById("n2")
function somar() {
    document.getElementById("resultado").value = soma(Number(n1.value), Number(n2.value))
}