// import 'dotenv/config';

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
	"Sunny": "./images/Sunny.png",
  "Clear": "./images/Sunny.png",
	"Partly cloudy": "./images/Partly Cloudy.png",
  "Cloudy": "./images/Cloudy.png",
  "Overcast": "./images/Cloudy.png",
  "Mist": "./images/Fog.png",
  "Patchy rain possible": "./images/Rain.png",
  "Patchy snow possible": "./images/Snow.png",
  "Patchy sleet possible": "./images/Snow.png",
  "Patchy freezing drizzle possible": "./images/Sprinkle.png",
  "Thundery outbreaks possible": "./images/Lightning.png",
  "Blowing snow": "./images/Snow.png",
  "Blizzard": "./images/Snow.png",
  "Fog": "./images/Fog.png",
  "Freezing fog": "./images/Fog.png",
  "Patchy light drizzle": "./images/Sprinkle.png",
  "Light drizzle": "./images/Sprinkle.png",
  "Freezing drizzle": "./images/Rain.png",
  "Heavy freezing drizzle": "./images/Heavy Rain.png",
  "Patchy light rain": "./images/Rain.png",
  "Light rain": "./images/Rain.png",
  "Moderate rain at times": "./images/Rain.png",
  "Moderate rain": "./images/Rain.png",
  "Heavy rain at times": "./images/Heavy Rain.png",
  "Heavy rain": "./images/Heavy Rain.png",
  "Light freezing rain": "./images/Rain.png",
  "Moderate or heavy freezing rain": "./images/Heavy Rain.png",
  "Light sleet": "./images/Snow.png",
  "Moderate or heavy sleet": "./images/Snow.png",
  "Patchy light snow": "./images/Snow.png",
  "Light snow": "./images/Snow.png",
  "Patchy moderate snow": "./images/Snow.png",
  "Moderate snow": "./images/Snow.png",
  "Patchy heavy snow": "./images/Snow.png",
  "Heavy snow": "./images/Snow.png",
  "Ice pellets": "./images/Snow.png",
  "Light rain shower": "./images/Rain.png",
  "Moderate or heavy rain shower": "./images/Heavy Rain.png",
  "Torrential rain shower": "./images/Rain.png",
  "Light sleet showers": "./images/Snow.png",
  "Moderate or heavy sleet showers": "./images/Snow.png",
  "Light snow showers": "./images/Snow.png",
  "Moderate or heavy snow showers": "./images/Snow.png",
  "Light showers of ice pellets": "./images/Snow.png",
  "Moderate or heavy showers of ice pellets": "./images/Snow and Rain.png",
  "Patchy light rain with thunder": "./images/Lightning.png",
  "Moderate or heavy rain with thunder": "./images/Lightning.png",
  "Patchy light snow with thunder": "./images/Lightning.png",
	"Moderate or heavy snow with thunder": "./images/Lightning.png"
}

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