import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import hearts from "./assets/hearts.jpg";
import Container from "react-bootstrap/Container";

// import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from "./components/Home";
import { PartnerConnection } from "./components/PartnerConnection";
import { Fblogin } from "./components/Fblogin";
import { Facebooklogin } from "./components/Facebooklogin";
import { Verification } from "./components/Verification";
function App() {
  return (
    <div className="app">
      <Container>
        <Home></Home>
        <PartnerConnection></PartnerConnection>
        <Fblogin></Fblogin>
        <Facebooklogin></Facebooklogin>
        <Verification></Verification>
        <img src={hearts} className="hearts"></img>
      </Container>
    </div>
  );
}

export default App;
