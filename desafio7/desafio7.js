const arrayFatura = [];

function gerarMulta(){
    const valorFatura = Number(document.getElementById("input-valor-fatura").value);
    const dataVencimento = document.getElementById("input-data-vencimento").value;
    const dataPagamento = document.getElementById("input-data-pagamento").value;

    const fatura = {
        valorFatura: valorFatura,
        dataVencimento: new Date(dataVencimento),
        dataPagamento: new Date(dataPagamento)  
    }

    arrayFatura.push(fatura)
    
    const resultadoMulta = calcularMulta(fatura)
    const resultado = document.getElementById("resultado")

    resultado.innerText = `Valor total da multa R$ ${resultadoMulta.toFixed(2)}`

    
}

function calcularMulta(fatura){
    const { valorFatura, dataVencimento, dataPagamento } = fatura;
    
    if(dataPagamento>dataVencimento){
        const convertMs = dataPagamento - dataVencimento
        const dias = Math.ceil(convertMs / (1000 * 60 * 60 * 24));
        const multa = 2 + (dias*0.033)
        const totalMulta = valorFatura+multa;
        return totalMulta;
    }else{
        return;
    }

   
}