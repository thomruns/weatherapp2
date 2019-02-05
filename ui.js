class UI {
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.icon = document.getElementById('w-icon');
    this.details = document.getElementById('w-details');
    this.humidity = document.getElementById('w-humidity');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.pressure = document.getElementById('w-pressure');
    this.feelsLike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = weather.display_location.full;
    this.desc.textContent = weather.weather;
    this.string.textContent = weather.temperature_string;
    this.feelsLike.textContent = `Feels like: ${weather.feelslike_string}`;
    this.wind.textContent = `Wind: ${weather.wind_string}`;
    this.icon.setAttribute('src', weather.icon_url);
    this.humidity.textContent = `Relative humidity: ${weather.relative_humidity}`;
    this.pressure.textContent = `Barometric pressure: ${weather.pressure_in}${weather.pressure_trend}`;
    this.dewpoint.textContent = `Dewpoint: ${weather.dewpoint_string}`;
  }
}