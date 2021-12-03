function CadastrarP(){

    var  Nome        = $("#nome").val(),
         Sobrenome   = $("#sobrenome").val(),
         Telefone    = $("#phone").val(),
         Email       = $("#email").val(),
         cnpj        = $("#CPF").val(),
         senha       = $("#senha").val(),
         cep         = $("#CEP").val(),
         pais        = $("#pais").val(),
         Estado      = $("#estado").val(),
         Municipio   = $("#municipio").val(),
         endereço    = $("#endereco").val(),
         compl       = $("#complemento").val()
    var cadInicialc = [
        {
            'id': 1,
            'Nome': 'Victor',
            'Sobrenome': 'Gammaro',
            'Telefone': '(21) 912345678',
            'Email': 'Vg@gmail.com',
            'CPF': '000.111.222-33',
            'Senha': '12345',
            'Cep': '13480-333',
            'País': 'Brasil',
            'Estado': 'São Paulo',
            'Município': 'Limeira',
            'Endereço': 'Rua 6',
            'Compl': 'ap.22'

        }
    ]
    var cadCompletoc = [
        {
            'Nome': Nome,
            'Sobrenome': Sobrenome,
            'Telefone': Telefone,
            'Email': Email,
            'CPF': cnpj,
            'Senha': senha,
            'Cep': cep,
            'País': pais,
            'Estado': Estado,
            'Município': Municipio,
            'Endereço': endereço,
            'Compl': compl  
        }
    ] 

    var adicionaCadc = JSON.parse (localStorage.getItem("cadCompletoc"));
        if (!adicionaCadc){
            adicionaCadc = cadInicialc
        };

        
        let novoId = 1;
        if (adicionaCadc.length != 0)
        novoId = adicionaCadc[adicionaCadc.length - 1].id + 1;
            let novoCad = {
                'id': novoId,
                'Nome':$("#nome").val(),
                'Sobrenome': $("#sobrenome").val(),
                'Telefone': $("#phone").val(),
                'Email': $("#email").val(),
                'CPF': $("#CPF").val(),
                'Senha': $("#senha").val(),
                'Cep': $("#CEP").val(),
                'País': $("#pais").val(),
                'Estado': $("#estado").val(),
                'Município': $("#municipio").val(),
                'Endereço':  $("#endereco").val(),
                'Compl':$("#complemento").val()
            }  

            adicionaCadc.push(novoCad);
    
            localStorage.setItem("cadCompleto", JSON.stringify(adicionaCadc));
        
            alert ('Cadastro realizado com sucesso!');
            
        }           