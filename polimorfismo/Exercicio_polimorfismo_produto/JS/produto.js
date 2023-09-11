export default class Produto{
    #codigo;
    #nome;
    #dataValidade;

    constructor(codigo,nome,dataValidade){
        this.#codigo = codigo;
        this.#nome = nome;
        this.#dataValidade = dataValidade;

    }

    get getcosigo(){
        return this.#codigo;
    }
    get getnome(){
        return this.#nome;
    }
    get getvalidade(){
        return this.#dataValidade
    }

    calcularpreco(){
        return 0;
    }
    descrever(){`Codigo ${this.#codigo} Produto ${this.#nome}Vencimento ${this.#dataValidade}`}
}