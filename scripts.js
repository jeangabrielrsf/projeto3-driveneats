
let pratoSelecionado; //guarda o prato selecionado
let bebidaSelecionado; //guarda a bebida selecionada
let sobremesaSelecionado; //guarda a sobremesa selecionada


function selecionarPrato (elemento) {
    const verdinho = document.querySelector(".prato .selecionado");
    pratoSelecionado = elemento.innerHTML;

    if (verdinho !== null) {
        verdinho.classList.remove("selecionado");
    }

    elemento.classList.add("selecionado");
    fecharPedido();
}

function selecionarBebida (elemento) {
    const verdinho = document.querySelector(".bebida .selecionado");
    bebidaSelecionado = elemento.innerHTML;

    if (verdinho !== null) {
        verdinho.classList.remove("selecionado");
    }

    elemento.classList.add("selecionado");
    fecharPedido();
}

function selecionarSobremesa (elemento) {
    const verdinho = document.querySelector(".sobremesa .selecionado");
    sobremesaSelecionado = elemento.innerHTML;

    if (verdinho !== null) {
        verdinho.classList.remove("selecionado");
    }

    elemento.classList.add("selecionado");
    fecharPedido();
}



function fecharPedido () {
    
    let botao = document.querySelector(".botao-barra-inferior");

    if (pratoSelecionado && bebidaSelecionado && sobremesaSelecionado) {
        botao.classList.add("botao-habilitado");
        botao.innerHTML = "Fechar pedido";
    }


}