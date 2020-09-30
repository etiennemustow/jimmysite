import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';
import jimmyvantwestphoto from '../jimmyvantwestphoto.jpg'


class About extends Component {
    state = {  }
    render() { 
        return (<div className='about'>
            <div className='about-content'>
            <h1><Fade bottom cascade>About.</Fade></h1>
            <Fade bottom>
                    <p>{data.abouttext}</p>
            </Fade>
            </div>
            {data.ShowAboutImage ? <img src={jimmyvantwestphoto} alt='about iamge'></img> : null}
            

        </div>  );
    }
}
 
export default About;