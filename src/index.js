import ReactDOM from "react-dom"
import React, { Component, useState } from "react"
import state from "./store"
import "./styles.css"
import ModalVideo from 'react-modal-video'
import "../node_modules/modal-video/js/jquery-modal-video";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";




function NavBar({ selected_work, contact }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <a className="navbar-brand" href="/">Jimmy Van Twest | Set Design</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" id={selected_work} href="/selected_work">Selected Work</a>
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
                <h2>I've worked within the art department for Fashion, Commercial, Music Videos, and Film since March 2019.
                  In working a variety of roles, notably, Set Designer, Art Assistant, Set Builder and Render Artist, I'm constantly learning and always strive to create exceptional sets.
                  Based In London.</h2>
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

function SelectedWork() {
  const selected_work = state.paragraphs.selected_work

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
  const [isOpenProdDesign9, setOpenProdDesign9] = useState(false)
  const [isOpenProdDesign10, setOpenProdDesign10] = useState(false)


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
  function prodDesign9Action(boolean) {

    setOpenProdDesign9(boolean)
  }
  function prodDesign10Action(boolean) {

    setOpenProdDesign10(boolean)
  }

  function openModal0(index) {
    console.log(index.key2)
    document.getElementById(index.key2).style.display = "block";
  }

  function closeModal0(index) {
    document.getElementById(index.key2).style.display = "none";
  }


  function videoPanel(index) {
    return (
      <React.Fragment key={index.action}>
        {console.log(index.action)}
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
      </React.Fragment>)
  }

  function photoPanel(index) {
    return (
      <>
        <React.Fragment key={index.action}>

          <RenderArtCarousel index={index} action_function={openModal0} image_class="gallery__img vogue" />

          <div id={index.key2} className="modal">
            <span onClick={(e) => {
              e.stopPropagation()
              closeModal0(index)
            }} className="close cursor" >&times;</span>
            <div className="modal-content-render-art">
              <Carousel pictures_location={index.gallery} carousel_id={"carousel_" + index.key2} />
            </div>
          </div>
        </React.Fragment>

      </>
    )
  }


  const prodDesignActions = [prodDesign0Action, prodDesign1Action, prodDesign2Action, prodDesign3Action, prodDesign4Action, prodDesign5Action, prodDesign6Action, prodDesign7Action, prodDesign8Action, prodDesign9Action, prodDesign10Action]
  const is_action = [isOpenProdDesign0, isOpenProdDesign1, isOpenProdDesign2, isOpenProdDesign3, isOpenProdDesign4, isOpenProdDesign5, isOpenProdDesign6, isOpenProdDesign7, isOpenProdDesign8, isOpenProdDesign9, isOpenProdDesign10]

  return (
    <>
      <NavBar selected_work="active_tab" />


      <div className="gallery">

        {selected_work.map((object) => {
          if (object.gallery == null) {
            return videoPanel(object)
          } else {
            return photoPanel(object)
          }
        }
        )}

      </div>
    </>)
}


function Heading({ text }) {
  return (
    <div className="heading">
      <h1>{text}</h1>
    </div>
  )
}

function Carousel({ pictures_location, carousel_id }) {
  const pictures = pictures_location
  return (
    <div id={carousel_id} className="carousel slide" data-ride="carousel">
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
      { action_function(index) }
    }}>
      <div className="overlay">

        <img className={image_class} src={index.image}></img>
        <div className="text-header">{index.header}</div>
        <div className="text-footer">{index.text1}</div>
        <div className="text-footer2">{index.text2}</div>
      </div>

    </figure>
  )
}

function Home() {
  return (
    <>
      <div className="absolute-wrapper">
        <NavBar />
      </div>
      <div className="page">
        <Heading text="Jimmy Van Twest | Set Design" />
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
        <Route exact path="/selected_work" component={SelectedWork} />
        <Route exact path="/about_contact" component={Contact} />
      </Switch>

    </Router>

  )
}

ReactDOM.render(<App />, document.getElementById("root"))
