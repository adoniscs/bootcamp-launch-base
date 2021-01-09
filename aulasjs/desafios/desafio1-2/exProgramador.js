const programador = [
    {
        nome: 'Adonis',
        idade: 24,
        tecnologia: {
            nomeTecnologia: 'JavaScript',
            especTecnologia: 'Web/Mobile'
        }
    },
    {
        nome: 'Kaike',
        idade: 19,
        tecnologia: {
            nomeTecnologia: 'Python',
            especTecnologia: 'Data Science'
        }
    }
];

console.log(`O usuário ${programador[1].nome} tem ${programador[1].idade} anos e usa a tecnologia ${programador[1].tecnologia.nomeTecnologia} com especialidade em ${programador[1].tecnologia.especTecnologia}.`)