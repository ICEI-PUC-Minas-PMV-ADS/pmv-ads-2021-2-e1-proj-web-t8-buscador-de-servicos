function acesso(form){
/*Checa nome do usuario - caso digite com letra maiuscula, sera convertido para minusculo*/

    form.nome.value = form.nome.value.tolowercase()
    form.senha.value = form.senha.value.tolowercase()

}

let btn = document.querySelector('.fa fa-eye')

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#email_login')

    if ( inputSenha.getAttribute('type') =='password'){
        inputSenha.setAttribute('type', 'text') } 
    else{
        inputSenha.setAttribute('type', 'password')
    }
    })