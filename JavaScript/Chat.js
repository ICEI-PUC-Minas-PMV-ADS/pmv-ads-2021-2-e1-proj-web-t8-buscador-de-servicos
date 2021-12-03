var botao = document.getElementById ("botao");
var escreve = document.getElementById ("escreve");
var chat = document.getElementById ("chat");
var texto = '\n    Olá. Deixe sua mensagem e responderei assim que possível.';


    chat.textContent = ('load', (Date() +':'+ texto));

    
    
    botao.onclick= function enviar (){

        chat.textContent = ('load', chat.textContent +'\n'+ '\n'+Date() + ':'+'\n    '+ escreve.value);
        escreve.value="";
    
    }
