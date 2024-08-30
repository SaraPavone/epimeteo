import { Card, ListGroup, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

const MeteoCard = ({ weatherData }) => {
  const [weatherIcon, setWeatherIcon] = useState("");

  useEffect(() => {
    if (weatherData && weatherData.weather.length > 0) {
      const weatherIcons = {
        clear: "/img/sunny.png",
        clouds: "/img/cloudy.png",
        rain: "/img/rain.png",
        snow: "/img/snow.png",
        thunderstorm: "/img/tstorms.png",
      };

      const description = weatherData.weather[0].main.toLowerCase();
      setWeatherIcon(weatherIcons[description] || "/img/default.png");
    }
  }, [weatherData]);

  if (!weatherData) {
    return null;
  }

  const currentTime = new Date().toLocaleTimeString();

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}> 
          <Card className="Card text-center mb-3" style={{ width: '100%', maxWidth: '40rem' }}> 
            <Card.Img variant="top" src={weatherIcon} alt="Icona del Meteo" />
            <Card.Body>
              <Card.Title>
                <h2>Meteo per {weatherData.name}</h2>
              </Card.Title>
              <Card.Text>
                <span className="textCard">{weatherData.weather[0].description}</span>
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item className="List">
                Temperatura: {weatherData.main.temp} °C
              </ListGroup.Item>
              <ListGroup.Item className="List">
                Minima: {weatherData.main.temp_min} °C
              </ListGroup.Item>
              <ListGroup.Item className="List">
                Massima: {weatherData.main.temp_max} °C
              </ListGroup.Item>
              <ListGroup.Item className="List">
                Umidità: {weatherData.main.humidity}%
              </ListGroup.Item>
              <ListGroup.Item className="List">
                Vento: {(weatherData.wind.speed * 3.6).toFixed(2)} km/h
              </ListGroup.Item>
              <ListGroup.Item className="List">
                Ora locale: {currentTime}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MeteoCard;



  
