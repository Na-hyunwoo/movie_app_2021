import React from "react";
import PropTypes from "prop-types";


const foodILike=[
  {
    id:1,
    name:"Kimchi",
    image:"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
    rating:5.0
  },
  {
    id:2,
    name:"Bibimbap",
    image:"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
    rating:4.7
  },
  {
    id:3,
    name:"Samgyeopsal",
    image:"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
    rating:4.2
  },
  {
    id:4,
    name:"Kimbap",
    image:"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
    rating:2.7
  },
]

function Food({name, picture, rating}){
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0 </h4>
    <img src={picture} alt={name} />
  </div>
}

Food.propTypes={

}

function App() {
  return (<div>
      {foodILike.map(dish => 
      <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      )}
    </div>);
}

export default App;
