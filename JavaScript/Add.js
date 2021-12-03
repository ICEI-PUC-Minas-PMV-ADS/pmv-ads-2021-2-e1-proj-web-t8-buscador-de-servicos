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
         compl       = $("#complemento").val(),
         trabalho    = $("#checkbox pintura, #checkbox eletrica, #checkbox marcenaria, checkbox limpeza, checkbox piscina, checkbox pets, checkbox alvenaria").val()
    var cadInicial = [
        {
            'id': 1,
            'Nome': 'Bruno',
            'Sobrenome': 'Gama',
            'Telefone': '(11) 98777721',
            'Email': 'bg@gmsil.com',
            'CPF': '333.222.444-00',
            'Senha': '12345',
            'Cep': '13480-333',
            'País': 'Brasil',
            'Estado': 'São Paulo',
            'Município': 'Limeira',
            'Endereço': 'Rua 6',
            'Compl': 'ap.22',
            'trabalho': 'Pintura'

        }
    ]
    var cadCompleto = [
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
            'Compl': compl,  
            'trabalho': trabalho
        }
    ] 

    var adicionaCad = JSON.parse (localStorage.getItem("cadCompleto"));
        if (!adicionaCad){
            adicionaCad = cadInicial
        };

        
        let novoId = 1;
        if (adicionaCad.length != 0)
        novoId = adicionaCad[adicionaCad.length - 1].id + 1;
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
                'Compl':$("#complemento").val(),
                'trabalho':$("#checkbox pintura, #checkbox eletrica, #checkbox marcenaria, checkbox limpeza, checkbox piscina, checkbox pets, checkbox alvenaria").val()
            }  

            adicionaCad.push(novoCad);
    
            localStorage.setItem("cadCompleto", JSON.stringify(adicionaCad));
        
            alert ('Cadastro realizado com sucesso!');
            
        }  
        
            

function login()
{
    localStorage.setItem("cadCompleto")
    if ('Email' = $("nome_login")) 
    {
        if ('Senha' = $("#email_login")) 
        {
            window.location.href = "areaPrestador.html";
        }   
    }
    else
        alert ('senha ou email incorretos');
    }
