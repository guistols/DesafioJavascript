/*
* Função para percorrer o array e verificar a sequência.
*/
function calcularSequencia(arrayConsumo){
    /*
    * sequenciaAtual = contador de sequencia de números acima de 300
    * maximaSequencia = contador da maior sequencia de números acima de 300
    * sequencia = controle caso não existe nenhum número acima de 300.
    */
    let sequenciaAtual =0;
    let maximaSequencia =0;
    let sequencia = false;
    /*
    * Loop para percorrer o arrayConsumo (valores) e fazer a contagem 
    * da sequencia dos números.
    */
    for(let i = 0;i<=arrayConsumo.length;i++){
        /*
        * Verifica se o valor na posição do array é maior que 300
        * se for adiciona +1 ao contador (sequenciaAtual)
        * e torna a váriavel de controle sequencia TRUE, pois encontrou um número
        * maior que 300 no array
        */
        if(arrayConsumo[i]>300){
            sequenciaAtual++;
            sequencia = true;
            /*
            * Verifica e armazena a maior sequencia do array 
            */
            if(sequenciaAtual>maximaSequencia){
                maximaSequencia = sequenciaAtual;
            }
            /*
            * Caso o próximo número não seja maior que 300, cai no else
            * e reseta a contagem de sequencia.
            */
        }else{
            sequenciaAtual=0;
        }
        
    }
    /*
    * Se a variável de controle sequencia ainda for false retorna um alerta.
    */
    if(!sequencia){
            alert("Nenhum número acima de 300 encontrado.")
    }
    /*
    * Retorna o que o exercício pede que é identificar a maior sequencia.
    * E o comprimento dela
    */
    return maximaSequencia;
    
}
/*
* Função para receber os valores do input separados por vírgula
*/
function calcularConsumo(){
    /*
    * Pega os valores do input pelo ID.
    */
    const inputConsumo = document.getElementById("input-consumo").value;
    /*
    * Joga para uma variável de array formatada através do split e o parseFloat
    */
    const arrayEnergia = inputConsumo.split(",").map(v => parseFloat(v.trim()));
    /* 
     * Verifica se alguma informação do array é diferente de number. 
    */
    if(arrayEnergia.some(isNaN)){
        alert("Insira um número válido.")
        document.getElementById("input-consumo").value = "";
        return;
    }  
    /*
    * Chamada da função para percorer a sequencia e jogar para uma variável
    * que vai mostrar o resultado da função. 
    */
    const arrayConsumo = calcularSequencia(arrayEnergia)

    document.getElementById("resultado").innerText = 
    `Maior sequência contínua de 300kWh: ${arrayConsumo}`
}