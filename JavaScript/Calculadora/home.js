const input1 = document.getElementById("number1");
// const é uma varial utilizada para resumir a seleção do input.
//pega as informações do input com o id "number1" do html através do document
//e passa a ser chamada de input1
        const input2 = document.getElementById("number2");
// const é uma varial utilizada para resumir a seleção do input.
//pega as informações do input com o id "number2" do html através do document
//e passa a ser chamada de input2
        const inputResultado = document.getElementById("resultado")
   
function somar(){
       var num1 = parseInt(input1.value); 
       //pega o valor do input1 e trasforma em valor através do value
       //tranforma o value "valor" em número inteiro através do parseInt 
       //a variavel passa a ser chamada de num1

       var num2 = parseInt(input2.value);
       //pega o valor do input2 e trasforma em valor através do value
       //tranforma o value "valor" em número inteiro através do parseInt
       //a variavel passa a ser chamada de num2

        
       //no resultado iremos pegar as informações do input1 e iremos somar com o input2
       var resultadoSoma
       resultadoSoma = num1 + num2 
       //a varivel irá somar a var num1 +var num2
       //o resultadoSoma irá atribuir um formula matemática o sinal de "=" num1 + num2 


       inputResultado.value = resultadoSoma

       inputResultado.style.backgroundColor = "#ffff00";
       inputResultado.style.color = "#ff0000";
       inputResultado.style.fontWeight = "bold";

    }

function calcularIMC(){
    var peso = input1.value
    var altura = input2.value
    var resultadoIMC = parseInt(peso / (altura * altura))
    inputResultado.value = resultadoIMC
    
    inputResultado.style.backgroundColor = "#00ffff"
    inputResultado.style.color = "#000000"

}


function limparInputs(){
    input1.value = ""
    input2.value = ""
    inputResultado.value = ""
    inputResultado.style.backgroundColor = ""
    inputResultado.style.color = ""
    inputResultado.style.fontWeight = ""
}