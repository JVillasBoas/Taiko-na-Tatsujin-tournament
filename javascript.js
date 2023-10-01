class time {
    constructor(nome,pontuação) {
        this.nome = nome;
        this.pontos = pontuação;
    }
   
}
function novaTela() {
    let imagem = document.querySelector("#titulo-menu1");
    imagem.setAttribute("src","Logo-menu-meio.png");
    imagem.setAttribute("id","titulo-menu2");
    let local = document.querySelector("#form-inicial");
    local.innerHTML = "";
    local.setAttribute("id","");
    let menu = document.querySelector("#menu-inicial");
    menu.style.backgroundColor = "white";
    document.body.style.backgroundImage = "url('wallpaper2.png')";
}   
function  mostrar() {
    var quantidade = document.querySelector("#quantidade-input");
    if (quantidade.value > 20) {
        alert("Quantidade máxima de times ultrapassado. Cadastre 20 ou menos times, por favor.");
    } else {
        for(c=1;c<=quantidade.value;c++) {
            let local = document.querySelector("#menu-inicial");
            let divisoria = document.createElement("div");
            divisoria.setAttribute("class","nomeando-times");
            let label = document.createElement("label");
            label.innerHTML = "Insert Team`s Name";
            divisoria.appendChild(label);
            let texto = document.createElement("input");
            divisoria.appendChild(texto);
            texto.setAttribute("type","text");
            texto.setAttribute("class","input-name");
            local.appendChild(divisoria);
        } 
        novaTela();
    }
}


