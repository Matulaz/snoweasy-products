import React from 'react'
import { useState } from 'react'

function Rental()  {


    const rental = {
    nombre: "Vertical",
    destino: "Las Lenas",
    pax: "Mayor",
    tipo: "Ski",
    cant: 5
    }

    const [count, setCount] = useState(0)

    
    return (
        <div className="Rental">
            <h1>Hola soy el Rental</h1>

        </div>



    )
}

export default Rental