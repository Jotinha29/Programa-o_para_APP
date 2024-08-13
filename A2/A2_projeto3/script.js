function escolher(){
    let options = Number(prompt('Digite a opção desejada:'))
    //let opNumber = Number(options)
    
    switch(options){
        case 1:
            alert('Você escolheu a opção 1 - Arroz')
        break;
        case 2:
            alert('Você escolheu a opção 2 - Feijão')
        break;
        case 3:
            alert('Você escolheu a opção 3 - Batata Frita')
        break;
        case 4:
            alert('Você escolheu a opção 4 - Peixe')
        break;
        default:
            alert('Opção inválida.')
        break;
    }
}

