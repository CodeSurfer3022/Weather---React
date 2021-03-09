import React from "react";

function Header() {
  return(
    <input className="search-box"
           type="text"
           onKeyPress={
             (event) => {
               if (event.key === "Enter") {
                 this.searchWeatherData(event.target.value);
               }
             }
           }
    />
  )
}

export default Header;
