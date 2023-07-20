import cloudy from './images/Cloudy.png';
import fog from './images/Fog.png';
import heavyRain from './images/Heavy Rain.png';
import lightning from './images/Lightning.png';
import partlyCloudy from './images/Partly Cloudy.png';
import rain from './images/Rain.png';
import snowAndRain from './images/Snow and Rain.png';
import snow from './images/Snow.png';
import sprinkle from './images/Sprinkle.png';
import sunny from './images/Sunny.png';
import weatherBackground from './images/weather-background.jpg';
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

const day1name = document.querySelector('.one>.weekday');
const day1temp = document.querySelector('.one>.forecast-data>.avg-temp');
const day1chanceOfRain = document.querySelector('.one>.forecast-data>.chance-of-rain');
const day1sunrise = document.querySelector('.one>.forecast-data>.sunrise');
const day1sunset = document.querySelector('.one>.forecast-data>.sunset');
const day2name = document.querySelector('.two>.weekday');
const day2temp = document.querySelector('.two>.forecast-data>.avg-temp');
const day2chanceOfRain = document.querySelector('.two>.forecast-data>.chance-of-rain');
const day2sunrise = document.querySelector('.two>.forecast-data>.sunrise');
const day2sunset = document.querySelector('.two>.forecast-data>.sunset');
const day3name = document.querySelector('.three>.weekday');
const day3temp = document.querySelector('.three>.forecast-data>.avg-temp');
const day3chanceOfRain = document.querySelector('.three>.forecast-data>.chance-of-rain');
const day3sunrise = document.querySelector('.three>.forecast-data>.sunrise');
const day3sunset = document.querySelector('.three>.forecast-data>.sunset');


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

