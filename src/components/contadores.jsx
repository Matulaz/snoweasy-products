import { useState } from 'react'
import './contadores.css'


function Contadores() {



    const [counter, setCounter] = useState(0)

    const contadoresSuma = () =>{

        setCounter(counter+1)

    }
    const contadoresResta = () =>{

        if (counter > 0){
            setCounter(counter-1)
        }else {
            counter = 0;
        }
    }



    return (
    <div className="Contadores">
    
    <button className="btn-contadores resta" onClick = {contadoresResta}>-</button>
    <p>{counter}</p>
    <button className="btn-contadores suma" onClick = {contadoresSuma}>+</button>

    </div>
    )
}

export default Contadores;
