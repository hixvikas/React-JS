import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let [Counter, setCounter] = useState(0)

  // let Counter = 15

const addValue = () => {
  if(Counter <= 0 || Counter < 20)
  setCounter(Counter + 1);  
}

const removeValue =() =>{
  if(Counter > 0)
  setCounter(Counter - 1)
}

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value : {Counter}</h2>
       
       <button
       onClick={addValue}
       >Add Value</button><br />
       <button
       onClick={removeValue}
       >Remove Value</button>
    </>
  )
}

export default App
