import React from 'react';
import PropTypes from "prop-types";

const Gasto = ({gasto}) => {
    return ( 
        <li className="gastos">
            <p>
                {gasto.nombregasto}
                <span className="gasto">$ {gasto.cantidadgasto}</span>
            </p>
        </li>
    );
}

Gasto.propTypes = {
    gasto: PropTypes.object.isRequired
}

export default Gasto;
