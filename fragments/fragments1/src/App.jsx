// import React from 'react'
import './App.css'

function App() {

  let foodItems = ["Chicken","Sadwhich","Dal","Greens","Salad",]

  return (
    <>
      <h1>Healthy Foods</h1>
      <ul className="list-group">
        {foodItems.map((items) => <li key={items} className="list-group-item">{items}</li>)}
      </ul>
    </>
  )
}

export default App
