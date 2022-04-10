import React from "react";
import Tilt from 'react-tilt'
import Brain from './brain.png'
import './logo.css'

const Logo = () => {
    return (
        <div className="ma4 mt0">
            {/*https://www.npmjs.com/package/react-tilt */}
            <Tilt className="Tilt br2 shadow-2" options={{ max : 50}} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3">
                    <img src={Brain} alt="logo" />
                </div>
            </Tilt>
        </div>
        
    )
}

export default Logo;