document.getElementById("tempForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var temperature = parseFloat(document.getElementById("tempInput").value);
    var conversionType = document.getElementById("conversionType").value;
    document.getElementById("resultCalc").textContent = "(" + temperature + formulaCalc + " = "+ result; 
    
    switch(conversionType) {
        case "celsiusToFahrenheit":
            result = (temperature * 9/5) + 32 + " °F";
            formulaCalc = " * 9/5) + 32 ";
            break;
        case "fahrenheitToCelsius":
            result = (temperature - 32) * 5/9 + " °C";
            formulaCalc = " - 32) * 5/9 ";
            break;
        case "celsiusToReamur":
            result = temperature * 4/5 + " °Re";
            formulaCalc = " * 4/5 ";
            break;
        case "reamurToCelsius":
            result = temperature * 5/4 + " °C";
            formulaCalc = " * 5/4 ";
            break;
        case "fahrenheitToReamur":
            result = (temperature - 32) * 4/9 + " °Re";
            formulaCalc = " - 32) * 4/9 ";
            break;
        case "reamurToFahrenheit":
            result = (temperature * 9/4) + 32 + " °F";
            formulaCalc = " * 9/4) + 32 ";
            break;
        default:
            result = "Invalid conversion type";
    }
    
    document.getElementById("conversionResult").textContent = result;
    document.getElementById("resultCalc").textContent = "(" + temperature + formulaCalc + " = "+ result; 
});
