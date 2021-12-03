//Declara variáveis Array
function alerta () {
    
    var nomeP = $('#nomeP').val();
    var dataS = $('#dataS').val();
    var insatisfP = $('#insatisf').is(':checked');
    var poucosatisfP = $('#poucosatisf').is(':checked');
    var satisfP = $('#satisf').is(':checked');
    var muitosatisfP = $('#muitosatisf').is(':checked');
    var insatisfS = $('#insatisfS').is(':checked');
    var poucosatisfS = $('#poucosatisfS').is(':checked');
    var satisfS = $('#satisfS').is(':checked');
    var muitosatisfS = $('#muitosatisfS').is(':checked');
    var relato = $('#relato').val();
//Variável q adiciona os dados iniciais no LocalStorage
    var avalInicial = [
        {
            'id': 1,
            'Prestador': "Paulo",
            'Data': "23/11/21",
            'Insatisfeito': 'false',
            'Pouco satisfaeito': 'false',
            'Satisfeito': 'false',
            'Muito satisfeito': 'true',
            'Insatisfeito Site': 'false',
            'Pouco satisfeito Site': 'false',
            'Satisfeito Site': 'false',
            'Muito satisfeito Site': 'true'
        }
    ]

//Array
    var avalCompleto = [
            {
                'Prestador': nomeP,
                'Data': dataS,
                'Insatisfeito': insatisfP,
                'Pouco satisfeito': poucosatisfP,
                'Satisfeito': satisfP,
                'Muito satisfeito': muitosatisfP,
                'Insatisfeito Site': insatisfS,
                'Pouco satisfeito Site': poucosatisfS,
                'Satisfeito Site': satisfS,
                'Muito satisfeito Site': muitosatisfS,
                'Relato': relato
            }
        ]

       
//Adiciona novas informações na Array
        var adicionaAval = JSON.parse (localStorage.getItem ('avalCompleto'));
        if (!adicionaAval){
            adicionaAval = avalInicial //se array estiver vazia
        }; 
        
        let novoId = 1;
        if (adicionaAval.length != 0)
        novoId = adicionaAval[adicionaAval.length - 1].id + 1;
        let novoAval = {
            'id': novoId,
            'Prestador': $('#nomeP').val(),
            'Data': $('#dataS').val(),
            'Insatisfeito':$('#insatisf').is(':checked'),
            'Pouco satisfeito': $('#poucosatisf').is(':checked'),
            'Satisfeito': $('#satisf').is(':checked') ,
            'Muito satisfeito': $('#muitosatisf').is(':checked'),
            'Insatisfeito Site': $('#insatisfS').is(':checked'),
            'Pouco satisfeito Site' : $('#poucosatisfS').is(':checked'),
            'Satisfeito Site': $('#satisfS').is(':checked'),
            'Muito satisfeito Site': $('#muitosatisfS').is(':checked'),
            'Relato': $('#relato').val()
         }

        adicionaAval.push(novoAval);
    
    localStorage.setItem("avalCompleto", JSON.stringify(adicionaAval));

    alert ('Mensagem enviada!');
    }
    


    

