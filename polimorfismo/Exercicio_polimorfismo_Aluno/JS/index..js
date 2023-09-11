import Aluno from "./aluno.js"
import Professor from "./professor.js"

const aluno = new Aluno("Marcos", 14 , 2345654 );
const professor = new Professor("jardel", 32 , "Matematica" );

console.log(aluno.apresentar());
console.log(professor.apresentar());