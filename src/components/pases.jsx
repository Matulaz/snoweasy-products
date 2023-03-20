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
        <div className="btnPrincipalActivo Pases">

            <label for="pasesDestinos">Centro de Ski
            <select>
                { recorrerDestinos }
            </select>
            </label>

            <label for="pasesPax">Tipo de Pases
            <select>
                { recorrerPax }
            </select>
            </label>

            <label for="pasesCant">Cantidad de dias de Pases
            <select>
                { recorrerCant }
            </select>
            </label>

        
        <div>
        <button className="btnSearch">Buscar</button>
        </div>

        </div>



    )
}

export default Pases