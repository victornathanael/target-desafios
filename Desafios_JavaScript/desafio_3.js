const fs = require("fs");
const dadosJSON = fs.readFileSync("./dados.json");
const dados = JSON.parse(dadosJSON);
const dadosFiltrados = dados.filter((d) => d.valor > 0);
const valores = dadosFiltrados.map((dado) => dado.valor);
const maiorValor = Math.max(...valores);
const menorValor = Math.min(...valores);
const mediaValores = valores.reduce(
    (avg, num) => avg + num / (valores.length - 1),
    0
);
const diasAcimaDaMedia = valores.reduce(
    (dias, valor) => (valor > mediaValores ? ++dias : dias),
    0
);

console.log(
    `O maior valor de faturamento ocorrido em um dia do mês é: R$ ${maiorValor.toFixed(
        2
    )}`
);
console.log(
    `O menor valor de faturamento ocorrido em um dia do mês: R$ ${menorValor.toFixed(
        2
    )}`
);
console.log(
    `Em ${diasAcimaDaMedia} dias no mês o valor de faturamento diário foi superior à média mensal`
);
