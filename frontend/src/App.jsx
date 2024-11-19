import { useState } from 'react'
import { useEffect } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Createcard } from './components/Createcard'
import { Getcard } from './components/Getcard'

function App() {
  const [cards,setCards]=useState([])
  useEffect(() => {
    fetch("http://localhost:3000/cards")
      .then(async function (res) {
        const json = await res.json();
        console.log(json)
        setCards(json.cards);
      })
      .catch(error => console.error("Error fetching cards:", error));
  }, [cards]); // Empty dependency array so it only runs once
  return (
    <div>
      <Createcard></Createcard>
      <Getcard cards={cards}></Getcard>
    </div> 
  )
}

export default App
