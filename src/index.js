import ReactDOM from "react-dom"
import React, { Component, useState } from "react"
import state from "./store"
import "./styles.css"
import ModalVideo from 'react-modal-video'
import "../node_modules/modal-video/js/jquery-modal-video";
import "../node_modules/emailjs-com"
import emailjs from 'emailjs-com';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

require('dotenv').config()


function ArtAssisting() {
  const art_assisting = state.paragraphs.art_assisting

  const [isOpenArtAssisting0, setOpenArtAssisting0] = useState(false)
  const [isOpenArtAssisting1, setOpenArtAssisting1] = useState(false)
  const [isOpenArtAssisting2, setOpenArtAssisting2] = useState(false)
  const [isOpenArtAssisting3, setOpenArtAssisting3] = useState(false)
  const [isOpenArtAssisting4, setOpenArtAssisting4] = useState(false)
  const [isOpenArtAssisting5, setOpenArtAssisting5] = useState(false)
  const [isOpenArtAssisting6, setOpenArtAssisting6] = useState(false)
  const [isOpenArtAssisting7, setOpenArtAssisting7] = useState(false)
  const [isOpenArtAssisting8, setOpenArtAssisting8] = useState(false)
  const [isOpenArtAssisting9, setOpenArtAssisting9] = useState(false)
  const [isOpenArtAssisting10, setOpenArtAssisting10] = useState(false)
  const [isOpenArtAssisting11, setOpenArtAssisting11] = useState(false)
  const [isOpenArtAssisting12, setOpenArtAssisting12] = useState(false)
  const [isOpenArtAssisting13, setOpenArtAssisting13] = useState(false)
  const [isOpenArtAssisting14, setOpenArtAssisting14] = useState(false)
  const [isOpenArtAssisting15, setOpenArtAssisting15] = useState(false)
  const [isOpenArtAssisting16, setOpenArtAssisting16] = useState(false)
  const [isOpenArtAssisting17, setOpenArtAssisting17] = useState(false)
  const [isOpenArtAssisting18, setOpenArtAssisting18] = useState(false)
  const [isOpenArtAssisting19, setOpenArtAssisting19] = useState(false)
  const [isOpenArtAssisting20, setOpenArtAssisting20] = useState(false)
  const [isOpenArtAssisting21, setOpenArtAssisting21] = useState(false)
  const [isOpenArtAssisting22, setOpenArtAssisting22] = useState(false)
  const [isOpenArtAssisting23, setOpenArtAssisting23] = useState(false)
  const [isOpenArtAssisting24, setOpenArtAssisting24] = useState(false)
  const [isOpenArtAssisting25, setOpenArtAssisting25] = useState(false)
  const [isOpenArtAssisting26, setOpenArtAssisting26] = useState(false)
  const [isOpenArtAssisting27, setOpenArtAssisting27] = useState(false)

  function artAssisting0Action(boolean) {

    setOpenArtAssisting0(boolean)
  }
  function artAssisting1Action(boolean) {

    setOpenArtAssisting1(boolean)
  }
  function artAssisting2Action(boolean) {

    setOpenArtAssisting2(boolean)
  }
  function artAssisting3Action(boolean) {

    setOpenArtAssisting3(boolean)
  }

  function artAssisting4Action(boolean) {

    setOpenArtAssisting4(boolean)
  }

  function artAssisting5Action(boolean) {

    setOpenArtAssisting5(boolean)
  }

  function artAssisting6Action(boolean) {

    setOpenArtAssisting6(boolean)
  }

  function artAssisting7Action(boolean) {

    setOpenArtAssisting7(boolean)
  }

  function artAssisting8Action(boolean) {

    setOpenArtAssisting8(boolean)
  }
  function artAssisting9Action(boolean) {

    setOpenArtAssisting9(boolean)
  }

  function artAssisting10Action(boolean) {

    setOpenArtAssisting10(boolean)
  }

  function artAssisting11Action(boolean) {

    setOpenArtAssisting11(boolean)
  }

  function artAssisting12Action(boolean) {

    setOpenArtAssisting12(boolean)
  }

  function artAssisting13Action(boolean) {

    setOpenArtAssisting13(boolean)
  }

  function artAssisting14Action(boolean) {

    setOpenArtAssisting14(boolean)
  }


  function artAssisting15Action(boolean) {

    setOpenArtAssisting15(boolean)
  }

  function artAssisting16Action(boolean) {

    setOpenArtAssisting16(boolean)

  } 
  function artAssisting17Action(boolean) {

    setOpenArtAssisting17(boolean)
  }
  function artAssisting18Action(boolean) {

    setOpenArtAssisting18(boolean)
  }
  function artAssisting19Action(boolean) {

    setOpenArtAssisting19(boolean)
  }
  function artAssisting20Action(boolean) {

    setOpenArtAssisting20(boolean)
  }
  function artAssisting21Action(boolean) {

    setOpenArtAssisting21(boolean)
  }
  function artAssisting22Action(boolean) {

    setOpenArtAssisting22(boolean)
  }  
  function artAssisting23Action(boolean) {

    setOpenArtAssisting23(boolean)
  }
function artAssisting24Action(boolean) {
  setOpenArtAssisting24(boolean)
}
function artAssisting25Action(boolean) {
  setOpenArtAssisting25(boolean)
}
function artAssisting26Action(boolean) {
  setOpenArtAssisting26(boolean)
}
function artAssisting27Action(boolean) {
  setOpenArtAssisting27(boolean)
}


  const artAssistingActions = [artAssisting0Action, artAssisting1Action, artAssisting2Action, artAssisting3Action, artAssisting4Action, artAssisting5Action,
    artAssisting6Action, artAssisting7Action, artAssisting8Action, artAssisting9Action, artAssisting10Action,
    artAssisting11Action, artAssisting12Action, artAssisting13Action, artAssisting14Action, artAssisting15Action,
    artAssisting16Action, artAssisting17Action, artAssisting18Action, artAssisting19Action, artAssisting20Action, artAssisting21Action, artAssisting22Action, 
    artAssisting23Action, artAssisting24Action, artAssisting25Action, artAssisting26Action, artAssisting27Action]
  const is_action = [isOpenArtAssisting0, isOpenArtAssisting1, isOpenArtAssisting2, isOpenArtAssisting3, isOpenArtAssisting4, isOpenArtAssisting5,
    isOpenArtAssisting6, isOpenArtAssisting7, isOpenArtAssisting8, isOpenArtAssisting9, isOpenArtAssisting10, isOpenArtAssisting11, isOpenArtAssisting12, 
    isOpenArtAssisting13, isOpenArtAssisting14, isOpenArtAssisting15, isOpenArtAssisting16, isOpenArtAssisting17, isOpenArtAssisting18, isOpenArtAssisting19, 
    isOpenArtAssisting20, isOpenArtAssisting21, isOpenArtAssisting22, isOpenArtAssisting23, isOpenArtAssisting24, isOpenArtAssisting25, isOpenArtAssisting26,
    isOpenArtAssisting27]
  
    function openModal0(){
     document.getElementById("myModal0").style.display = "block";
    }
  
    function closeModal0() {
      document.getElementById("myModal0").style.display = "none";
    }
  
  return (
    <>
      <NavBar art_assisting="active_tab" />

      <div className="gallery">

        {art_assisting.filter(function(obj){
          if(obj.action < 2){
            return obj
          }
        }).map((index) =>
          <React.Fragment key={index.action}>
            <ModalVideo channel={index.channel} autoplay isOpen={is_action[index.action]} videoId={index.video} onClose={() => artAssistingActions[index.action](false)} />
            <figure className={index.css + index.action} onClick={(e) => {
              e.stopPropagation()
              artAssistingActions[index.action](true)
            }}>
              <div className="overlay">

                <img className="gallery__img" src={index.image}></img>
                <div className="text-header">{index.header}</div>
                <div className="text-footer">{index.text}</div>
              </div>

            </figure>
          </React.Fragment>
        )}
          {art_assisting.filter(function(obj){
          if(obj.action == 2){
            return obj
          
          }
        }).map((index) =>
        <>
        <RenderArtCarousel index={index} action_function={openModal0} image_class="gallery__img vogue" />

        <div id="myModal0" className="modal">
        <span onClick={(e) => {
          e.stopPropagation()
          closeModal0()
        }} className="close cursor" >&times;</span>
       <div className="modal-content-render-art">     
          <Carousel pictures_location={index.gallery} carousel_id="carousel_apartment" />
        </div>
      </div>
      </>
  
        )}
        {art_assisting.filter(function(obj){
          if(obj.action > 2){
            return obj
          }
        }).map((index) =>
          <React.Fragment key={index.action}>
            <ModalVideo channel={index.channel} autoplay isOpen={is_action[index.action]} videoId={index.video} onClose={() => artAssistingActions[index.action](false)} />
            <figure className={index.css + index.action} onClick={(e) => {
              e.stopPropagation()
              artAssistingActions[index.action](true)
            }}>
              <div className="overlay">

                <img className="gallery__img" src={index.image}></img>
                <div className="text-header">{index.header}</div>
                <div className="text-footer">{index.text}</div>
              </div>

            </figure>
          </React.Fragment>
        )}



      </div>
    </>)
}


