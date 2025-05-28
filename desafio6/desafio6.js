/*
* Função para gerar o código do cliente
*/
function gerarCodigo(){
    /*
    * Pega as informações dos inputs como o número do cliente e o número da fatura
    * E utiliza uma função do javascript que se chama Date() que pega a data completa atual do computador
    */
    const clienteNumero = Number(document.getElementById("input-cliente-numero").value);
    const faturaNumero = Number(document.getElementById("input-fatura").value);
    const dataAtual = new Date(); /* Pega a data completa atual */ 
    const dia = String(dataAtual.getDate()).padStart(2,'0') /* Pega o dia */
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0') /* Pega o mês */
    const ano = dataAtual.getFullYear(); /* Pega o ano */

    /*
    * Pega o ID da div para poder mostrar o resultado do código
    */
    const codigoCliente = document.getElementById("resultado");
    /*
    * Concatenação do código do cliente + número da fatura + data atual.
    */

    codigoCliente.innerText = `${clienteNumero}-${faturaNumero}-${ano}${mes}${dia}`

}