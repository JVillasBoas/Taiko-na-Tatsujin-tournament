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

function gerarTelaNomear() {
    quantidade = document.querySelector("#quantidade-input");
    if (quantidade.value > 20 || quantidade.value < 2) {
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
        comecarTorneio.setAttribute("onClick","verificaTimes()");
        local.appendChild(comecarTorneio); 
        novaTela();
    }
}

function gerarTelaRanking() {
    resultadoJogo();
    let local = document.querySelector("#menu-inicial");
    local.innerHTML = "";
    let imagem = document.createElement("img");
    imagem.setAttribute("src","taikogif.gif");
    imagem.setAttribute("id","titulo-menu3");
    local.appendChild(imagem);
    let titulo = document.createElement("div");
    titulo.innerHTML = "Final Ranking - Taiko no Tatsujin";
    let tabela = document.createElement('table');
    let tipos = document.createElement('tr');
    let tipo1 = document.createElement('th');
    tipo1.innerHTML = "Teams";
    let tipo2 = document.createElement('th');
    tipo2.innerHTML = "Wins";
    tipos.appendChild(tipo1);
    tipos.appendChild(tipo2);
    local.appendChild(titulo);
    tabela.appendChild(tipos);
    
    for(c=0;c<times.length;c++) {
        let time = document.createElement('tr');
        let nome = document.createElement('td');
        nome.innerHTML = times[c].nome;
        let vitorias = document.createElement('td');
        vitorias.innerHTML = times[c].quantidade_vitorias;
        time.appendChild(nome);
        time.appendChild(vitorias);
        tabela.appendChild(time);
    }

    local.appendChild(tabela)
}

var vencedor
var vencedores = [];
var pos_vencedor;
var vitorias = [];
var disputa_feita = [];
function resultadoJogo() {
    for (c = 0; c < numero_disputa; c++) { 

        let selecionar = document.querySelector("#input-options" + c).value;

        for (j = 0; j < times.length; j++) {
            if (selecionar == times[j].nome) {
                if (disputa_feita.indexOf(c) == -1) {
                times[j].quantidade_vitorias += 1;
                disputa_feita.push(c);
                }
            }
        }
    }

    times.sort(function(a, b) {
        if(a.quantidade_vitorias > b.quantidade_vitorias) {
          return -1;
        } else {
          return true;
        }
      });
    /* for(y=0;y<quantidade.value;y++) {
        vitorias.push(times[y].quantidade_vitorias);
    }
    
    for(c=0;c<quantidade.value-1;c++) {
        if (times[c].quantidade_vitorias > times[c+1].quantidade_vitorias) {
            vencedor = times[c];
            //pos_vencedor = c;
            //console.log("teste");
        } else {
            vencedor = times[c+1];
            //pos_vencedor = c+1;
        }
    }

    if (vitorias.indexOf(vencedor.quantidade_vitorias) != -1) {
        for(c=0;c<quantidade.value;c++) {
            if (vencedor.quantidade_vitorias == times[c].quantidade_vitorias ) {
                vencedores.push(times[c].nome);
            }
        }
    } */
}

class time {
    constructor(nome,quantidade_vitorias) {
        this.nome = nome;
        this.quantidade_vitorias = quantidade_vitorias;
    }
}

function nomeRepetido() {
    for(c=1;c<=quantidade.value;c++) {
        for(j=c+1;j<=quantidade.value;j++) {
            if (document.getElementById("texto" + c).value == document.getElementById("texto" + j).value) { 
                return true;
            }
        }
    }
}

var times = [];
var numero_disputa = 0;

function verificaTimes() {
    if (nomeRepetido() == true) {
        alert("Nome de time inválido.");
    } else {
        combinarTimes();
        gerarTelaDisputa();
    }
}

function gerarTelaDisputa() {
        let local = document.querySelector("#menu-inicial");
        local.innerHTML = "";
        let imagem = document.createElement("img");
        imagem.setAttribute("src","nuvem.png");
        imagem.setAttribute("id","titulo-menu3");
        local.appendChild(imagem);
        for(c=0;c<times.length-1;c++) {
            for(j=c+1;j<times.length;j++) {
                let divisoria = document.createElement("div");
                let divisoria2 = document.createElement("div");
                let divisoria3 = document.createElement("div");
                divisoria3.innerHTML = 'Select the winner:'
                divisoria2.setAttribute("class","disputas");
                divisoria.setAttribute("class","jogo");
                let texto = document.createElement("div");
                texto.setAttribute("class","times-disputa");
                texto.innerHTML = times[c].nome;
                let texto2 = document.createElement("div");
                texto2.setAttribute("class","x-disputa");
                texto2.innerHTML = "X";
                let texto3 = document.createElement("div");
                texto3.setAttribute("class","times-disputa");
                texto3.innerHTML = times[j].nome;
                let selecionar = document.createElement("select");
                selecionar.setAttribute("id","input-options" + numero_disputa); 
                selecionar.setAttribute("class","input-options"); 
                if (disputa_feita.indexOf(numero_disputa) != -1) {
                    let option = document.createElement("option");
                    option.innerHTML = "Winner Settle";
                    selecionar.appendChild(option);
                    selecionar.style.backgroundColor = "#C1E1C1";
                } else {
                    let options1 = document.createElement("option");
                    let options2 = document.createElement("option");
                    //let options3 = document.createElement("option");
                    options1.innerHTML = times[j].nome;
                    options2.innerHTML = times[c].nome;
                    //options3.innerHTML = "Select an Option";
                    //selecionar.appendChild(options3);
                    selecionar.innerHTML = "<option value='none' selected disabled hidden>Select an Option</option>"
                    selecionar.appendChild(options1);
                    selecionar.appendChild(options2);
                }
                divisoria3.appendChild(selecionar);
                divisoria2.appendChild(texto);
                divisoria2.appendChild(texto2);
                divisoria2.appendChild(texto3);
                divisoria.appendChild(divisoria3);
                divisoria.appendChild(divisoria2);
                local.appendChild(divisoria);
                numero_disputa++;
        }
    }
    let botao = document.createElement("input");
    botao.setAttribute("type","button");
    botao.setAttribute("id","botao-resultado");
    botao.setAttribute("value","Show");
    botao.setAttribute("onclick", "gerarTelaRanking()");
    let botao2 = document.createElement("input");
    botao2.setAttribute("type","button");
    botao2.setAttribute("id","botao-resultado");
    botao2.setAttribute("value","Save");
    botao2.setAttribute("onclick", "armazenar()");
    local.appendChild(botao2);
    local.appendChild(botao);
}

function combinarTimes() {
    for(c=1;c<=quantidade.value;c++) {
        let nome_time = document.querySelector('#texto' + c);
        times.push(new time(nome_time.value, 0));
    }
}

function armazenar() {
    resultadoJogo();
    localStorage.setItem("times",JSON.stringify(times));
    localStorage.setItem("Disputas",JSON.stringify(disputa_feita));
}

function apagar() {
    localStorage.removeItem("times");
}

function recuperar() {
    //var times_antigo = localStorage.getItem("times");
    times = JSON.parse(localStorage.getItem("times"));
    disputa_feita = JSON.parse(localStorage.getItem("Disputas"));
    novaTela();
    gerarTelaDisputa();
}





