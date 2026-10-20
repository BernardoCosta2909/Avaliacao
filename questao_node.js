caminhao = {
    motorista: "Roberto",
    cargaRestante: 100,
    limiteRetorno: 20,
}

console.log("\nBom dia " + caminhao.motorista + " tenha ótimas entregas hoje!")

for (let i = 1; i <= 4; i++) {
    let paradas = i * 10;
    caminhao.cargaRestante -= paradas;

    if (caminhao.cargaRestante <= caminhao.limiteRetorno) {
        console.log("\nALERTA: Retorne ao CD(centro de distribuição) imediatamente!!!");
        break
    } else {
        console.log("\nParadas concluídas: " + i + ". Caixas restantes no baú: " + caminhao.cargaRestante)
    }
}