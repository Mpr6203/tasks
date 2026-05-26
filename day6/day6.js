

let inputData = document.getElementById("cityName");
let searchBtn = document.getElementById("search");
let resultDiv = document.getElementById("result");

searchBtn.addEventListener('click', requestCityWeatherTelemetry);

async function requestCityWeatherTelemetry() {
  try {
    //  Clear the last result/error as soon as a new search begins
    resultDiv.innerHTML = ""; 

    let city = inputData.value.trim();

    if (!city) {
      throw new Error("you must enter a city name!");
    }

    // Visual feedback: Let the user know the app is working
    resultDiv.innerHTML = "⏳ Reaching out to meteorological servers...";
    
    let data = await mockNetworkApiGET(city);

    let absoluteTemperature = data?.current_condition?.[0]?.temp_C;
    let visualSummaryText = data?.current_condition?.[0]?.weatherDesc?.[0]?.value;

    if (!absoluteTemperature || !visualSummaryText) {
      throw new Error("weather data is incomplete");
    }

    //  Success UI Update: Overwrite the loading text with weather data
    resultDiv.innerHTML = `
      <div style="color: green; margin-top: 10px;">
        <h3> ${city.toUpperCase()}</h3>
        <p>🌡 <strong>Temperature Reading:</strong> ${absoluteTemperature}°C</p>
        <p>🌥 <strong>Structural Atmosphere:</strong> ${visualSummaryText}</p>
      </div>
    `;

  } catch (error) {
    // Error UI Update: Display the error message in red text to the user
    resultDiv.innerHTML = `
      <p style="color: red; font-weight: bold; margin-top: 10px;">
         Error: ${error.message}
      </p>
    `;
  }
}

async function mockNetworkApiGET(city) {

  let response = await fetch(`https://wttr.in${city}?format=j1`);
  
  if (!response.ok) {
     throw new Error(`City not found (Status: ${response.status})`);
  }
  
  let cleanData = await response.json();
  return cleanData;
}


