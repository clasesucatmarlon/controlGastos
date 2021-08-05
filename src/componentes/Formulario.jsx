import React, {useState} from 'react';
import PropTypes from "prop-types";
// npm i shortid
import shortid from 'shortid'; 

import Error from './Error';

const Formulario = ({setGasto, setCrearGasto}) => {

    const [nombregasto, setNombreGasto] = useState("");
    const [cantidadgasto, setCantidadGasto] = useState(0);
    const [error, setError] = useState(false);

    const agregarGasto = (e) => {
        e.preventDefault();

        // Validar
        if (cantidadgasto < 1 || isNaN(cantidadgasto) || nombregasto.trim === '') {
            setError(true);
            return;
        }
        setError(false);

        // Construir gasto - Objeto
        const gasto = {
            nombregasto: nombregasto,
            cantidadgasto: cantidadgasto,
            id: shortid.generate()
        };

        // Pasar gasto al componente principal
        setGasto(gasto);
        setCrearGasto(true);

        // Resetear el formulario
        setNombreGasto("");
        setCantidadGasto(0);
    }

    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agregar gastos</h2>

            {
                error ? <Error mensaje='La cantidad debe ser mayor a cero y debes agregar un gasto'/> : null
            }
            <div className="campo">
                <label>Nombre del gasto:</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Comida"
                    value={nombregasto}
                    onChange={e => setNombreGasto(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Monto del gasto:</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="800"
                    value={cantidadgasto}
                    onChange={ e => setCantidadGasto(parseInt(e.target.value))}
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto" 
            />

        </form>
    );
}

Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired,
    sesetCrearGastoGasto: PropTypes.func.isRequired
}

export default Formulario;