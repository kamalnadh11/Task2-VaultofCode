import React from 'react';
import './App.css';
import Card from './card';
import Slider from './slider';

function App() {
  return (
    
    <div className="App">
      <h1>Avengers</h1>
      <Slider />
      <div className="card-container">
        <Card
          title="Iron Man"
          cimagesFolder="cimages"
          imageFileName="a2.jpg"
        />
         <Card
          title="Balck Widow"
          cimagesFolder="cimages"
          imageFileName="a3.jpg"
        />
         <Card
          title="Hulk"
          cimagesFolder="cimages"
          imageFileName="a4.jpg"
        />
         <Card
          title="Captian America"
          cimagesFolder="cimages"
          imageFileName="a5.jpg"
        />
         <Card
          title="Thor"
          cimagesFolder="cimages"
          imageFileName="a6.jpg"
        />
         <Card
          title="Black Panther"
          cimagesFolder="cimages"
          imageFileName="a7.jpg"
        />
         <Card
          title="Doctor Strange"
          cimagesFolder="cimages"
          imageFileName="a8.jpg"
        />
         <Card
          title="Spider Man"
          cimagesFolder="cimages"
          imageFileName="a9.jpg"
        />
         <Card
          title="Wanda Maximoff"
          cimagesFolder="cimages"
          imageFileName="a10.jpg"
        />
         <Card
          title="Star Lord"
          cimagesFolder="cimages"
          imageFileName="a11.jpg"
        />
         <Card
          title="Gamora"
          cimagesFolder="cimages"
          imageFileName="a12.jpg"
        />
         <Card
          title="Rocket"
          cimagesFolder="cimages"
          imageFileName="a13.jpg"
        />
    
      </div>
    </div>

  );
}

export default App;
