import React from 'react';

// Parameters from returned data for reference:
//     coord
// coord.lon City geo location, longitude
// coord.lat City geo location, latitude
// weather (more info Weather condition codes)
// weather.id Weather condition id
// weather.main Group of weather parameters (Rain, Snow, Extreme etc.)
// weather.description Weather condition within the group. You can get the output in your language. Learn more
// weather.icon Weather icon id
// base Internal parameter
// main
// main.temp Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
//     main.feels_like Temperature. This temperature parameter accounts for the human perception of weather. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
//     main.pressure Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
// main.humidity Humidity, %
// main.temp_min Minimum temperature at the moment. This is minimal currently observed temperature (within large megalopolises and urban areas). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
//     main.temp_max Maximum temperature at the moment. This is maximal currently observed temperature (within large megalopolises and urban areas). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
//     main.sea_level Atmospheric pressure on the sea level, hPa
// main.grnd_level Atmospheric pressure on the ground level, hPa
// wind
// wind.speed Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
//     wind.deg Wind direction, degrees (meteorological)
// wind.gust Wind gust. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour
// clouds
// clouds.all Cloudiness, %
// rain
// rain.1h Rain volume for the last 1 hour, mm
// rain.3h Rain volume for the last 3 hours, mm
// snow
// snow.1h Snow volume for the last 1 hour, mm
// snow.3h Snow volume for the last 3 hours, mm
// dt Time of data calculation, unix, UTC
// sys
// sys.type Internal parameter
// sys.id Internal parameter
// sys.message Internal parameter
// sys.country Country code (GB, JP etc.)
// sys.sunrise Sunrise time, unix, UTC
// sys.sunset Sunset time, unix, UTC
// timezone Shift in seconds from UTC
// id City ID
// name City name
// cod Internal parameter

function getDegreesinCandF(kelvin) {
        return {
            centigrade: Math.round(kelvin - 273.15),
            fahrenheit: Math.round((kelvin - 273.15) * 9 / 5 + 32)
        }
}

class App extends React.Component{
    getExtraInfo(data) {
        return {
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            visibility: data.visibility,
            wind: data.wind,
            min_temp : data.main.temp_min,
            max_temp: data.main.temp_max
        }
    }
    getInfo(data) {
        let temp = data.main.temp;
        let feelsLike = data.main.feels_like;
        return {
            cityName: data.name,
            clouds: data.weather[0].description,
            temperature: getDegreesinCandF(temp),
            feelsLike: getDegreesinCandF(feelsLike),
        };
    }
    async getWeatherData(city) {
        try {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.REACT_APP_API_KEY}`;
            const response = await fetch(url, {mode: 'cors'});
            const data =  await response.json();
            const info = this.getInfo(data);
            console.log(info);
            const extraInfo = this.getExtraInfo(data);
            console.log(extraInfo);

        } catch(error) {

        }
    }

    render() {
        this.getWeatherData('seattle');
        return (
            <div id="weather-card">
                <div>
                    <img />
                </div>
                {/*<Info/>*/}
                {}
            </div>
        )
    }
}

export default App;