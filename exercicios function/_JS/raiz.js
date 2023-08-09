function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var operation = document.getElementById("operation").value;
    var result;

    function exponencial(a){
        return Math.pow(a,a)
     }
    switch (operation) {
        case "Raiz":
            if (num1 <= 0) {
                document.getElementById("result").textContent = "Não é possível dividir por zero!";
                return;
            }
            result = Math.sqrt(num1)
            break;
        case "exponencial":
            result = exponencial(num1);
            break;
            default:
                document.getElementById("result").textContent = "Operação inválida";
                return;
        }
        
        document.getElementById("result").textContent = "Resultado: " + result;
        
    
}