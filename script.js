function calc() {
    var bruto = document.getElementById('salBruto').value;
    var outras = document.getElementById('outrasDedu').value;
    var inssDedu = bruto * 0.11;

    if (bruto<=1903.98) {
        var resultado = bruto - inssDedu - outras;
        var resultadoFormat = "R$ " + resultado.toFixed(2);
        document.querySelector('.result').innerText = resultadoFormat;                       

    } else if (bruto<=2826.65) {
        var irDedu = bruto * 0.075
        var resultado = bruto - inssDedu - irDedu - outras;
        var resultadoFormat = "R$ " + resultado.toFixed(2);
        document.querySelector('.result').innerText = resultadoFormat;                       
    } else if (bruto<=3751.05) {
        var irDedu = bruto * 0.15
        var resultado = bruto - inssDedu - irDedu - outras;
        var resultadoFormat = "R$ " + resultado.toFixed(2);
        document.querySelector('.result').innerText = resultadoFormat;                       
    } else if (bruto<=4664.68) {
        var irDedu = bruto * 0.2250
        var resultado = bruto - inssDedu - irDedu - outras;
        var resultadoFormat = "R$ " + resultado.toFixed(2);
        document.querySelector('.result').innerText = resultadoFormat;                       
    } else {
        var irDedu = bruto * 0.2750
        var resultado = bruto - inssDedu - irDedu - outras;
        var resultadoFormat = "R$ " + resultado.toFixed(2);
        document.querySelector('.result').innerText = resultadoFormat;                                      
    }                
}  