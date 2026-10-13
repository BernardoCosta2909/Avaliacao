const botaoVentoinha = document.getElementById("btn-vento");
const botaoCarga = document.getElementById("btn-carga")
const valorTemp = document.getElementById("valor-temp")
const barraStatus = document.getElementById("status-txt")

const sensorTermico = {
    temperatura: 40,
    limiteCritico: 70,

    alterarTemperatura(valor) {
        this.temperatura += valor;

        if (this.temperatura >= this.limiteCritico) {
            return "CRÍTICO"
        } else {
            return "ESTÁVEL"
        }
    }
}

botaoCarga.addEventListener('click', function () {
    let visor = sensorTermico.alterarTemperatura(15);
    valorTemp.textContent = sensorTermico.temperatura + "°C";

    if (visor === "CRÍTICO") {
        barraStatus.style.color = "red";
        valorTemp.style.color = "red";
    } else {
        barraStatus.style.color = "#10b981";
        valorTemp.style.color = "#10b981";
    }

    if(sensorTermico.temperatura >= 70) {
        barraStatus.textContent = "CRÍTICO";
    } else {
        barraStatus.textContent = "ESTÁVEL";
    }
})

botaoVentoinha.addEventListener('click', function () {
    let visor = sensorTermico.alterarTemperatura(-15);
    valorTemp.textContent = sensorTermico.temperatura + "°C";

    if (visor === "ESTÁVEL") {
        barraStatus.style.color = "#10b981";
        valorTemp.style.color = "#10b981";
    } else {
         barraStatus.style.color = "red";
        valorTemp.style.color = "red";
    }

    if(sensorTermico.temperatura >= 70) {
        barraStatus.textContent = "CRÍTICO";
    } else {
        barraStatus.textContent = "ESTÁVEL";
    }
})