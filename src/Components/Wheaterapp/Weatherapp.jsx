import React, { useState } from 'react'
import "./Weatherapp.css"

import seacthicon from "../Assets/search.png"
import clearicon from "../Assets/clear.png"
import cloudicon from "../Assets/cloud.png"
import drizzleicon from "../Assets/drizzle.png"
import humidityicon from "../Assets/humidity.png"
import windicon from "../Assets/wind.png"
import snowicon from "../Assets/snow.png"
import rain from "../Assets/rain.png"


const Weatherapp = () => {
  let myapiKey = "480a7657817b3eb7584fd17114d2e836";
const [ icon , setIcons] = useState(cloudicon);

  const search  = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {

      return 0;

    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${myapiKey}`;

    let resPonse = await fetch (url)
    let dataa = await resPonse.json();
    const humidityper = document.getElementsByClassName("humidityper")
    const windrate = document.getElementsByClassName("windrate")
    const temperta = document.getElementsByClassName("weathertempe")
    const location = document.getElementsByClassName("weatherlocation")

    humidityper[0].innerHTML = dataa.main.humidity + "%";
    windrate[0].innerHTML = Math.floor(dataa.wind.speed)+ "Km/h";
    temperta[0].innerHTML = Math.floor(dataa.main.temp) + "°C";
    location[0].innerHTML = dataa.name;
   
    if (dataa.weather[0].icon==="01d" || dataa.weather[0].icon==="01n"){
      setIcons(clearicon);
    }else if (dataa.weather[0].icon==="02d" || dataa.weather[0].icon==="02n"){
      setIcons(cloudicon);
    }
    else if (dataa.weather[0].icon==="03d" || dataa.weather[0].icon==="03n"){
      setIcons(drizzleicon);
    }
    else if (dataa.weather[0].icon==="04d" || dataa.weather[0].icon==="04n"){
      setIcons(drizzleicon);
    }
    else if (dataa.weather[0].icon==="09d" || dataa.weather[0].icon==="09n"){
      setIcons(rain);
    }
    else if (dataa.weather[0].icon==="010d" || dataa.weather[0].icon==="010n"){
      setIcons(rain);
    }
    else if (dataa.weather[0].icon==="013d" || dataa.weather[0].icon==="013n"){
      setIcons(snowicon);
    }
    else{
      setIcons(clearicon)
    }

 

  }







  return (

    
    <div className='container'>

      <div className="clastop">
        <input type="text" className="cityInput" placeholder='Search' />

        <div className="searchicon">
          <img src={seacthicon} alt="seacthicon" onClick={() => { search() }} />
        </div>


      </div>

      <div className="weatherimage">
        <img src={icon} />

      </div>


      <div className="weathertempe">34 °C</div>

      <div className="weatherlocation">Karachi</div>



      <div className="alldatacontainer">


        <div className="element">
          <img src={humidityicon} className='icons' />

          <div className="data">
            <div className="humidityper">78%</div>
            <div className="text">Humidity</div>
          </div>



          <div className="element">
            <img src={windicon} alt=""  className='windicon'/>

            <div className="data">
              <div className="windrate">65 km/h</div></div>
            <div className="wind">Wind Speed</div>
          </div>




        </div>





      </div>















    </div>
  )
}

export default Weatherapp
