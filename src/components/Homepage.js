import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Navbar from './Navbar'
import About from './About';
import Contact from './Contact';



class Homepage extends Component {
    state = {}

    render() {
        return (       
        <div>
        <Navbar></Navbar>
        <div className = "App-header" > 
        <header>
            <h1>
                jimmyvantwest | art department</h1>
        </header>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <Fade bottom>

        <div id="outer">
       <div class="inner"><button className='home-button'><a href='home' rel="noopener noreferrer">production design</a></button></div>
       <div class="inner"><button className='home-button'><a href='old' rel="noopener noreferrer">art assisting</a></button></div>
       <div class="inner"><button className='home-button'><a href='home' rel="noopener noreferrer">render art</a></button></div>
       </div>


</Fade>
        </div>



         <div className = 'About' >
         <About > </About> 
         </div> 
          <div className = 'contact' >
              < Contact > </Contact> 
          </div > 


</div>);
    }
}

export default Homepage;