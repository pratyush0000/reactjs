// import React from 'react'
import './App.css'
import ErrorMessage from './components/ErrorMessage'
import FoodItems from './components/FoodItems'

function App() {

  let foodItems = ["Chicken","Sadwhich","Dal","Greens","Salad"]
  // let foodItems = []

  return (
    <>
      <h1>Healthy Foods</h1>
      <ErrorMessage items = {foodItems}></ErrorMessage>
      <FoodItems itemimp = {foodItems}></FoodItems>
    </>
  )
}

export default App
