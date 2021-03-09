import React, {Component} from 'react';
import Header from './Components/Header';
import WeatherCard from './Components/WeatherCard';

function getDegreesinCandF(kelvin) {
  return {
    centigrade: Math.round(kelvin - 273.15),
    fahrenheit: Math.round((kelvin - 273.15) * 9 / 5 + 32)
  }
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getWeatherData('Bengaluru').then(data => {
      this.setState(data);
    });
  }

  getExtraInfo(data) {
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

  getInfo(data) {
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

  async getWeatherData(city) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.REACT_APP_API_KEY}`;
      const response = await fetch(url, {mode: 'cors'});
      const data = await response.json();
      console.log(data);
      return {
        info: this.getInfo(data),
        extraInfo: this.getExtraInfo(data)
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
    console.log(this.state)
    if (!this.state) {
      return <div>Loading</div>
    }
    if (Object.keys(this.state).length === 0 && this.state.constructor === Object) {
      return <div>couldn't find the city</div>
    }
    const info = this.state.info;
    return (
      <div id="screen">
        <Header />
        <WeatherCard />
      </div>
    );
  }
}

export default App;
