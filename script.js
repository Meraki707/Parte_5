function somarNum() {
    var numero1 = document.getElementById("n1").value
    var numero2 = document.getElementById("n2").value
    var resultado= document.getElementById("r")

    if(numero1 == "" || numero2 == ""){
        resultado.innerHTML = "Por favor, preencha todos os campos."  
        return
    }
    if (numero1 > 10 || numero2 > 10){
            resultado.innerHTML = "Digite algum valor menor ou igual a 10."
        }else{
            resultado.innerHTML = "Resultado: " + (numero1 + numero2)
        }
    }

function SomaMedia() {
    var numero1 = document.getElementById("n1").value
    var numero2 = document.getElementById("n2").value
    var eResultado = document.getElementById("r")

    // validação de campos vazios
    if (numero1 == "" || numero2 == "") {
        eResultado.innerHTML = "Por favor, preencha todos os campos."
        return
    }

    // converte para número
    var valor1 = Number(numero1)
    var valor2 = Number(numero2)

    if (valor1 > 10 || valor2 > 10) {
        eResultado.innerHTML = "Digite valores menores ou iguais a 10."
    } else {
        var soma = valor1 + valor2
        var media = soma / 2

        eResultado.innerHTML = 
            "Soma: " + soma + "<br>" +
            "Média: " + media
    }
}

