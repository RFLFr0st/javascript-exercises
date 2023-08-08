/*
Faça um programa que receba dados de 10 posts, com os dados a seguir, e 
coloque cada dado em um vetor diferente:  título, descrição, usuário (autor) e qtdeLikes

Durante a entrada dos dados, o usuário não pode ser repetido, bem como a quantidade não pode ser negativa. 

Após a entrada de dados, o programa deve permitir que se façam 5 mudanças nos posts, informando o usuário. 
Se o usuário não existir, cancelar a mudança. Se o usuário existir, solicitar se a mudança vai aumentar ou 
diminuir a qtde de likes, informando também o valor. Para aumentar, não há restrição. Para diminuir, verificar 
se a quantidade de likes não ficará negativa.

Ao final, o programa deve mostrar os títulos e descrições dos posts com maior e menor quantidade de likes.
 let postMenos = posts[0];
  for (let i = 1; i < posts.length; i++) {
    if (posts[i].qtdeLikes < postMenos.qtdeLikes) {
      postMenos = posts[i];
    }
  }
  let postMais = posts[0];
  for (let i = 1; i < posts.length; i++) {
    if (posts[i].qtdeLikes > postMais.qtdeLikes) {
      postMais = posts[i];
    }

*/

function ex1(){
    let titulo = []
    let desc = []
    let usuario = []
    let qtdelikes = []
    let opc 

    for(let i = 0; i < 3; i++){
        titulo = prompt(`Digite o titulo: `)
        desc = prompt(`Digite a descrição: `)
        
        let aux = prompt(`Digite o nome do usuario: `)
        let aux2 = Number(prompt(`Digite a quantidade de likes: `))
        
        while(usuario.includes(aux)){
            aux = prompt(`Usuario ja existe, insira um diferente: `)
    }
        while(qtdelikes < 0){
            aux2 = Number(prompt(`Quantidade de likes não pode ser negativa, digite outra: `))
    }
    }
    usuario[i] = aux
    
  
    let usuario2 = []
    for (let i = 0; i < 3; i++) {
        alert(`\nMudança ${i + 1}`);
        usuario2[i] = prompt(`Usuario do post para ser alterado `)
    
        // Verifica se o usuário existe
        if (usuario2[i] != usuario[i]) {
          console.log(`Usuário não encontrado. Cancelando a mudança.`);
          continue;
        }
        // Obtém o post do usuário
        else if(usuario2[i] == usuario[i]){
            const acao = prompt('Aumentar ou diminuir a quantidade de Likes? (a/d): ')
        }
    
        // Aumentar a quantidade de Likes
        if (acao.toLowerCase() === 'a') {
          const likes = parseInt(prompt('Quantidade de Likes a ser adicionada: '), 10)
          postUsuario.qtdeLikes += likes
          alert('Quantidade de Likes atualizada com sucesso.')
        } 
        else if(acao.toLowerCase() === 'd'){
            const likes = parseInt(prompt('Quantidade de Likes a ser removida: '), 10)
            postUsuario.qtdeLikes -= likes
            alert('Quantidade de Likes atualizada com sucesso.')
        }   
}
    let maior = qtdelikes[0]
    let menor = qtdelikes[0] 
    
        for(let i = 0; i < 3; i++){
            if(qtdelikes[i] > maior){
                maior = qtdelikes[i]// atualiza maior
            }
            if(qtdelikes[i] < menor){
                menor = qtdelikes[i] // atualiza menor
            }
    }
    let nomeMaior = qtdelikes[usuario.indexOf(maior)]
    let nomeMenor = qtdelikes[usuario.indexOf(menor)]
   
    alert(`Usuario com maior num de likes ${nomeMaior}`)
    alert(`Usuario com menor num de likes ${nomeMenor}`)
}
//-----------------------------------------------------------
function ex1() {
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
      // Aumentar a quantidade de Likes
      if (acao.toLowerCase() === 'a') {
        const likes = parseInt(prompt('Quantidade de Likes a ser adicionada: '), 10);
        qtdLikes[index] += likes;
        alert('Quantidade de Likes atualizada com sucesso.');
      }
      // Diminuir a quantidade de Likes
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
  
    let usuarioMaior = usuarios[indexMaior];
    let usuarioMenor = usuarios[indexMenor];
  
    alert(`Usuário com maior número de likes: ${usuarioMaior}`);
    alert(`Usuário com menor número de likes: ${usuarioMenor}`);
  }