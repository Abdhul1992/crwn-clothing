import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/HeaderComponent/HeaderComponent";
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp";
const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route path="/signIn" component={SignInAndSignUp}></Route>
      </Switch>
    </div>
  );
}

export default App;
