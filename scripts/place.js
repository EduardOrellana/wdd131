const currentYear = document.getElementById('currentyear');
const lastModified = document.getElementById('modified');
currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last modification: ${document.lastModified}`;

//Function of WindChill

function calculateWindChill(temperature, windspeed)
{
    var fahrenheit = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temperature * Math.pow(windspeed, 0.16);

    if (temperature <= 10 && windspeed >= 4.8)
        {
            var celsius = (fahrenheit - 32) * (5/9);
            return Math.round(celsius);
        }
    else
    {
        var lastRespond = "N/A";
        return lastRespond;
    }
}

const temperature = document.getElementById("temperature");
const windspeed =  document.getElementById("wind");
const windchill = document.getElementById("windchill");

windchill.textContent = calculateWindChill(temperature, windspeed) + " ℃";