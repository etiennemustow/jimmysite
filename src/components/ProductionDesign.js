import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Navbar from './Navbar'
import About from './About';
import Contact from './Contact';



class ProductionDesign extends Component {
    state = {}

    render() {
        return (       
        <div>
        <div className = "App-header" > 
        <header>
            <h1>
                jimmyvantwest | production design </h1>
        </header>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <Fade bottom>

        <iframe src="https://player.vimeo.com/video/380030498?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        <p><a href="https://vimeo.com/380030498">TTRRUUCES - TTRRUUCES</a> directed by Maxim Kelly</p>

        <iframe src="https://player.vimeo.com/video/450474177" width="640" height="390" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        <p><a href="https://vimeo.com/450474177">Finn Foxell /// Make It Count [Official Music Video]</a> directed by Rhys Warren</p>

</Fade>
        </div>
</div>);
    }
}

export default ProductionDesign;