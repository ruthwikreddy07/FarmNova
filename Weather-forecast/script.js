const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');
const loader = document.getElementById('loader');
const toggleBtn = document.getElementById('toggleTemp');
const forecastCards = document.getElementById("forecastCards");

let isCelsius = true;
let currentTemp = 0;

inputBox.focus();

inputBox.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') checkWeather(inputBox.value);
});

searchBtn.addEventListener('click', () => {
  checkWeather(inputBox.value);
});

toggleBtn.addEventListener('click', () => {
  isCelsius = !isCelsius;
  toggleBtn.textContent = isCelsius ? "Switch to °F" : "Switch to °C";
  updateTemperature(currentTemp);
});

function updateTemperature(tempKelvin) {
  currentTemp = tempKelvin;
  const celsius = Math.round(tempKelvin - 273.15);
  const fahrenheit = Math.round((tempKelvin - 273.15) * 9 / 5 + 32);
  temperature.innerHTML = isCelsius ? `${celsius}°C` : `${fahrenheit}°F`;
}

async function checkWeather(city) {
  if (!city.trim()) {
    alert("Please enter a location!");
    return;
  }

  loader.style.display = "block";
  weather_body.style.display = "none";
  location_not_found.style.display = "none";
  forecastCards.innerHTML = "";

  const api_key = "410346b3c4c3402ade4444118f893b39";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  try {
    const response = await fetch(url);
    const weather_data = await response.json();
    loader.style.display = "none";

    if (weather_data.cod === "404") {
      location_not_found.style.display = "flex";
      return;
    }

    weather_body.style.display = "flex";

    updateTemperature(weather_data.main.temp);
    description.innerHTML = weather_data.weather[0].description;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

    const mainWeather = weather_data.weather[0].main;
    const icons = {
      Clouds: "cloud.png",
      Clear: "clear-sky.png",
      Rain: "rain.png",
      Haze: "haze.png",
      Lightning: "lightning.png",
      Snow: "snow.png",
      Storm: "storm.png",
      Thunderstorm: "thunderstorm.png",
      Mist: "mist.png"
    };

    weather_img.src = `img/${icons[mainWeather] || "cloud.png"}`;

    getFiveDayForecast(city);

  } catch (error) {
    console.error("API Error:", error);
    loader.style.display = "none";
    location_not_found.style.display = "flex";
  }
}

async function getFiveDayForecast(city) {
  const api_key = "410346b3c4c3402ade4444118f893b39";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}`;

  try {
    const response = await fetch(url);
    const forecastData = await response.json();

    const filtered = forecastData.list.filter(item =>
      item.dt_txt.includes("12:00:00")
    ).slice(0, 5);

    filtered.forEach(day => {
      const tempC = Math.round(day.main.temp - 273.15);
      const iconCode = day.weather[0].icon;
      const date = new Date(day.dt_txt);
      const dayName = date.toLocaleDateString("en-US", { weekday: "short" });

      const card = document.createElement("div");
      card.className = "forecast-card";
      card.innerHTML = `
        <div>${dayName}</div>
        <img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="${day.weather[0].main}" />
        <div>${tempC}°C</div>
      `;
      forecastCards.appendChild(card);
    });

  } catch (error) {
    console.error("Forecast fetch error", error);
  }
}
