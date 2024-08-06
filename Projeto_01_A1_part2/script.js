var greeting = document.getElementById('greeting');
var username = ''

function login(){
    username = prompt('Digite seu Usuário:');
 
    if (username == '' || username == null){
        alert('ERROR: CAMPO OBRIGATORIO NAO PREENCHIDO')
    }else{
        greeting.innerHTML = 'OLA '+ username

        let logoutBtn =  document.createElement('button')

        logoutBtn.innerText = 'Log out'

        logoutBtn.onclick = logout

        greeting.appendChild(logoutBtn)
    }
}

function logout(){
    alert('Logout realizado com sucesso.')
    greeting.innerHTML = `Até logo ${username}...OU SERÁ QUE NÃO????`
}