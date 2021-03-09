import React from "react";

function Header(props) {
  return (
    <div>
      <h1>Weather</h1>
      <input className="search-box"
             type="text"
             onKeyPress={
               (event) => {
                 if (event.key === "Enter") {
                   props.searchWeatherData(event.target.value);
                 }
               }
             }
      />
    </div>
  )
}

export default Header;
