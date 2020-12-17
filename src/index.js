import ReactDOM from "react-dom"
import React, { Suspense, useEffect, useRef, useMemo, useState, setState, Fragment } from "react"
import { Canvas, Dom, useLoader, useFrame } from "react-three-fiber"
import { TextureLoader, LinearFilter } from "three"
import lerp from "lerp"
import Diamonds from "./diamonds/Diamonds"
import { Block, useBlock } from "./blocks"
import state from "./store"
import "./styles.css"
import ModalVideo from 'react-modal-video'
import "../node_modules/modal-video/js/jquery-modal-video";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ArtAssisting from "./components/ArtAssisting.js";
import NavBar from "./components/NavBar.js"
import { PageTransition } from '@steveeeie/react-page-transition';


function Carousel({ pictures_location }) {
  const pictures = pictures_location
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
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
      <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}


function ProductionDesign() {
  const production_design = state.paragraphs.production_design

  const [isOpen, setOpen] = useState(false)
  const [isOpenProdDesign0, setOpenProdDesign0] = useState(false)
  const [isOpenProdDesign1, setOpenProdDesign1] = useState(false)


  function prodDesign0Action(boolean) {
    console.log("CLICKED")
    setOpenProdDesign0(boolean)
  }
  function prodDesign1Action(boolean) {
    console.log("CLICKED")
    setOpenProdDesign1(boolean)
  }

  const prodDesignActions = [prodDesign0Action, prodDesign1Action]
  const is_action = [isOpenProdDesign0, isOpenProdDesign1]

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
                <div className="text-footer">{index.text}</div>
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
  const render_art_icons = [render_art.apartment[0], render_art.gallery[0], render_art.smart_energy[0]]


  return (
    <>

    <NavBar render_art="active_tab" />
 
 
   <div className="gallery">
 
     {render_art_icons.map((index) =>
       <figure className={index.css + index.action} key={index.action_icon} onClick={(e) => {
         e.stopPropagation()
         renderArtActions[index.action_icon]()
       }}>
         <div className="overlay">
 
           <img className="gallery__img" src={index.image}></img>
           <div className="text-header">{index.header}</div>
           <div className="text-footer">{index.text}</div>
         </div>
 
       </figure>
     )}
 
 
 
 
   </div>
 
 <div id="myModal0" className="modal">
 <span className="close cursor" >&times;</span>
 <div className="modal-content">
       <Carousel pictures_location={render_art.apartment}/>
 </div>
 </div>

 <div id="myModal1" className="modal">
 <span className="close cursor">&times;</span>
 <div className="modal-content">
       <Carousel pictures_location={render_art.gallery}/>
 </div>
 </div>

 <div id="myModal2" className="modal">
 <span className="close cursor" >&times;</span>
 <div className="modal-content">
       <Carousel pictures_location={render_art.smart_energy}/>
 </div>
 </div>
 
 </>
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
      
      <NavBar />
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

        </Switch>

      </Router>
      
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
