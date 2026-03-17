// Projeto: Planejamento Financeiro - Meta Asa Norte 2026
// Desenvolvedora: Ana Clara

let salarioEstagio = 1800; // Valor hipotético de um bom estágio em Brasília
let aluguelCompartilhado = 1100; // Estimativa para dividir um apê na Asa Norte
let mercado = 400;
let lazer = 200;

let totalDespesas = aluguelCompartilhado + mercado + lazer;
let saldoLivre = salarioEstagio - totalDespesas;

console.log("--- PLANEJAMENTO FINANCEIRO ---");
console.log("Salário Previsto: R$ " + salarioEstagio);
console.log("Total de Despesas: R$ " + totalDespesas);

if (saldoLivre > 0) {
    console.log("Resultado: A meta é possível! Sobrariam R$ " + saldoLivre + " para poupar. ✅");
} else {
    console.log("Resultado: O custo está alto. É necessário ajustar os gastos ou buscar um auxílio. ⚠️");
}
