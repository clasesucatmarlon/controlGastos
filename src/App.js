import React, { useState } from 'react';

import Pregunta from './componentes/Pregunta'
import Formulario from './componentes/Formulario'

import './index.css';

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarpregunta, setMostrarPregunta] = useState(true);

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
                    <Formulario />
                </div>
                <div className="one-half column">
                  two
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
