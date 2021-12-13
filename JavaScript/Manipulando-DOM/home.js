// alert("Bem vindo ao nosso site com javascript externo!")

function click_button(){
    alert("O botão foi apertado!");
}
// Função de um clique = onclick
// click_button() = é o nome da função e precisa atribuir no html
// alert("") = uma caixa da alterta no meio da página seperior
// "O botão foi apertado!" = o que irá aparecer dentro da caixa

function adicionar_frase(){
    document.getElementById("paragrafo1").innerHTML = "Minha frase que veio do JavaScript";
}
// Função de um clique = onclick

function adicionar_frases(){
    document.getElementById("paragrafos").innerHTML = "Clicaram no botão duas vezes";

}

function mouse_down(){
    document.getElementById("paragrafo2").style.color = "#ff0000";
}

function mouse_up(){
    document.getElementById("paragrafo2").style.color = "green";
}

function click_duplo(){
    document.getElementById("paragrafo2").style.color = "blue";
}

function acender(){
    document.getElementById("lampada").classList.replace("apagar", "acender");

}

function apagar(){
    document.getElementById("lampada").classList.replace("acender", "apagar");
    // "lampada" = id da div do HTML
    // .classList = puxa todas as classes do CSS
    // .replace= troca as classes no CSS
}

