import React from "react";
import Info from "./Info";

function WeatherCard(props) {
  return (
    <div>
      <div id="sky">
        <img src={`http://openweathermap.org/img/wn/${props.info.cloudsImage}@2x.png`} alt="clouds"/>
      </div>
      <Info info={props.info}/>
    </div>
  )
}

export default WeatherCard;
