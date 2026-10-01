const usuario = 'ana'
const senha = '123'
const acessar = document.getElementById('btnAcessar')
const limpar = document.getElementById('btnLimpar')
const h3 = document.getElementById('h3')
const usu = document.getElementById('usuario')
const sen = document.getElementById('senha')

usu.focus()

acessar.addEventListener('click', ()=>{
    if(usuario === usu.value && senha === sen.value){
        acessar.style.backgroundColor = '#069606'
        h3.innerText = 'Bem-vindo ao sistema'
    } else{
        acessar.style.backgroundColor = "#be0000"
        h3.innerText = "Usuário ou senha incorretos"
    }
})

limpar.addEventListener('click', ()=>{
    usu.value = ''
    sen.value = ''
    h3.innerText = ''
    acessar.style.backgroundColor = ''
})