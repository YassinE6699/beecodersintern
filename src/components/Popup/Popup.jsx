import React, { useState } from "react"
import './Popup.css'

export default function Popup(props) {
    const [imageSrc, setImageSrc] = useState(props.img)
    function handleImageChange(e) {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => setImageSrc(reader.result)
    }
    return (
        <div className="popup">
            <h1 className="popup-item popup-title">{props.functionality}</h1>
            <div style={{display: 'flex'}}>
                <p className="popup-item popup-label">Name :</p>
                <input className="popup-item popup-input" id="meal-name" type="text" defaultValue={props.functionality === 'add' ? '' : props.name} />
            </div>
            <div style={{display: 'flex'}}>
                <p className="popup-item popup-label">price :</p>
                <input className="popup-item popup-input" id="meal-price" type="text" defaultValue={props.functionality === 'add' ? '' : props.price} />
            </div>
            <button className="popup-btn popup-image-selector-btn" onClick={() => {
                document.getElementById('hello').click()
            }}>select an image</button>
            <input id="hello" type="file" accept="images/*" onChange={handleImageChange} style={{display: 'none'}} />
            <div className="popup-btns">
                <button className="popup-item popup-btn popup-btn-add" onClick={() => {
                    const newName = document.getElementById('meal-name').value
                    const newPrice = document.getElementById('meal-price').value
                    if(newName === '') { alert('Please enter a name') }
                    else if(newPrice === '') { alert('Please enter a price') }
                    else if(isNaN(newPrice)) { alert('Please enter a valid price') }
                    else {
                        const meal = { name: newName, price: newPrice, img: imageSrc }
                        props.functionality === 'add' ?
                          props.addMeal({ ...meal, id: props.newId }) :
                          props.modifyMeal(props.id, { ...meal, id: props.id })
                    }
                    props.closePopup()
                }}>{props.functionality}</button>
                <button className="popup-item popup-btn popup-btn-cancel" onClick={props.closePopup}>Cancel</button>
            </div>
        </div>
    )
}