function NavBar({ art_assisting, production_design, render_art, contact }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <a className="navbar-brand" href="/">Jimmy Van Twest | Art Department</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item">
            <a className="nav-link" id={production_design} href="/production_design">Production Design</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id={art_assisting} href="/art_assisting">Art Assisting</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id={render_art} href="/render_art">Render Art</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id={contact} href="/about_contact">About/Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

function Contact() {


  return (
    <>
      <NavBar contact="active_tab" />
      <div className="background-no-scroll">

      <div className="contact-page">
        <div className="boxed">
          <div className="contact-text">
            <div className="centered-text">
              <h2 className="contact-heading">About</h2>
              <br></br>
              <h2>I've worked within the art department for Commercial, Music Videos, Fashion and Film since March 2019.
              In working a variety of roles, notably, Art Assistant, Production Designer and Render Artist,
          I'm constantly learning and always strive to create exceptional sets. I am London Based and work from my studio based in Stamford Hill.</h2>
              <br></br>
              <div><h2>Get in touch:</h2></div>
              <br></br>
              <div className=""><a className="" href={`mailto:jimmyvantwest@gmail.com`}><h2 className="black">jimmyvantwest@gmail.com</h2></a></div>
              <div className=""><a className="" href="tel:+447588893374"><h2 className="black">+44 (0) 758 889 3374</h2></a></div>
              <a href="https://www.instagram.com/jimmyvantwest"><img className="contact-icon" src={state.icons.instagram}></img></a>
              <br></br>
            </div>

          </div>
        </div>
      </div>
      </div>
    </>)
}

function ProductionDesign() {
  const production_design = state.paragraphs.production_design

  const [isOpen, setOpen] = useState(false)
  const [isOpenProdDesign0, setOpenProdDesign0] = useState(false)
  const [isOpenProdDesign1, setOpenProdDesign1] = useState(false)
  const [isOpenProdDesign2, setOpenProdDesign2] = useState(false)
  const [isOpenProdDesign3, setOpenProdDesign3] = useState(false)  
  const [isOpenProdDesign4, setOpenProdDesign4] = useState(false)  
  const [isOpenProdDesign5, setOpenProdDesign5] = useState(false)  
  const [isOpenProdDesign6, setOpenProdDesign6] = useState(false)
  const [isOpenProdDesign7, setOpenProdDesign7] = useState(false)  
  const [isOpenProdDesign8, setOpenProdDesign8] = useState(false)

  function prodDesign0Action(boolean) {

    setOpenProdDesign0(boolean)
  }
  function prodDesign1Action(boolean) {

    setOpenProdDesign1(boolean)
  }
  function prodDesign2Action(boolean) {

    setOpenProdDesign2(boolean)
  }
  function prodDesign3Action(boolean) {

    setOpenProdDesign3(boolean)
  }
  function prodDesign4Action(boolean) {

    setOpenProdDesign4(boolean)
  }
  function prodDesign5Action(boolean) {

    setOpenProdDesign5(boolean)
  }
  function prodDesign6Action(boolean) {

    setOpenProdDesign6(boolean)
  }
  function prodDesign7Action(boolean) {

    setOpenProdDesign7(boolean)
  }
  function prodDesign8Action(boolean) {

    setOpenProdDesign8(boolean)
  }

  const prodDesignActions = [prodDesign0Action, prodDesign1Action, prodDesign2Action, prodDesign3Action, prodDesign4Action, prodDesign5Action, prodDesign6Action, prodDesign7Action, prodDesign8Action]
  const is_action = [isOpenProdDesign0, isOpenProdDesign1, isOpenProdDesign2, isOpenProdDesign3, isOpenProdDesign4, isOpenProdDesign5, isOpenProdDesign6, isOpenProdDesign7, isOpenProdDesign8]

  return (
    <>
      <NavBar production_design="active_tab" />


      <div className="gallery">

        {production_design.map((index) =>
          <React.Fragment key={index.action}>
            <ModalVideo height="700px" width="700px" channel={index.channel} autoplay isOpen={is_action[index.action]} videoId={index.video} onClose={() => prodDesignActions[index.action](false)} />
            <figure className={index.css + index.action} onClick={(e) => {
              e.stopPropagation()
              prodDesignActions[index.action](true)
            }}>
              <div className="overlay">

                <img className="gallery__img" src={index.image}></img>
                <div className="text-header">{index.header}</div>
                <div className="text-footer">{index.text1}</div>
                <div className="text-footer2">{index.text2}</div>

              </div>

            </figure>
          </React.Fragment>
        )}




      </div>
    </>)
}

function RenderArt() {
  const render_art = state.paragraphs.render_art

  const renderArtActions = [openModal0, openModal1, openModal2]

  function openModal0() {
    document.getElementById("myModal0").style.display = "block";
  }


  function closeModal0() {
    document.getElementById("myModal0").style.display = "none";
  }

  function openModal1() {
    document.getElementById("myModal1").style.display = "block";
  }


  function closeModal1() {
    document.getElementById("myModal1").style.display = "none";
  }

  function openModal2() {
    document.getElementById("myModal2").style.display = "block";
  }


  function closeModal2() {
    document.getElementById("myModal2").style.display = "none";
  }

  function currentSlide(){
    document.getElementById('apartment1').style.display = "block";
  }

  const render_art_icons = [render_art.apartment[0], render_art.gallery[0], render_art.smart_energy[0]]


  return (
    <>

      <NavBar render_art="active_tab" />


      <div className="gallery">
        <RenderArtCarousel index={render_art_icons[0]} action_function={openModal0} image_class="gallery__img"/>
        <RenderArtCarousel index={render_art_icons[1]} action_function={openModal1} image_class="gallery__img"/>
        <RenderArtCarousel index={render_art_icons[2]} action_function={openModal2} image_class="gallery__img"/>


      </div>

      <div id="myModal0" className="modal">
        <span onClick={(e) => {
          e.stopPropagation()
          closeModal0()
        }} className="close cursor" >&times;</span>
       <div className="modal-content-render-art">     
          <Carousel pictures_location={render_art.apartment} carousel_id="carousel_apartment" />
        </div>
      </div>

      <div id="myModal1" className="modal">
        <span onClick={(e) => {
          e.stopPropagation()
          closeModal1()
        }} className="close cursor">&times;</span>
        <div className="modal-content-render-art">
          <Carousel pictures_location={render_art.gallery} carousel_id="carousel_gallery"/>
        </div>
      </div>

      <div id="myModal2" className="modal">
        <span onClick={(e) => {
          e.stopPropagation()
          closeModal2()
        }} className="close cursor" >&times;</span>
        <div className="modal-content-render-art">
          <Carousel pictures_location={render_art.smart_energy} carousel_id="carousel_smart_energy" />
        </div>
      </div>

    </>
  )
}

function Carousel({ pictures_location, carousel_id }) {
  const pictures = pictures_location
  return (
    <div id={carousel_id} className="carousel slide carousel-fade" data-ride="carousel">
      <div className="carousel-inner">
        {pictures.map((picture) => {
          if (picture.action == 0) {
            return (<div className="carousel-item active" key={picture.key + picture.action}>
              <div className="crop">
                <img className="d-block w-100" src={picture.image} alt="First slide"  ></img>
              </div>
            </div>)
          } else {
            return (<div className="carousel-item" key={picture.key + picture.action}>
              <div className="crop">
                <img className="d-block w-100" src={picture.image} alt="Second slide" ></img>
              </div>
            </div>)
          }
        }
        )}

      </div>
      <a className="carousel-control-prev" href={'#' + carousel_id} role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href={'#' + carousel_id} role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}



function RenderArtCarousel({ index, action_function, image_class }) {
  return (
    <figure className={index.css + index.action} key={index.action_icon} onClick={(e) => {
      e.stopPropagation()
      { action_function() }
    }}>
      <div className="overlay">

        <img className={image_class} src={index.image}></img>
        <div className="text-header">{index.header}</div>
        <div className="text-footer">{index.text}</div>
      </div>

    </figure>
  )
}

function Heading({ text }) {
  return (
    <div className="heading">
      <h1>{text}</h1>
    </div>
  )
}



function Home() {
  return (
    <>
      <div className="absolute-wrapper">
        <NavBar />
      </div>
      <div className="page">
        <Heading text="Jimmy Van Twest | Art Department" />
      </div>
      <ul className="cb-slideshow">
        <li>
          <span>Image 01</span>
        </li>
        <li>
          <span>Image 02</span>
        </li>
        <li>
          <span>Image 03</span>
        </li>
        <li>
          <span>Image 04</span>
        </li>
        <li>
          <span>Image 05</span>
        </li>
        <li>
          <span>Image 06</span>
        </li>
        <li>
          <span>Image 07</span>
        </li>
      </ul>
    </>
  )
}

function App() {


  return (
    <Router  >

      <Switch >

        <Route exact path="/" component={Home} />
        <Route exact path="/production_design" component={ProductionDesign} />
        <Route exact path="/art_assisting" component={ArtAssisting} />
        <Route exact path="/render_art" component={RenderArt} />
        <Route exact path="/about_contact" component={Contact} />


      </Switch>

    </Router>

  )
}




class ContactForm extends Component {

  state = {
    name: '',
    message: '',
    email: '',
    sent: false,
    buttonText: 'Send Message'
  }


  sendEmail = (e) => {
    e.preventDefault();

    this.setState({
      buttonText: '...sending'
    })
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
      .then((result) => {
        console.log(result.text);
        this.setState({ sent: true }, this.resetForm())
      }, (error) => {
        console.log(error.text);
        console.log("service id: " + process.env.REACT_APP_SERVICE_ID + "\n template id: " + process.env.REACT_APP_TEMPLATE_ID + "\n user_id: " + process.env.REACT_APP_USER_ID)
      });

  }

  resetForm = () => {
    this.setState({
      name: '',
      message: '',
      email: '',
      buttonText: 'Message Sent'
    })
  }

  render() {

    return (
      <form className="contact-form" onSubmit={(e) => this.sendEmail(e)}>
        <div>
          <input onChange={e => this.setState({ name: e.target.value })} type="text" name="user_name" placeholder="Your name" required value={this.state.name} />
        </div>
        <div>
          <input onChange={(e) => this.setState({ email: e.target.value })} type="email" name="user_email" placeholder="Your email" required value={this.state.email} />
        </div>
        <div>
          <textarea onChange={e => this.setState({ message: e.target.value })} name="message" placeholder="Your message" value={this.state.message} required />
        </div>
        <button type="submit">{this.state.buttonText}</button>
        {/* <input type="submit" value="Send" /> */}
      </form>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
