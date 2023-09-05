
/*
função "some" verifica se tem algum elemento parecido com o elemento que esta sendo procurado e retorna true or false
função "find" verifica se tem algum elemento parecido com o elemento que esta sendo procurado e retorna o objeto que ele encontrou
função "filter" verifica se há o elemento no vetor, podendo retornar um vetor, logo pode retornar mais de um valor
"=>" Funçao anonima com seta, uma funçao que não precisa abrir nem fechar chaves


Faça um programa em JS que guarde em um vetor dados de 5  partidos políticos: código, nome, sigla, presidente, nro de políticos

Em seguida, guarde em um vetor dados de 5 políticos: código do partido, nome do político, qtde de votos na eleição atual 
(inicie com 0) e cargo que ocupa

 Não é possível crias dois partidos com o mesmo código

 Não é possível cadastrar um político de um partido que não exista

Ao final, inicie uma votação, faça o cadastro de 10 votos, e atualize a qtde de votos do político. Não é possível 
votar em candidato que não exista, votar em um candidato de um partido errado.

Finalmente, mostrar os dados do político que teve mais votos. 
*/

principal()

let principal = () =>
{

    let partidos = []
    let politicos = []

    partidoPolitico( vetPartidos )
    candidatosPoliticos( vetPoliticos, vetPartidos )
    votacao( vetPoliticos )
}

let partidoPolitico = ( vetPartidos ) =>
{

    for ( let i = 0; i < 5; i++ )
    {
        let partido = {
            codPartido: Number( prompt( `Digite o codigo do partido ${ i + 1 }: ` ) ),
            nome: prompt( `Digite o nome do partido ${ i + 1 }: ` ),
            sigla: prompt( `Digite a sigla do partido ${ i + 1 }: ` ),
            presidente: prompt( `Digite o nome do presidente do partido ${ i + 1 }: ` ),
            numPoliticos: prompt( `Digite o numero de politicos do partido ${ i + 1 }: ` )
        }
        while ( vetPartidos.some( ( part ) => part.codPartido == partido.codigo ) )
        {
            partido.codPartido = Number( prompt( `Código já existe, informe um novo:` ) )
        }
    }
    vetPartidos.push( partido )
}

let candidatosPoliticos = ( vetPoliticos, vetPartidos ) =>
{

    for ( let i = 0; i < 5; i++ )
    {
        let polit = {
            codPartid: Number( prompt( `Digite o codigo do partido ${ i + 1 }: ` ) ),
            nomePolitico: prompt( `Digite o nome do politico ${ i + 1 }: ` ),
            qtdeVotos: 0, //Number(prompt(`Digite a quantidade de votos que o politico ${i + 1} recebeu:`)),
            cargo: prompt( `Digite o cargo que o politico ${ i + 1 } ocupa: ` )
        }

        while ( !vetPartidos.some( ( codPart ) => codPart.codPartido == polit.codPartid ) )
        {
            polit.codPartid = Number( prompt( `Partido não existe, digite o codigo novamente novamente: ` ) )
        }
    }
    vetPoliticos.push( polit )
}


let votacao = ( vetPoliticos ) =>
{

    for ( let i = 0; i < 10; i++ )
    {
        let codigoPartidoVotado = Number( prompt( `Código do partido` ) )
        let nomePolíticoVotado = prompt( `Nome do político` ).toUpperCase()
        let achou = false

        for ( let j = 0; j < politicos.length; j++ )
        {
            if ( ( vetPoliticos[ j ].codPartido == codigoPartidoVotado ) &&
                ( vetPoliticos[ j ].nomePolitico == nomePolíticoVotado ) )
            {
                vetPoliticos[ j ].qtdeVotos++
                alert( `Voto computado, acredite em mim` )
                achou = true
                break
            }
        }
        if ( !achou )
        {
            alert( `Voto inválido` )
            i--
        }
    }
}
