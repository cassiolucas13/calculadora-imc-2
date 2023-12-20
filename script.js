
function calcular(){
    var txtAltura = document.getElementById("altura")
    var txtPeso = document.getElementById("peso")
    var resultado = document.getElementById('resultado')
    var areaTxt = document.getElementById('telinha')

    var altura = parseFloat(txtAltura.value)
    var peso = parseFloat(txtPeso.value)


    imc = peso/(altura*altura)

    if(isNaN(imc)){
        alert("Por favor, informe um peso e uma altura para começar")
    }else if(imc <18.5 ){
        resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} voce está abaixo do peso`
        areaTxt.style.backgroundColor = 'red'
    } else if(imc >= 18.5 &&imc <25 ){
        resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} você está no peso ideal`
        areaTxt.style.backgroundColor ='green'
    }
    else if (imc >= 25 && imc <29.9){
        resultado.innerHTML= `Seu IMC é de ${imc.toFixed(2)} você está levemente acima do peso`
        areaTxt.style.backgroundColor='yellow'
    }else if(imc >= 30 && imc < 34.9){
        resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} voce está obeso`
        areaTxt.style.backgroundColor = 'red'
    } else if (imc >= 35 && imc <39.9){
        resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} você está com obesidade severa`
        areaTxt.style.backgroundColor='red'
    }else{
        resultado.inert =  resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} você está com obesidade morbida`
        areaTxt.style.backgroundColor='red'
    }
}