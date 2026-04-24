// ADD A CATEGORIA E VALOR

function addFormEvent() {
    const addCategoria = []
    const addQuantia = []
    addCategoria.push('Mercado')
    addQuantia.push(Number(1500))
    const deletar = delete[]
    
    console.log(addCategoria , addQuantia)
}
addFormEvent()

// BOTAO PARA SOMAR OS GANHOS E GASTOS

function subtrairGanhoeGasto(subtrair) {

    const gasto = [{nomeGasto: 'Mercado' , valorGasto: 121}];
    const ganho = [{nomeGanho: 'Trabalho' , valorGanho: 1621}];

    const [{nomeGasto , valorGasto}] = gasto; // Desestruturação
    const [{nomeGanho , valorGanho}] = ganho; // Desestruturação

    subtrair = Number(valorGanho) - Number(valorGasto)
    
    if (subtrair < 0) {  //Descobrir saldo
        return `Seu saldo é ${subtrair}. Saldo negativo!`
       } else if (subtrair > 0) {
        return `Seu saldo é ${subtrair}. Seu saldo está positivo!`
    } else {
        return `Seu saldo é ${subtrair}. Seu saldo está zerado!`
}

}

console.log(subtrairGanhoeGasto())