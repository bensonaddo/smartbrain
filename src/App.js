import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logos/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-tsparticles';
import React, { Component } from 'react';


const particlesOptions = {
  // https://www.npmjs.com/package/react-tsparticles
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 6,
      straight: false,
    },
    collisions: {
      enable: true,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: ''
    }
  }

  // Input event to monitor inputs
  onInputChange = (event) => {
    console.log(event.target.value)
  }

  // Click event for detect button
  onButtonSubmit = () => {
    console.log('click');
  }
  render(){
    return (
      <div className="App">
        <Particles className='particles' 
          params={particlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}
        />
      </div>
    );
  }
}

export default App;
