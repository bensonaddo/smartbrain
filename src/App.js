import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logos/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-tsparticles';
import React, { Component } from 'react';
import Clarifai from 'clarifai';
import FacialRecognition from './components/FacialRecognition/FacialRecognition';

const app = new Clarifai.App({
 apiKey: 'd0cbca2fe0ec4edd8af2c3198d65e0ac'
});

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
      input: '',
      imageUrl: ''
    }
  }

  // Input event to monitor inputs
  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  // Click event for detect button
  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input)
      .then(
        function(response){
          // Do something with the response
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
        },
        function(err){
          // there was an error
          console.log('Oooops, Error. Please fix:', err);
        }
    );
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
        <FacialRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
