import Produto from "./produto.js";

export default class produtoEletronico extends Produto {
    #voltagens;
    #marca;
    
    constructor(nome,preco,codigo,id,quantidade,voltagens,marca){
        super(nome, preco, codigo, id,quantidade);
    this.voltagens = voltagens;
    this.marca = marca;
    }
   
    get getVoltagens(){
        return this.#voltagens
    } 
    get getMarca(){
        return this.#marca
    } 
    ProdutoE(){
    super.Produto();
    console.log("Voltangens: " + this.getVoltagens);
    console.log("Marca: " + this.getmarca);
}
}