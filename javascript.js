class time {
    constructor(nome,pontuação) {
        this.nome = nome;
        this.pontos = pontuação;
    }
    mostrar() {
        let local = document.querySelector("#menu-meio");
        let divisoria = document.createElement("div");
        divisoria.className("nomeando-times");
        let label = document.createElement("label");
        divisoria.appendChild(label);
        label.innerHTML = "Insert Team`s Name";
        let texto = document.createElement("input");
        divisoria.appendChild(texto);
        texto.setAttribute("type","text");
        texto.className("input-name");
        local.appendChild(divisoria);
    }
}

function novo() {
    let c = document.querySelector("#quantidade-input");
    let local = document.querySelector("#menu-meio");
    local.appendChild(c);
    local.innerHTML = "oioioioi";
}


let botao = document.querySelector("#botao-inicial2");
botao.addEventListener("click",novo);