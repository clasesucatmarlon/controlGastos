import React, { useState, useEffect } from 'react';

import Pregunta from './componentes/Pregunta'
import Formulario from './componentes/Formulario'
import Listado from './componentes/Listado';

import './index.css';
import ControlPresupuesto from './componentes/ControlPresupuesto';

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarpregunta, setMostrarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [creargasto, setCrearGasto] = useState(false);

  // UseEffect cuando actualiza el restante
  useEffect( () => {
    if (creargasto) {
      // Agrega nuevo presupuesto
      setGastos([...gastos, gasto]);
      // restar al presupuesto actual
      const presupuestoRestante = restante - gasto.cantidadgasto;
      setRestante(presupuestoRestante);
      // setear a falso
      setCrearGasto(false);
    }
  }, [gasto, creargasto, gastos, restante] )

  // Cuando se agregue un nuevo gasto
  // const agregarNuevoGasto = (gasto) => {
  //   setGastos([...gastos, gasto])
  // }

  return (
    <div className="container">
      <header>
        <h1>Control de Presupuesto</h1>
        <div className="contenido-principal contenido">
          { mostrarpregunta ? 
            (
              <Pregunta 
                setPresupuesto={setPresupuesto}
                setRestante={setRestante}
                setMostrarPregunta={setMostrarPregunta}
              />
            ): 
            (
              <div className="row">
                <div className="one-half column">
                  <Formulario
                    setGasto={setGasto}
                    setCrearGasto={setCrearGasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado 
                    gastos={gastos}
                  />
                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              </div>
            )
          }
          

          
        </div>
      </header>
    </div>
  );
}

export default App;
