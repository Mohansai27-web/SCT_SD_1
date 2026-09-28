
function convertTemperature() {

    const input = document.getElementById("temperatureInput");
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;

    const result = document.getElementById("result");
    const resultUnit = document.getElementById("resultUnit");

    const value = parseFloat(input.value);

    // Check empty input
    if (isNaN(value)) {
        result.innerHTML = "Error";
        resultUnit.innerHTML = "Please enter a temperature";
        return;
    }

    let celsius;

    // Convert input to Celsius first
    if (fromUnit === "C") {

        celsius = value;

    } else if (fromUnit === "F") {

        celsius = (value - 32) * 5 / 9;

    } else if (fromUnit === "K") {

        celsius = value - 273.15;
    }


    let convertedTemperature;

    // Convert Celsius to required unit
    if (toUnit === "C") {

        convertedTemperature = celsius;

    } else if (toUnit === "F") {

        convertedTemperature = (celsius * 9 / 5) + 32;

    } else if (toUnit === "K") {

        convertedTemperature = celsius + 273.15;
    }


    // Prevent invalid Kelvin values
    if (toUnit === "K" && convertedTemperature < 0) {

        result.innerHTML = "Invalid";

        resultUnit.innerHTML =
            "Temperature cannot be below absolute zero";

        return;
    }


    // Display result
    result.innerHTML =
        convertedTemperature.toFixed(2);

    if (toUnit === "C") {

        resultUnit.innerHTML = "°C — Celsius";

    } else if (toUnit === "F") {

        resultUnit.innerHTML = "°F — Fahrenheit";

    } else {

        resultUnit.innerHTML = "K — Kelvin";
    }
}


// Clear converter
function clearConverter() {

    document.getElementById("temperatureInput").value = "";

    document.getElementById("result").innerHTML = "0";

    document.getElementById("resultUnit").innerHTML =
        "Enter a value";
}


// Change thermometer animation based on input
document
    .getElementById("temperatureInput")
    .addEventListener("input", function () {

        const value = parseFloat(this.value);

        const mercury =
            document.querySelector(".mercury");

        if (isNaN(value)) {
            return;
        }

        let height = 50 + value;

        // Limit animation height
        if (height < 30) {
            height = 30;
        }

        if (height > 280) {
            height = 280;
        }

        mercury.style.height = height + "px";
    });