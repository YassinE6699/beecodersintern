import React, { useState } from 'react'
import './Meal.css'

import Popup from '../Popup/Popup'

export default function Meal(props) {
    const [showPopup, setShowPopup] = useState(false)
    function closePopup() { setShowPopup(false) }
    return (
        <div className='meal'>
            {
              showPopup &&
              <Popup
                functionality='modify'
                closePopup={closePopup}
                {...props}
              />
            }
            <img className='meal-item meal-img' src={props.img} alt="meal image" />
            <div className='meal-options'>
                <img className='option options-modify' src="/src/assets/images/modify.png" alt="modify icon" onClick={() => setShowPopup(true)} />
                <img className='option options-delete' src="/src/assets/images/delete.png" alt="delete icon" onClick={() => props.deleteMeal(props.id)} />
            </div>
            <h2 className='meal-item meal-name'>{props.name}</h2>
            <h2 className='meal-item meal-price'>{String(props.price).replace('.', ',')} DT</h2>
        </div>
    )
}