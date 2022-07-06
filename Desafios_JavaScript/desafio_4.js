const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
};

let valorTotal = 0;
for (const estado in faturamentoPorEstado) {
    valorTotal += faturamentoPorEstado[estado];
}

const faturamentoPercentual = {};

for (const estado in faturamentoPorEstado) {
    const numPercentual = (faturamentoPorEstado[estado] / valorTotal) * 100;
    faturamentoPercentual[estado] = `${numPercentual.toFixed(2)}%`;
}

console.log(faturamentoPercentual);
