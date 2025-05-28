/*
* Função para calcular a tarifa 
*/
function calculoTarifa(consumoTotal){
    let tarifa = 0; 
    /*
    * Caso o consumoTotal seja até 100kWh
    */
    if(consumoTotal<=100){
        tarifa = consumoTotal*0.50
    /*
    * Caso o consumoTotal seja até 500kWh
    */
    }else if(consumoTotal<=500){
        tarifa = (100*0.50) + ((consumoTotal-100)*0.75)
    /*
    * Caso o consumoTotal seja acima de 500kWh
    */
    }else{
        tarifa = (100*0.50) + (400*0.75) + ((consumoTotal-500)*1.00)
    }
    /*
    * Retorna o valor final da tarifa
    */
    return tarifa;
}
/*
* Puxa o dado do input do HTML kWh, verifica se é válido o valor digitado e chama a função para calcular.
*/
function calcularConsumoTotal(){
    const consumoTotal = Number(document.getElementById("input-consumo-total").value);
    
    if (isNaN(consumoTotal) || consumoTotal < 0) {
    alert("Digite um número válido para o consumo.");
    return;
    }
    const tarifacaoCalculo = calculoTarifa(consumoTotal)

    const resultado = document.getElementById("resultado")
    resultado.innerText = `R$ ${tarifacaoCalculo.toFixed(2)}`
}