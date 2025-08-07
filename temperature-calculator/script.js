function convertTemp() {
  let temp = parseFloat(document.getElementById("tempInput").value);
  let type = document.getElementById("tempType").value;
  let result = "";

  if (isNaN(temp)) {
    result = "Please enter a valid number.";
  } else {
    if (type === "celsius") {
      result = `
        Fahrenheit: ${(temp * 9/5 + 32).toFixed(2)} °F<br>
        Kelvin: ${(temp + 273.15).toFixed(2)} K
      `;
    } else if (type === "fahrenheit") {
      result = `
        Celsius: ${((temp - 32) * 5/9).toFixed(2)} °C<br>
        Kelvin: ${(((temp - 32) * 5/9) + 273.15).toFixed(2)} K
      `;
    } else if (type === "kelvin") {
      result = `
        Celsius: ${(temp - 273.15).toFixed(2)} °C<br>
        Fahrenheit: ${((temp - 273.15) * 9/5 + 32).toFixed(2)} °F
      `;
    }
  }

  document.getElementById("result").innerHTML = result;
}

function resetFields() {
  document.getElementById("tempInput").value = "";
  document.getElementById("tempType").value = "celsius";
  document.getElementById("result").innerHTML = "";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
