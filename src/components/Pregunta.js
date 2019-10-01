import React, { Fragment, useState } from 'react';
import Error from './Error';

function Pregunta(props) {

    const { guardarPresupuesto, guardarPreguntaPresupuesto, guardarRestante } = props;

    // definir el state
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);
    const [ gasto, guardargasto] = useState([]);


    //validar el presupuesto
    const agregarPresupuesto = e=>{
        e.preventDefault();

        console.log(typeof cantidad);

        //validar el presupuesto
        if(cantidad <= 1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }

        // Si se pasa la validación 
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        guardarPreguntaPresupuesto(false);

    }

    return(
        <Fragment>
            <h2>Coloca tu Presupuesto</h2>

            {error ? <Error mensaje='El presupuesto es Incorrecto' />  : null }

            <form
                onSubmit={agregarPresupuesto}
            >
                <input type="number"
                    className="u-full-width"
                    placeholder="Agrega tu Presupuesto"
                    onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
                    />
                    <input type="submit" className="button-primary u-full-width" value="Definir Presupuesto" />
            </form>
        </Fragment>
    )
}

export default Pregunta;