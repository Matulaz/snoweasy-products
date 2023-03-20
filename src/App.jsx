import { useState } from 'react'
import './App.css'
import Rental from './components/rental'
import Pases from './components/pases'
import Contadores from './components/contadores'

function App() {



  const [section, setSection] = useState("(aqui se renderiza el contenido de cada boton)")

  const botonRental = () =>{

      setSection(<Rental />)
  }

  const botonPases = () =>{

    setSection(<Pases />)
  }



  return (
    <div className="App">

      <button className="btnPrincipal" onClick = {botonRental}>Rental</button>
      <button className="btnPrincipal" onClick = {botonPases}>Pases</button>
      <h1>{ section }</h1>

    </div>
  )
}

export default App
