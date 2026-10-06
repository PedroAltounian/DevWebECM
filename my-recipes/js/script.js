console.log("JavaScript conectado!");

function calcularPreco(numPessoas, tipoDaLasanha) {
    let precoPorPessoa;

    if (tipoDaLasanha === "Frango") {
        precoPorPessoa = 20;
    } else {
        precoPorPessoa = 30;
    }

    return precoPorPessoa * numPessoas;
}

// Guarda a escolha entre os cliques.
let tipoSelecionado = "";

const botaoFrango = document.getElementById("botaoFrango");
const botaoBolonhesa = document.getElementById("botaoBolonhesa");
const botaoPessoas = document.getElementById("botaoPessoas");
const campoQuantidade = document.getElementById("quantidade");
const resultado = document.getElementById("p_preco");

botaoFrango.onclick = function() {
    tipoSelecionado = "Frango";
    resultado.textContent = "Lasanha de frango selecionada.";
};

botaoBolonhesa.onclick = function() {
    tipoSelecionado = "Bolonhesa";
    resultado.textContent = "Lasanha à bolonhesa selecionada.";
};

botaoPessoas.onclick = function() {
    const numeroPessoas = Number(campoQuantidade.value);

    if (tipoSelecionado === "") {
        resultado.textContent = "Escolha o tipo da lasanha primeiro.";
        return;
    }

    if (!Number.isInteger(numeroPessoas) || numeroPessoas <= 0) {
        resultado.textContent = "Digite uma quantidade inteira maior que zero.";
        return;
    }

    const total = calcularPreco(numeroPessoas, tipoSelecionado);

    resultado.textContent = `O preço total será de R$ ${total.toFixed(2)}.`;
};