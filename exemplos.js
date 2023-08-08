function conta10(){

    let conta = 1

    while(conta <=10){
        console.log("Boa noite" + conta)
        conta += 1 // incremento
    }
    console.log("Depois de while " +  conta)
}

function somaIdades(){
    
    let qtde = Number(prompt("Informe a quantidade de idades que serão contabilizadas: "))
    let soma = 0
    let cont = 0
    while(cont < qtde){
        let idade = Number(prompt("Informe a idade: "))
        soma += idade
        cont ++
    }
    resultado = soma / qtde
    alert("A média das idades é igual a: " + resultado)
}

function tabuada(){
   
    let numero = Number(prompt("Informe um numero: "))
    let cont = 0
    while(cont <= 10){
        cont ++
        resultado = numero * cont
        console.log(numero + " x " + cont + " = " + resultado)
    }
    
}

//outra forma ex 4 
function ex3(){
    let f1 = 0; let f2 = 0; let f3 = 0; let f4 = 0; let f5 = 0;
    let pf1 = 0; let pf2 = 0; let idade = 0; let conta = 0;

    while(conta <= 7){
        conta++
        idade = Number(prompt(`Informe idade ${conta}`))

        if(idade >= 0 && idade <=15){
            f1++
        }
        else if(idade >= 16 && idade <= 30){
            f2++
        }
        else if(idade >= 31 && idade <=45){
            f3++
        }
        else if(idade >=46 && idade < 60){
            f4++
        }
        else if(idade >= 60){
            f5++
        }
        else {alert("Idade negativa")}
    }
 
    pf1 = (f1/8) * 100
    pf5 = (f5/8) * 100

    console.log(`f1: ${f1}, f2: ${f2}, f3: ${f3}, f4: ${f4} e f5: ${f5}`)
    console.log(`%f1: ${pf1} e %f5: ${pf5}`)
}

//ex tabuada
function ex4(){
    let numero = Number(prompt("Informe um numero: "))
    let conta = 0
    let saida = " "
    while(conta <= 10){
        saida = saida + `\n ${numero} x ${conta} = ${numero * conta}`
        conta++ 
    }
    alert(saida)


}
//-----------------------------------------------------------------------
//Ex 1 

function ex1(){
    let a, b, c, d, aux
    let cont = 1

    while(cont <= 4){
    a = Number(prompt('Informe A'))
    b = Number(prompt('Informe B'))
    c = Number(prompt('Informe C'))
    d = Number(prompt('Informe D'))
    let conta = 1
    
        while(conta <= 3){
            if(a > b){
                aux = a; a = b; b = aux;
            }
            if(b > c){
                aux = b; b = c; c = aux;
            }
            if(c > d){
                aux = c; c = d; d = aux;
            }
            conta++
        }
    alert(`Crescente: ${a}, ${b}, ${c} e ${d}`)
    alert(`Descrescente: ${d}, ${c}, ${b}, ${a} `)
    cont++
    }
}

//-------------------------------------------------------------------------
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

//------------------------------------------------------------------------
function exemplofor(){
for(let conta = 1; conta <= 10; conta++){
    console.log(`Numero ${conta}`)
}
}
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
//-------------------------------------------------------------------------

// Do while é bom p validar entrada de usuario