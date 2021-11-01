import 'semantic-ui-css/semantic.min.css'
import {Route, BrowserRouter, Switch} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import EjerciciosA from "./Pages/EjerciciosA";
import Biseccion from "./Pages/Biseccion";
import PuntoFijo from "./Pages/PuntoFijo";
import NewtonRaphson from "./Pages/NewtonRaphson";
import PolinomioLagrange from "./Pages/PolinomioLagrange";
import MetodosTrapecios from "./Pages/MetodosTrapecios";
import MetodoRomberg from "./Pages/MetodosRomberg";

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
          <Route exact path={"/newton_raphson"} component={NewtonRaphson}/>
          <Route exact path={"/polinomio_lagrange"} component={PolinomioLagrange}/>
          <Route exact path={"/metodo_trapecios"} component={MetodosTrapecios}/>
          <Route exact path={"/metodo_romberg"} component={MetodoRomberg}/>

        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
