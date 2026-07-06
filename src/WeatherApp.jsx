
// import SearchBox from "./SearchBox";
// import InfoBox from "./InfoBox";
// import { useState } from "react";
// export default function WeatherApp(){
//   const[weatherInfo,setWeatherInfo] = useState({
//     city:"Ankush",
//     feelslike:24.84,
//     temp:25.05,
//     temp:25.05,
//     tempMin:25.05,
//     tempMax:25.05,
//     humidity:47,
//     wearther:"haze",
//   })
//   return (
//     <div style={{textAlign:"center"}}>
      
//       <h2>WeatherApp</h2>
//       <SearchBox/>
//       <InfoBox info={weatherInfo}/>
//     </div>
//   );
// }
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Ankush",
    feelslike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "Haze",
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App</h2>
      <SearchBox />
      <InfoBox info={weatherInfo} />
    </div>
  );
}