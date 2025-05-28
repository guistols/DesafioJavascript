/*
* Cria o array de pessoas
*/
const pessoas = [];

/*
* Função onde irá verificar a categoria e adicionar ao array.
*/
function categorizarConsumo(categoriaConsumo) {
    for (let i = 0; i < categoriaConsumo.length; i++) {
        let consumo = categoriaConsumo[i].consumo
        if (consumo >= 600) {
            categoriaConsumo[i].categoria = "Alto"
        } else if (consumo >= 300) {
            categoriaConsumo[i].categoria = "Médio"
        } else {
            categoriaConsumo[i].categoria = "Baixo"
        }

    }
    /*
    * Retorna o array já categorizado
    */
    return categoriaConsumo;
}

/*
* Função para pegar as informações nome e consumo 
*/
function adicionarPessoa() {
    const inputNome = document.getElementById("input-nome");
    const inputConsumo = document.getElementById("input-consumo");

    const nome = inputNome.value;
    const consumo = inputConsumo.value;

    /*
    * Verifica se as informações digitas foram válidas
    */
    if (!nome || isNaN(consumo)) {
        alert("Preencha os campos corretamente.")
        return
    } else {
        /*
        * Se tudo estiver correto, irá preencher o array e limpar 
        * o input para colocar novas informações
        */
        pessoas.push({ nome, consumo})
        alert("Dados inseridos com sucesso!")
        inputNome.value = "";
        inputConsumo.value = "";
        console.log(pessoas)
    }
    /*
    * Chama a função da categorização das pessoas
    */
    categoriaConsumo = categorizarConsumo(pessoas);

}
/*
* Exibe a lista com, nome, consumo e categoria
*/
function mostrarLista(){
    const listar = document.getElementById("lista");

    pessoas.forEach(pessoa => {
        const li = document.createElement("li");
        li.textContent = `Nome: ${pessoa.nome}, Consumo: ${pessoa.consumo}, Categoria: ${pessoa.categoria}`;
        listar.appendChild(li);
    });
}