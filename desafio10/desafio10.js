/*
* Array pré-definido de clientes
*/
const clientes = [
    { nome: "João", faturasPendentes: 0, valorTotalPendente: 350 },
    { nome: "Maria", faturasPendentes: 2, valorTotalPendente: 300 },
    { nome: "Carlos", faturasPendentes: 1, valorTotalPendente: 150 },
    { nome: "Ana", faturasPendentes: 0, valorTotalPendente: 0 },
    { nome: "Mariana", faturasPendentes: 3, valorTotalPendente: 500 }
]
/*
* Gera a tabela com o array pré-definido dos clientes
*/
function tabela(listaClientes) {
    const corpoTabela = document.getElementById("tabelaCliente");
    corpoTabela.innerHTML = "";

    for (const cliente of listaClientes) {
        const linha = document.createElement("tr");

        const tdNome = document.createElement("td");
        tdNome.textContent = cliente.nome;

        const tdFaturas = document.createElement("td");
        tdFaturas.textContent = cliente.faturasPendentes;

        const tdValor = document.createElement("td");
        tdValor.textContent = cliente.valorTotalPendente.toFixed(2);

        linha.appendChild(tdNome);
        linha.appendChild(tdFaturas);
        linha.appendChild(tdValor);

        corpoTabela.appendChild(linha);

    }
}
/*
* Gera a tabela ao carregar a página
*/
window.onload = () => tabela(clientes)
/*
* Chama a função da tabela para mostrar todos os clientes novamente
*/
function mostrarTodos() {
    tabela(clientes);
}
/*
* Puxa o array de clientes, percorre através do .filter onde faturas pendentes maiores
* que zero vão para o novo array chamado inadimplentes.
* e joga esse array para o parâmetro da função tabela.
*/
function filtrarInadimplentes() {
    const inadimplentes = clientes.filter(cliente => cliente.faturasPendentes > 0);
   tabela(inadimplentes);
}
