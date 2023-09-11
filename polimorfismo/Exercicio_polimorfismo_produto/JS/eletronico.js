import Produto from "./produto.js";

export default class Eletronico extends Produto{
    #modelo;

    constructor(codigo,nome,dataValidade,modelo){
        super(codigo,nome,dataValidade);
        this.#modelo = modelo;
    }

    get getmodelo(){
        return this.#modelo;
    }

    calcularpreco(){
        return 500;
    }
    descrever(){
        return `${super.descrever()},modelo: ${this.#modelo}`
    }

}