const dadosEmpresa = {
    nome: "Diego",
    empresa: {
        nome: "Rocketseat",
        cor: "roxa",
        foco: "programação",
        endereco: {
        rua: "Rua Guilherme Gembala",
        numero: 260}
    }
};

console.log(`A empresa ${dadosEmpresa.empresa.nome} está localizada em ${dadosEmpresa.empresa.endereco.rua}, ${dadosEmpresa.empresa.endereco.numero}`);