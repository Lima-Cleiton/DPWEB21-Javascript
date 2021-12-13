function calcularMedia(){
    const elementoRetorno = document.getElementById("resultado");
    const campo1 = document.getElementById("nota1");
    const campo2 = document.getElementById("nota2");
    const campo3 = document.getElementById("nota3");

    if(campo1.value == ''){
        //SE O VALUE DO CAMPO1 FOR VAZIO
        elementoRetorno.innerHTML = "Não foi inserido nenhum valor na nota 1!"
        campo1.focus()
    }else{
        //SE O VALUE DO CAMPO1 TIVER ALGUMA COISA   
        if(campo2.value == ''){
            //SE O VALUE DO CAMPO2 FOR VAZIO
            elementoRetorno.innerHTML = "Não foi inserido nenhum valor na nota 2!"
            campo2.focus()
        }else{
            //SE O VALUE DO CAMPO2 TIVER ALGUMA COISA  
            
        }
    }
    
    //o tipo que vem do input é string
    //se a string do input for vazia o Number() transforma pra 0
    // let valorNota1 = Number(campo1.value);
    // let valorNota2 = Number(campo2.value);
    // let valorNota3 = Number(campo3.value);

    // let media;
    // media = (valorNota1 + valorNota2 + valorNota3) / 3;

    // document.querySelector("#resultado").innerHTML = media;


}













//primeira coisa - o que queremos fazer/onde queremos chegar
    //segunda coisa - o que/como vou chegar no meu resultado
    //  1° selecionar o elemento atraves da DOM
    //      1.1 fala que vai usar o DOM (document.)
    //      1.2 depende do tipo do seletor
    //          1.2.1 SE VAI PELO ID: getElementById("idDoElemento")
    //          1.2.2 SE QUER PEGAR A LISTA DE ELEMENTOS PELA CLASSE: getElementsByClassName("nomeDaClasse")[indice*]
    //          1.2.3 SE QUER PEGAR A LISTA DE ELEMENTOS PELO NOME DA TAG: getElementsByTagName("tag")[indice]
    //          1.2.4 SE QUER PEGAR O PRIMEIRO ELEMENTO PELO ID, PELA CLASSE OU PELA TAG: querySelector("#idDoELemento"), querySelector(".nomeDaClasse") ou querySelector("tag")
    //  2° depende do que irá fazer
    //      2.1 inserir um HTML - .innerHTML
    //      2.2 mexer no estilo(CSS) - .style
    //  3° atribuir um valor (usando o = ) para aquilo que você selecionou
    //
    //LEMBRETE - indice* começa a partir do 0, portanto CUIDADO!
    //LEMBRETE 2 - com o querySelector nós selecionamos as coisas como se fosse no CSS