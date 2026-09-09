const botao = document.querySelector("#botao");
let mensagem = document.querySelector("#mensagem");
console.log("alou");

botao.addEventListener("click", function () {
    mensagem.textContent = "alou";
});