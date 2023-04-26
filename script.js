const button = document.getElementById("button-convert")
const select = document.getElementById("converter-para")


const dolar = 5.2
const euro = 5.9

const functionButton = () => {
    const input = document.getElementById("input").value
    const valorReal = document.getElementById("real")
    const valorDolar = document.getElementById("dolar")

    if (select.value === "US$ Dólar americano") {
        valorReal.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(input)
        valorDolar.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(input / dolar)
    }

    if (select.value === "€ Euro") {
        valorReal.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(input)
        valorDolar.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(input / euro)
    }

    if(select.value === "Bitcoin") {
        valorReal.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(input)
        valorDolar.innerHTML = (input /0.00000664)

    }

}

const functionSelect = () => {

    const nameDolar = document.getElementsByClassName("texto-dolar")[0]
    const imgDolar = document.getElementById("img")

    if (select.value === "US$ Dólar americano") {
        nameDolar.innerHTML = "Dólar Americano"
        imgDolar.src = "./assets/estados-unidos (1) 1.png"
    }

    if (select.value === "€ Euro") {
        nameDolar.innerHTML = "Euro"
        imgDolar.src = "./assets/Design sem nome 1.png"
    }

    if(select.value === "Bitcoin") {
        nameDolar.innerHTML ="Bitcoin"
        imgDolar.src="./assets/Design sem nome (1) 1.png"
    }

    functionButton()
}

button.addEventListener("click", functionButton)

select.addEventListener("change", functionSelect)





