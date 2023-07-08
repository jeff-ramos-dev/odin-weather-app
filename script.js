// import 'dotenv/config';

const countryName = document.querySelector('.country');
const countryNameSpan = document.querySelector('.country-data');
const cityName = document.querySelector('.city');
const cityNameSpan = document.querySelector('.city-data')
const localTime = document.querySelector('.local-time');
const localTimeSpan = document.querySelector('.local-time-data')
const currentCond = document.querySelector('.current-cond');
const currentCondSpan = document.querySelector('.current-cond-data')
const currentTemp = document.querySelector('.current-temp');
const currentTempSpan = document.querySelector('.current-temp-data')
const humidity = document.querySelector('.humidity');
const humiditySpan = document.querySelector('.humidity-data')
const windSpeed = document.querySelector('.wind-speed');
const windSpeedSpan = document.querySelector('.wind-speed-data')
const precipitation = document.querySelector('.precipitation');
const precipitationSpan = document.querySelector('.precipitation-data')

const search = document.getElementById('search');

async function getData(location) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=85cbece73a8846868d5174556230607&q=${location}`, {mode: "cors"});
    const weatherData = await response.json();
    const hour = parseInt(weatherData.location.localtime.split(' ')[1].split(':')[0])
    const minute = weatherData.location.localtime.split(' ')[1].split(':')[1]
console.log(weatherData)
    countryName.textContent = "Country: "
    countryNameSpan.textContent = weatherData.location.country
    cityName.textContent = "City: "
    cityNameSpan.textContent = weatherData.location.name
    localTime.textContent = "Local time: "
    localTimeSpan.textContent = `
    ${hour <= 12 ? hour : hour - 12}:${minute} ${hour < 12 ? "am" : "pm"}`
    currentCond.textContent = "Current conditions: "
    currentCondSpan.textContent = weatherData.current.condition.text
    currentTemp.textContent = "Current temp: "
    currentTempSpan.textContent = `${weatherData.current.temp_f}°F`
    humidity.textContent = "Humidity: "
    humiditySpan.textContent = `${weatherData.current.humidity}%`
    windSpeed.textContent = "Wind speed: "
    windSpeedSpan.textContent = `${weatherData.current.wind_mph}mph`
    precipitation.textContent = "Precipitation: "
    precipitationSpan.textContent = `${weatherData.current.precip_in}in`

    return weatherData
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