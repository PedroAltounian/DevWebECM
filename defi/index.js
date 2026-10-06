// Seleciona os elementos existentes no HTML.
const lista = document.getElementById("lista");
const campo = document.getElementById("produto");
const botaoAdicionar = document.getElementById("adicionar");

function adicionarProduto() {
  // Guarda o texto digitado e remove espaços das extremidades.
  const nomeProduto = campo.value.trim();

  // Limpa o campo.
  campo.value = "";

  // Impede a criação de itens vazios.
  if (nomeProduto === "") {
    campo.focus();
    return;
  }

  // Cria os elementos do novo item.
  const item = document.createElement("li");
  const texto = document.createElement("span");
  const botaoExcluir = document.createElement("button");

  // Define os textos.
  texto.textContent = nomeProduto;
  botaoExcluir.textContent = "Excluir";
  botaoExcluir.type = "button";

  // Coloca o texto e o botão dentro do item.
  item.appendChild(texto);
  item.appendChild(botaoExcluir);

  // Coloca o item dentro da lista.
  lista.appendChild(item);

  // Exclui este item quando seu botão for clicado.
  botaoExcluir.addEventListener("click", function() {
    item.remove();
  });

  // Devolve o foco ao campo para digitar outro produto.
  campo.focus();
}

// Adiciona o produto ao clicar.
botaoAdicionar.addEventListener("click", adicionarProduto);

// Também adiciona ao pressionar Enter dentro do campo.
campo.addEventListener("keydown", function(evento) {
  if (evento.key === "Enter") {
    evento.preventDefault();
    adicionarProduto();
  }
});