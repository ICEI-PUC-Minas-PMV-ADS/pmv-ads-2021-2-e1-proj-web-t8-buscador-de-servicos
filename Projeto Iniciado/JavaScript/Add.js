function()
{
    var operacao = "A"; //"A"=Adição; "E"=Edição
    var indice_selecionado = -1; //Índice do item selecionado na lista
    var tbClientes = localStorage.getItem("tbprest");// Recupera os dados armazenados
    tbClientes = JSON.parse(tbprest); // Converte string para objeto
    if(tbClientes == null) // Caso não haja conteúdo, iniciamos um vetor vazio
    tbClientes = [];
}

function Adicionar()
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
    tbprest.push(cliente);
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

