//AQUI ESTAMOS RECUPERANDO NOSSO ID QUE ESTA NO HTML
let meuElemento = document.getElementById("meuElemento");

function tornarCirculo() {
    meuElemento.classList.add("circle"); //adiciono uma class para arredondar o quadrado
    meuElemento.classList.remove("square"); // removo uma class para arredondar a caixa
}
