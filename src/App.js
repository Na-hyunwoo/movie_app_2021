import React from "react";


const foodILike=[
  {
    id:1,
    name:"Kimchi",
    image:"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
  },
  {
    id:2,
    name:"Bibimbap",
    image:"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
  },
  {
    id:3,
    name:"Samgyeopsal",
    image:"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
  },
  {
    id:4,
    name:"Kimbap",
    image:"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
  },
]

function Food({name, picture}){
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} alt={name} />
  </div>
}

function App() {
  return (<div>
      {foodILike.map(dish => 
      <Food key={dish.id} name={dish.name} picture={dish.image}/>
      )}
    </div>);
}

export default App;
