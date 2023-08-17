function ex5(){
    
    let marcas = ["CALOI", "SCOTT", "CANONDALE"]
    let bikes = []
    
    for(let i = 0; i < 2; i++){
        let objbike = {
            marca: String(prompt(`Digite a marca da bike ${i}: `)).toUpperCase(),
            modelo: String(prompt(`Informe o modelo da bicicleta ${i}: `)),
            quadro: Number(prompt(`Insira o tipo do quadro da bicicleta ${i}: `)),
            aro: Number(prompt(`Insira o aro da bicicleta ${i}: `)), 
            ano: Number(prompt(`Insira o ano da bicicleta ${i}: `)),
            preco: Number(prompt(`Insira o preco da bicicleta ${i}: `))
        }
        
    while(!marcas.includes(objbike.marca)){
        objbike.marca = prompt(`Digite a marca correta da bike`).toUpperCase()
    }  
    //adiciona o objbikes no vetor das bikes
    bikes.push(objbike)
    }
    //calculando  o preco medio das bikes
    let somaprecos = 0
    for(let i = 0; i < bikes.length; i++){
        somaprecos += bikes[i].preco
    }
    console.log(`A média de preço das bikes é ${somaprecos/bikes.length}`)

    //Calculando bike mais velha
    let objAntigo = bikes[0]
    for(let i = 0; i < bikes.length; i++){
        if(bikes[i].ano < objAntigo.ano){
            objAntigo = bikes[i]
        }
    }
    console.log(objAntigo)

    //quais as bikes são da marca caloi
    let bikesCaloi = []
    for(let i = 0; i < bikes.length; i++){
        if(bikes[i].marca == "CALOI"){
            bikesCaloi.push(bikes[i])//adiciona no vetor
        }
    }
    console.log(bikesCaloi)

    //contando quantas bikes tem aro 29
    let cont = 0 
    for(let i = 0; i < 2; i++){
        if(bikes[i].aro == 29){
            cont++
        }
    }
    console.log("A qtde de bikes que tem i ari 29 é igual a: ", cont)

    //qual bike tem o maior quadro
    let maiorQuadro = bikes[0]
    for(let i = 0; i < bikes.length; i++){
        if(bikes[i].quadro > maiorQuadro.quadro){
            maiorQuadro = bikes[i]
        }
    }
    console.log(maiorQuadro)
}