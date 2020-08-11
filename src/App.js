import React from 'react';
import Info from './Info';

class App extends React.Component{
    getExtraInfo(data) {
        return data;
    }
    getInfo(data) {
        return data;
    }
    async getWeatherData(city) {
        try {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=${process.env.REACT_APP_API_KEY}`;
            const response = await fetch(url, {mode: 'cors'});
            const data =  await response.json();
            this.getInfo(data);
            this.getExtraInfo(data);
        } catch(error) {

        }
    }

    render() {
        this.getWeatherData('london');
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