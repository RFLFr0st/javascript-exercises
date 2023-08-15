function ex4(){
    let partidos = ["PT", "PSDB", "PL", "PSB"]
    let candidatos = []
    
    for(let i = 0; i < 2; i++){

        let obj = {
            codigo: Number(prompt(`Digite o codigo do candidato: `)),
            nome: String(prompt(`Digite o nome do candidato: `)),
            partido: String(prompt(`Digite o partido do candidato: `)).toUpperCase,
            qtdeVotos: Number(prompt(`Digite a quantidade de votos do candidato: `))

        }
        //verifica se o partido existe
        while(!partidos.include(obj.partido)){
            obj.partido = String(Prompt(`Partido invalido. Digite novamente: `))
        }
    }
    //adiciona os obj no vetor candidatos
    candidatos.push(obj)

    let maisVotado = obj[0].qtdeVotos
    for(let i = 0; i < 2; i++ ){
        if(obj[i].qtdeVotos > maisVotado){
            maisVotado = obj[i].qtdeVotos
        }
    }



    }