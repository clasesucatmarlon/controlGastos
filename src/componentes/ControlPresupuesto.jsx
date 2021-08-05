import React from 'react';
import {revisarPresupuesto} from '../helpers';
import PropTypes from "prop-types";

const ControlPresupuesto = ({presupuesto, restante}) => {
    const formatPresupuesto = Intl.NumberFormat("de-DE").format(presupuesto);
    const formatRestante = Intl.NumberFormat("de-DE").format(restante);
    return (
        <>
            <div className="alert alert-primary">
                <span className="controPresupuesto">Presupuesto:</span> $ {formatPresupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto, restante)}>
            <span className="controPresupuesto">Restante: </span> $ {formatRestante}
            </div>
        </>
    );
}

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}

export default ControlPresupuesto;
