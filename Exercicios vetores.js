//.includes = verifica se existe um valor no vetor
//.push = adiciona o valor no final do vetor 
//.indexOf = Retorna a posição de um elemento no vetor, se não encontrar ele retorna -1
function ex1(){
    let vet = [];

    for(let i = 0; i < 10; i++){
        vet[i] = Number(prompt(`Informe o ${i+1}°. Elemento`))
    }
    //percorre o vetor e cria 2 novos vetores
    
    let pares = []; let impares = [];
    let iPares = 0; let iImpares = 0; //indica vetores

    for(let i = 0; i < 10; i++){
        if(vet[i] % 2 == 0){
            pares[iPares] = vet[i]
            iPares++
        }
        else{
            impares[iImpares] = vet[i]
            iImpares++
        }
    }
    console.log(`Valores pares ${pares} e a qtde é ${pares.length}`)
    console.log(`Valores impares ${impares} e a qtde é ${impares.length}`)
}
//-------------------------------------------------------------------------------------------------
function ex2(){
    let vet = []
    for(let i = 0; i < 7; i++){
        vet[i] = Number(prompt(`Informe o Elemento: `))
    }
    for(let i = 0; i < 7; i++){
        if((vet[i] % 2 == 0) && (vet[i] % 3 == 0)){
            mult2.push(vet[i]); mult3.push(vet[i]);
            mult23.push(vet[i])
        }
        else if(vet[i] % 2 == 0){
            mult2.push(vet[i])
        }
        else if(vet[i] % 3 == 0){
            mult.push(vet[i])
        }
        console.log(`Multiplos de 2 e 3 ${mult23} com qtde ${mult23.length}`)
        console.log(`Multiplos de 2 ${mult2} com qtde ${mult2.length}`)
        console.log(`Multiplos de 3 ${mult3} com qtde ${mult3.length}`)
    }
}
//----------------------------------------------------------------------------------------------------
function exe3(){
    let codigos = []
    let estoque = []
    for(let i = 0;i < 5; i++){
        codigos[i] = Number(prompt(`Informe código do produto ${i+1}`))
        estoque[i] = Number(prompt(`Informe qtde em estoque do produto ${i+1}`))
    }
    let cliente = Number(prompt('Informe código do cliente'))
    while (cliente != 0 ) {
        let codigo = Number(prompt(`Informe o código do produto para compra`))
        let qtde = Number(prompt(`Informe qtde para compra`))
        // vamos procurar o código do produto
        let achou = false // não encontrei o produto
        for(let i=0; i<5;i++){
            if (codigo == codigos[i]){
                achou = true // achou
                if (estoque[i] >= qtde){ // tem em estoque
                    estoque[i] = estoque[i] - qtde
                    alert('Compra realizada com sucesso')
                }
                else {
                    alert('Compra não realizada, falta do produto')
                }
            }
        }
        // encerrou a procura
        if (!achou) { // não encontrou
            alert('Produto não encontrado')
        }
        cliente = Number(prompt('Informe outro código do cliente. Digite 0 para encerrar'))
    }
    console.log(`Estoque atualizado ${estoque}`)
}
//----------------------------------------------------------------------------------------------------
function ex4() {
    let vet = [];
    let verif = 0;
    let posicao = 0;

    for (let i = 0; i < 3; i++) {
        vet[i] = Number(prompt(`Digite um número: `));
        if (vet[i] == 30) {
            verif++;
            posicao = vet.indexOf(30);
        }
    }

    if (posicao == -1) {
        alert(`Número 30 não está presente no vetor.`);
    } else {
        alert(`O número 30 está na posição ${posicao}.`);
        alert(`O número 30 foi digitado ${verif} vezes.`);
    }
}

    

//----------------------------------------------------------------------------------------------------

