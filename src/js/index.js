const selecionarPergunta = document.querySelectorAll(".item")

selecionarPergunta.forEach(pergunta => {
   pergunta.addEventListener("click", () => {
        const selecionarAtivo = document.querySelector(".ativo")
        selecionarAtivo.classList.remove("ativo")

        pergunta.classList.add("ativo")
   })
})




