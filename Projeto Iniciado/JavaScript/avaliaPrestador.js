//Declara variáveis Array
function alerta () {
    var nomeP = $('#nomeP').val();
    var dataS = $('#dataS').val();
    //var formEmail = $('#email').val();
    var insatisfP = $('#insatisf').val();
    var poucosatisfP = $('#poucosatisf').val();
    var satisfP = $('#satisf').val();
    var muitosatisfP = $('#muitosatisf').val();
    var relato = $('#relato').val();
    var avalCompleto = [
            {
                'Prestador': nomeP,
                'Data': dataS,
               // 'Email': formEmail,
                'Insatisfeito': insatisfP,
                'Pouco satisfeito': poucosatisfP,
                'Satisfeito': satisfP,
                'Muito satisfeito': muitosatisfP,
                'Relato': relato
            }
        ]

       
//Adiciona novas informações na Array
         
        var adicionaAval = JSON.parse (localStorage.getItem ('avalCompleto'));
        let novoId = 1;
        if (adicionaAval.length != 0)
        novoId = adicionaAval[adicionaAval.length - 1].id + 1;
        let novoAval = {
            'id': novoId,
            'Prestador': $('#nomeP').val(),
            'Data': $('#dataS').val(),
           // 'Email': $('#email').val(),
            'Insatisfeito':$('#insatisf').val() ,
            'Pouco satisfeito': $('#poucosatisf').val(),
            'Satisfeito': $('#satisf').val() ,
            'Muito satisfeito': $('#muitosatisf').val() ,
            'Relato': $('#relato').val()
         }

        adicionaAval.push(novoAval);
    
    localStorage.setItem("avalCompleto", JSON.stringify(adicionaAval));

    alert ('Mensagem enviada!');
    }
    


    

