
function obtermes(){ 
  

let numero = parseInt (document.getElementById("mes").value);
 switch(numero){

    case 1:
        document.write("Janeiro");
       break;
    case 2: 
    document.write("Fevereiro");
    break;

    case 3:
        document.write("Março");
    case 4:
        document.write("Abril");
       break;
    case 5: 
    document.write("Maio");
    break;

    case 6:
        document.write("Junho");
    case 7:
        document.write("Julho");
       break;
    case 8: 
    document.write("Agosto");
    break;

    case 9:
        document.write("Setembro");
    case 10:
        document.write("Outubro");
       break;
    case 11: 
    document.write("Novembro");
    break;

    case 12:
        document.write("Dezembro");

        default:
            document.write("Mês inválido");
            
            
 }



}
