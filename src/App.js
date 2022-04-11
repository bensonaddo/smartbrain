import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logos/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-tsparticles';
import React, { Component } from 'react';
import Clarifai from 'clarifai';
import FacialRecognition from './components/FacialRecognition/FacialRecognition';
import Signin from './components/Signin/Signin';

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
      imageUrl: '',
      box: {},
      route: 'signin'
    }
  }

  // Added feature to render box info from image detection
  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('imageUrl');
    const width = Number(image.width);
    const height = Number(image.height);
    // console.log(width,height);
    return {
      // This gets the first left number of the clarify data and multiply with the width size
      leftCol: clarifaiFace.left_col * width,
      // This gets the top row number of the clarify data and multiply with the hight size
      topRow: clarifaiFace.top_row * height,
      // this would get the size of of the right col
      rightCol: width - (clarifaiFace.right_col * width),
      //This gets the button row size from clarifaiFace
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box)
    this.setState({box: box})
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
      .then( response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
  }

  onRouteChange = () => {
    this.setState({route: 'home'});
  }

  render(){
    return (
      <div className="App">
        <Particles className='particles' 
          params={particlesOptions}
        />
        <Navigation />
        { this.state.route === 'signin' 
          ? <Signin onRouteChange={this.onRouteChange}/> 
          : 
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm 
              onInputChange={this.onInputChange} 
              onButtonSubmit={this.onButtonSubmit}
            />
            <FacialRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
          </div>
        } 
      </div>
    );
  }
}

export default App;
