const botaoAlterarAtributo = document.getElementById("botao-alterar-atributo");

botaoAlterarAtributo.addEventListener("click", () => {
    
const body = document.querySelector("body");
const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

body.classList.toggle("modo-escuro")

if(modoEscuroEstaAtivo) {
   imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
} else {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
}



 

















});