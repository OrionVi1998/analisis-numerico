import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {Route, BrowserRouter, Switch} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import EjerciciosA from "./Pages/EjerciciosA";
import Biseccion from "./Pages/Biseccion";
import PuntoFijo from "./Pages/PuntoFijo";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div>
          <Navbar/>
          <Route exact path={"/"} component={HomePage}/>
          <Route exact path={"/ejercicios_a"} component={EjerciciosA}/>
          <Route exact path={"/biseccion"} component={Biseccion}/>
          <Route exact path={"/punto_fijo"} component={PuntoFijo}/>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
