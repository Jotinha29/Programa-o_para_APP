// Programa 1 - Cria um programa que calcula o IMC do usuário
// ENTRADA: o usuário digita os dados 
// SAIDA: IMC do usuário 
// Estrutura de repetição: IF 

function calculaIMC(){
    let peso = Number(prompt('Informe seu peso: '))
    let altura = Number(prompt('Informe sua altura: '))

    IMC = peso/(altura*altura)
    
    

    if (IMC < 17) {
        document.write(`<h3>MUITO ABAIXO DO PESO</h3>`);
    } else if (IMC >= 17 && IMC <= 18.5) {
        document.write(`<h3>ABAIXO DO PESO</h3>`);
    } else if (IMC > 18.5 && IMC <= 24.9) {
        document.write(`<h3>PESO NORMAL</h3>`);
    } else if (IMC > 24.9 && IMC <= 29.9) {
        document.write(`<h3>ACIMA DO PESO</h3>`);
    } else if (IMC > 29.9 && IMC <= 34.9) {
        document.write(`<h3>OBESIDADE GRAU I</h3>`);
    } else if (IMC > 34.9 && IMC <= 40) {
        document.write(`<h3>OBESIDADE GRAU II</h3>`);
    } else if (IMC > 40) {
        document.write(`<h3>OBESIDADE GRAU III</h3>`);
    }    
    document.write(`Seu IMC é igual a ${IMC.toFixed(2)}`)
}