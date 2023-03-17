import React from 'react'

function Pases()  {

    const pases = {
        destinos: ["Las Leñas", "Chapelco", "Cerro Castor"],
        pax: ["Mayor","Menor", "Universitario", "Infant", "Senior", "Mayor Principiante","Menor Principiante"],
        cant: [2,3,4,5,6,7]
    }

    const recorrerDestinos = 
            pases.destinos.map((d)=>
            <option>{d}</option>
        );
    const recorrerPax = 
        pases.pax.map((p)=>
        <option>{p}</option>
    );
    const recorrerCant = 
        pases.cant.map((q)=>
        <option>{q}</option>
    );



    return (
        <div className="Pases">
            <select>
                {recorrerDestinos}
            </select>
            <select>
                {recorrerPax}
            </select>
            <select>
                {recorrerCant}
            </select>
        </div>



    )
}

export default Pases