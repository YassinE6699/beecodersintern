import React from "react"
import './Contact.css'

export default function Contact() {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Prendre Contact</h1>
            <div className="contact-infos">
                <div className="contact-left-part">
                    <input className="contact-left-part-item" type="text" placeholder="Nom et Prenom" />
                    <input className="contact-left-part-item" type="text" placeholder="Adress Email" />
                    <textarea className="contact-left-part-item" name="" id="" cols="30" rows="10" placeholder="Votre message ici..."></textarea>
                    <button className="contact-left-part-item contact-left-part-btn">Envoyer</button>
                </div>
                <div className="contact-right-part">
                    <div className="contact-right-part-item">chili<span style={{color: "green"}}>'</span>s</div>
                </div>
            </div>
        </div>
    )
}