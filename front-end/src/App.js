import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Game from './components/Game/Game';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/game' component={Game}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
