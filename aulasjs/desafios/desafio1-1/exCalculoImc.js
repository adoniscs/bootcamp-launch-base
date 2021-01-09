// calculo de massa corpórea (IMC)
const nome = 'Adonis';
const altura = 1.69;
const peso = 85.6;
const imc = peso / (altura * altura);

if (imc >= 30) {
    console.log(`${nome}, você está acima do peso. Seu IMC é ${imc}`)
} else {
    console.log (`${nome}, você não esta acima do peso. Seu IMC é ${imc}`);
}