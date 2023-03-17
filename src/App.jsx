import { useState } from 'react'
import './App.css'
import Rental from './components/rental'
import Pases from './components/pases'

function App() {



  const [section, setSection] = useState("Hola soy el Section")

  const botonRental = () =>{

      setSection(<Rental />)
  }

  const botonPases = () =>{

    setSection(<Pases />)
  }



  return (
    <div className="App">

      <button onClick = {botonRental}>Renderizar Componente Rental</button>
      <button onClick = {botonPases}>Renderizar Componente Pases</button>
      <h1>{ section }</h1>

    </div>
  )
}

export default App
