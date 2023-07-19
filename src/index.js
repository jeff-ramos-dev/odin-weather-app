import cloudy from '../images/Cloudy.png';
import fog from '../images/Fog.png';
import heavyRain from '../images/Heavy Rain.png';
import lightning from '../images/Lightning.png';
import partlyCloudy from '../images/Partly Cloudy.png';
import rain from '../images/Rain.png';
import snowAndRain from '../images/Snow and Rain.png';
import snow from '../images/Snow.png';
import sprinkle from '../images/Sprinkle.png';
import sunny from '../images/Sunny.png';
import weatherBackground from '../images/weather-background.jpg';
import './style.css';

const place = document.querySelector('.location');
const time = document.querySelector('.time');
const temp = document.querySelector('.temp');
const condition = document.querySelector('.condition-text');
const conditionImg = document.querySelector('.condition-img');
const humid = document.querySelector('.humid-data');
const wind = document.querySelector('.wind-data');
const precip = document.querySelector('.precip-data');
const uv = document.querySelector('.uv-data');
const vis = document.querySelector('.vis-data');

const search = document.getElementById('search');

const conditionDict = {
	"Sunny": sunny, 
  "Clear": sunny,
	"Partly cloudy": partlyCloudy,
  "Cloudy": cloudy,
  "Overcast": cloudy,
  "Mist": fog,
  "Patchy rain possible": rain,
  "Patchy snow possible": snow,
  "Patchy sleet possible": snow,
  "Patchy freezing drizzle possible": sprinkle,
  "Thundery outbreaks possible": lightning,
  "Blowing snow": snow,
  "Blizzard": snow,
  "Fog": fog,
  "Freezing fog": fog,
  "Patchy light drizzle": sprinkle,
  "Light drizzle": sprinkle,
  "Freezing drizzle": rain,
  "Heavy freezing drizzle": heavyRain,
  "Patchy light rain": rain,
  "Light rain": rain,
  "Moderate rain at times": rain,
  "Moderate rain": rain,
  "Heavy rain at times": heavyRain,
  "Heavy rain": heavyRain,
  "Light freezing rain": rain,
  "Moderate or heavy freezing rain": heavyRain,
  "Light sleet": snow,
  "Moderate or heavy sleet": snow,
  "Patchy light snow": snow,
  "Light snow": snow,
  "Patchy moderate snow": snow,
  "Moderate snow": snow,
  "Patchy heavy snow": snow,
  "Heavy snow": snow,
  "Ice pellets": snow,
  "Light rain shower": rain,
  "Moderate or heavy rain shower": heavyRain,
  "Torrential rain shower": rain,
  "Light sleet showers": snow,
  "Moderate or heavy sleet showers": snow,
  "Light snow showers": snow,
  "Moderate or heavy snow showers": snow,
  "Light showers of ice pellets": snow,
  "Moderate or heavy showers of ice pellets": snowAndRain,
  "Patchy light rain with thunder": lightning,
  "Moderate or heavy rain with thunder": lightning,
  "Patchy light snow with thunder": lightning,
	"Moderate or heavy snow with thunder": lightning
};

async function getData(location) {
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=85cbece73a8846868d5174556230607&q=${location}`, { mode: "cors" });
  const weatherData = await response.json();
  const hour = parseInt(weatherData.location.localtime.split(' ')[1].split(':')[0])
  const minute = weatherData.location.localtime.split(' ')[1].split(':')[1]
  console.log(weatherData)

  const currTime = `
    ${hour <= 12 ? hour : hour - 12}:${minute} ${hour < 12 ? "am" : "pm"}
  `
  place.textContent = `${weatherData.location.name}, ${weatherData.location.region}, ${weatherData.location.country}`
  time.textContent = currTime
  temp.textContent = `${weatherData.current.temp_f}\u{00B0}F`
  condition.textContent = `${weatherData.current.condition.text}`
  conditionImg.src = conditionDict[weatherData.current.condition.text];
  humid.textContent = `${weatherData.current.humidity} %`
  wind.textContent = `${weatherData.current.wind_mph} mph`
  precip.textContent = `${weatherData.current.precip_in} in`
  uv.textContent = `${weatherData.current.uv} (${weatherData.current.uv < 3 ? "Low" :
    weatherData.current.uv < 6 ? "Moderate" :
      weatherData.current.uv < 8 ? "High" :
        weatherData.current.uv < 9 ? "Very High" :
          "Extreme"})`
  vis.textContent = `${weatherData.current.vis_miles} mi`

 weatherData
}

search.value = "los angeles"

getData("los angeles")

search.addEventListener('input', e => {
  getData(search.value);
})

// FULL WEATHER JSON OBJECT----
// {location: {…}, current: {…}}
// current: 
    // cloud: 100
    // condition:
        // code: 1009
        // icon: "//cdn.weatherapi.com/weather/64x64/day/122.png"
        // text: "Overcast"
    // feelslike_c: 18.3
    // feelslike_f: 64.9
    // gust_kph: 8.3
    // gust_mph: 5.1
    // humidity: 76
    // is_day: 1
    // last_updated: "2023-07-07 08:30"
    // last_updated_epoch: 1688743800
    // precip_in: 0
    // precip_mm: 0
    // pressure_in: 29.89
    // pressure_mb: 1012
    // temp_c: 18.3
    // temp_f: 64.9
    // uv: 4
    // vis_km: 11
    // vis_miles: 6
    // wind_degree: 10
    // wind_dir: "N"
    // wind_kph: 3.6
    // wind_mph: 2.2
// location
    // country: "United States of America"
    // lat: 34.05
    // localtime: "2023-07-07 8:42"
    // localtime_epoch: 1688744562
    // lon: -118.24
    // name: "Los Angeles"
    // region: "California"
    // tz_id: "America/Los_Angeles"