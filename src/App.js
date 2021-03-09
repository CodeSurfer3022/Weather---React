import React, {Component} from 'react';
import Header from './Components/Header';
import WeatherCard from './Components/WeatherCard';

function getDegreesinCandF(kelvin) {
  return {
    centigrade: Math.round(kelvin - 273.15),
    fahrenheit: Math.round((kelvin - 273.15) * 9 / 5 + 32)
  }
}

function getExtraInfo(data) {
  return {
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    visibility: data.visibility,
    wind: data.wind,
    min_temp: data.main.temp_min,
    max_temp: data.main.temp_max
  }
}

function getInfo(data) {
  let temp = data.main.temp;
  let feelsLike = data.main.feels_like;
  return {
    cityName: data.name,
    country: data.sys.country,
    clouds: data.weather[0].description,
    cloudsImage: data.weather[0].icon,
    temperature: getDegreesinCandF(temp),
    feelsLike: getDegreesinCandF(feelsLike),
  };
}

class App extends Component {
  constructor(props) {
    super(props);
    this.getWeatherData = this.getWeatherData.bind(this);
    this.searchWeatherData = this.searchWeatherData.bind(this);
  }

  componentDidMount() {
    this.getWeatherData('Bengaluru').then(data => {
      this.setState(data);
    });
  }

  async getWeatherData(city) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.REACT_APP_API_KEY}`;
      const response = await fetch(url, {mode: 'cors'});
      const data = await response.json();
      console.log(data);
      return {
        info: getInfo(data),
        extraInfo: getExtraInfo(data)
      }
    } catch (error) {
      this.setState({});
    }
  }

  searchWeatherData(city) {
    console.log(city);
    this.getWeatherData(city).then(data => {
      this.setState(data);
    })
  }

  render() {
    if (!this.state) {
      return <div>Loading</div>
    }

    if (Object.keys(this.state).length === 0 && this.state.constructor === Object) {
      return <div>couldn't find the city</div>
    }

    return (
      <div id="screen">
        <Header searchWeatherData={this.searchWeatherData}/>
        <WeatherCard info={this.state.info}/>
      </div>
    );
  }
}

export default App;
