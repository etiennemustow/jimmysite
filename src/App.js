import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Landing from './components/Landing';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">      
    <Router>
        {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path="/home">
            <Home />
          </Route> */}
          <Route path="/">
           <Landing />
          </Route>
        </Switch>
        </Router>
      </div>
  );
}

// function Home() {
  // <div className="App-header">
  // <Navbar></Navbar>
  // <Header></Header>
  // </div>
//          <div className="App">
//           <Navbar></Navbar>
//           <div className="App-header">
//           <Header></Header>
//           </div>

//           <div className='About'>
//             <About></About>
//           </div>
//           <div className='portfolio'>
//             <Portfolio></Portfolio>
//           </div>
//           <div className='contact'>
//             <Contact></Contact>
//           </div>
//         </div>  
// }


export default App;
