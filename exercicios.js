//exercicio 1 ------------------------------------------------------------------------------------------
function ex1(){

    i = 0
    j = 0
    k = 0
    l = 0
   console.log("Grupo A: ")
   while(i < 4){
       i++
       gpa = [Math.floor(Math.random() * 10)]
       console.log(gpa);
      
   }  
   console.log("Grupo B: ")
   while(j < 4){
       j++
       gpb = [Math.floor(Math.random() * 10)]
       console.log(gpb);
       
   }
   console.log("Grupo C: ")
   while(k < 4){
       k++
       gpc = [Math.floor(Math.random() * 10)]
       console.log(gpc);
   }
   console.log("Grupo D: ")
   while(l < 4){
       l++
       gpd = [Math.floor(Math.random() * 10)]
       console.log(gpd);
   }
    
}
//exercicio 2 ------------------------------------------------------------------------------------------
function ex2(){
    let preco = 5.0
    let qtde = 120
    const despesa = 200
    let lucro = 0
    let saida = "<table border = '1'><tr> <th>Preço</th> <th>Quantidade</th> <th>Despesa</th> <th>Lucro</th> </tr>"

    while(preco >= 1.0){
        lucro = (preco * qtde) - despesa
        saida = saida + `<tr>  <td>${preco}</td> <td>${qtde}</td> <td>${despesa}</td> <td>${lucro}</td> </tr>`
        preco = preco - 0.50
        qtde = qtde + 26
        
    }
    saida = saida + "</table>"
    document.getElementById("tabela").innerHTML = saida
}
//exercicio 3 ------------------------------------------------------------------------------------------
function ex3(){
let pessoas = 0
let qtde = 0; let faixa1 = 0; let faixa2 = 0; let faixa3 = 0; let faixa4 = 0; let faixa5 = 0

while(pessoas < 8){
    
    qtde = Number(prompt("Informe a idade " + pessoas +":"))
    pessoas ++
    //Parte "a" do exercicio

    if(qtde <= 15){
        faixa1 ++
    }
    else if(qtde >= 16 && qtde <= 30){
        faixa2 ++
    }
    else if(qtde >= 31 && qtde <= 45){
        faixa3 ++
    }
    else if(qtde >= 46 && qtde <= 60){
        faixa4 ++
    }
    else if(qtde > 60){
        faixa5 ++
    }
    else {alert("Idade negativa")}  
}
 
let porcentagem = (100 * faixa1) / 8    
let porcentagem1 = (100 * faixa5) / 8 

console.log("Existem: " + faixa1 + " pessoas da faixa etária 1")
console.log("Existem: " + faixa2 + " pessoas da faixa etária 2")
console.log("Existem: " + faixa3 + " pessoas da faixa etária 3")
console.log("Existem: " + faixa4 + " pessoas da faixa etária 4")
console.log("Existem: " + faixa5 + " pessoas da faixa etária 5")
console.log("------------------------------------------------")
console.log(porcentagem + "% das idades estão na faixa etária 1")
console.log("------------------------------------------------")
console.log(porcentagem1 + "% das idades estão na faixa etária 5")

}

//exercicio 4 ------------------------------------------------------------------------------------------

function ex4(){
   
        let numero = Number(prompt("Informe um numero: "))
        let cont = 0
        while(cont <= 9){
            cont ++
            resultado = numero * cont
            console.log(numero + " x " + cont + " = " + resultado)
        }
    
}

//exercicio 5 ------------------------------------------------------------------------------------------

function ex5(){
    
     i = 0
     j = 0
     k = 0
     l = 0
     m = 0
     n = 0
     o = 0
     p = 0
     q = 0
     r = 0
    console.log("TABUADA DO 1")
    while(i < 10){
        i ++
        resultado = 1 * i
        console.log("1" + " x " + i + " = " + resultado)
    }
    console.log("TABUADA DO 2")
    while(j < 10){
        j ++
        resultado = 2 * j
        console.log("2" + " x " + j + " = " + resultado)
    }
    console.log("TABUADA DO 3")
    while(k < 10){
        k ++
        resultado = 3 * k
        console.log("3" + " x " + k + " = " + resultado)
    }
    console.log("TABUADA DO 4")
    while(l < 10){
        l ++
        resultado = 4 * l
        console.log("4" + " x " + l + " = " + resultado)
    }
    console.log("TABUADA DO 5")
    while(m < 10){
        m ++
        resultado = 5 * m
        console.log("5" + " x " + m + " = " + resultado)
    }
    console.log("TABUADA DO 6")
    while(n < 10){
        n ++
        resultado = 6 * n
        console.log("6" + " x " + n + " = " + resultado)
    }
    console.log("TABUADA DO 7")
    while(o < 10){
        o ++
        resultado = 7 * o
        console.log("7" + " x " + o + " = " + resultado)
    }
    console.log("TABUADA DO 8")
    while(p < 10){
        p ++
        resultado = 8 * p
        console.log("8" + " x " + p + " = " + resultado)
    }
    console.log("TABUADA DO 9")
    while(q < 10){
        q ++
        resultado = 9 * q
        console.log("9" + " x " + q + " = " + resultado)
    }
    console.log("TABUADA DO 10")
    while(r < 10){
        r ++
        resultado = 10 * r
        console.log("10" + " x " + r + " = " + resultado)
    }


}

