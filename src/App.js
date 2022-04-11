import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logos/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-tsparticles';


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
    // interactivity: {
    //   detect_on: "canvas",
    //   events: {
    //     onhover: {
    //       enable: false,
    //       mode: "repulse"
    //     },
    //     onclick: {
    //       enable: true,
    //       mode: "push"
    //     },
    //     resize: true
    //   },
    //   modes: {
    //     grab: {
    //       distance: 800,
    //       line_linked: {
    //         opacity: 1
    //       }
    //     },
    //     bubble: {
    //       distance: 800,
    //       size: 80,
    //       duration: 2,
    //       opacity: 0.8,
    //       speed: 3
    //     },
    //     repulse: {
    //       distance: 400,
    //       duration: 0.4
    //     },
    //     push: {
    //       particles_nb: 4
    //     },
    //     remove: {
    //       particles_nb: 2
    //     }
    //   }
    // },
  }
}

function App() {
  return (
    <div className="App">
      <Particles className='particles' 
        params={particlesOptions}
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
    </div>
  );
}

export default App;
