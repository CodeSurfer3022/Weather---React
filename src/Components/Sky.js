import React from "react";

function Sky(props) {
  return (
    <div id="sky">
      <img src={`http://openweathermap.org/img/wn/${props.info.cloudsImage}@2x.png`} alt="clouds"/>
    </div>
  )
}

export default Sky;
