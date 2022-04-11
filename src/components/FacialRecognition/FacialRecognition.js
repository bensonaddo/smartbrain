import React from "react";

const FacialRecognition = ({ imageUrl }) => {
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img src={imageUrl} alt="car image" width={'500px'} height={'auto'}/>
            </div>   
        </div>
    )
}

export default FacialRecognition;