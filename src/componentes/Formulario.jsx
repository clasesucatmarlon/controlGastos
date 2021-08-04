import React, {useState} from 'react';

const Formulario = () => {

    const [nombregasto, setNombreGasto] = useState("");
    const [cantidadgasto, setCantidadGasto] = useState(0);

    const agregarGasto = (e) => {
        e.preventDefault();

        // Validar gasto

        // Construir gasto - Objeto

        // Pasar gasto al componente principal

        // Resetear el formmarlon
    }

    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agregar gastos</h2>
            <div className="campo">
                <label>Nombre del gasto:</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Comida"
                    name={nombregasto}
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

export default Formulario;