function soma(n1,n2){
    return n1+n2;
}
function subtracao(n1,n2){
    return n1-n2;
}
function multiplicacao(n1,n2){
    return n1*n2;
}
function divisao(n1,n2){
    return n1/n2;
}

    let n1 = document.getElementById("n1")
    let n2 = document.getElementById("n2")
   function somar(){
     document.getElementById("resultado").value = soma(Number(n1.value), Number(n2.value))
}
function subtrair(){
    document.getElementById("resultado").value = subtracao(Number(n1.value), Number(n2.value))
}
function multiplicar(){
    document.getElementById("resultado").value = multiplicacao(Number(n1.value), Number(n2.value))
}
function dividir(){
    document.getElementById("resultado").value = soma(Number(n1.value), Number(n2.value))
}