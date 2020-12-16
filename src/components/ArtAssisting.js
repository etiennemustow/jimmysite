import ModalVideo from 'react-modal-video'
import React, { useState } from "react"
import state from "../store"
import NavBar from "./NavBar"

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
  
    function artAssisting4Action(boolean) {
      console.log("CLICKED")
      setOpenArtAssisting4(boolean)
    }
  
    function artAssisting5Action(boolean) {
      console.log("CLICKED")
      setOpenArtAssisting5(boolean)
    }
  
    function artAssisting6Action(boolean) {
      console.log("CLICKED")
      setOpenArtAssisting6(boolean)
    }
  
    function artAssisting7Action(boolean) {
      console.log("CLICKED")
      setOpenArtAssisting7(boolean)
    }
  
    function artAssisting8Action(boolean) {
      console.log("CLICKED")
      setOpenArtAssisting8(boolean)
    }
    function artAssisting9Action(boolean) {
      console.log("CLICKED")
      setOpenArtAssisting9(boolean)
    }
  
    function artAssisting10Action(boolean) {
      console.log("CLICKED")
      setOpenArtAssisting10(boolean)
    }
  
    function artAssisting11Action(boolean) {
      console.log("CLICKED")
      setOpenArtAssisting11(boolean)
    }
  
    function artAssisting12Action(boolean) {
      console.log("CLICKED")
      setOpenArtAssisting12(boolean)
    }
  
    function artAssisting13Action(boolean) {
      console.log("CLICKED")
      setOpenArtAssisting13(boolean)
    }
  
    function artAssisting14Action(boolean) {
      console.log("CLICKED")
      setOpenArtAssisting14(boolean)
    }
  
  
  
  
    const artAssistingActions = [artAssisting0Action, artAssisting1Action, artAssisting2Action, artAssisting3Action, artAssisting4Action, artAssisting5Action, artAssisting6Action, artAssisting7Action, artAssisting8Action, artAssisting9Action, artAssisting10Action, artAssisting11Action, artAssisting12Action, artAssisting13Action, artAssisting14Action]
    const is_action = [isOpenArtAssisting0, isOpenArtAssisting1, isOpenArtAssisting2, isOpenArtAssisting3, isOpenArtAssisting4, isOpenArtAssisting5, isOpenArtAssisting6, isOpenArtAssisting7, isOpenArtAssisting8, isOpenArtAssisting9, isOpenArtAssisting10, isOpenArtAssisting11, isOpenArtAssisting12, isOpenArtAssisting13, isOpenArtAssisting14]
  
    return (
      <>
          <NavBar art_assisting="active_tab" />
  
        <div class="gallery">
  
          {art_assisting.map((index) =>
            <React.Fragment>
              <ModalVideo channel={index.channel} autoplay isOpen={is_action[index.action]} videoId={index.video} onClose={() => artAssistingActions[index.action](false)} />
              <figure class={index.css + index.action} onClick={(e) => {
                e.stopPropagation()
                artAssistingActions[index.action](true)
              }}>
                <div class="overlay">
  
                  <img class="gallery__img" src={index.image}></img>
                  <div class="text-header">{index.header}</div>
                  <div class="text-footer">{index.text}</div>
                </div>
  
              </figure>
            </React.Fragment>
          )}
  
  
  
  
        </div>
      </>)
  }

export default ArtAssisting;