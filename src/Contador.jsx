import React, { useState } from 'react';
import './index.css';

function Contador() {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  const reiniciar = () => {
    setContador(0);
  };

  return (
    <div className="contador-container">
      <h1>Contador: {contador}</h1>
      <div className="botones-container">
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
        <button onClick={reiniciar}>Reiniciar</button>
      </div>
    </div>
  );
}

export default Contador;