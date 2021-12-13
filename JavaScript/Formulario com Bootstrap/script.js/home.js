function enviarMensagem(){
    const inputNome = document.querySelector("#input_nome")
    const inputMensagem = document.querySelector("#input_mensagem")

    if(inputNome.value !== ''){
        let frase = `Olá me chamo ${inputNome.value}, ${inputMensagem.value}`

        let urlWpp = `https://api.whatsapp.com/send?phone=5511946080861&text=${frase}`
        // https://api.whatsapp.com/send?phone=5511946080861&text=Ol%C3%A1%20Cleiton%20teste

        window.open(urlWpp)

        console.log(inputNome.value)
    }else{
        inputNome.style.border = '2px solid red'
        inputNome.focus()
        inputNome.style.outline = 'none'
        //retira a borada preta "padrão" do focus()
    }
}