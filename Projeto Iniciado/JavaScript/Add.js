/*function()
{
    var operacao = "A"; //"A"=Adição; "E"=Edição teste
    var indice_selecionado = -1; //Índice do item selecionado na lista
    var tbClientes = localStorage.getItem("tbprest");// Recupera os dados armazenados
    tbClientes = JSON.parse(tbprest); // Converte string para objeto
    if(tbClientes == null) // Caso não haja conteúdo, iniciamos um vetor vazio
    tbClientes = [];
}*/

function Cadastrar(){

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
            'Compl': 'ap.22'

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
            'Compl': compl  
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
                'Compl':$("#complemento").val()
            }  

            adicionaCad.push(novoCad);
    
            localStorage.setItem("cadCompleto", JSON.stringify(adicionaCad));
        
            alert ('Cadastro realizado com sucesso!');
            
        }           
            
    /*tbprest.push(cliente);
    localStorage.setItem("tbprest", JSON.stringify(tbprest));
    alert("Registro adicionado.");
    return true;
}

function Editar(){
    tbprest[indice_selecionado] = JSON.stringify(
        {
        var  Nome        : $("#nome").val(),
             Sobrenome   : $("#sobrenome").val(),
             Telefone    : $("#phone").val(),
             Email       : $("#email").val(),
             cnpj        : $("#CPF").val(),
             senha       : $("#senha").val(),
             cep         : $("#CEP").val(),
             pais        : $("#pais").val(),
             Estado      : $("#estado").val(),
             Municipio   : $("#municipio").val(),
             endereço    : $("#endereco").val(),
            compl       : $("#complemento").val(),
        }//Altera o item selecionado na tabela
    localStorage.setItem("tbprest", JSON.stringify(tbprest));
    alert("Informações editadas.")
    operacao = "A"; //Volta ao padrão
    return true;
}

function Excluir(){
    tbprest.splice(indice_selecionado, 1);
    localStorage.setItem("tbprest", JSON.stringify(tbprest));
    alert("Registro excluído.");
}

function login()
{
    tbprest[indice_selecionado] = JSON.stringify(
        {
            var  Nome        : $("#nome").val(),
                 Sobrenome   : $("#sobrenome").val(),
                 Telefone    : $("#phone").val(),
                 Email       : $("#email").val(),
                 cnpj        : $("#CPF").val(),
                 senha       : $("#senha").val(),
                 cep         : $("#CEP").val(),
                 pais        : $("#pais").val(),
                 Estado      : $("#estado").val(),
                 Municipio   : $("#municipio").val(),
                 endereço    : $("#endereco").val(),
                 compl       : $("#complemento").val(),
        }
    )
    if(email = $("#nome_login") senha = $("email_login"))
    {
        window.location.href = "http://127.0.0.1:5501/Projeto%20Iniciado/areadocliente.html"
    }  
}*/