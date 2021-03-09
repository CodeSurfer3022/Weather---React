import React from "react";

function Info(props) {
  return(
    <div id="info">
      <div id="city">
        {props.info.cityName}, {props.info.country}
      </div>
      <div id="clouds">
        {props.info.clouds}
      </div>
      <div id="temp">
        {props.info.temperature.centigrade}°
      </div>
      <div id="feels">
        Feels like: {props.info.feelsLike.centigrade}°
      </div>
    </div>
  )
}

export default Info;
