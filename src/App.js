import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import SplashScreen from './SplashScreen';
import WorldMap from './WorldMap';
import LevelOne from './LevelOne';
import ComplaintFormLevel from './ComplaintFormLevel';
import './App.css';

const RouteManager = () => (
  <Router>
    <div>
      <Route exact path="/" component={SplashScreen}/>
      <Route path="/world-map/:gameId" component={WorldMap}/>
      <Route path="/level/1/:gameId" component={LevelOne}/>
      <Route path="/level/complaint" component={ComplaintFormLevel}/>
    </div>
  </Router>
)

export default RouteManager