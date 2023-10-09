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

var vencedor
var pos_vencedor
function Resultado() {
    for (c = 0; c < numero_disputa; c++) { 

        let selecionar = document.querySelector("#input-options" + c).value;

        for (j = 0; j < times.length; j++) {
            if (selecionar == times[j].nome) {
                times[j].quantidade_vitorias += 1;
            }
        }
    }

    for(c=0;c<quantidade.value;c++) {
        vitorias.push(times.quantidade_vitorias[c]);
    }
    
    for(c=0;c<quantidade.value-1;c++) {
        if (times[c].quantidade_vitorias > times[c+1].quantidade_vitorias) {
            vencedor = times[c].nome;
            pos_vencedor = c;
            //console.log("teste");
        } else {
            vencedor = times[c+1].nome;
            pos_vencedor = c+1;
        }
    }

    if (vitorias)

}

class time {
    constructor(nome,quantidade_vitorias) {
        this.nome = nome;
        this.quantidade_vitorias = quantidade_vitorias;
    }
}

const times = [];
var numero_disputa = 0;

function start() {
    for(c=1;c<=quantidade.value;c++) {
        let nome_time = document.querySelector('#texto' + c);
        times.push(new time(nome_time.value, 0));
    }
    let local = document.querySelector("#menu-inicial");
    local.innerHTML = "";
    let imagem = document.createElement("img");
    imagem.setAttribute("src","nuvem.png");
    imagem.setAttribute("id","titulo-menu3");
    local.appendChild(imagem);
    
    for(c=0;c<quantidade.value-1;c++) {
        for(j=c+1;j<quantidade.value;j++) {
            let divisoria = document.createElement("div");
            divisoria.setAttribute("class","jogo");
            let texto = document.createElement("div");
            texto.setAttribute("class","times-disputa");
            texto.innerHTML = times[c].nome + "X" + times[j].nome;
            let selecionar = document.createElement("select");
            selecionar.setAttribute("id","input-options" + numero_disputa); 
            selecionar.setAttribute("class","input-options"); 
            let options1 = document.createElement("option");
            let options2 = document.createElement("option");
            options1.innerHTML = times[j].nome;
            options2.innerHTML = times[c].nome;
            selecionar.appendChild(options1);
            selecionar.appendChild(options2);
            divisoria.appendChild(texto);
            divisoria.appendChild(selecionar);
            local.appendChild(divisoria);
            numero_disputa++
        }
    }
    let botao = document.createElement("input");
    botao.setAttribute("type","button");
    botao.setAttribute("id","botao-resultado");
    botao.setAttribute("value","Outcome");
    botao.setAttribute("onclick", "Resultado()");
    local.appendChild(botao);
}




