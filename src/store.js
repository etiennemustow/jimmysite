import { createRef } from "react"
import { Vector3 } from "three"

const state = {
  
  sections: 9,
  pages: 8,
  zoom: 75,
  icons: {
    instagram: "instagram.png",
    email: "email.png",
  },
  paragraphs: {
    production_design: [
      {
      header: "TTRRUUCES - TTRRUUCES",
      image: "/truuuces.png",
      text1: "directed by Maxim Kelly",
      text2: "production design by Jimmy Van Twest",
      video: "380030498",
      channel: "vimeo",
      action: 0,
      css: "gallery__item gallery__item--"
    },
    {
      header: "Finn Foxell- Make It Count",
      image: "/makeitcount.jpg",
      text1:
      "directed by Milo Blake",
      text2: "production design by Jimmy Van Twest",
      video: "450474177",
      channel: "vimeo",
      action: 1,
      css: "gallery__item gallery__item--"
    },
    {
      header: "Rachel Chinouriri - Darker Place",
      image: "/darker_place.webp",
      text1:
      "directed by Milo Blake",
      text2: "production design by Jimmy Van Twest",
      video: "65xdvUfH4tM",
      channel: "youtube",
      action: 2,
      css: "gallery__item gallery__item--"
    }
  ],
  render_art: {
    apartment: [
    {
    header: "80’s New York Apartment Interpretation. 2020.",
    key: "apartment",
    image: "/render_art/blonde.png",
    text: "designed by me.",
    action: 0,
    action_icon: 0,
    css: "gallery__item gallery__item--"
  },
  {
    header: "80’s New York Apartment Interpretation. 2020.",
    key: "apartment",
    image: "/render_art/blonde2.png",
    text: "designed by me.",
    action: 1,
    css: "gallery__item gallery__item--"
  },
  {
    header: "80’s New York Apartment Interpretation. 2020.",
    key: "apartment",
    image: "/render_art/blonde3.png",
    text: "designed by me.",
    action: 2,
    css: "gallery__item gallery__item--"
  },
  {
    header: "80’s New York Apartment Interpretation. 2020.",
    key: "apartment",
    image: "/render_art/blonde4.png",
    text: "designed by me.",
    action: 3,
    css: "gallery__item gallery__item--"
  },
  {
    header: "80’s New York Apartment Interpretation. 2020.",
    key: "apartment",
    image: "/render_art/blonde5.png",
    text: "designed by me.",
    action: 4,
    css: "gallery__item gallery__item--"
  }],
  gallery: [
    {
    header: "Gallery Experiment. 2019.",
    key: "gallery",
    image: "/render_art/gallery.JPG",
    text: "designed by me.",
    action: 0,
    action_icon: 1,
    css: "gallery__item gallery__item--"
  },
  {
    header: "Gallery Experiment. 2019.",
    key: "gallery",
    image: "/render_art/gallery2.JPG",
    text: "designed by me.",
    action: 1,
    css: "gallery__item gallery__item--"
  },
  {
    header: "Gallery Experiment. 2019.",
    key: "gallery",
    image: "/render_art/gallery3.JPG",
    text: "designed by me.",
    action: 2,
    css: "gallery__item gallery__item--"
  }
],
smart_energy: [
  {
  header: "Smart Energy GB Commercial",
  key: "smart_energy",
  image: "/render_art/still.jpg",
  text: "designed by Tim Gibson.",
  action: 0,
  action_icon: 2,
  css: "gallery__item gallery__item--"
},
{
  header: "Gallery Experiment. 2019.",
  key: "smart_energy",
  image: "/render_art/still2.jpg",
  text: "designed by me.",
  action: 1,
  css: "gallery__item gallery__item--"
},
{
  header: "Smart Energy GB Commercial",
  key: "smart_energy",
  image: "/render_art/still3.jpg",
  text: "designed by Tim Gibson",
  action: 2,
  css: "gallery__item gallery__item--"
}
]},
  art_assisting: [
    {
      css: "gallery__item gallery__item--",
      header: "Adidas x Superstan Commercial",
      image: "/adidassuperstan.jpg",
      text: "designed by Benny Casey",
      video: "419372557",
      channel: "vimeo",
      action: 0
    },
    {
      css: "gallery__item gallery__item--",
      header: "The Streets, IDLES - None Of Us Are Getting Out Of This Life Alive",
      image: "/thestreetsnoneofus.jpg",
      text:
      "designed by Bon Walsh",
      video: "SIZ7HXooV20",
      channel: "youtube",
      action: 1
    },
    {
      css: "gallery__item gallery__item--",
      header: "London Grammar - Californian Soil",
      image: "/londongrammar.png",
      text: "designed by Jakob Gierse",
      video: "469366986",
      channel: "vimeo",
      action: 2
    },
    {
      css: "gallery__item gallery__item--",
      header: "SL - Little Bird",
      image: "/sllittlebird.jpg",
      text:
      "designed by Jakob Gierse",
      video: "ZJvDBltodUE",
      channel: "youtube",
      action: 3
    },
    {
      css: "gallery__item gallery__item--",
      header: "Rudimental - Come Over",
      image: "/rudimentalcomeover.jpg",
      text: "designed by Louis Simonon",
      video: "464147830",
      channel: "vimeo",
      action: 4
    },
    {
      css: "gallery__item gallery__item--",
      header: "British Vogue x Dua Lipa - Feb 2021 Cover",
      image: "/voguedualipa.jpg",
      text: "designed by Emma Roach",
      video: "464147830",
      channel: "vimeo",
      action: 5,
      gallery: [
          {
          header: "British Vogue x Dua Lipa - Feb 2021 Cover",
          key: "vogue",
          image: "/vogue/vogue7.jpg",
          text: "designed by Emma Roach.",
          action: 0,
          action_icon: 0,
          css: "gallery__item gallery__item--"
        },
        {
          header: "British Vogue x Dua Lipa - Feb 2021 Cover",
          key: "vogue",
          image: "/vogue/vogue8.jpg",
          text: "designed by Emma Roach.",
          action: 1,
          css: "gallery__item gallery__item--"
        },
        {
          header: "British Vogue x Dua Lipa - Feb 2021 Cover",
          key: "vogue",
          image: "/vogue/bvogue14.png",
          text: "designed by me.",
          action: 2,
          css: "gallery__item gallery__item--"
        },
        {
          header: "British Vogue x Dua Lipa - Feb 2021 Cover",
          key: "vogue",
          image: "/vogue/vogue1.jpg",
          text: "designed by Emma Roach",
          action: 3,
          css: "gallery__item gallery__item--"
        },
      ]
    },
    {
      css: "gallery__item gallery__item--",
      header: "Stand Atlantic - Jurassic Park",
      image: "/standatlanticjurassicpark.jpg",
      text: "designed by Benny Casey",
      video: "440368058",
      channel: "vimeo",
      action: 6
    },
    {
      css: "gallery__item gallery__item--",
      header: "Jones - Camera Flash",
      image: "/jonescameraflash.jpg",
      text:
      "designed by Benny Casey",
      video: "446441649",
      channel: "vimeo",
      action: 7
    },
    {
      css: "gallery__item gallery__item--",
      header: "No Naughty List | Tesco Christmas Commercial",
      image: "/tesco.jpg",
      text:
      "designed by Bon Walsh",
      video: "8CfrpexaCwg",
      channel: "youtube",
      action: 8
    },
    {
      css: "gallery__item gallery__item--",
      header: "Farfetch: Open Doors To A World of Fashion",
      image: "/farfetch.jpg",
      text: "designed by Emma Roach",
      video: "qLPPGeTIuds",
      channel: "youtube",
      action: 9
    },
    {
      css: "gallery__item gallery__item--",
      header: "Nines - Clout",
      image: "/nineclout.png",
      text: "designed by Jakob Gierse",
      video: "kgUV1MaD_M8",
      channel: "youtube",
      action: 10
    },
    {
      css: "gallery__item gallery__item--",
      header: "Nines - Airplane Mode",
      image: "/ninesairplanemode.jpg",
      text:
      "designed by Jakob Gierse",
      video: "XPZgehksWo4",
      channel: "youtube",
      action: 11
    },
    {
      css: "gallery__item gallery__item--",
      header: "Boston Bun - Don't Wanna Dance",
      image: "/bostonbun.jpg",
      text:
      "designed by Elena Muntoni",
      video: "IogVoBaYmvA",
      channel: "youtube",
      action: 12
    },
    {
      css: "gallery__item gallery__item--",
      header: "Aaron Taylor - Flowers",
      image: "/aarontaylorflowers.jpg",
      text:
      "designed by Elena Muntoni",
      video: "t0LemwCvZq8",
      channel: "youtube",
      action: 13
    },
    {
      css: "gallery__item gallery__item--",
      header: "Jeshi - Mask On",
      image: "/jeshimaskon.jpg",
      text:
      "designed by Liz El-Kadhi",
      video: "-7LtIlQRwBg",
      channel: "youtube",
      action: 14
    },
    {
      css: "gallery__item gallery__item--",
      header: "Current Account Switch Service Commercial",
      image: "/currentaccount.png",
      text:
      "designed by Benny Casey",
      video: "vWSC1Z8iCyc",
      channel: "youtube",
      action: 15
    },
    {
      css: "gallery__item gallery__item--",
      header: "Flohio, Clara Amfo and Shaquille-Aaron Keith discuss womanhood, Blackness and artistry",
      image: "/flohio.jpeg",
      text:
      "designed by Ibby Njoya",
      video: "-7lGjE9zzOA",
      channel: "youtube",
      action: 16
    },
    {
      css: "gallery__item gallery__item--",
      header: "Terry's Chocolate Orange 'Deliciously Unsquare' Commercial",
      image: "/terrys.jpg",
      text:
      "designed by Tim Gibson",
      video: "f7xuOo2DSjc",
      channel: "youtube",
      action: 17
    },    
    {
      css: "gallery__item gallery__item--",
      header: "River Island 'In a Bubble' Commercial",
      image: "/inabubble.jpg",
      text:
      "designed by Thomas Bird",
      video: "iKMkXp3Xs3s",
      channel: "youtube",
      action: 18
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
