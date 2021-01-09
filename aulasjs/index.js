// vamos calcular a média de cada aluno
// e imprimir na tela o resultado
const nomeAluno01 = 'Adonis';
const notaAluno01 = 4;

const nomeAluno02 = 'Michelle';
const notaLuno02 = 9;

const nomeAluno03 = 'Fulano';
const notaAluno03 = 2;

const media = (notaAluno01 + notaLuno02 + notaAluno03) / 3;

// verificar se a média é maior ou menor que 5
if (media > 5) {
    console.log(`A média é ${media}. Parabéns!`);
} else {
    console.log(`A média é menor que 5.`);
}

/* Objeto */

const nomeAluno04 = {
    nome: 'Eduardo',
    nota: 9
};

const nomeAluno05 = {
    nome: 'Erika',
    nota: 5
};

const nomeAluno06 = {
    nome: 'Bruno',
    nota: 9
};

const mediaObj = (nomeAluno04.nota + nomeAluno05.nota + nomeAluno06.nota) / 3;

console.log(` A media foi ${mediaObj}`);

/* Array (Vetor) */
const alunos = [
    {
        nome: 'Adonis',
        nota: 9
    },
    {
        nome: 'Michelle',
        nota: 10
    },
    {
        nome: 'Fred',
        nota: 7
    }
];

console.log(alunos[0].nota)

const outroArray = ["Adonis", "Michelle", "Fred"];
console.log(outroArray[1]);