import pessoa from "./pessoa.js"

export default class Aluno extends pessoa{
  
    #nMatricula;

    constructor(nome,idade,nMatricula){
        super(nome,idade);
        this.#nMatricula = nMatricula;

    }

    get getnMatricula(){
        return this.#nMatricula;
    }
    
    apresentar(){
        return `${super.apresentar()} e sou aluno com o número de matrícula ${this.#nMatricula}`;

}
}