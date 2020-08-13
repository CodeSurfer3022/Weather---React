import React from 'react';
import Info from './Info';

function getDegreesinCandF(kelvin) {
        return {
            centigrade: Math.round(kelvin - 273.15),
            fahrenheit: Math.round((kelvin - 273.15) * 9 / 5 + 32)
        }
}

class App extends React.Component{
    getExtraInfo(data) {
        console.log(data);
        return data;
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
            this.getExtraInfo(data);
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