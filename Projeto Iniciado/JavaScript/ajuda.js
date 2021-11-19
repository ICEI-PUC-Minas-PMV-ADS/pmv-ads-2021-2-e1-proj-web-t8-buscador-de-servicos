function alerta(){
    var formAssunto = $('#assunto').val();
    var formNome = $('#nome').val();
    var formEmail = $('#email').val();
    var formMsg = $('#mensagem').val();
    var formId = 0;
    var formCompleto = {
        "armazena":[
            {
                'id': formId,
                'Assunto': formAssunto,
                'Nome': formNome,
                'Email': formEmail,
                'Mensagem': formMsg
            }
            
        ] 
    }
    
        

    /*var formCompleto = JSON.parse(formCompleto);
    if (formCompleto.armazena==null)
        armazena= [];
    
    return Adicionar();
}

    function Adicionar(){/*{
    var formCompleto = JSON.stringify({
        Assunto : $('#assunto').val(),
        Nome: $('#nome').val(),
        Email : $('#email').val,
        Mensagem : $('#mensagem').val()
    var formCompleto = {
        Assunto: setAssunto,
        Nome: setNome,
        Email: setEmail,
        Mensagem: setMensagem
    });*/
    
    localStorage.setItem("formCompleto", JSON.stringify(formCompleto));

    alert ('Mensagem enviada!');
    
}
/*
    vnomar banco = JSON.parse(localStorage.getItem ('novoBanco'))
        for (var id=0; id<formCompleto.lenght; id++);
        novoForm = {
            'ID': id,
            'Assunto': formCompleto.setAssunto,
            'Nome': formCompleto.setNome,
            'Email': formCompleto.setEmail,
            'Mensagem': formCompleto.setMensagem

        };
        banco.push(novoForm);
        displayMessage ('Mensagem enviada com sucesso!');

        localStorage.setItem ('novoBanco',JSON.stringify(banco));

    

    //localStorage.setItem("formCompleto", formCompleto);


*/
