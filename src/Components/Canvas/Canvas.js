import React from 'react';

import './canvasStyle.css';
import image from './bg_dash.png';


const Canvas = () => {
    return (
        <>
            <h1>Work at the speed of thought</h1>

            <p>Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>

            <div className="buttonContainer">
                <ul>
                    <li><button className="secondaryButton">Try for Free</button></li>
                    <li><button>Learn More</button></li>
                </ul>
            </div>

            <div className="canvasBody">
                <img src={image} />
            </div>

        </>
    )
}

export default Canvas
