 const API_KEY = "7c4fd68607b14201a0a42234261603";
    const CITY = "London";
    const URL = `http://api.weatherapi.com/v1/current.json?key=7c4fd68607b14201a0a42234261603&q=London&aqi=no`;

    async function fetchWeather() {
      try {
        const response = await fetch(URL);
        const data = await response.json();

        const { location, current } = data;

        document.getElementById("weather-card").innerHTML = `
          <div class="header">
            <div class="location">
              <h2>${location.name}</h2>
              <p>${location.region}, ${location.country}</p>
              <p>Updated: ${current.last_updated}</p>
            </div>
            <div class="condition">
              <img src="https:${current.condition.icon}" alt="${current.condition.text}" />
              <p>${current.condition.text}</p>
            </div>
          </div>

          <div class="temp-main">
            <span class="c">${current.temp_c}°C</span>
            <span class="f">${current.temp_f}°F</span>
          </div>
          <p class="feels">Feels like ${current.feelslike_c}°C</p>

          <div class="grid">
            <div class="stat">
              <div class="label">Humidity</div>
              <div class="value">${current.humidity}%</div>
            </div>
            <div class="stat">
              <div class="label">Wind</div>
              <div class="value">${current.wind_kph} km/h ${current.wind_dir}</div>
            </div>
            <div class="stat">
              <div class="label">Pressure</div>
              <div class="value">${current.pressure_mb} mb</div>
            </div>
            <div class="stat">
              <div class="label">Visibility</div>
              <div class="value">${current.vis_km} km</div>
            </div>
            <div class="stat">
              <div class="label">UV Index</div>
              <div class="value">${current.uv}</div>
            </div>
            <div class="stat">
              <div class="label">Cloud Cover</div>
              <div class="value">${current.cloud}%</div>
            </div>
          </div>

          <div class="footer">
            <span>Lat: ${location.lat}° Lon: ${location.lon}°</span>
            <span>Precip: ${current.precip_mm} mm</span>
          </div>
        `;
      } catch (error) {
        document.getElementById("weather-card").innerHTML = `<p>Error fetching weather data.</p>`;
        console.error(error);
      }
    }

    fetchWeather();