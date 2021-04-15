import React from "react";
import { Switch, Route} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import AllCards from "./pages/all-cards/AllCards";
import Readings from "./pages/readings/Readings";
import Header from "./component/header/Header";
import "./styles/Universal.styles.scss";

const App = () => {

 
  return (
    
   <>
    <Header/>
    <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/allcards" component={AllCards}/>
    <Route exact path="/readings" component={Readings}/>
    </Switch>
    </>

  );
}

export default App;
