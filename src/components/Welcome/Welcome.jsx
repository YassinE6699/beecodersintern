import React from "react"
import './Welcome.css'

export default function Welcome() {
    return (
        <div className="welcome">
            <div className="welcome-left-part">
                <img className="welcome-left-part-img" src="/src/assets/images/2.png" alt="welcome image" />
                <img className="welcome-left-part-pepper-img" src="/src/assets/images/welcome pepper.png" alt="welcome pepper" />
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
            </div>
            <div className="welcome-right-part">
                {/* <img className="welcome-right-part-options" src="/src/assets/images/options.png" alt="options btn" /> */}
                <h1 className="welcome-right-part-name welcome-right-part-item">Chilli's Tunisie</h1>
                <h1 className="welcome-right-part-description welcome-right-part-item">Découvrer les meilleurs recettes syriennes</h1>
                <button className="welcome-right-part-btn welcome-right-part-item">Voir notre menu</button>
            </div>
        </div>
    )
}