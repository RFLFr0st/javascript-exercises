function lerMatriz(vetor,matriz){
    
    for(let i =0; i < 4; i++){ //Para cada aluno
        vetor.push(prompt(`Informe o nome do aluno: `))
    matriz[i] = [] //Cria um vetor dentro de outro
    for(let j = 0; j < 5;j++){ //Para cada nota
        matriz[i][j] = Number(prompt(`Informe a nota ${j+1}: `))
       }
    }
}
function calcularMedia(vetor, matriz){
    let soma
    
    for(let i = 0; i < 4; i++){//para cada aluno
        soma = 0
        for(let j = 0; j < 5; j++){//para cada nota
            soma += matriz[i][j]
        }
        if(soma / 5 < 3){
            console.log(`Aluno ${vetor[i]} está reprovado com média ${soma/5}`)
        }
        else if(soma/5 < 6){
            console.log(`Aluno ${vetor[i]} está reprovado com média ${soma/5}`)
        }
        else{
            console.log(`Aluno ${vetor[i]} está reprovado com média ${soma/5}`)
        }
    }
}

function calcularMediaGeral(matriz){
    let soma=0
    for(let i = 0; i < 4; i++ ){
        for(let j = 0; j < 4; j++){
            soma += matriz[i][j]
        }
    }
    console.log(`A média geral é ${soma/20}`)
}

function principal(){
    let vetor = []
    let matriz = []
    lerMatriz(vetor, matriz)
    calcularMedia(vetor, matriz)
    calcularMediaGeral(matriz)

}