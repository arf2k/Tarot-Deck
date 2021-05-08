import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import AllCards from "./pages/all-cards/AllCards";
import Readings from "./pages/readings/Readings";
import Header from "./component/header/Header";
import "./styles/Universal.styles.scss";
import ReadingsSingle from "./pages/readings/ReadingsSingle";
import ReadingsTriple from "./pages/readings/ReadingsTriple";
import SignInAndSignUpPage from "./pages/singinandsignup/SignInSignUp";
import {
  auth,
  createUserProfileDocument,
} from "./component/firebase/Firebase.utils";

class App extends React.Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {

    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" render={(routerProps) => (<Homepage currentUser={this.state.currentUser}/>)} />
          <Route exact path="/allcards" component={AllCards} />
          <Route exact path="/readings" component={Readings} />
          <Route path="/single" component={ReadingsSingle} />
          <Route path="/triple" component={ReadingsTriple} />
          <Route path="/signin" render={ () => (this.state.currentUser? <Redirect to="/" /> : <SignInAndSignUpPage/>)} />
        </Switch>
      </>
    );
  }
}

export default App;
