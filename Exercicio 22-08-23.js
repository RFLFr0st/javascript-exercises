function bikes ()//Função principal
{
    let bikes = []
    let marcas = [ "CALOI", "SCOTT", "CANONDALE" ]

    entradaDados( bikes, marcas ) // Os dois parametros foram passados por referência
    mediaPrecos( bikes )
    bikeAntiga( bikes )
    bikesCaloi( bikes )
    bikes29( bikes )
    maiorQuadro( bikes )
}

function entradaDados ( vet1, vet2 ) //vet1 = bikes vet2 = marcas
{

    for ( let i = 0; i < 10; i++ )
    {
        let objBike = {
            marca: prompt( "Digite a marca da bike" ).toUpperCase(),
            modelo: prompt( "Digite o modelo da bike" ),
            quadro: Number( prompt( "Digite o quadro da bike" ) ),
            aro: Number( prompt( "Digite o aro da bike" ) ),
            ano: Number( prompt( "Digite o ano da bike" ) ),
            preco: Number( prompt( "Digite o preço da bike" ) )
        }
        while ( !vet2.includes( objBike.marca ) )
        {
            objBike.marca = prompt( "Digite a marca correta da bike" ).toUpperCase()
        }
        // adiciona a bike em bikes
        vet1.push( objBike )
    }
}

function mediaPrecos ( bikes )  // média de preço das bikes
{

    let somaPrecos = 0  //Quando cria a variavel dentro da função ela não precisa ser referenciada
    for ( let i = 0; i < bikes.length; i++ )
    {
        somaPrecos = somaPrecos + bikes[ i ].preco
    }
    console.log( `A média de preço das bikes é ${ somaPrecos / bikes.length }` )
}



function bikeAntiga ( bikes )  // qual a bike mais antiga
{

    let objAntigo = bikes[ 0 ] // é a primeira
    for ( let i = 0; i < bikes.length; i++ )
    {
        if ( bikes[ i ].ano < objAntigo.ano )
        {
            objAntigo = bikes[ i ]
        }
    }
    console.log( objAntigo )
}

function bikesCaloi ( bikes )// quais as bikes são da marca caloi
{

    let bikesCaloi = []
    for ( let i = 0; i < bikes.length; i++ )
    {
        if ( bikes[ i ].marca == "CALOI" )
        {
            bikesCaloi.push( bikes[ i ] ) // adiciona no vetor
        }
    }
    console.log( bikesCaloi )
}
function bikes29 ( bikes )// qts bikes possuem aro 29
{

    let cont = 0
    for ( let i = 0; i < bikes.length; i++ )
    {
        if ( bikes[ i ].aro == 29 )
        {
            cont++
        }
    }
    console.log( `Qtde de bikes com aro 29 ${ cont }` )
}

function maiorQuadro ( bikes )   // qual a bike possui maior quadro
{
    let maiorQuadro = bikes[ 0 ]
    for ( let i = 0; i < bikes.length; i++ )
    {
        if ( bikes[ i ].quadro > maiorQuadro.quadro )
        {
            maiorQuadro = bikes[ i ]
        }
    }
    console.log( maiorQuadro )
}







