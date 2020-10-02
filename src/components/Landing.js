import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata'


class Landing extends Component {
    state = {}

    render() {
        return (<div>
            <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/>
        <h1 className='heading-background'>CREATIVE</h1>
            <Fade bottom>
            <h1 className='landing'>
            {data.landingPage}
                </h1>
                <button className='landing-button'><a href='home' rel="noopener noreferrer">enter</a></button>

            </Fade>



        </div>);
    }
}

export default Landing;