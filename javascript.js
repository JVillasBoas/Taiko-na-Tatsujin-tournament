function novaTela() {
    let imagem = document.querySelector("#titulo-menu1");
    imagem.setAttribute("src","Logo-menu-meio.png");
    imagem.setAttribute("id","titulo-menu2");
    let local = document.querySelector("#form-inicial");
    local.innerHTML = "";
    local.setAttribute("id","");
    let menu = document.querySelector("#menu-inicial");
    menu.style.backgroundColor = "white";
    menu.style.margin = "4vw";
    document.body.style.backgroundImage = "url('wallpaper2.png')";
    document.body.style.height = "max-content";
} 

function  mostrar() {
    var quantidade = document.querySelector("#quantidade-input");
    if (quantidade.value > 20) {
        alert("Quantidade máxima de times ultrapassado. Cadastre 20 ou menos times, por favor.");
    } else {
        for(c=1;c<=quantidade.value;c++) {
            var local = document.querySelector("#menu-inicial");
            let divisoria = document.createElement("div");
            divisoria.setAttribute("class","nomeando-times");
            let label = document.createElement("label");
            label.innerHTML = "Insert Team`s Name";
            divisoria.appendChild(label);
            let texto = document.createElement("input");
            divisoria.appendChild(texto);
            texto.setAttribute("type","text");
            texto.setAttribute("class","nome-input");
            local.appendChild(divisoria);
        }
        let comecarTorneio = document.createElement("input");
        comecarTorneio.setAttribute("type","button");
        comecarTorneio.setAttribute("value","Start");
        comecarTorneio.setAttribute("id","botao-start");
        comecarTorneio.setAttribute("onClick","start()");
        local.appendChild(comecarTorneio); 
        novaTela();
    }
}

class time {
    constructor(nome,pontuação) {
        this.nome = nome;
        this.pontos = pontuação;
    }
   nome() {
    //atribui os nomes dos inputs
   }
   pontos() {
    //atribui pontos
   }
}

function start() {
    //nova tela e no final chama nome()
}


