import pessoa from "./pessoa.js"

export default class Professor extends pessoa{
    #especialidade

    constructor(idade,nome,especialidade){
        super(idade,nome);
        this.#especialidade = especialidade;

    }

    get getespecialista(){
        return this.#especialidade;
    }
    

    apresentar(){
        return `${super.apresentar()} e sou professor com especialidade em ${this.#especialidade}`;

}
}