import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from "./components/header/header.component";
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

const HatsPage = () => (
<div>
  <h1>HATS PAGE</h1>
</div>
);

const HatsDetailsPage = ({match}) => {
  console.log(match);
  return (
  <div>
    <h1>Hi {match.params.hatId}</h1>
  </div>)
};

function App() {
  return (
    <>
    <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        {/* <Route exact path='/hats' component={HatsPage}/>
        <Route path='/hats/:hatId' component={HatsDetailsPage}/> */}
      </Switch>
    </>
  );
}

export default App;
