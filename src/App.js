
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Meteo from "./components/Meteo";
import Home from "./components/Home";

function App() {
  

  return (
    <BrowserRouter>
      <header className="App-header">
        <MyNavbar />
      </header>
      <main className="App-main" >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meteo" element={<Meteo />} />
        </Routes>
      </main>
      <footer></footer>
    </BrowserRouter>
  );
}

export default App;
