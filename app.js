// Initialize weather object
const weather = new Weather('San Diego', 'CA');
// Initialize ui object
const ui = new UI();

// onload event listener to call getWeather function
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Pittsburgh', 'PA');

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}