const itensPerguntasERespostas = document.querySelectorAll(".item");

itensPerguntasERespostas.forEach(function (item) {
    item.addEventListener("click", function () {
        const contemAtivo = document.querySelector(".ativo");

        if (contemAtivo) {
            contemAtivo.classList.remove("ativo");
        }

        item.classList.add("ativo");
    })
})

