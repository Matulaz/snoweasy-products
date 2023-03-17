import React from 'react'
import { useState } from 'react'

function Pases()  {

    const pases = {
        nombre: "Valle de Las Leñas",
        detino: "Las Leñas",
        pax: "Mayor",
        cant: 4
    }


    const [count, setCount] = useState(0)    


    return (
        <div className="Pases">
            <h1>Hola soy los Pases</h1>

        </div>



    )
}

export default Pases