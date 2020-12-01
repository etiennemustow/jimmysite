import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Fade from 'react-reveal/Fade';


import Homepage from './components/Homepage';
import Landing from './components/Landing';
import Header from './components/Header';
import Navbar from './components/Navbar'
import ProductionDesign from './components/ProductionDesign';
import ArtAssisting from './components/ArtAssisting';

function App() {
    return (
     <div className = "App" >
        <Router > {
            /* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */
        } 
        <Switch >
            <Route path ="/home" >
        <Home />
        </Route> 
{/* 
        <Route path ="/" >
            <Landing />
        </Route>  */}

    <Route exact path ="/production_design" component={ProductionDesign} />
    <Route exact path ="/art_assisting" component={ArtAssisting} />
         


        <Route path="/homepage">
            {/* <Homepage /> */}
        </Route>

        </Switch> 
        </Router> 
        </div >
    );
}

function Home() {
    return ( 
        <Homepage></Homepage>
        // <div className = "App" >
        // <Navbar > </Navbar> 
        // <div className = "App-header" >
        // < Header > </Header> </div>
        // <div className = 'About' >
        // <About > </About> 
        // </div> 
        // < div className = 'portfolio' >
        // <Portfolio > </Portfolio> 
        // </div >
        //  <div className = 'contact' >
        //      < Contact > </Contact> 
        //  </div > 
        //  </div>
 

    )
}


export default App;