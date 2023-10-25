const personagem = document.querySelectorAll(".personagem");
const botoes = document.querySelectorAll(".botao");

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    removePersonagem();
    removeBotao();

    botao.classList.add("selecionado");
    personagem[indice].classList.add("selecionado");
  });
});

function removePersonagem() {
  const personagemSelecionado = document.querySelector(
    ".personagem.selecionado"
  );
  personagemSelecionado.classList.remove("selecionado");
}

function removeBotao() {
  const btnSelecionado = document.querySelector(".botao.selecionado");
  btnSelecionado.classList.remove("selecionado");
}
