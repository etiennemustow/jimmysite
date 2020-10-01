import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata'


class Landing extends Component {
    state = {}

    render() {
        return (<div>
        <h1 className='heading-background'>CREATIVE</h1>
            <Fade bottom>
            <h1 className='landing'>
            {data.landingPage}<br></br>
                    <button className='landing'><a href='home' rel="noopener noreferrer">Enter</a></button>
                </h1>
            </Fade>



        </div>);
    }
}

export default Landing;