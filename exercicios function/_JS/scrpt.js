function Resultado(){

   
    

    let num1 = parseInt(document.getElementById("numero1").value);
    let num2 = parseInt(document.getElementById("numero2").value);
    let operation = parseInt(document.getElementById("operation").value)
    let result = "<br>";

     switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 === 0) {
                document.getElementById("result").textContent = "Não é possível dividir por zero!";
                return;
            }
            result = num1 / num2;
            break;
        default:
            document.getElementById("result").textContent = "Operação inválida";
            return;
    }
    
    document.getElementById("result").textContent = "Resultado: " + result;
    }