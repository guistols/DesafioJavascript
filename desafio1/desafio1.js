function calcularEnergia(mediaEnergia) {
        /*
        * Filtra apenas valores acima de zero
        */
      const leiturasValidas = mediaEnergia.filter(valor => valor > 0);
        /*
        * Verifica se há valores válidos, se não retorna zero
        * E evita divisões por zero.
        */
     if (leiturasValidas.length === 0) return 0;
        /*
        * Soma o total dos valores válidos 
        * E cálcula a média
        */
      const soma = leiturasValidas.reduce((total, valor) => total + valor, 0);
      const media = soma / leiturasValidas.length;
        /*
        * E retorna o resultado com duas casas após a vir
        */
      return Number(media.toFixed(2));
    }

function inputEnergia(energia){
    /*
    *  Recebe os valores e joga para o array já formatado 
    */
    const inputEnergia = document.getElementById("input-energia").value;
    const arrayEnergia = inputEnergia.split(",").
                        map(item => parseFloat(item.trim())).
                        filter(num=>!isNaN(num))

    
    const mediaEnergia = calcularEnergia(arrayEnergia)

    document.getElementById("resultado").textContent = `Média: ${mediaEnergia.toFixed(2)} kWh`;
}