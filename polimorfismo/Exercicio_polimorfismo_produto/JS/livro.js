import produto from "./produto.js"

export default class Livro extends produto{
     
    #ISBN
    #Autor
    #Editora

    constructor(codigo,nome,dataValidade,ISBN,Autor,Editora){
        super(codigo,nome,dataValidade);
        this.#ISBN = ISBN;
        this.#Autor = Autor;
        this.#Editora = Editora;
    }

    get getISBN(){
        return this.#ISBN;
    }
    get getAutor(){
        return this.#Autor;
    }
    get getEditora(){
        return this.#Editora;
    }

     calcularpreco(){
      return 20;
     }
     descrever(){
     return `${super.descrever()}, ISBN: ${this.#ISBN}, Autor: ${this.#Autor}, Editora: ${this.#Editora}`;
    }
  }
