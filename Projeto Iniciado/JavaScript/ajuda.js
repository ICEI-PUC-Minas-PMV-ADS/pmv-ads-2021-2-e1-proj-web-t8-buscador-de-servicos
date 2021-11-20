function alerta(){
    var formAssunto = $('#assunto').val();
    var formNome = $('#nome').val();
    var formEmail = $('#email').val();
    var formMsg = $('#mensagem').val();
    var formId = 0;
    var formCompleto = [
            {
                'id': formId,
                'Assunto': formAssunto,
                'Nome': formNome,
                'Email': formEmail,
                'Mensagem': formMsg
            }
        ] 

     /*  for (x=0; formCompleto[x] < 100; x++);
        let novoContato = {
            'id': x,
            'Assunto': $('#assunto').val(),
            'Nome': $('#nome').val() ,
            'Email': $('#email').val(),
            'Mensagem': $('#mensagem').val() 
        };

        formCompleto.push(novoContato);*/
    
    localStorage.setItem("formCompleto", JSON.stringify(formCompleto));

    alert ('Mensagem enviada!');

    


    
}
