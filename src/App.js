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

        <Route path ="/" >
        <Landing />
        </Route> 

        <Route path="/homepage">
            {/* <Homepage /> */}
        </Route>

        </Switch> 
        </Router> 
        </div >
    );
}

function Homepage2() {
      return( 
        <div>
        <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/>
    <h1 className='heading-background'>CREATIVE</h1>
        <Fade bottom>
        <h1 className='landing'>
        <button className='landing-button'><a href='productiondesign' rel="noopener noreferrer">production design</a></button>
        <button className='landing-button'><a href='artassisting' rel="noopener noreferrer">art assisting</a></button>
        <button className='landing-button'><a href='renderart' rel="noopener noreferrer">render art</a></button>
            </h1>


        </Fade>



    </div>
      )
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