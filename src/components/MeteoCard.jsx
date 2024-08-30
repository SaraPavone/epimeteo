import { Card, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";

const MeteoCard = ({ weatherData }) => {
  const [weatherIcon, setWeatherIcon] = useState("");

  useEffect(() => {
    if (weatherData && weatherData.weather.length > 0) {
      // Definisci weatherIcons dentro useEffect
      const weatherIcons = {
        clear: "/img/sunny.png",
        clouds: "/img/cloudy.png",
        rain: "/img/rain.png",
        snow: "/img/snow.png",
        thunderstorm: "/img/tstorms.png",
      };

      // Ottieni la descrizione del meteo e converti in minuscolo
      const description = weatherData.weather[0].main.toLowerCase();
      // Imposta l'icona del meteo corrispondente o un'icona di default
      setWeatherIcon(weatherIcons[description] || "/img/default.png");
    }
  }, [weatherData]);

  if (!weatherData) {
    return null;
  }

  const currentTime = new Date().toLocaleTimeString();


  return (
    <Card className=" Card text-center" style={{ width: '40rem' }}>
      <Card.Img variant="top" src={weatherIcon} alt="Icona del Meteo" />
      <Card.Body>
        <Card.Title><h2>Meteo per {weatherData.name}</h2></Card.Title>
        <Card.Text>
            <p className="textCard">{weatherData.weather[0].description}</p>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush ">
      <ListGroup.Item className="List">
          <p>Temperatura: {weatherData.main.temp} °C</p>
        </ListGroup.Item>
        <ListGroup.Item  className="List d-flex align-content-around">
          <p className="flex-grow-1">Minima: {weatherData.main.temp_min} °C</p>
          <p className="flex-grow-1">Massima: {weatherData.main.temp_max} °C</p>
        </ListGroup.Item>
        <ListGroup.Item className="List">
          <p>Umidità: {weatherData.main.humidity}%</p>
        </ListGroup.Item>
        <ListGroup.Item className="List">
          <p>Vento: {weatherData.wind.speed} km/h</p>
        </ListGroup.Item>
        <ListGroup.Item className="List">
          <p>Ora locale: {currentTime}</p>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );    
};
export default MeteoCard;


  
