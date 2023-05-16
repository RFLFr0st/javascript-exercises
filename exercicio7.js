function ex7(){
    let idade, altura, peso;
    let idade50 = 0; let somaAltura = 0;
    let contaAltura = 0; let peso40 = 0;
    
    for(let cont = 1; cont <= 2; cont++){
        idade = Number(prompt("Informe a idade: "))
        altura = Number(prompt("Informe a altura: "))
        peso = Number(prompt("Informe o peso: "))
        if(idade > 50){
            idade50++
        }
        else if(idade >=10 && idade <= 20){
            somaAltura += altura
            contaAltura++
        }
        if(peso < 40){
            peso40++
        }
    }
    alert(`Idade maior que 50 ${idade50}`)
    alert(`Média de altura com idade entre 10 e 20: ${somaAltura / contaAltura}`)
    alert(`Porcentagem peso menor que 40: ${peso40/2*100}%`)
}

