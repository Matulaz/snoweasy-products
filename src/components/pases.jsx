import React from 'react'
import Contadores from './contadores'

function Pases()  {

    const pases = {
        destinos: ["Las Leñas", "Chapelco", "Cerro Castor"],
        pax: ["Mayor","Menor", "Universitario", "Infant", "Senior", "Mayor Principiante","Menor Principiante"],
    }

    const recorrerDestinos = 
            pases.destinos.map((d)=>
            <option>{d}</option>
        );
    const recorrerPax = 
        pases.pax.map((p)=>
        <option>{p}</option>
    );




    return (
        <div className="btnPrincipalActivo Pases">

            <label for="pasesDestinos">Centro de Ski
            <p className="descripcion">Argentina</p>
            <select>
                { recorrerDestinos }
            </select>
            </label>

            <label for="pasesPax">Tipo de Pases
            <p className="descripcion">Segun la edad del pasajero</p>
            <select>
                { recorrerPax }
            </select>
            </label>

            <label for="pasesCant">Cantidad
            <p className="descripcion">Dias de Medios de Elevacion</p>
            <Contadores />

            </label>

        
        <div>
        <button className="btnSearch">Buscar</button>
        </div>

        </div>



    )
}

export default Pases