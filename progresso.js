// Projeto: Contador de Progresso Acadêmico - ADS CEUB
// Desenvolvido por: Ana Clara

let totalSemestres = 5;
let semestresConcluidos = 2; // Você está no 3º, então concluiu 2
let progresso = (semestresConcluidos / totalSemestres) * 100;

console.log("Minha jornada em Análise e Desenvolvimento de Sistemas:");
console.log("Progresso atual: " + progresso + "%");
console.log("Faltam " + (totalSemestres - semestresConcluidos) + " semestres para a formatura!");

if (progresso >= 50) {
    console.log("Mais da metade do caminho já foi percorrida! 🚀");
} else {
    console.log("Foco nos estudos, o diploma está chegando!");
}
