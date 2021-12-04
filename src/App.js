
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Route,
  Switch

} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import BgParallax from './components/BgParallax';
import { Parallax } from 'react-parallax';
import Carousel from './components/Carouselcomponent';
import Dummydiv from './components/Dummydiv';
import Home from './components/Home';
import Footer from './components/Footer';
import Team from './components/Team';
import Events from './components/Events';


function App() {

  const img1=require("./Resources/img/events-min.jpg");
  const img2=require("./Resources/img/exceptional-team.png");
  const img3="./Resources/img/nwoc-min.jpg";

  const [progress, setProgress] = useState(0)
  return (
    <Router>

      <NavBar />
      <BgParallax />
      <Dummydiv />
      <div style={{backgroundColor: 'rgb(255 255 255)'}}> 
      {/* <Carousel /> */}
      

        <Switch>

          <Route exact path="/"> <Home/> </Route>

          <Route exact path="/team"> <Team setProgress={setProgress}    /> </Route>
        <Route exact path="/events"> <Events setProgress={setProgress}   /> </Route> 
        

        </Switch>

        </div>
        <Footer/>
    </Router>
  );
}

export default App;
