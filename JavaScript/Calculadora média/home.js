// function calcularMedia(){
//     let valorNota1 = Number(document.getElementById("nota1").value)
//     let valorNota2 = Number(document.getElementById("nota2").value)
//     let valorNota3 = Number(document.getElementById("nota3").value)

//     let media
//     media = (valorNota1 + valorNota2 + valorNota3)/3

//     document.querySelector("#resultado").innerHTML = media
// }

function mediaValidacao(){
    const elementoRetorno = document.getElementById("resultado")
    const campo1 = document.getElementById("nota1")
    const campo2 = document.getElementById("nota2")
    const campo3 = document.getElementById("nota3")

    if (campo1.value == ''){
        elementoRetorno.innerHTML = "Não foi inserido nenhum valor na nota 1!"
        campo1.focus()
    }else{
        if (campo2.value == ''){
            elementoRetorno.innerHTML = "Não foi inserido nenhum valor na nota 2!"
            campo2.focus()
        }else{
            if (campo3.value == ''){
                elementoRetorno.innerHTML = "Não foi inserido nenhum valor na nota 3!"
                campo3.focus()
            }else{
                elementoRetorno.innerHTML = ""

                let valorImput1 = Number(campo1.value)
                let valorImput2 = Number(campo2.value)
                let valorImput3 = Number(campo3.value)

                let media = ((valorImput1 + valorImput2 + valorImput3)/3).toFixed(1)

                document.querySelector("#resultado").innerHTML = 'O resultado da média das notas é ${media}'
                classificarAulno(media)
                
            }
        }
    }
}

function classificarAulno(notaMedia){
    const elementoSituacao = document.getElementById("situacao")
    
    if(notaMedia >= 6){
        elementoSituacao.innerHTML = "O aluno foi Aprovado!"
    }else{
        if(notaMedia < 3){
            elementoSituacao.innerHTML = "O aluno foi Reprovado!"
        }else{
            elementoSituacao.innerHTML = "O aluno está de Recuperação"
        }
    }
}

