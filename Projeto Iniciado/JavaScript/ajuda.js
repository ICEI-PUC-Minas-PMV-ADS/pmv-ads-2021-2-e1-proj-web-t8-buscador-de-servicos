//Declara variáveis Array
function alerta () {
    var formAssunto = $('#assunto').val();
    var formNome = $('#nome').val();
    var formEmail = $('#email').val();
    var formMsg = $('#mensagem').val();
    var formCompleto = [
            {
                'Assunto': formAssunto,
                'Nome': formNome,
                'Email': formEmail,
                'Mensagem': formMsg
            }
        ]

       
//Adiciona novas informações na Array
         
        var adicionaForm = JSON.parse (localStorage.getItem ('formCompleto'));
        let novoId = 1;
        if (adicionaForm.length != 0)
        novoId = adicionaForm[adicionaForm.length - 1].id + 1;
        let novoForm = {
            'id': novoId,
            'Assunto': $('#assunto').val(),
            'Nome': $('#nome').val(),
            'Email': $('#email').val(),
            'Mensagem': $('#mensagem').val()
        }

        adicionaForm.push(novoForm);
    
    localStorage.setItem("formCompleto", JSON.stringify(adicionaForm));

    alert ('Mensagem enviada!');
    }
    


    

