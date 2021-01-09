/*=====================================================
   Operadores condicionais
    > maio que
    < menor que
    >= maior ou igual
    <= menot ou igual
    === igual e do memsmo tipo
    != não é igual (diferente)
    !== Diferente, inclusive o tipo 
=======================================================*/

// Desafio 01
// verificar se a pessoa é maior de 18
// se sim, deixar entrar, se não, bloquear
// se a pessoa tiver 17 anos
// avisar para voltar quando fizer 18 anos

// const idade = 16;

// if (idade > 18) {
//     console.log("Deixa entrar");
// } else {
//     console.log("Estrada bloqueada");
// }

// if (idade === 17) {
//     console.log("Volte quando tiver 18 anos");
// }

/* ====================================================
    Operadores Lógicos

    && "E" As duas condições devem ser verdadeiras
        para que a condição final seja verdadeira.
    || "OU" Uma das duas condições deve ser verdadeiras
        para  que a condição final seja verdadeira.
    !   "NÂO" Nega a condição

=======================================================*/

const idade = 19;

if (!(idade >= 18) || idade === 17) {
    console.log("Estrada bloqueada");
} else {
    console.log("Deixa entrar");
}

/* =================================================
    Operadores Aritiméticos

    * Multiplicação
    / Divisão
    - Subtração
    + Adição
    % Resto da divisão (Módulo)

=====================================================*/