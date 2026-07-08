import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import SunnyIcon from '@mui/icons-material/Sunny';
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({info}){
  const INIT_URL ="https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  const HOT_URL ="https://images.unsplash.com/photo-1700756102943-fa388b2ed119?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VtbWVyJTIwaW1hZ2UlMjByYWphc3RoYW4lMjBzdW58ZW58MHx8MHx8fDA%3D";
  const COLD_URL ="https://images.unsplash.com/photo-1640954941708-58bf3fd48a3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbGQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";
  const RAIN_URL ="https://plus.unsplash.com/premium_photo-1670002347718-de1091111728?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhaW4lMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";
  return(
    <div className="InfoBox">
      {/* <h1>WeatherInfo -{info.wearther}</h1> */}
      <div className="cardcontainer">
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {/* {info.humidity>80 ?(
            <ThunderstormIcon/>
          ):info.temp>15?(<SunnyIcon/>

          ):(
            <AcUnitIcon/>
          )
        } */}

        </Typography>
        <Typography variant="body2"  color= "text.secondary" component={"span"}>
          <p>Temperature ={info.temp}&deg;C</p>
          <p>Humidity ={info.humidity}</p>
          <p>Min Temp ={info.tempMin}</p>
          <p>Max Temp={info.tempMax}</p>
          <p>The weather can be  described as {info.wearther} and feels  like{info.feelslike}&deg;C </p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>

  )
}