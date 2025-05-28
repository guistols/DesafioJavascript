/*
* Função para verificar se é número, inteiro e positivo.
*/
function verificarNumero(numeroValor) {
    return Number.isInteger(numeroValor) && numeroValor > 0;
}
/*
* Função para puxar os dados do input, forçar a ser Number e mostrar true ou false
*/
function mostrar() {
    const numeroValor = Number(document.getElementById("input-numero").value);

    const resultado = verificarNumero(numeroValor)
    document.getElementById("resultado").textContent = resultado

}