import React, { useState } from 'react';
import './App.css';

function App() {
  const [randomImage, setRandomImage] = useState(null);

  const handleClick = () => {
    const images = [
      'https://randomuser.me/api/portraits/men/1.jpg',
      'https://randomuser.me/api/portraits/women/1.jpg',
      'https://randomuser.me/api/portraits/men/2.jpg',
      'https://randomuser.me/api/portraits/women/2.jpg',
      'https://randomuser.me/api/portraits/men/3.jpg',
      'https://randomuser.me/api/portraits/women/3.jpg'
    ];
    const index = Math.floor(Math.random() * images.length);
    const image = images[index];
    setRandomImage(image);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>NFT Image Generator</h1>
        <button onClick={handleClick}>Generate Random Image</button>
        {randomImage && <img src={randomImage} alt="NFT Image" />}
      </header>
    </div>
  );
}

export default App;