let btn = document.querySelector('.fa fa-eye')

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#email_login')

    if ( inputSenha.getAttribute('type') =='password'){
        inputSenha.setAttribute('type', 'text') } 
    else{
        inputSenha.setAttribute('type', 'password')
    }
    })




function cadastrar(){
    alert('Botão clicado')
}
