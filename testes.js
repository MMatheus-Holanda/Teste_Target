//TESTES TARGET SISTEMAS
//1)
let indice = 13, soma = 0, k = 0;
while (k < indice) {
    k = k + 1;
    soma = soma + k;
}
console.log(soma);
//Soma será igual a 91

//2)
function Fibonaccichecknumber(num) {
    if (num < 0) return false;

    let a = 0, b = 1;
    
    if (num === a || num === b) return true;

    while (b < num) {
        let temp = a;
        a = b;
        b = temp + b;
    }

    return b === num;
}

const numero = parseInt(prompt("Informe um número:"));
if (Fibonaccichecknumber(numero)) {
    console.log(`${numero} pertence à sequência Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência Fibonacci.`);
}

//3)
const fs = require('fs'); // Certifique-se de que o módulo fs está carregado

function calcularEstatisticas(faturamentoDiario) {
    const faturamentosValidos = faturamentoDiario
        .filter(entry => entry.faturamento !== null)
        .map(entry => entry.faturamento);

    if (faturamentosValidos.length === 0) {
        return {
            menorFaturamento: null,
            maiorFaturamento: null,
            diasAcimaDaMedia: 0
        };
    }

    let menorFaturamento = Math.min(...faturamentosValidos);
    let maiorFaturamento = Math.max(...faturamentosValidos);

    let somaFaturamento = faturamentosValidos.reduce((acumulado, valor) => acumulado + valor, 0);
    let mediaMensal = somaFaturamento / faturamentosValidos.length;

    let diasAcimaDaMedia = faturamentosValidos.filter(valor => valor > mediaMensal).length;

    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia
    };
}

function main() {
    fs.readFile('Teste_Target/faturamento.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo:', err);
            return;
        }

        try {
            const faturamentoDiario = JSON.parse(data);
            const resultado = calcularEstatisticas(faturamentoDiario);

            console.log(`Menor valor de faturamento: ${resultado.menorFaturamento}`);
            console.log(`Maior valor de faturamento: ${resultado.maiorFaturamento}`);
            console.log(`Número de dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);
        } catch (e) {
            console.error('Erro ao analisar o JSON:', e);
        }
    });
}

main();

//4)
const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

function calcularPercentuais(faturamento) {
    const totalFaturamento = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);
    
    const percentuais = {};
    for (const estado in faturamento) {
        const valor = faturamento[estado];
        percentuais[estado] = ((valor / totalFaturamento) * 100).toFixed(2) + '%';
    }
    
    return percentuais;
}

const percentuais = calcularPercentuais(faturamentoEstados);

console.log('Percentual de representação de cada estado:');
for (const estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado]}`);
}

//5)
function inverterString(str) {
    let stringInvertida = ''; 
    
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i]; 
    }

    return stringInvertida;
}

const stringOriginal = 'tomate';
const resultado = inverterString(stringOriginal);

console.log(`String original: ${stringOriginal}`);
console.log(`String invertida: ${resultado}`);
