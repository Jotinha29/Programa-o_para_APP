// Programa 2
// ENTRADA: o usuário digita a temperatura 
// CONDIÇÃO: usuário escolhe entre C° e F°
// SAIDA: Temperatura convertida
// Estrutura de repetição: IF 

function escolher(){
    let options = Number(prompt('Digite a opção desejada:'))
    //let opNumber = Number(options)
    
    switch(options){
        case 1:
            document.write(`<h2>Você escolheu a opção 1 - C°</h2>`)
            let tempC = Number(prompt('Informe a temperatura:'))

            //(0 °C × 9/5) + 32 = 32 °F
            tempConvertidaF = (tempC * 1.8) + 32

            document.write(`<h3>Temperatura informada em C°: ${tempC.toFixed(1)}</h3>`)
            document.write(`<h3>Temperatura convertida para F°: ${tempConvertidaF.toFixed(1)}</h3>`)
        break;
        case 2:
            document.write(`<h2>Você escolheu a opção 2 - F°</h2>`)
            let tempF = Number(prompt('Informe a temperatura:'))

            //(32 °F − 32) × 5/9 = 0 °C
            tempConvertidaC = (tempF - 32) * (5/9)

            document.write(`<h3>Temperatura informada em C°: ${tempF.toFixed(1)}</h3>`)
            document.write(`<h3>Temperatura convertida para F°: ${tempConvertidaC.toFixed(1)}</h3>`)
        break;
        default:
            alert('Opção inválida.')
        break;
    }
}