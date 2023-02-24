let conta = document.querySelector(".conta");
let i = 0; 
let aux =0, aux2 =0; 
var numeros;
var operacoesList = ['-','*','+','/']

function inserir(value){
    aux=0;
   let valor = conta.innerHTML
   console.log()
   numeros = conta.innerHTML.split(/[\+\-\*\/]/);
   console.log("numeros: "+ numeros.length)
   console.log("string:" +numeros[i] + "i:" + i);
   if(value === '+' || value === '-' || value === '/' || value === '*'){
        if(numeros[i].includes('.')){
            aux=1;
            i++;
        }
        else
            aux=0;
   }

   if(value ==='.' && numeros[i].includes('.')){
        aux ++;
        console.log('aqui1')
        return;
   }

   else if(operacoesList.includes(value) && (valor[valor.length - 1]==='+' || valor[valor.length - 1]==='-' || valor[valor.length - 1]==='/' || valor[valor.length - 1]==='*')){
        console.log('aqui2')
        
        return;
   }

   else if(valor[valor.length - 1]==='+' && value ==='+' || valor[valor.length - 1]==='-' && value ==='-' || valor[valor.length - 1]==='/' && value ==='/' || valor[valor.length - 1]==='*' && value ==='*'){
        console.log('aqui3')
        
        return;
   }
    else{
        console.log("else")
        conta.innerHTML = valor + value;
    }
}


// for (var j = 0; j < numero.length; j++) {
//     numero[i].addEventListener('click', function() {
//       inserir(this.innerHTML);
//     });
//   }

var deleta = document.getElementById("ce")
deleta.addEventListener("click",deletar)

function deletar(){
    conta.innerHTML = "";
}

var apaga = document.querySelector('.apagar')
apaga.addEventListener("click",apagar)

function apagar(){
    let apagar = document.querySelector(".conta").innerHTML;
    document.querySelector(".conta").innerHTML = apagar.substring(0, apagar.length - 1);
};

var calculo = document.getElementById("igual")
calculo.addEventListener("click",calcular)

function calcular(){
    i = 0;
    var resultado = document.querySelector(".conta").innerHTML;
    if(resultado){
        document.querySelector(".conta").innerHTML = eval(resultado);
    }
    else{
        window.alert("Nenhuma conta foi detectada");
    }

}