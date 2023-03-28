function ex1(){
    //recupera o numero 1
    let n1 = Number(document.getElementById("n1").value)
    // recupera o numero 2
    let n2 = Number(document.getElementById("n2").value)

    //calcula a subtração
    let sub = n1 - n2
    alert("Subtração do n1 e n2 = " + sub)
}
//-----------------------------------------------------------
function ex2(){
    
    //recupera o numero 1
    let n1 = Number(document.getElementById("n1").value)
    //recupera o numero 2
    let n2 = Number(document.getElementById("n2").value)
    //recupera o numero 3 
    let n3 = Number(document.getElementById("n3").value)

    //calcula a multiplicação
    let mult = n1 * n2 * n3
    alert("Multiplicação dos numeros digitados = " + mult)
}
//-----------------------------------------------------------
function ex3(){
    //recupera o numero 1
    let n1 = Number(document.getElementById("n1").value)
    //recupera o numero 2 
    let n2 = Number(document.getElementById("n2").value)

    //valida o numero 2
    if (n2 == 0){
        alert("O n2 não pode ser igual a 0")
    } else{
        //Divide o primeiro pelo segundo
        let divi = n1 / n2
        alert("Numero 1 / Numero 2 = " + divi)
    }
}
//-----------------------------------------------------------
function ex4(){
    //recupera o numero 1
    let n1 = Number(document.getElementById("n1").value)
    //recupera o numero 2
    let n2 = Number(document.getElementById("n2").value)

    //Operação considerando o peso de cada nota
    let medp = ((2 * n1) + (3 * n2)) / (2 + 3)
    alert("Com a nota 1 tendo peso 2 e a nota 2 tendo peso 3 a media ponderada sera = " + medp)
}
//-----------------------------------------------------------
function ex5(){
    //recupera o valor
    let vlr = Number(document.getElementById("vlr").value)

    //adiciona o desconto no valor
    let desc = vlr - ((vlr * 10)/ 100)
    alert("Voce ganhou 10% de desconto, o produto custará : " + desc)
}
//-----------------------------------------------------------
function ex6(){
    //recupera o salario fixo do usuario
    let salf = Number(document.getElementById("salf").value)
    //recupera as vendas do usuario
    let vendas = Number(document.getElementById("vendas").value)

    // calcula a comissao
    let comissao = (vendas * 4) / 100
    // calcula salario total
    let total = salf + comissao
    alert(" Comissão " +  comissao  + " Salário total "  +  total )
}
//-----------------------------------------------------------
function ex7(){
    //recupera o peso digitado
    let peso = Number(document.getElementById("peso").value)

    //calcula caso voce engorde 15%
    let maiorPeso = peso + ((peso * 15) / 100)
    //calcula caso 
    let menorPeso = peso - ((peso * 20) / 100)

    alert("Se voce engordar 15% ficara com: " + maiorPeso + "KG, se emagrecer 20% ficara com: " + menorPeso + "KG")
}
//-----------------------------------------------------------
function ex8(){
    //recupera o peso digitado
    let peso = Number(document.getElementById("peso").value)

    //calcula  seu peso em gramas
    let pesoemGramas = peso * 1000
    alert("Seu peso em gramas é: " + pesoemGramas)

}
//-----------------------------------------------------------
function ex9(){
    //recupera a base maior
    let bma = Number(document.getElementById("bma").value)
    //recupera a base menor
    let bme = Number(document.getElementById("bme").value)
    //recupera a altura 
    let alt = Number(document.getElementById("alt").value)

    //calcula a area do trapezio
    let result = ((bma + bme) * alt) / 2
    alert("A area do trapezio é: " + result)
}
//-----------------------------------------------------------
function ex10(){
    //recupera o lado 1
    let lado1 = Number(document.getElementById("lado1").value)
    //recupera o lado 2
    let lado2 = Number(document.getElementById("lado2").value)

    //calcula a area do quadrado
    let result = lado1 * lado2
    alert("A area do quadrado é: " + result)
}


//-----------------------------------------------------------