async function getWeatherData(loc) {
  const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=85cbece73a8846868d5174556230607&q=${loc}&days=7`, { mode: "cors" });
  const forecastData = await response.json();
  return forecastData;
};

async function updateWeatherFields(query) {
  const data = await getWeatherData(query);
  const hour = parseInt(data.location.localtime.split(' ')[1].split(':')[0]);
  const minute = data.location.localtime.split(' ')[1].split(':')[1];
  console.log(data);

  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date();
  const currDay = today.getDay();

  const days = [
    {
      "name": weekdays[currDay],
      "sunrise": data.forecast.forecastday[0].astro.sunrise,
      "sunset": data.forecast.forecastday[0].astro.sunset,
      "sunset": data.forecast.forecastday[0].astro.sunset,
      "avgHumidity": data.forecast.forecastday[0].day.avghumidity,
      "avgTemp": data.forecast.forecastday[0].day.avgtemp_f,
      "chanceOfRain": data.forecast.forecastday[0].day.daily_chance_of_rain,
      "chanceOfSnow": data.forecast.forecastday[0].day.daily_chance_of_snow,
      "willRain": data.forecast.forecastday[0].day.daily_will_it_rain,
      "willSnow": data.forecast.forecastday[0].day.daily_will_it_snow,
      "maxTemp": data.forecast.forecastday[0].day.maxtemp_f,
      "maxWind": data.forecast.forecastday[0].day.maxwind_mph,
      "minTemp": data.forecast.forecastday[0].day.mintemp_f,
      "minTemp": data.forecast.forecastday[0].day.mintemp_f,
    },
    {
      "name": weekdays[currDay + 1 > 6 ? currDay + 1 - 7 : currDay + 1],
      "sunrise": data.forecast.forecastday[1].astro.sunrise,
      "sunset": data.forecast.forecastday[1].astro.sunset,
      "sunset": data.forecast.forecastday[1].astro.sunset,
      "avgHumidity": data.forecast.forecastday[1].day.avghumidity,
      "avgTemp": data.forecast.forecastday[1].day.avgtemp_f,
      "chanceOfRain": data.forecast.forecastday[1].day.daily_chance_of_rain,
      "chanceOfSnow": data.forecast.forecastday[1].day.daily_chance_of_snow,
      "willRain": data.forecast.forecastday[1].day.daily_will_it_rain,
      "willSnow": data.forecast.forecastday[1].day.daily_will_it_snow,
      "maxTemp": data.forecast.forecastday[1].day.maxtemp_f,
      "maxWind": data.forecast.forecastday[1].day.maxwind_mph,
      "minTemp": data.forecast.forecastday[1].day.mintemp_f,
      "minTemp": data.forecast.forecastday[1].day.mintemp_f,
    },
    {
      "name": weekdays[currDay + 2 > 6 ? currDay + 2 - 7 : currDay + 2],
      "sunrise": data.forecast.forecastday[2].astro.sunrise,
      "sunset": data.forecast.forecastday[2].astro.sunset,
      "sunset": data.forecast.forecastday[2].astro.sunset,
      "avgHumidity": data.forecast.forecastday[2].day.avghumidity,
      "avgTemp": data.forecast.forecastday[2].day.avgtemp_f,
      "chanceOfRain": data.forecast.forecastday[2].day.daily_chance_of_rain,
      "chanceOfSnow": data.forecast.forecastday[2].day.daily_chance_of_snow,
      "willRain": data.forecast.forecastday[2].day.daily_will_it_rain,
      "willSnow": data.forecast.forecastday[2].day.daily_will_it_snow,
      "maxTemp": data.forecast.forecastday[2].day.maxtemp_f,
      "maxWind": data.forecast.forecastday[2].day.maxwind_mph,
      "minTemp": data.forecast.forecastday[2].day.mintemp_f,
      "minTemp": data.forecast.forecastday[2].day.mintemp_f,
    }
  ];

  const currTime = `
    ${hour <= 12 ? hour : hour - 12}:${minute} ${hour < 12 ? "am" : "pm"}
  `;
  place.textContent = `${data.location.name}, ${data.location.region}, ${data.location.country}`;
  time.textContent = currTime;
  temp.textContent = `${data.current.temp_f}\u{00B0}F`;
  condition.textContent = `${data.current.condition.text}`;
  conditionImg.src = conditionDict[data.current.condition.text];
  humid.textContent = `${data.current.humidity} %`;
  wind.textContent = `${data.current.wind_mph} mph`;
  precip.textContent = `${data.current.precip_in} in`;
  uv.textContent = `${data.current.uv} (${data.current.uv < 3 ? "Low" :
    data.current.uv < 6 ? "Moderate" :
      data.current.uv < 8 ? "High" :
        data.current.uv < 9 ? "Very High" :
          "Extreme"})`;
  vis.textContent = `${data.current.vis_miles} mi`;


  day1name.textContent = days[0].name;
  day1temp.textContent = `Avg. Temp: ${days[0].avgTemp}\u00B0F`;
  day1chanceOfRain.textContent = `${days[0].chanceOfRain}% Chance of Rain`;
  day1sunrise.textContent = `Sunrise: ${days[0].sunrise}`;
  day1sunset.textContent = `Sunset: ${days[0].sunset}`;
  day2name.textContent = days[1].name;
  day2temp.textContent = `Avg. Temp: ${days[1].avgTemp}\u00B0F`;
  day2chanceOfRain.textContent = `${days[1].chanceOfRain}% Chance of Rain`;
  day2sunrise.textContent = `Sunrise: ${days[1].sunrise}`;
  day2sunset.textContent = `Sunset: ${days[1].sunset}`;
  day3name.textContent = days[2].name;
  day3temp.textContent = `Avg. Temp: ${days[2].avgTemp}\u00B0F`;
  day3chanceOfRain.textContent = `${days[2].chanceOfRain}% Chance of Rain`;
  day3sunrise.textContent = `Sunrise: ${days[2].sunrise}`;
  day3sunset.textContent = `Sunset: ${days[2].sunset}`;
};


search.value = "los angeles";

updateWeatherFields("los angeles");

search.addEventListener('input', e => {
  updateWeatherFields(search.value);
});

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