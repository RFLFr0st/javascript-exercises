function validaArray(arr, num){
    try{
        //Erro para caso os parametros não forem enviados
        if(!arr && !num) throw new ReferenceError("Envie os parametros");
        //Erro se o array não for tipo objeto
        if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");
        //Erro se o numero não for do tipo number
        if(typeof num !== 'object') throw new TypeError("Array precisa ser do tipo number");
        //Erro se o tamanho do array for diferente do numero enviado como parametro
        if(arr.length !== num) throw new RangeError('Tamanho inválido!');   

        return arr;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("Este erro é um ReferenceError");
            console.log(e.name);
            console.log(e.message);
        }
        else if(e instanceof TypeError){
            console.log("Este erro é um TypeError");
            console.log(e.name);
            console.log(e.message);
        }
        else if(e instanceof RangeError){
            console.log("Este erro é um RangeError");
            console.log(e.name);
            console.log(e.message);
        }
        else{
            console.log("Tipo de erro não esperado:" + e);
            
        }
        
    }

    console.log(validaArray());
    
  

}