import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class Contact extends Component {
    state = {  }
    render() { 
        return (  <div>
        <h1 class="subheading">
                <Fade bottom cascade> Contact.</Fade>
        </h1>
        <Fade bottom>
        <div className='contact-content'>
                <h1>
                Let’s create your next<br></br>
                <span className='amazing-color'>project together</span></h1>
                    <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
                <ul class="instagram">
                    {data.social.map((link,index)=>(
                        <li key={index}><a className="instagram" target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                    ))}   
                </ul>
        </div>
        </Fade>

            <span className='footer'>Made With ❤ by <a href="http://linkedin.com/in/etncodes">Etienne Mustow</a></span>
        </div>);
    }
}
 
export default Contact;