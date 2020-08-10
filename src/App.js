import React from 'react';

class App extends React.Component{
    async getWeatherData(url) {
        try {
            const response = await fetch(url, {mode: 'cors'});
            const data = await response.json();
            console.log(data);
        } catch(error) {

        }
    }
    getUrl(location) {
        const city = location;
        const api_key = "fb94cdfd6fbdf9e769da8febcdcf4fba";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=${api_key}`;
        this.getWeatherData(url);
    }
    render() {
        return (
            <div id="weather-card">
                {this.getUrl('london')}
            </div>
        )
    }
}

export default App;