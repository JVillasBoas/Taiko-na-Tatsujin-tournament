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
var quantidade;
function  mostrar() {
    quantidade = document.querySelector("#quantidade-input");
    if (quantidade.value > 20 || quantidade.value < 3) {
        alert("Quantidade não suportada.");
    } else {
        for(c=1;c<=quantidade.value;c++) {
            var local = document.querySelector("#menu-inicial");
            let divisoria = document.createElement("div");
            divisoria.setAttribute("class","nomeando-times");
            let label = document.createElement("label");
            label.innerHTML = "Insert Team`s Name";
            divisoria.appendChild(label);
            let texto = document.createElement("input");
            texto.setAttribute('id','texto' + c);
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
    constructor(nome,classificação) {
        this.nome = nome;
        this.classific = classificação;
    }
}
const times = [];
var testando = [];
function start() {
    for(c=1;c<=quantidade.value;c++) {
        let nome_time = document.querySelector('#texto' + c);
        times.push(new time(nome_time.value));
    }
    let local = document.querySelector("#menu-inicial");
    local.innerHTML = "";
    let imagem = document.createElement("img");
    imagem.setAttribute("src","Logo-menu-meio.png");
    imagem.setAttribute("id","titulo-menu2");
    local.appendChild(imagem);
    for(c=0;c<=quantidade.value-1;c++) {
        for(j=c+1;j<=quantidade.value-1;j++) {
            testando.push(times[j].nome + "X" + times[c].nome);
        }
    }
}


