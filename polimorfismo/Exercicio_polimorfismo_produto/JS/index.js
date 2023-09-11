import livro from "./livro.js";
import eletronico from "./eletronico.js";
import roupa from "./roupa.js";

const Livro = new livro(1, "O Senhor dos Anéis", "01/01/2024", "978-0345339706", "J.R.R. Tolkien", "Editora XYZ");
const Eletronico = new eletronico(2, "Smartphone", "01/01/2025", "iPhone 13");
const Roupa = new roupa(3, "Camiseta", "01/01/2023", "M", "Verão");

console.log(Livro.descrever());
//console.log(`Preço do Livro: R$${livro.calcularpreco()}`);

console.log(Eletronico.descrever());
//console.log(`Preço do Eletrônico: R$${eletronico.calcularpreco()}`);

console.log(Roupa.descrever());
//console.log(`Preço da Roupa: R$${roupa.calcularpreco()}`);