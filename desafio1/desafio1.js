 function calcularEnergia(mediaEnergia) {
      const leiturasValidas = mediaEnergia.filter(valor => valor > 0);

      if (leiturasValidas.length === 0) return 0;

      const soma = leiturasValidas.reduce((total, valor) => total + valor, 0);
      const media = soma / leiturasValidas.length;

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