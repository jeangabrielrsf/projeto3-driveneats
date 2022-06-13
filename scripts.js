
let pratoSelecionado; //guarda o prato selecionado
let bebidaSelecionado; //guarda a bebida selecionada
let sobremesaSelecionado; //guarda a sobremesa selecionada
let pratoValue = 0;
let bebidaValue = 0;
let sobremesaValue = 0;
let habilitado = false;


function selecionarPrato (elemento) {
    const verdinho = document.querySelector(".prato .selecionado");
    const icone = document.querySelector(".prato .container-preco .icone-habilitado");
    pratoSelecionado = elemento.querySelector(".item-titulo p").innerHTML;
    pratoValue = elemento.querySelector(".preco p").innerHTML;


    if (verdinho !== null) {
        icone.classList.remove("icone-habilitado");
        verdinho.classList.remove("selecionado");
    }

    elemento.querySelector(".prato .container-preco .icone-check").classList.add("icone-habilitado");
    elemento.classList.add("selecionado");
    habilitaBotao();
}

function selecionarBebida (elemento) {
    const verdinho = document.querySelector(".bebida .selecionado");
    const icone = document.querySelector(".bebida .container-preco .icone-habilitado");
    bebidaSelecionado = elemento.querySelector(".item-titulo p").innerHTML;
    bebidaValue = elemento.querySelector(".preco p").innerHTML;


    if (verdinho !== null) {
        icone.classList.remove("icone-habilitado");
        verdinho.classList.remove("selecionado");
    }

    elemento.querySelector(".bebida .container-preco .icone-check").classList.add("icone-habilitado");
    elemento.classList.add("selecionado");
    habilitaBotao();
}

function selecionarSobremesa (elemento) {
    const verdinho = document.querySelector(".sobremesa .selecionado");
    const icone = document.querySelector(".sobremesa .container-preco .icone-habilitado");
    sobremesaSelecionado = elemento.querySelector(".item-titulo p").innerHTML;
    sobremesaValue = elemento.querySelector(".preco p").innerHTML;


    if (verdinho !== null) {
        icone.classList.remove("icone-habilitado");
        verdinho.classList.remove("selecionado");
    }

    elemento.querySelector(".sobremesa .container-preco .icone-check").classList.add("icone-habilitado");
    elemento.classList.add("selecionado");
    habilitaBotao();
}



function habilitaBotao () {
    
    let botao = document.querySelector(".botao-barra-inferior");

    if (pratoSelecionado && bebidaSelecionado && sobremesaSelecionado) {
        botao.classList.add("botao-habilitado");
        botao.innerHTML = "Fechar pedido";
        habilitado = true;
    }

    
}

 
function fecharPedido () {

    let precoTotal = somaPreco(pratoValue, bebidaValue, sobremesaValue);
    let mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${pratoSelecionado}\n- Bebida: ${bebidaSelecionado}\n- Sobremesa: ${sobremesaSelecionado}\nTotal: R$ ${precoTotal}`;
    let codificada = encodeURIComponent(mensagem);
    

    if (habilitado!== false) {
        window.open(`https://wa.me/5521988743639?text=${codificada}`);
    }

}

function somaPreco (string1, string2, string3) {

    let num1 = Number(string1);
    let num2 = Number(string2);
    let num3 = Number(string3);

    let resultado = (num1+num2+num3).toFixed(2);

    return resultado;
}

