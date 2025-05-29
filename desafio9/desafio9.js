
// Array com os valores pix a serem armazenados
const valoresPix = [];

//Adciona valores ao array valoresPix.
function adicionarValor(){
    const valorPix = Number(document.getElementById("input-pix").value);
    
    valoresPix.push(valorPix);

    alert("Valor adicionado com sucesso!")

    document.getElementById("input-pix").value = "";
}
// Faz a soma das transações e contagem de quantas foram e as mostra no final
function calcularTotal(){
    let somaTotal = 0;
    let qtdTransacoes =0;

    for(let i = 0;i<valoresPix.length;i++){
        somaTotal+=valoresPix[i];
        qtdTransacoes++;
    }

    const resultado = document.getElementById("resultado")
    resultado.innerHTML= `Total arrecadado: ${somaTotal.toFixed(2)}<br>Quantidade de transações: ${qtdTransacoes}`

    valoresPix.length = 0;
}