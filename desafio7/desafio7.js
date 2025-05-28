// Array para armazenar o valor da fatura, data de vencimento e data de pagamento
const arrayFatura = [];
// Função onde irá pegar os valores dos inputs, jogar para o array e mandar para a função que irá fazer o cálculo.
function gerarMulta(){
    const valorFatura = Number(document.getElementById("input-valor-fatura").value);
    const dataVencimento = document.getElementById("input-data-vencimento").value;
    const dataPagamento = document.getElementById("input-data-pagamento").value;
    // Cria o objeto
    const fatura = {
        valorFatura: valorFatura,
        dataVencimento: new Date(dataVencimento), // Função Date() para pegar a data de forma correta
        dataPagamento: new Date(dataPagamento)  
    }
    // Joga o objeto pra dentro do array.
    arrayFatura.push(fatura)
    // Variável onde irá armazenar o valor total da multa
    const resultadoMulta = calcularMulta(fatura)
    const resultado = document.getElementById("resultado")

    resultado.innerText = `Valor total da multa R$ ${resultadoMulta.toFixed(2)}`

    
}

//Função de cálculo da multa
function calcularMulta(fatura){
    // Extrai os valores do objeto
    const { valorFatura, dataVencimento, dataPagamento } = fatura;
    
    //Verifica o atraso para calcular a multa
    if(dataPagamento>dataVencimento){
        const convertMs = dataPagamento - dataVencimento
        const dias = Math.ceil(convertMs / (1000 * 60 * 60 * 24)); /* Conversão de ms (milisegundos) para dias, pois o calculo entre datas da uma diferença de milisegundos */
        const multa = 2 + (dias*0.033)  // Onde pode resultar em um resultado muito alto no valor total da multa.
        const totalMulta = valorFatura+multa;
        return totalMulta;
    }else{
        return;
    }

   
}