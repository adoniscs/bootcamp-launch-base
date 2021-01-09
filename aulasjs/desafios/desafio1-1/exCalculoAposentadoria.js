const nome = 'Maria';
const sexo = 'F';
const idade = 50;
const contribuicao = 35;

const aposentadoria = contribuicao + idade;
const homemPodeAposentar = sexo === 'M' && aposentadoria >= 95;
const mulherPodeAposentar = sexo === 'F' && aposentadoria >= 85;

if (homemPodeAposentar || mulherPodeAposentar) {
        console.log (`${nome}, pode se aposentar!`);
} else {
   console.log (`${nome}, você não pode se aposentar, pois sua idade não condiz com o tempo de contribuição!`);
}