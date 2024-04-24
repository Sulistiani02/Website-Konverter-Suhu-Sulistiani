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
    var inputType = document.getElementById("cara").value;
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = document.getElementById("celsius").value;
  
    if (reverse) {
      var fahrenheit = (inputValue * 9/5) + 32;
      result = "Rumus: Celcius = (Fahrenheit - 32) × 5/9<br>";
      result += "Hasil konversi: " + fahrenheit + " Fahrenheit";
      document.getElementById("calculation").value = "Fahrenheit = (" + inputValue + " - 32) × 5/9";
    } else if (inputType === "fahrenheit") {
      var celsius = (inputValue - 32) * 5/9;
      result = "Rumus: Fahrenheit = (Celcius × 9/5) + 32<br>";
      result += "Hasil konversi: " + celsius + " Celcius";
      document.getElementById("calculation").value = "Celcius = (" + inputValue + " × 9/5) + 32";
    }
}