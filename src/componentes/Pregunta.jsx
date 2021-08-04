import React, {useState} from 'react';

import Error from './Error';

const  Pregunta = ( { setPresupuesto, setRestante, setMostrarPregunta } ) => {

    // ESTADO DE LA PREGUNTA - ERROR 
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    // FUNCION PARA LEER EL PRESUPUESTO INICIAL
    const definirPresupuesto = (e) => {
        setCantidad(parseInt(e.target.value));
    }

    // SUBMIT PARA DEFINIR EL PRESUPUESTO
    const agregarPresupuesto = (e) => {
        e.preventDefault();

        // VALIDAR ERROR
        if (cantidad < 1 || isNaN (cantidad )) {
            setError(true);
        } else {
            // SI PASA LA VALIDACION
            setError(false);
            setPresupuesto(cantidad);
            setRestante(cantidad);
            setMostrarPregunta(false);
        }
    }

    return (  
        <>
            <h2>Ingresa presupuesto</h2>
            {error ? <Error mensaje='El presupuesto debe ser mayor a 0'/> : null }
            <form onSubmit={agregarPresupuesto}>
                <input 
                    type="number"
                    className='u-full-width'
                    placeholder='Ingresa tu presupuesto'
                    onChange={definirPresupuesto}
                />
                <input 
                    type="submit"
                    className='button-primary u-full-width'
                    placeholder='Ingresa tu presupuesto'
                    value='Definir presupuesto'
                />
            </form>

        </>
    );
}
 
export default Pregunta;