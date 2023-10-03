//declara matriz
/*
let mat = []
mat[0] = []
mat[1] = []
mat[2] = []
mat[3] = []

for(let i = 0; i < 4; i++){
    mat[i] = []
    for(let j = 0; j < 4; j++){
        mat[i][j] = Number(prompt(`Digite o valor que será colocado na matriz: `))
    }
}
for(let i = 0; i < 4; i++){
    for(let j = 0; j < 4; j++){
        console.log(`${mat[i][j]}`)
    }
}


-----------------------------------------------------------------------------

function somaPrincipal(matriz){
    somaPrincipal = 0
    for(i = 0; i < 4; i++){
        for(j = 0; j < 4; j++){
            if(i == j){
                somaPrincipal += matriz[i][j]
            }
        }
    }
    console.log(``)
}
*/
function leturaMatriz(matriz){
    for(let i = 0; i < 4; i++){
        matriz[i] = [] //cria espaço para cada vetor da matriz
        alert(`Informe os elementos linha ${i + 1}:`)
    
        for(let j = 0; j < 4; j++){
            matriz[i][j] = Number(prompt(`Informe o valor do elemento [${i}][${j}]: `))
        }
    }
}

function imprimeMatriz(matriz){
    console.log(matriz)
}

function somaPrincipal(matriz){
    let soma = 0
    for(let i = 0; i < 4; i++){
        soma += matriz[i][i]
    }
    console.log(`A soma dos elementos da diagonal principal é: ${soma}`)
}

function somaSecundaria(matriz){
    let somaSec = 0
    for(let i = 0; i < 4; i++){
      somaSec += matriz[i][3-i]
}
    console.log(`A soma dos elementos da diagonal secundaria é: ${somaSec}`)
}


function principal(){
    let matriz = []
    leturaMatriz(matriz)
    imprimeMatriz(matriz)
    
}