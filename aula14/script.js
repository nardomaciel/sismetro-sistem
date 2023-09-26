var valor;
var operacao;
function efet_soma(){
    if (typeof valor != typeof undefined && typeof operacao != typeof undefined){
        valor = operacao(valor, Number(document.getElementById("valor").value));
    }
        else {
            valor = Number(document.getElementById("valor").value);
            document.getElementById("valor").value ="";
        }
    
    operacao = soma; 
    }
function resultado(){
    document.getElementById("valor").value = operacao(valor, Number(document.getElementById("valor").value))
    valor = undefined
    operacao = undefined
}
function insere_0(){
    document.getElementById("valor").value =  document.getElementById("valor").value.concat(0);
   
}
function insere_1(){
    document.getElementById("valor").value =  document.getElementById("valor").value.concat(1);
   
}
function insere_2(){
    document.getElementById("valor").value =  document.getElementById("valor").value.concat(2);
   
}
function insere_3(){
    document.getElementById("valor").value =  document.getElementById("valor").value.concat(3);
   
}
function insere_4(){
    document.getElementById("valor").value =  document.getElementById("valor").value.concat(4);
   
}
function insere_5(){
    document.getElementById("valor").value =  document.getElementById("valor").value.concat(5);
   
}
function insere_6(){
    document.getElementById("valor").value =  document.getElementById("valor").value.concat(6);
   
}
function insere_7(){
    document.getElementById("valor").value =  document.getElementById("valor").value.concat(7);
   
}
function insere_8(){
    document.getElementById("valor").value =  document.getElementById("valor").value.concat(8);
   
}
function insere_9(){
    document.getElementById("valor").value =  document.getElementById("valor").value.concat(9);
   
}
function exc_num(){
    document.getElementById("valor").value = document.getElementById("valor").value.substring(0,document.getElementById("valor").value.length -1) 
}


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