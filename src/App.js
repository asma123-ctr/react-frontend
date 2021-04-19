import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Questionaire from './components/Questionaire';
import Context from "./Global/Context";




const page404=()=>{
  return(
  <><div style={{flex:1,textAlign:"center"}}><h1>404 Page</h1><h1>Design Under Process</h1></div></>
  
  )

}


function App() {

  

  return (
    <div className="App">
      <Context>
        <BrowserRouter>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Questionaire} path="/Questionaire" exact/>
          <Route component={page404} />
        </Switch>
      </BrowserRouter>
    </Context>
    </div>
  );
}

export default App;
