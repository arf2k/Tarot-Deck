import React from "react";
import { Switch, Route} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import AllCards from "./pages/all-cards/AllCards";
import Readings from "./pages/readings/Readings";
import Header from "./component/header/Header";
import "./styles/Universal.styles.scss";
import ReadingsSingle from "./pages/readings/ReadingsSingle";
import ReadingsTriple from "./pages/readings/ReadingsTriple";
import SignInAndSignUpPage from "./pages/singinandsignup/SignInSignUp";

const App = () => {

 
  return (
    
   <>
    <Header/>
    <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/allcards" component={AllCards}/>
    <Route exact path="/readings" component={Readings}/>
    <Route path = "/single" component={ReadingsSingle}/>
    <Route path = "/triple" component={ReadingsTriple}/>
    <Route path = "/signin" component={SignInAndSignUpPage}/>
    </Switch>
    </>

  );
}

export default App;
