

function subtrairGanhoeGasto() {

    const gasto = [{nomeGasto: 'Mercado' , valorGasto: 121}];
    const ganho = [{nomeGanho: 'Trabalho' , valorGanho: 1621}];

    const [{nomeGasto , valorGasto}] = gasto; // Desestruturação
    const [{nomeGanho , valorGanho}] = ganho; // Desestruturação

    const subtrair = valorGasto.value - valorGasto.value
    
    if (subtrair < 0) {  //Descobrir saldo
       console.log(`Seu saldo é ${subtrair}. Saldo negativo!`) 
       } else if (subtrair => 0) {
        console.log(`Seu saldo é ${subtrair}. Seu saldo está positivo!`)
    } else {
        console.log(`Seu saldo é ${subtrair}. Seu saldo está zerado!`)
}
}
subtrairGanhoeGasto();