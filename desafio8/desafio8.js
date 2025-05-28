// Array dos clientes
const clientes = [];

/*
* Pega o valores do inputs, joga-os para o array e chama a função atualizarTabela() que mostra os clientes
* Caso adicionar um cliente com o mesmo id, o valorFatura vai só adicionar.
*/
function mostrarCliente() {
    const clienteId = Number(document.getElementById("input-cliente-id").value);
    const valorFatura = Number(document.getElementById("input-fatura").value);

    const arrayClientes = {
        clienteId: clienteId,
        valorFatura: valorFatura
    }
    clientes.push(arrayClientes);

    alert("Cliente adicionado com sucesso")

    atualizarTabela(clientes);
    //Momento onde ocorre o agrupamento, caso tente adicionar um registro com o mesmo ID
    const agrupar = {};

    for (const cliente of clientes) {
        const id = cliente.clienteId;
        const valor = cliente.valorFatura;

        if (!agrupar[id]) {
            agrupar[id] = 0;
        }

        agrupar[id] += valor;
    }
    const listaAgrupada = Object.entries(agrupar).map(([clienteId, valorFatura]) => ({
        clienteId: Number(clienteId),
        valorFatura: valorFatura
    }));

    atualizarTabela(listaAgrupada);

    document.getElementById("input-cliente-id").value = "";
    document.getElementById("input-fatura").value = "";
}

// Essa função, caso ainda há clientes não agrupados, ele agrupa-os de forma adequada.
function agruparCliente() {
    const agrupar = {};

    for (const cliente of clientes) {
        const id = cliente.clienteId;
        const valor = cliente.valorFatura;

        if (!agrupar[id]) {
            agrupar[id] = 0;
        }

        agrupar[id] += valor;
    }
    const listaAgrupada = Object.entries(agrupar).map(([clienteId, valorFatura]) => ({
        clienteId: Number(clienteId),
        valorFatura: valorFatura
    }));

    atualizarTabela(listaAgrupada);
}

function atualizarTabela(listaAgrupada) {
    const tabela = document.getElementById("tabelaCliente").getElementsByTagName('tbody')[0]
    tabela.innerHTML = "";


    for (const cliente of listaAgrupada) {
        const novaLinha = tabela.insertRow();
        const novoCliente = novaLinha.insertCell(0);
        const novaFatura = novaLinha.insertCell(1);

        novoCliente.textContent = cliente.clienteId;
        novaFatura.textContent = cliente.valorFatura.toFixed(2);
    }
}
