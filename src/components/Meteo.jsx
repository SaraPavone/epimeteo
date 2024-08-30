import { Form, Button, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import MeteoCard from "./MeteoCard";

const Meteo = () => {
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("London");
  const [inputValue, setInputValue] = useState("");

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&appid=54a5b511cab0a50f87dcdc9a0a134242&lang=it&units=metric`;

  useEffect(() => {
    fetchMeteo();
  }, [city]);

  const fetchMeteo = () => {
    setLoad(true);
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Città non trovata o errore nella richiesta");
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
        setLoad(false);
        setError(false);
      })
      .catch((error) => {
        setLoad(false);
        setError(true);
        console.log(error);
      });
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(inputValue);
    setInputValue("");
  };

  if (load) {
    return <div>Caricamento in corso...</div>;
  }

  if (error) {
    return <div>Errore nel recupero dei dati meteo</div>;
  }

  return (
    <Container fluid align="center" className="p-5 w-100">
      <h1 className="mb-5">Il Meteo sempre con te!</h1>
      <Form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center align-items-center gap-2 mb-5">
          <Form.Control
            type="text"
            placeholder="Cerca città"
            value={inputValue}
            onChange={handleInputChange}
            className="mr-sm-2"
            style={{ width: "200px" }}  
          />
          <Button type="submit">Cerca</Button>
        </div>
      </Form>
      {weatherData && <MeteoCard weatherData={weatherData} />}
    </Container>
  );
};

export default Meteo;

