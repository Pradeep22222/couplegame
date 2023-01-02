import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import hearts from "./assets/hearts.jpg";
import Container from "react-bootstrap/Container";

// import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from "./components/Home";
import { PartnerConnection } from "./components/PartnerConnection";
import { Fblogin } from "./components/Fblogin";
function App() {
  return (
    <div className="app">
      <Container>
        <Home></Home>
        <PartnerConnection></PartnerConnection>
        <Fblogin></Fblogin>
        <img src={hearts} className="hearts"></img>
      </Container>
    </div>
  );
}

export default App;
