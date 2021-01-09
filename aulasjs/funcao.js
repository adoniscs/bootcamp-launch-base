const turmaA = [
    { nome: 'Adonis', nota: 6 },
    { nome: 'Michelle', nota: 5 },
    { nome: 'Fulano', nota: 2 },
    { nome: 'Felipe', nota: 5 },
    { nome: 'Arthur', nota: 7.5 }
];
const turmaB = [
    { nome: 'Flávio',nota: 5 },
    { nome: 'Willian', nota: 10 },
    { nome: 'Jéssica', nota: 5 },
    { nome: 'Mais um alunos', nota: 10 }
];

// function calculaMedia(alunos) {
//     return media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
// }

//  criando função com laço de repetição FOR
function calculaMedia(alunos) {
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota;        
    }
    const media = soma / alunos.length;
    return media;
}

const media1 = calculaMedia(turmaA);
const media2 = calculaMedia(turmaB);

function enviaMensagem (media, turma) {
    if (media > 5) {
        console.log (`A média da ${turma} foi de ${media}. Parabéns!`);
    } else {
        console.log (`A média da ${turma} é menor que 5`);
    }
}

enviaMensagem(media1, 'turma Spartanos');
enviaMensagem(media2, 'turma Trianos');