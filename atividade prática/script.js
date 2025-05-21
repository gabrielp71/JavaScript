//getAttributte - Obter o valor do atributo (valor da linha)

//setAttribute - Definir ou modificar o valor

function changeImage() {
    const img = document.getElementById("myImage"); // aqui conseguimos armazenar o conteúdo da imagem 

    const currentSrc = img.getAttribute("src"); // Aqui pegamos o atributo SRC da imagem, responsavel pela alteração da img.

    // if = se a condição for válida execute algo
    // else = caso contrario / se não


    if(currentSrc === "imagem01.jpg" ) { // se (if) a origem atual da imagem for igual a "imagem01.jpg"
        img.setAttribute("src", "imagem02.jpg") // usando setAttribute vamos modificar o valor do src, especificando a outra img.
        img.setAttribute("alt", "imagem da lua");
        
    } else { // se não, fazer o processo inverso basicamente
        img.setAttribute("alt", "imagem01.jpg");
        img.setAttribute("alt", "imagem da relogio")

    }

}