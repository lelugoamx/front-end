export default class pessoa{
    #nome;
    #idade;

    constructor(nome,idade){
        this.#idade = idade;
        this.#nome = nome;
    }

    get getidade(){
        return this.#idade;
    }
    get getnome(){
        return this.#nome;
    }

    apresentar(){
        return `Eu sou ${this.#nome} com idade ${this.#idade}`;}
}