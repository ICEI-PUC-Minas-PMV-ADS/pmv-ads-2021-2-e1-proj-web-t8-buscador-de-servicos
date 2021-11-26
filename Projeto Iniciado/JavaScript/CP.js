function Cadastrar()
{
    var PM
}
function Adicionar()
{
	var cliente = JSON.stringify
    (
        {
		    Nome        : $("#nome").val(),
		    Sobrenome   : $("#sobrenome").val(),
		    Telefone    : $("#phone").val(),
		    Email       : $("#email").val(),
            CNPJ        : $("#CPF").val(),
		    senha       : $("#senha").val(),
		    CEP         : $("#CEP").val(),
		    pais        : $("#pais").val(),
            Estado      : $("#estado").val(),
		    Municipio   : $("#municipio").val(),
		    endereço    : $("#endereco").val(),
		    compl       : $("#complemento").val(),
	    }
    );
	tbClientes.push(cliente);
	localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
	alert("Registro adicionado.");
	return true;
}
