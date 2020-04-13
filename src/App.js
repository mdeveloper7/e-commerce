import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

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
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/hats' component={HatsPage}/>
        <Route path='/hats/:hatId' component={HatsDetailsPage}/>
      </Switch>
    </>
  );
}

export default App;
