import 'semantic-ui-css/semantic.min.css'
import {Route, Switch, HashRouter} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import EjerciciosA from "./Pages/EjerciciosA";
import Biseccion from "./Pages/Biseccion";
import PuntoFijo from "./Pages/PuntoFijo";
import NewtonRaphson from "./Pages/NewtonRaphson";
import PolinomioLagrange from "./Pages/PolinomioLagrange";
import MetodosTrapecios from "./Pages/MetodosTrapecios";
import MetodoRomberg from "./Pages/MetodosRomberg";
import Gauss from "./Pages/Gauss";


function App() {
  return (
    <HashRouter>
      <Switch>
        <div>
          <Navbar/>
          <Route exact path={`/`} component={HomePage}/>
          <Route path={`/ejercicios_a`} component={EjerciciosA}/>
          <Route path={`/biseccion`} component={Biseccion}/>
          <Route path={`/punto_fijo`} component={PuntoFijo}/>
          <Route path={`/newton_raphson`} component={NewtonRaphson}/>
          <Route path={`/polinomio_lagrange`} component={PolinomioLagrange}/>
          <Route path={`/metodo_trapecios`} component={MetodosTrapecios}/>
          <Route path={`/metodo_romberg`} component={MetodoRomberg}/>
          <Route path={`/metodo_gauss`} component={Gauss}/>

        </div>
      </Switch>
    </HashRouter>
  );
}

export default App;
