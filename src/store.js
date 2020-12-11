import { createRef } from "react"
import { Vector3 } from "three"

const state = {
  
  sections: 9,
  pages: 8,
  zoom: 75,
  paragraphs: {
    production_design: [
      {
      header: "TTRRUUCES - TTRRUUCES",
      image: "/truuuces.png",
      text: "directed by Maxim Kelly",
      video: "380030498",
      channel: "vimeo",
      action: 0
    },
    {
      header: "Finn Foxell- Make It Count",
      image: "/makeitcount.jpg",
      text:
      "directed by Milo Blake",
      video: "450474177",
      channel: "vimeo",
      action: 1
    }
  ],
  art_assisting: [
    {
      header: "Adidas x Superstan",
      image: "/adidassuperstan.jpg",
      text: "designed by Benny Casey",
      video: "419372557",
      channel: "vimeo",
      action: 0
    },
    {
      header: "The Streets, IDLES - None Of Us Are Getting Out Of This Life Alive",
      image: "/thestreetsnoneofus.jpg",
      text:
      "designed by Bon Walsh",
      video: "SIZ7HXooV20",
      channel: "youtube",
      action: 1
    },
    {
      header: "London Grammar - Californian Soil",
      image: "/londongrammar.png",
      text: "designed by Jakob Gierse",
      video: "Pbwaq0E80hQ7",
      channel: "youtube",
      action: 2
    },
    {
      header: "SL - Little Bird",
      image: "/sllittlebird.jpg",
      text:
      "designed by Jakob Gierse",
      video: "ZJvDBltodUE",
      channel: "youtube",
      action: 3
    }
  ]
},
  stripes: [
    { offset: 0, color: "#000", height: 13 },
    { offset: 6.3, color: "#000", height: 20 }
  ],
  diamonds: [
    { x: 0, offset: 0.15, pos: new Vector3(), scale: 0.6, factor: 1.8 },
    { x: 2, offset: 1.1, pos: new Vector3(), scale: 0.8, factor: 2.1 },
    { x: -5, offset: 2, pos: new Vector3(), scale: 0.8, factor: 2.5 },
    { x: 0, offset: 3.2, pos: new Vector3(), scale: 0.8, factor: 1.75 },
    { x: 0, offset: 4, pos: new Vector3(), scale: 0.8, factor: 2.5 },
    { x: 2, offset: 5.5, pos: new Vector3(), scale: 1.25, factor: 0.85 },
    { x: -5, offset: 7, pos: new Vector3(), scale: 0.8, factor: 2 },
    { x: 0, offset: 8, pos: new Vector3(), scale: 1.5, factor: 6 }
  ],
  top: createRef()
}

export default state
