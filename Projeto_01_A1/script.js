var name = prompt('Favor digite seu nome');
var age = prompt('Favor digite sua idade');
var matricula = prompt('Favor digite sua matricula');
var curso = prompt('Favor digite seu curso');
var n1 = parseFloat(prompt('Favor, digite sua 1° nota:'));
var n2 = parseFloat(prompt('Favor, digite sua 2° nota:'));
var n3 = parseFloat(prompt('Favor, digite sua 3° nota:'));
var n4 = parseFloat(prompt('Favor, digite sua 4° nota:'));

var media = (n1+n2+n3+n4)/4

document.write('<img src="https://i.pinimg.com/564x/4f/a7/8b/4fa78b8b77d9d1e2b95988276fac39a2.jpg">')
document.write('<h1>Salve, seja bem vindo ao meu site</h1>')
document.write('<h2>Nome: '+ name +'</h2>')
document.write(`<h2>Idade: ${age}</h2>`)
document.write(`<h2>Curso: ${curso}</h2>`)
document.write(`<h2>Matricula: ${matricula}</h2>`)
document.write(`<h2>Suas notas foram ${n1}, ${n2}, ${n3}, ${n4}</h2>`)
document.write(`<h2>Sua média foi ${media}</h2>`)

console.log(media)
alert(media)
console.log('Nome:' + name + 'Idade:'+ age)
alert('Nome:' + name + 'Idade:'+ age)