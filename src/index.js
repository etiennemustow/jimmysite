import ReactDOM from "react-dom"
import React, { Suspense, useEffect, useRef, useMemo, useState, setState, Fragment } from "react"
import { Canvas, Dom, useLoader, useFrame } from "react-three-fiber"
import { TextureLoader, LinearFilter } from "three"
import lerp from "lerp"
import { Text, MultilineText } from "./components/Text"
import Diamonds from "./diamonds/Diamonds"
import Plane from "./components/Plane"
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

function Startup() {
  const ref = useRef()
  useFrame(() => (ref.current.material.opacity = lerp(ref.current.material.opacity, 0, 0.025)))
  return <Plane ref={ref} color="#0e0e0f" position={[0, 0, 200]} scale={[100, 100, 1]} />
}

// function Paragraph({ image, index, offset, factor, header, aspect, text }) {
//   const [isOpen, setOpen] = useState(false)

//   const { contentMaxWidth: w, canvasWidth, margin, mobile } = useBlock()
//   const size = aspect < 1 && !mobile ? 0.65 : 1
//   const alignRight = (canvasWidth - w * size - margin) / 2
//   const pixelWidth = w * state.zoom * size
//   const left = !(index % 2)
//   const color = index % 2 ? "#D40749" : "#2FE8C3"
//   return (

//     <Block factor={factor} offset={offset}>
//       <group position={[left ? -alignRight : alignRight, 0, 0]}>
//         {/* <Dom onClick={()=> setOpen(true)} > */}
//        <Plane map={image} args={[1, 1, 32, 32]} shift={75} size={size} aspect={aspect} scale={[w * size, (w * size) / aspect, 1]} frustumCulled={false} />
//         {/* </Dom> */}

//         <Dom
//           style={{ width: pixelWidth / (mobile ? 1 : 2), textAlign: left ? "left" : "right" }}
//           position={[left || mobile ? (-w * size) / 2 : 0, (-w * size) / 2 / aspect - 0.4, 1]}>
//           <div tabIndex={index}>{text}</div>
//         </Dom>
//         <Text left={left} right={!left} size={w * 0.04} color={color} top position={[((left ? -w : w) * size) / 2, (w * size) / aspect / 2 + 0.5, -1]}>
//           {header}
//         </Text>
//         <Block factor={0.2}>
//           <Text opacity={0.5} size={w * 0.1} color="#1A1E2A" position={[((left ? w : -w) / 2) * size, (w * size) / aspect / 1.5, -10]}>
//             click to view
//           </Text>
//         </Block>
//       </group> 

//     </Block>

//   )
// }

// function Content() {
//   const images = useLoader(
//     TextureLoader,
//     state.paragraphs.map(({ image }) => image)
//   )
//   const [isOpen, setOpen] = useState(false)
//   useMemo(() => images.forEach(texture => (texture.minFilter = LinearFilter)), [images])
//   const { contentMaxWidth: w, canvasWidth, canvasHeight, mobile } = useBlock()

//   return (
//     <>
//       <Block factor={1} offset={0}>
//         <Block factor={1.2}>
//           <Text left size={w * 0.08} position={[-w / 3.2, 0.5, -1]} color="#d40749">
//             PORTFOLIO
//           </Text>
//         </Block>
//         <Block factor={1.0}>
//           <Dom position={[-w / 3.2, -w * 0.08 + 0.25, -1]}>JIMMY VAN TWEST{mobile ? <br /> : " "}| ART DEPARTMENT</Dom>
//         </Block>
//       </Block>
//       <Block factor={1.2}>
//           <Text left size={w * 0.07} position={[-w / 1.3, -4.5, -1]} color="#d40749">
//             Art Assisting
//           </Text>
//         </Block>
//       <Block factor={1.2} offset={5.7}>
//         <MultilineText top left size={w * 0.15} lineHeight={w / 5} position={[-w / 3.5, 0, -1]} color="#2fe8c3" text={"four\nzero\nzero"} />
//       </Block>
//       {state.paragraphs.map((props, index) => (
//         <Paragraph key={index} index={index} {...props} image={images[index]} />
//       ))}
//       {state.stripes.map(({ offset, color, height }, index) => (
//         <Block key={index} factor={-1.5} offset={offset}>
//           <Plane args={[50, height, 32, 32]} shift={-4} color={color} rotation={[0, 0, Math.PI / 8]} position={[0, 0, -10]} />
//         </Block>
//       ))}
//       <Block factor={1.25} offset={8}>
//         <Dom className="bottom-left" position={[-canvasWidth / 2, -canvasHeight / 2, 0]}>
//           Culture is not your friend.
//         </Dom>
//       </Block>
//     </>
//   )
// }