function ex5(){
    let logica = []
    let linguagem = []

    for(let i = 0; i < 10; i++){
        logica[i] = Number(prompt(`Informe aluno que faz logica`))
    }
    //verifica alunos que fazem disciplinas em cumum
    for(let i = 0; i < 10; i++){
        linguagem[i] = Number(prompt(`Informe aluno que faz linguagem`))
    }
    
    let comum = []
    for(let i = 0; i < 10; i++){
        if(linguagem.includes(logica[i])){
            comum.push(logica[i])
        }
    }
    console.log(`Alunos que fazem ambas ${comum}`)
}

//----------------------------------------------------------------------------------------------------
function ex6(){
    let nomes = []
    let salarios = []
    //entrada de dados
    for(let i = 0; i < 10; i++){
        nomes[i] = prompt(`Informe o nome: `)
        salarios[i] = Number(prompt(`Informe o salario: `))
    }
    // clacula maior e menor salario
    let maior = salarios[0]// assume que maior salario é o primeiro
    let menor = salarios[0]// assum que o menor salario é o primeiro  

    for(let i = 0; i < 10; i++){
        if(salarios[i] > maior){
            maior = salarios[i]// atualiza maior
        }
        if(salarios[i] < menor){
            menor = salarios[i] // atualiza menor
        }

    let nomeMaior = nomes[salarios.indexOf(maior)]
    let nomeMenor = nomes[salarios.indexOf(menor)]
    console.log(`${nomeMaior} Vai receber o maior salario ${maior}`)    
    console.log(`${nomeMenor} Vai receber o maior salario ${menor}`)    
    }

}

//---------------------------------------------------------------------------------------------------

function ex7(){
vet = [];
let neg = 0;
let pos = 0;

for(let i = 0; i < 5; i++) {
    vet[i] = Number(prompt(`Informe um número: `));
    if (vet[i] < 0) {
        neg++;
    } else {
        pos += vet[i];
    }
}

alert(`Existem ${neg} números negativos.`);
alert(`A soma dos números positivos é: ${pos}.`);
}


//---------------------------------------------------------------------------------------------------
function ex8() {
    let alunos = [];
    let mediaf = [];
    let pfinal = 0;
  
    for (let i = 0; i < 3; i++) {
      let aluno = prompt(`Informe o nome do aluno: `);
      let media = Number(prompt(`Informe a media final do aluno: `));
      alunos.push(aluno);
      mediaf.push(media);
    }
  
    for (let i = 0; i < 3; i++) {
      if (mediaf[i] < 7) {
        pfinal = 14 - mediaf[i];
        alert(`O aluno ${alunos[i]} precisará de ${pfinal} para passar`);
        if (pfinal < 7) {
          alert(`O aluno ${alunos[i]} foi reprovado`);
        }
      }
    }
  
    let maior = mediaf[0];
    let indexMaior = 0;
    for (let i = 1; i < 3; i++) {
      if (mediaf[i] > maior) {
        maior = mediaf[i];
        indexMaior = i;
      }
    }
    alert(`A maior média foi do aluno ${alunos[indexMaior]}`);
  }

//---------------------------------------------------------------------------------------------------
function ex9(){
    function exe9() {
        let nomes = [];
        let codigos = [];
        let precos = [];
      
        
        for (let i = 0; i < 10; i++) {
          nomes.push(prompt(`Informe o nome do produto ${i+1}:`));
          codigos.push(Number(prompt(`Informe o código do produto ${i+1}:`)));
          precos.push(Number(prompt(`Informe o preço do produto ${i+1}:`)));
        }
      
        console.log("Relatório de produtos com aumento:");
      
        
        for (let i = 0; i < 10; i++) {
          let novoPreco = precos[i]; 
      
          if (codigos[i] % 2 === 0 || precos[i] > 1000) {
            if (codigos[i] % 2 === 0 && precos[i] > 1000) {
              novoPreco += precos[i] * 0.2; 
            } else if (codigos[i] % 2 === 0) {
              novoPreco += precos[i] * 0.15; 
            } else {
              novoPreco += precos[i] * 0.1; 
      
            console.log("Nome:", nomes[i]);
            console.log("Código:", codigos[i]);
            console.log("Preço atual:", precos[i]);
            console.log("Novo preço:", novoPreco.toFixed(2));
            console.log("------------------------");
          }
        }
      }
}
}