//exercicio 6 ------------------------------------------------------------------------------------------

function ex6(){
    let totalPrazo = 0
    let totalVista = 0  
    let total = 0
    let codigo 
    let valor

    for(let cont = 1; cont <= 5; cont++){
        codigo = prompt("Informe V ou P como código de compra").toUpperCase()
        valor= Number(prompt("Informe o valor da compra"))
        if(codigo == 'V'){
            totalVista += valor
        }
        else if(codigo == 'P'){
            totalPrazo += valor
        }
        else{
            alert("Código invalido")
            cont--
        }
    }
    total = totalVista + totalPrazo
    alert(`Total a prazo: ${totalPrazo}, Total a vista: ${totalVista} e Total: ${total}`)
    alert(`Valor da 1° prestação ${(totalPrazo / 3).toFixed(2)}`)
}

//exercicio 7 ------------------------------------------------------------------------------------------

function ex7(){
    let idade, altura, peso
    let idade50 = 0, somaAltura = 0
    let contaAltura = 0, peso40 = 0
    
    for(let cont = 1; cont <= 2; cont++){
        idade = Number(prompt("Informe a idade: "))
        altura = Number(prompt("Informe a altura: "))
        peso = Number(prompt("Informe o peso: "))
        if(idade > 50){
            idade50++
        }
        else if(idade >=10 && idade <= 20){
            somaAltura += altura
            contaAltura++
        }
        if(peso < 40){
            peso40++
        }
    }
    alert(`Idade maior que 50 ${idade50}`)
    alert(`Média de altura com idade entre 10 e 20: ${somaAltura / contaAltura}`)
    alert(`Porcentagem peso menor que 40: ${peso40/2*100}%`)
}
//exercicio 8 -------------------------------------------------------------------------------------------
function ex8(){
    let idade, peso, altura, olhos, cabelo
    let contMaior50 = 0;
    let medIdade = 0;
    let altMenor50 = 0;
    let pOlhosazuis = 0;
    let ruivoSolhoA = 0;
    let porcentagem = 0;
    for(let i = 0; i < 3; i++){
        idade = Number(prompt("Digite a idade: "))
        peso = Number(prompt("Digite o peso: "))
        altura = Number(prompt("Digite a altura: "))
        olhos = prompt("Digite uma cor de olhos de acordo com a tabela: ")
        cabelo = prompt("Digite uma cor de cabelos de acordo com a tabela: ")

        if(idade >= 50 && peso <= 60){
            contMaior50++
        }
        if(altura < 1.50){
            altMenor50 += idade 
        }
        if(olhos == "A"){
            pOlhosazuis++
        }
        if(cabelo == "R" && olhos != "A"){
            ruivoSolhoA++
        }
    }
    medIdade = altMenor50 / 3
    porcentagem = (pOlhosazuis *100) / 3

    alert(`Existem ${contMaior50} pessoas com mais de 50 anos e peso inferior a 60kg`)
    alert(`A media das idades das pessoas com menos de 1.50 de altura é: ${medIdade}`)
    alert(`Porcentagem de pessoas com olhos azuis é: ${porcentagem}`)
    alert(`Quantidades de pessoas ruivas sem olhos azuis: ${ruivoSolhoA}`)

    document.getElementById("tabela").innerHTML = saida
}

//exercicio 9 ------------------------------------------------------------------------------------------





//exercicio 10 ------------------------------------------------------------------------------------------
function ex10(){
    let num
    let nPares = 0; let nPrimos = 0;
    let somaPar = 0; let somaPrimo = 0;
    for(let i = 0; i <= 4; i++){
        num = Number(prompt(`Informe o numero ${i+1}:`))
        if(num % 2 == 0){
            nPares = num
            somaPar += nPares
        }
        else if(num % num == 0 && num % 1 == 0){            
            nPrimos = num
            somaPrimo += nPrimos
        }
    }
    alert(`A soma dos pares é ${somaPar}`)
    alert(`A soma dos primos é ${somaPrimo}`)
}
//exercicio 20 ------------------------------------------------------------------------------------------

function ex20(){
    let opc, nota1, nota2, nota3, pn1, pn2, pn3
    do{
        opc = Number(prompt("Menu de opções \n 1. Média aritmética \n 2. Média ponderada \n 3. Sair"))
        switch(opc){
            
            case 1: nota1 = Number(prompt('Informe a nota 1: '))
                    nota2 = Number(prompt('Informe a nota 2: '))
                    alert(`Média aritmética ${(nota1 + nota2) / 2}`); break 
            
                    case 2: nota1 = Number(prompt('Informe a nota 1: '))
                    pn1 = Number(prompt('Informe o peso da nota 1: '))

                    nota2 = Number(prompt('Informe a nota 2: '))
                    pn2= Number(prompt('Informe o peso da nota 2: '))
                    
                    nota3 = Number(prompt('Informe a nota 3: '))
                    pn3 = Number(prompt('Informe o peso da nota 3: '))

                    alert(`Média ponderada: ${((nota1 * pn1) + (nota2 * pn2) + (nota3 * pn3)) / (pn1 + pn2 + pn3)}`);break

            case 3: alert("Programa encerrado"); break
            default: alert("Opção inválida")
        }
    }
    while(opc != 3){

    }
}