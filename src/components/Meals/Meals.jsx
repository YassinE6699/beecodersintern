import React from "react"
import { useState } from "react"
import "./Meals.css"

import Meal from "../Meal/Meal"
import Popup from "../Popup/Popup"
import meals from "./Meals.json"

export default function Meals() {
    const [mealsArray, setMealsArray] = useState(meals)
    const [showPopup, setShowPopup] = useState(false) // used for the popup
    function deleteMeal(id) {
        const newMealsArray = mealsArray.filter(meal => meal.id !== id)
        setMealsArray(newMealsArray)
    }
    function modifyMeal(id, newValues) {
        const newMealsArray = mealsArray.map(meal => meal.id === id ? {...meal, ...newValues} : meal)
        setMealsArray(newMealsArray)
    }
    function addMeal(meal) {
        const newMealsArray = [...mealsArray, meal]
        setMealsArray(newMealsArray)
    }
    function closePopup() {
        setShowPopup(false)
    }
    const mealComponents = mealsArray.map(meal => <Meal key={meal.id} {...meal} deleteMeal={deleteMeal} modifyMeal={modifyMeal} />)
    return (
        <div className='meals'>
            <div style={{display: 'flex', alignItems: 'baseline'}}>
                <h1 className='meals-title'>Nos Fajitas</h1>
                <button className="add-btn" onClick={() => setShowPopup(true)}>
                    <img className="add-img" src="/src/assets/images/add.webp" alt="add icon" />
                </button>
            </div>
            <div className='meals-list'>
                {mealComponents}
            </div>
            <a className='meals-more' href="">Voir Plus</a>
            {
              showPopup &&
              <Popup functionality={'add'}
                closePopup={closePopup}
                addMeal={addMeal}
                newId={mealsArray[mealsArray.length - 1].id + 1}
              />
             }
        </div>
    )
}