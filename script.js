const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchBtn");
const weatherBox = document.getElementById("weatherBox");

const apiKey = "c0c85999d3009d467a983a4bf654418c";

searchButton.addEventListener("click", function () {
  const cityName = cityInput.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temp = data.main.temp;
      const name = data.name;
      const description = data.weather[0].description;

      weatherBox.innerHTML = `
        <div class="weather-info">
          <h2 class="city-name">${name}</h2>
          <p class="temp">${Math.round(temp)}°C</p>
          <p class="weather-description">${description}</p>
        </div>
      `;
    });
});
