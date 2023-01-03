import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from "./components/Home";
import { PartnerConnection } from "./components/PartnerConnection";
import { Fblogin } from "./components/Fblogin";
import { Facebooklogin } from "./components/Facebooklogin";
import { Verification } from "./components/Verification";
function App() {
  return (
    <div className="app">

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/login" element={<Fblogin></Fblogin>} />
            <Route
              path="/login/facebooklogin"
              element={<Facebooklogin></Facebooklogin>}
            />
            <Route path="/login/facebooklogin/confirmation" element={<Verification></Verification>} />
            <Route path="/" element={<Home></Home>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
