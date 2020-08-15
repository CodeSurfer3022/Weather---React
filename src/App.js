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

    render() {
        return (
            <div>
                <div className="search-bar">
                    <input className="search-box"
                        type="text"
                    />
                </div>
                <div id="weather-card">
                    <div id="sky">
                        <img alt="clouds"/>
                    </div>
                    <div id="info">
                        <h3>Bengaluru</h3>
                        <p>cloudy</p>
                        <p>23 deg</p>
                        <p>20 deg</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;