import React from 'react'

function Rental()  {


    const rental = {
        origen:["Buenos Aires", "Córdoba", "Rosario", "Bariloche", "Malargue", "San Rafael", "San Juan","San Martin de Los Andes", "Los Molles"],
        destinos: ["Las Leñas", "Chapelco", "Cerro Castor", "Bariloche"],
        pax:["Alta Gama", "Sport", "Menor"],
        tipoEquipos:["Equipo Ski", "Equipo Snowboard"],
        cant:["x 1 Dia", "x 2 Dias", "x 3 Dias", "x 4 Dias", "x 5 Dias", "x 6 Dias", "x 7 Dias", "x 8 Dias", "x 9 Dias", "x 10 Dias"],
        seguro:["Si", "No"]

    }

    const recorrerOrigen = 
        rental.origen.map((o)=>
        <option>{o}</option>
        );
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
    const recorrerCant = 
        rental.cant.map((q)=>
        <option>{q}</option>
    );
    const recorrerSeguro = 
        rental.seguro.map((s)=>
        <option>{s}</option>
    );



    
    return (
        <div className="btnPrincipalActivo Rental">

            <label for="rentalOrigen">Rental
            <select>
                {recorrerOrigen}
            </select>
            </label>

            <label for="rentalDestinos">Centro de Ski
            <select>
                {recorrerDestinos}
            </select>
            </label>

            <label for="rentalTipoEquipos">Tipo de Equipos
            <select>
                {recorrerTipoEquipos}
            </select>
            </label>
            
            <label for="rentalPax">Equipos
            <select>
                {recorrerPax}
            </select>
            </label>




            <label for="rentalCant">Cantidad de Dias
            <select>
                {recorrerCant}
            </select>
            </label>

            <label for="rentalSeguro">Seguro
            <select>
                {recorrerSeguro}
            </select>
            </label>

        <div>
        <button className="btnSearch">Buscar</button>
        </div>

        </div>


    )
}

export default Rental