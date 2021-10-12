import React from "react";

function Food({name, picture}){
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} />
  </div>
}

const foodILike=[
  {
    name:"Kimchi",
    image:"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
  },
  {
    name:"Bibimbap",
    image:"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
  },
  {
    name:"Samgyeopsal",
    image:"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
  },
  {
    name:"Kimbap",
    image:"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
  },
]

function App() {
  return (<div>
      {foodILike.map(dish => 
      <Food name={dish.name} picture={dish.image}/>
      )}
    </div>);
}

export default App;
