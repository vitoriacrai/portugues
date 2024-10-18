function ola() {
    alert("oiiiii")
}

function mudarParaDarkMode() {
    var corpo = document.querySelector("body")
    corpo.classList.toggle('dark-mode')
}

var botao = document.querySelector("#dark-mode-botao")
botao.addEventListener('click', mudarParaDarkMode)