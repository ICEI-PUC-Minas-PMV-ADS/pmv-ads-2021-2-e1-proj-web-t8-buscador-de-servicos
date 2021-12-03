let btn = document.querySelector()

btn.addEventListener('click', ()=>
{
    let inputSenha = document.querySelector('#email_login')

    if ( inputSenha.getAttribute('type') =='password')
    {
        inputSenha.setAttribute('type', 'text'); 
        window.location.href="areadocliente.html";
    } 
    else
    {
        inputSenha.setAttribute('type', 'password');
        alert(Usuario ou senha incorretos);
    }
}




function cadastrar()
{
    alert('Botão clicado')
}