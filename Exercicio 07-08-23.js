
function ex1(){
    let obj = {
        a : Number(prompt(`Digite o valor de A: `)),
        b : Number(prompt(`Digite o valor de B: `)),
        c : Number(prompt(`Digite o valor de C: `)),
        delta: 0
    }
    obj.delta = (obj.b ** 2) - (4 * obj.a * obj.c)
    console.log(`Valor de delta: ${obj.delta}`)
}
//-------------------------------------------------------------------
function ex2(){
    let somaMedias = 0
    for(let i = 0; i < 10; i++){
        let obj = {
            cod : Number(prompt(`Digite o codigo do aluno: `)),
            nome: String(prompt(`Digite o nome do aluno:`)),
            p1 : Number(prompt(`Insira a nota 1 do aluno: `)),
            p2 : Number(prompt(`Insira a nota 2 do aluno: `)),
            media : 0
        }
        obj.media = (obj.p1 + obj.p2) / 2
        alert(`A media do aluno é ${obj.media}`)
        somaMedias = somaMedias + obj.media
    }
    alert(`A media da turma é ${somaMedias/10}`)
    
}
//-------------------------------------------------------------------
