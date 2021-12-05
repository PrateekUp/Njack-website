
import React from 'react'
import NavBar from './components/NavBar';

//React - Router - dom setup for single page application
import {
  BrowserRouter as Router,
  Route,
  Switch

} from "react-router-dom";

//header backgound
import Bg from './components/BgHeader';

//This is a dummy div that stays below the header. As the header is position: absolute, thus to prevent interference of other elemnts with the header is avoided by using a div of the same size as the header beneath it.
import Dummydiv from './components/Dummydiv';
import Blank from './components/Blank';



function App() {

  
  return (
    <Router>

      <NavBar />
      <Bg />
      <Dummydiv />
      <div style={{backgroundColor: 'rgb(255 255 255)', marginTop: '33px'}}> 


     {/* Router endpoints. Add the required elements in it */}
        <Switch>

          <Route exact path="/"> <Blank/> </Route>

          <Route exact path="/team"> <Blank/> </Route>
        <Route exact path="/events"> <Blank/></Route> 
        

        </Switch>

        </div>
        
    </Router>
  );
}

export default App;
