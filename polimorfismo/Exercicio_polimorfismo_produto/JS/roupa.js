import Produto from "./produto.js";

export default class Roupa extends Produto{
    #tamanho;
    #estacao;

    constructor(codigo,nome,dataValidade,tamanho,estacao){
        super(codigo,nome,dataValidade);
        this.#tamanho = tamanho;
        this.#estacao = estacao;
    }

    get gettamanho(){
        return this.#tamanho;
    }
    get getestacao(){
        return this.#estacao;
    }

    calcularpreco(){
        return 30;
    }
    descrever() {
        return `${super.descrever()}, Tamanho: ${this.#tamanho}, Estação: ${this.#estacao}`;
      }
}