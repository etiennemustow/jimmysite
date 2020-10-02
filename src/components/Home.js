import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata'


class Home extends Component {
    state = {}

    render() {
        return (<div>
            <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/>
        <h1 className='heading-background'>CREATIVE</h1>
            <Fade bottom>
            <h1 className='home'>
            <div id="outer">
           <div class="inner"><button className='home-button'><a href='home' rel="noopener noreferrer">production design</a></button></div>
           <div class="inner"><button className='home-button'><a href='old' rel="noopener noreferrer">art assisting</a></button></div>
           <div class="inner"><button className='home-button'><a href='home' rel="noopener noreferrer">render art</a></button></div>
           </div>
                </h1>


            </Fade>



        </div>);
    }
}

export default Home;