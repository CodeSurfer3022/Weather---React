import React from "react";
import Sky from "./Sky";

function WeatherCard() {
  return (
    <div id="info">
      <Sky info={info} />
      <div id="city">
        {info.cityName}, {info.country}
      </div>
      <div id="clouds">
        {info.clouds}
      </div>
      <div id="temp">
        {info.temperature.centigrade}°
      </div>
      <div id="feels">
        Feels like: {info.feelsLike.centigrade}°
      </div>
    </div>
  )
}

export default WeatherCard;
