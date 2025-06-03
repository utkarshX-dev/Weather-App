import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}) {
  let Cold_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbpPGFwsw9mPFgwTkti0dkWYX26_QwsEOsQ&s"; 
  let Hot_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuKGofXXoscn_6nVC2UMppV8UQo6YBEzQXJQ&s";
  let Rain_URL = "https://images.unsplash.com/photo-1622987857832-a31ceda6ad0d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbmZhbGx8ZW58MHx8MHx8fDA%3D";

  return (
    <div className="InfoBox">
      <div>
        <Card className="cardContainer" sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80 ? Rain_URL : info.temp > 15 ? Hot_URL : Cold_URL}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city }&nbsp;&nbsp;{info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <SunnyIcon/> : <AcUnitIcon/>}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component="span"
            >
              <p>{"Temperature: " + info.temp + "°C"}</p>
              <p>{"Humidity: " + info.humidity + "%"}</p>
              <p>{"Min Temperature: " + info.tempMin + "°C"}</p>
              <p>{"Max Temperature: " + info.tempMax + "°C"}</p>
              <p>
                The weather can be described as {info.weather} and feels like{" "}
                {info.feelsLike + "°C"}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
