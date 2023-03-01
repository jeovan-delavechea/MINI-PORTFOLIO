const slider = document.querySelector(".slider-projetos");
const boxes = slider.querySelectorAll(".box-projeto");
const quantiaboxes = boxes.length;
const projetos = document.querySelector('.projetos');
const caixasContainer = projetos.querySelector(".caixas-container");
const botaoEsquerdo = projetos.querySelector("#esquerdo");
const botaoDireito = projetos.querySelector("#direito");
let index = 0;



for(let i = 0; i < boxes.length; i++) {
    const caixa = document.createElement('span');
    
    caixa.classList.add("caixa");
    caixa.addEventListener("click", function () {
        mostrarSlide(i);
        ativarcaixa(i);
    })
    caixasContainer.appendChild(caixa)
}

ativarcaixa(0);

botaoEsquerdo.addEventListener("click", function () {   
    if (index > 0) {
        boxes[index].classList.remove("ativo");
        index--;
        boxes[index].classList.add("ativo");
        ativarcaixa(index);

        checarBotaoDireito();
        checarBotaoEsquerdo();
    }
})

botaoDireito.addEventListener("click", function () {
    if (index < quantiaboxes - 1) {
        boxes[index].classList.remove("ativo");
        index++;
        boxes[index].classList.add("ativo");
        ativarcaixa(index);

        checarBotaoDireito();
        checarBotaoEsquerdo();
    }
})

function mostrarSlide(id) {
    boxes[index].classList.remove("ativo");
    index = id;
    boxes[index].classList.add("ativo");

    checarBotaoDireito();
    checarBotaoEsquerdo();
}

function ativarcaixa(id) {
    const caixas = slider.querySelectorAll(".caixa");

    for(let i = 0; i < caixas.length; i++) {
        if (i == id) {
            caixas[id].classList.add("ativo");
        } else {
            caixas[i].classList.remove("ativo");
        }
    }     
}

function checarBotaoEsquerdo() {
    if (index > 0) {
        botaoEsquerdo.classList.remove("desativado");
    } else if (index == 0) {
        botaoEsquerdo.classList.add("desativado");
    }
}

function checarBotaoDireito() {
    if (index < quantiaboxes - 1) {
        botaoDireito.classList.remove("desativado");
    } else if (index == quantiaboxes - 1) {
        botaoDireito.classList.add("desativado");
    }
}