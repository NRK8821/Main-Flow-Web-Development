import React, { useContext } from 'react';
import { CalcContext } from '../context/CalcContext';

const Screen = () => {
  const { calc } = useContext(CalcContext);

  return (
    <div className="screen">
      <div className="input">{calc.input}</div>
    </div>
  );
};

export default Screen;