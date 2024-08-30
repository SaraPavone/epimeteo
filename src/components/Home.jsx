import { Container, Button, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container fluid className="p-5 text-center Jumbo">
      <Container className="bg-transparent">
        <h1 className="display-4">Benvenuti su EpiMeteo!</h1>
        <p className="lead">
          Scopri il meteo della tua città e di tutto il mondo con un semplice click.
        </p>
        <hr className="my-4" />
        <p>
          EpiMeteo è un'applicazione facile da usare, veloce e accurata per ottenere informazioni aggiornate sul meteo. 
          Sei pronto a scoprire il meteo di oggi?
        </p>
        <Link to="/meteo">
          <Button variant="primary" size="lg" className="mt-3">
            Inizia ora <i className="bi bi-cloud-sun"></i>
          </Button>
        </Link>
      </Container>

     
      <Row className="text-left mt-5">
        <Col md={4} className="mb-4">
          <Image src="img/sunny.png" roundedCircle className="mb-3" width={80} height={80} />
          <h4>Facile da Usare</h4>
          <p>Inserisci la città, clicca e ottieni il meteo in pochi secondi. Naviga facilmente e scopri le previsioni meteo.</p>
        </Col>
        <Col md={4} className="mb-4">
          <Image src="img/cloudy.png" roundedCircle className="mb-3" width={80} height={80} />
          <h4>Accuratezza e Velocità</h4>
          <p>Utilizziamo le migliori API per fornire previsioni meteo precise e aggiornate in tempo reale.</p>
        </Col>
        <Col md={4} className="mb-4">
          <Image src="img/tstorms.png" roundedCircle className="mb-3" width={80} height={80} />
          <h4>Dati Meteo Dettagliati</h4>
          <p>Ottieni informazioni su temperatura, umidità, vento, e molto altro in un'unica app meteo!</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