//---------------------------------------------------------------------------------------------------


function exaula(){
    let codigos = []
    let nomes = []


    for(let i = 0; i <= 2; i++){
        let aux = Number(prompt(`Informe o codigo do aluno: `))
        while(codigos.includes(aux)){
            aux = Number(prompt(`Codigo ja existe, insira um difetente`))
        }
        codigos[i] = aux
        nomes[i] = prompt(`Informe o nome do aluno: `)
    }
  //peça ao usuario para entrar com o código do aluno
  // mostrar o nome do aluno caso seja um codigo cadastrado
    let codigo = Number(prompt(`Informe um codigo`))
    let posicao = codigos.indexOf(codigo)
    if(posicao == -1){
        alert(`Codigo não esta presente no vetor`)
    }
    else{
        alert(`Nome do aluno é ${nomes[posicao]}`)
    }
}

/*
let posicao
    cod = Number(prompt(`Digite o codigo do aluno que precisa: `))
    if(codigos.includes(cod)){
            posicao = codigos.indexOf(nomes)
    }
  
    alert(`${nomes[posicao]}`)*/
    function exprova(){
    let titulos = [];
let descricoes = [];
let usuarios = [];
let qtdLikes = [];

for (let i = 0; i < 3; i++) {
  let titulo = prompt(`Digite o título: `);
  let descricao = prompt(`Digite a descrição: `);
  
  let usuario = prompt(`Digite o nome do usuário: `);
  while (usuarios.includes(usuario)) {
    usuario = prompt(`Usuário já existe, digite outro nome: `);
  }

  let qtdLike = Number(prompt(`Digite a quantidade de likes: `));
  while (qtdLike < 0) {
    qtdLike = Number(prompt(`Quantidade de likes não pode ser negativa, digite outra: `));
  }

  titulos.push(titulo);
  descricoes.push(descricao);
  usuarios.push(usuario);
  qtdLikes.push(qtdLike);
}

let usuariosMudanca = [];
for (let i = 0; i < 3; i++) {
  alert(`\nMudança ${i + 1}`);
  let usuario = prompt(`Usuário do post para ser alterado: `);

  // Verifica se o usuário existe
  if (!usuarios.includes(usuario)) {
    console.log(`Usuário não encontrado. Cancelando a mudança.`);
    continue;
  }

  usuariosMudanca.push(usuario);
  
  const acao = prompt('Aumentar ou diminuir a quantidade de Likes? (a/d): ');

  let index = usuarios.indexOf(usuario);
  
  if (acao.toLowerCase() === 'a') {
    const likes = parseInt(prompt('Quantidade de Likes a ser adicionada: '), 10);
    qtdLikes[index] += likes;
    alert('Quantidade de Likes atualizada com sucesso.');
  } 
  
  else if (acao.toLowerCase() === 'd') {
    const likes = parseInt(prompt('Quantidade de Likes a ser removida: '), 10);
    if (qtdLikes[index] - likes < 0) {
      alert('A quantidade de Likes não pode ficar negativa. Cancelando a mudança.');
      continue;
    }
    qtdLikes[index] -= likes;
    alert('Quantidade de Likes atualizada com sucesso.');
  }
}

let maior = qtdLikes[0];
let menor = qtdLikes[0];
let indexMaior = 0;
let indexMenor = 0;

for (let i = 1; i < 3; i++) {
  if (qtdLikes[i] > maior) {
    maior = qtdLikes[i];
    indexMaior = i;
  }
  if (qtdLikes[i] < menor) {
    menor = qtdLikes[i];
    indexMenor = i;
  }
}

let tituloMaior = titulos[indexMaior];
let descricaoMaior = descricoes[indexMaior];
let tituloMenor = titulos[indexMenor];
let descricaoMenor = descricoes[indexMenor];
}