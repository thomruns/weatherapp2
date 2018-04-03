// Initialize weather object
const weather = new Weather('San Diego', 'CA');

// onload event listener to call getWeather function
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Pittsburgh', 'PA');

function getWeather() {
  weather.getWeather()
    .then(results => {
      console.log(results);
    })
    .catch(err => console.log(err));
}