document.getElementById('convert').onclick = convert;
document.getElementById('clear').onclick = clear;
document.getElementById('reverse').onclick = reverse;
document.getElementById('cara').textContent = "(" + temperature + formulaCalc + " = "+ result; 

function convert() {
    var inputType = document.getElementById("cara").value;
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = document.getElementById("celsius").value;

    if (fahrenheit !='') {
        celsius = (parseFloat(fahrenheit) -32) /1.8;
        fahrenheit.style.display = 'block';
    } else{
        fahrenheit = (parseFloat(celsius) * 1.8) + 32;
    }

    if (inputType === "celcius") {
        result = (temperature * 9/5) + 32 + " °F";
        formulaCalc = " * 9/5) + 32 ";
      } else if (inputType === "fahrenheit") {
        result = (temperature - 32) * 5/9 + " °C";
        formulaCalc = " - 32) * 5/9 ";
      }

    
    document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(1);
    document.getElementById('celsius').value = parseFloat(celsius).toFixed(1);
    document.getElementById('cara').textContent = "(" + temperature + formulaCalc + " = "+ result; 
    }

function clear() {
    document.getElementById('fahrenheit').value = '';
    document.getElementById('celsius').value = '';
    document.getElementById('cara').value = '';
}

function reverse() {
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
}
