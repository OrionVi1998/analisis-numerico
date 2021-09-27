import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {Route, BrowserRouter, Switch} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import Ejercicio17 from "./Pages/Ejercicio17";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div>
          <Navbar/>
          <Route exact path={"/"} component={HomePage}/>
          <Route exact path={"/ejercicio_17"} component={Ejercicio17}/>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
