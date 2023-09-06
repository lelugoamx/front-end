export default class Produto {
    #nome;
    #preco;
    #codigo;
    #id;
    #quantidade;
    constructor(nome,preco,codigo,id,quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.codigo = codigo;
        this.id = id;
        this.quantidade = quantidade;
    }
    get getNome(){return this.#nome}
    get getPreco(){return this.#preco}
    get getCodigo(){return this.#codigo}
    get getid(){return this.#id}
    get getquantidade(){return this.#quantidade}



Produto()
{ console.log("Produto: " + this.#nome + "Preço do produto: " + this.#preco +"Codigo do produto: " + this.getCodigo + "id do produto: " + this.getid + "Quantidade do produto: " + this.getquantidade);
}


}