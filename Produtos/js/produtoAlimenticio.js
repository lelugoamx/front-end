import Produto from "./produto.js";

export default class produtoAlimentico extends Produto{
  #dataValidade

  constructor(nome,preco,codigo,id,quantidade,datavalidade){
    super(nome, preco, codigo, id,quantidade);
  this.datavalidade =datavalidade;
  }
  get getdatavalidade(){
       return this.#dataValidade
  }
  ProdutoA(){
    super.Produto();    
    console.log("Data de validade " + this.datavalidade);
  }
}