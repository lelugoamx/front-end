import produtoAlimentico from "./produtoAlimenticio.js"
import produtoEletronico from "./produtoEletronico.js"

function inciar(){
    let produtos = new produtoAlimentico("cenoura",1,212,1,1, "06/09/2023")
    produtos.ProdutoA();
    let produt = new produtoEletronico("Notbook",2500,4545,5,1,120,"Lenovo")
    produt.ProdutoE();
}

document.addEventListener("DOMContentLoaded", inciar);