// function ModalVideoElement({clicked, paragraph}){
//   const [isOpen, setOpen] = useState(false)
//     console.log("it reached")
//     return (
//     )
// }

function Carousel({pictures_location}) {
  const pictures = pictures_location
  return (
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
      <div class="carousel-inner">
      {pictures.map((picture) =>
        {if (picture.action == 0) {
         return( <div class="carousel-item active">
          <div class="crop">
            <img class="d-block w-100" src={picture.image} alt="First slide"  ></img>
          </div>
        </div>)
        } else {
         return( <div class="carousel-item">
          <div class="crop">
            <img class="d-block w-100" src={picture.image} alt="Second slide" ></img>
          </div>
        </div>)
        }}
      )}
   
      </div>
      <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
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

      <div class="blank-row">

      </div>

      <Carousel pictures_location={production_design} />

      <div class="row">
        {production_design.map((index) =>
          <React.Fragment>
            <ModalVideo channel={index.channel} autoplay isOpen={is_action[index.action]} videoId={index.video} onClose={() => prodDesignActions[index.action](false)} />
            <div class="column">
              <div class="container2" onClick={(e) => {
                e.stopPropagation()
                prodDesignActions[index.action](true)
              }}>
                <div class="overlay">

                  <img src={index.image}></img>
                  <div class="text-header">{index.header}</div>
                  <div class="text-footer">{index.text}</div>
                </div>

              </div>
            </div>
          </React.Fragment>
        )}

        <div class="column">
        </div>




      </div>
      <NavBar art_assisting="frame__link" production_design="frame__link_white" render_art="frame__link" />
    </>)
}

function ArtAssisting() {
  const art_assisting = state.paragraphs.art_assisting

  const [isOpen, setOpen] = useState(false)
  const [isOpenArtAssisting0, setOpenArtAssisting0] = useState(false)
  const [isOpenArtAssisting1, setOpenArtAssisting1] = useState(false)
  const [isOpenArtAssisting2, setOpenArtAssisting2] = useState(false)
  const [isOpenArtAssisting3, setOpenArtAssisting3] = useState(false)

  function artAssisting0Action(boolean) {
    console.log("CLICKED")
    setOpenArtAssisting0(boolean)
  }
  function artAssisting1Action(boolean) {
    console.log("CLICKED")
    setOpenArtAssisting1(boolean)
  }
  function artAssisting2Action(boolean) {
    console.log("CLICKED")
    setOpenArtAssisting2(boolean)
  }
  function artAssisting3Action(boolean) {
    console.log("CLICKED")
    setOpenArtAssisting3(boolean)
  }

  const artAssistingActions = [artAssisting0Action, artAssisting1Action, artAssisting2Action, artAssisting3Action]
  const is_action = [isOpenArtAssisting0, isOpenArtAssisting1, isOpenArtAssisting2, isOpenArtAssisting3]

  return (
    <>

      <div class="blank-row">

      </div>

      <Carousel pictures_location={art_assisting} />

      <div class="row">
        {art_assisting.map((index) =>
          <React.Fragment>
            <ModalVideo channel={index.channel} autoplay isOpen={is_action[index.action]} videoId={index.video} onClose={() => artAssistingActions[index.action](false)} />
            <div class="column">
              <div class="container2" onClick={(e) => {
                e.stopPropagation()
                artAssistingActions[index.action](true)
              }}>
                <div class="overlay">

                  <img src={index.image}></img>
                  <div class="text-header">{index.header}</div>
                  <div class="text-footer">{index.text}</div>
                </div>

              </div>
            </div>
          </React.Fragment>
        )}

        <div class="column">
        </div>




      </div>
      <NavBar art_assisting="frame__link_white" production_design="frame__link" render_art="frame__link" />
    </>)
}

function NavBar({ art_assisting, production_design, render_art }) {
  return (
    <div className="frame">
      <h1 className="frame__title">Jimmy Van Twest | Art Department</h1>
      <div className="frame__links">
        <a className={art_assisting} href="art_assisting">
          Art Assisting
    </a>
        <a className={production_design} href="production_design">
          Production Design
    </a>
        <a className={render_art} href="  ">
          Render Art
    </a>
      </div>
    </div>
  )
}



function Home() {
  return (
    <NavBar art_assisting="frame__link" production_design="frame__link" render_art="frame__link" />
  )
}

function App() {


  return (
    <>

      <Router >
        <Switch >

          <Route exact path="/" component={Home} />
          <Route exact path="/production_design" component={ProductionDesign} />
          <Route exact path="/art_assisting" component={ArtAssisting} />
        </Switch>
      </Router>
      {/* <InitialPage /> */}

    </>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
