import React from "react"
import './Menu.css'

import Meals from "../Meals/Meals"

export default function Menu() {
    return (
        <div className='menu'>
            <div className="menu-title">
                <img className="menu-title-img" src="/src/assets/images/left pepper.png" alt="left pepper" />
                <h1>Notre Menu</h1>
                <img className="menu-title-img" src="/src/assets/images/right pepper.png" alt="right pepper" />
            </div>
            <Meals />
            <Meals />
        </div>
    )
}