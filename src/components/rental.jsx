import React from 'react'

function Rental()  {


    const rental = {
        destinos: ["Las Leñas", "Chapelco", "Cerro Castor", "Bariloche"],
        pax:["Alta Gama", "Sport", "Menor"],
        tipoEquipos:["Equipo Ski", "Equipo Snowboard"],
    }

    const recorrerDestinos = 
        rental.destinos.map((d)=>
        <option>{d}</option>
        );
    const recorrerPax = 
        rental.pax.map((p)=>
        <option>{p}</option>
    );
    const recorrerTipoEquipos = 
        rental.tipoEquipos.map((t)=>
        <option>{t}</option>
    );



    
    return (
        <div className="btnPrincipalActivo Rental">

            <label for="rentalDestinos">Centro de Ski
            <p className="descripcion">Vertical</p>
            <select>
                {recorrerDestinos}
            </select>
            </label>

            <label for="rentalTipoEquipos">Equipos
            <p className="descripcion">Ski/Snowboard</p>
            <select>
                {recorrerTipoEquipos}
            </select>
            </label>
            
            <label for="rentalPax">Rider 
            <p className="descripcion">Alta Gama/Sport o Menor</p>
            <select>
                {recorrerPax}
            </select>
            </label>

        <div>
        <button className="btnSearch">Buscar</button>
        </div>

        </div>


    )
}

export default Rental