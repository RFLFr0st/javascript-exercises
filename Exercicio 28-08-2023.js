/*Faça um programa em JS que guarde em um vetor dados de 5  farmacias: código, Nome e endereço 

Em seguida, guarde em um vetor dados de 10 remédios: código da farmácia, nome do remédio, qtde em estoque e preço

 Não é possível crias duas farmácias com o mesmo código

 Não é possível cadastrar um remédio de uma farmácia que não exista

Ao final, efetive a compra de 5 remédios, e atualize o estoque

função "some" verifica se tem algum elemento parecido com o elemento que esta sendo procurado e retorna true or false
função "find" verifica se tem algum elemento parecido com o elemento que esta sendo procurado e retorna o objeto que ele encontrou

"=>" Funçao anonima com seta, uma funçao que não precisa abrir nem fechar chaves

------------------------------------------------------------------------------------------------
while ( !vet2.includes( objfarmacias.codigo ) )                                                -     
        {                                                                                      -    
            objfarmacias.codigo = prompt( "Digite o codigo correto da farmacia:" )             - 
        }                                                                                      - 
        // adiciona a bike em bikes                                                            - 
        vet1.push( objfarmacias )                                                              -
------------------------------------------------------------------------------------------------ 
         while ( !vetRemedios.some( ( remed ) => remed.nomeRemedio == compras.nome ) )         - 
    {                                                                                          - 
        compras.nome = prompt(`nome do remedio não encontrado. Digite novamente: `)            - 
        .toUpperCase()                                                                         -         
    }                                                                                          - 
    vetCopras.push( compras )                                                                  - 
                                                                                               - 
    atualizaEstoque = vetRemedios.qtdeEstoque - vetCompras.qtde                                - 
    alert(`Estoque atualizado. Havia ${vetRemedios.qtdeEstoque} no estoque | Agora existem     - 
    ${atualizaEstoque} no estoque do remedio ${vetRemedio.nomeRemedio}`)                       - 
------------------------------------------------------------------------------------------------         
*/

function farma ()
{
    let farmacias = []
    let remedios = []

    entradaDadosFarmas( vetFarmacias )
    entradaDadosRemedios( vetRemedios, vetFarmacias )
    vendaRemedios( vetRemedios )



}

function entradaDadosFarmas ( vetFarmacias )
{

    for ( let i = 0; i < 3; i++ )
    {
        let novaFarmacia = {
            codigo: prompt( number( `Digite o código da farmacia ${ i + 1 }: ` ) ),
            nomeRemedio: prompt( `Digite o nome da farmacia ${ i + 1 }: ` ),
            endereço: prompt( `Digite o endereço da farmacia ${ i + 1 }: ` )
        }
        //Veirificar se o codigo da novaFarmacia está  no vetor
        while ( vetFarmacias.some( ( farm ) => farm.codigo == novaFarmacia.codigo ) )                                                     
        {
            novaFarmacia.codigo = Number( prompt( `Código já existe, informe um novo:` ) )
        }
        vetFarmacias.push( novaFarmacia )
    }


}
function entradaDadosRemedios ( vetRemedios, vetFarmacias )
{
    for ( let i = 0; i < 5; i++ )
    {
        let novoRemedio = {
            codigoFarmacia: prompt( number( `Digite o código da farmacia ${ i + 1 }: ` ) ),
            nomeRemedio: prompt( `Digite o nome do remedio ${ i + 1 }: ` ).toUpperCase(),
            qtdeEstoque: prompt( `Digite a quantidade no estoque do remedio  ${ i + 1 }: ` ),
            preco: prompt( `Digite o valor do remedio: ` )
        }
        while ( !vetFarmacias.some( ( codfarm ) => codfarm.codigo == novoRemedio.codigoFarmacia ) )
        {
            novoRemedio.codigoFarmacia = Number( prompt( `Farmacia não existe, digite novamente: ` ) )
        }
        vetRemedios.push( novoRemedio )
    }
    /* Basicamente ( Enquanto a função some não achar farmacia com codigo existente, ele vai pedir novo codigo.) 
        A função com seta vai passar o codfarm como parametro usando a função some para executar a tarefa de procurar 
        se o codigo existe no vetor */
}

function vendas ( vetRemedios )
{
    for ( let cont = 0; cont < 5; cont++ )
    {
        compras = {
            cod: Number( prompt( `Digite o cod da farmacia que deseja comprar: ` ) ),
            nome: prompt( `Digite o nome do remedio desejado: ` ).toUpperCase(),
            qtde: Number( prompt( `Digite a quantidade do remedio desejado: ` ) )
        }


        let achou = false //Assume que o remedio não existe
        for ( let i = 0; i < vetRemedios.length; i++ )
        {
            if ( vetRemedios[ i ].codigoFarmacia == compras.cod && vetRemedios[ i ].nome == compras.nome )
            {
                achou = true //Achei o remedio
                //Realizando a venda
                if ( vetRemedios[ i ].qtde >= compras.qtde )
                {
                    vetRemedios[ i ].qtde = vetRemedios[ i ].qtde - compras.qtde
                }
                else
                {
                    alert( `Estoque insuficiente para esta venda` )
                }
            }
        }
        if ( !achou )
        {
            alert( `Produto não encontrao` )
        }
    }
    

}