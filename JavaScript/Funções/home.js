const divManipula = document.getElementById("manipula")

//botão 2
function mudarTamanho(){
    divManipula.style.fontSize = "30px"
}

//botão 3
function mudarCorFonte(){
    divManipula.style.color = "black"
}

//botão 4
function mudarCorFundo(){
    divManipula.style.backgroundColor = "blue"
}

//botão 5
function mudarFonteItalico(){
    divManipula.style.fontStyle = "italic"
}

//botão 6
function mudarFonteNegrito(){
    divManipula.style.fontWeight = "bold"
}

//botão 7
function adicionarBorda(){
    divManipula.style.border = "5px solid #ff0000"
}

//botão 8
function tireBorda(){
    divManipula.style.border = "none"
}

//botão 9
function esconderDiv(){
    divManipula.style.display = "none"
}

//botão 10
function ReapareceDiv(){
    divManipula.style.display ="block"
}

//botão 11
function textoChamada(){
// Sempre que for chamar um elemento pela "class" devemos usar o console.log pra achar qual seletor retorno que fica nos conchetes []
    // console.log(document.getElementsByClassName("chamada"))
    document.getElementsByClassName("chamada")[1].innerHTML="Cleitinho é fera no Javascripte!"
}

//botão 12
function corFundo(){
    // console.log(document.getElementsByClassName("paragrafo"))
    document.getElementsByClassName("paragrafo")[0].style.backgroundColor = "#ff4d00"
    document.getElementsByClassName("paragrafo")[0].style.color = "black"
}

//botão 13
function corBotão(){
    const elementoBotoes = document.getElementsByTagName("button")
    let numeroBotao = Math.round(Math.random()*(elementoBotoes.length - 1)+1)
    // Com o getElementsByTagName podemos procurar todas as tag do HTML
    // console.log(document.getElementsByTagName("button"))

    
    elementoBotoes[numeroBotao - 1].style.backgroundColor = "lightblue"
    alert(numeroBotao)

    
}

//botão 14
function corTodosBotão(){
    const divBotoes = document.getElementById("botoes")
    var botoes = divBotoes.getElementsByTagName("button")
    // var é uma variavel gobal e pode ser usada em outra função se estiver com o mesmo nome
    var i;
    for(i = 0; i < botoes.length; i++){
        botoes[i].style.backgroundColor = "lightgreen"
    }
}

//botão 15
function contarBotoes(){
    // let é uma variavel fechada e não pode ser usada em outra função mesmo se o nome dela repetir em outra função
    let qtndBotoes = document.getElementById("botoes").getElementsByTagName("button").length
    divManipula.innerHTML = qtndBotoes
}

//botão 16
function insereTextoParagrafo(texto){
    let textoInserido = texto
    // // getElementsByClassName seleciona todas as "class"
    document.getElementsByClassName("paragrafo")[0].innerHTML = textoInserido

    // querySelector seleciona a primeira "class" ou "id" que achar no HTML
    // tode usar igual a seleção de tag do CSS 
    document.querySelector("#manipula").innerHTML = textoInserido

}

//botão 17
function corFundoPagina(){
    document.querySelector("body").style.backgroundColor = "yellow"
}

//botão 18
// "urlImg" é o caminha a imagem  inserida no HTML como parametro dentro dos (), onde o javascript consegue pegar as informações

function mudarImg(urlImg){
    document.querySelector("img").src = urlImg

}

//botão 19
function acionarTudo(){
    mudarTamanho()
    mudarCorFonte()
    mudarCorFundo()
    mudarFonteItalico()
    mudarFonteNegrito()
    adicionarBorda()
    textoChamada()
    corFundo()
    corTodosBotão()
    contarBotoes()
    insereTextoParagrafo('TEXTO ADICIONANDO A FUNÇÃO DO BOTÃO 19')
    corFundoPagina()
    mudarImg()
}

