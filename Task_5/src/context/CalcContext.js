import React, { createContext, useState } from 'react';

export const CalcContext = createContext();

const CalcProvider = ({ children }) => {
  const [calc, setCalc] = useState({
    sign: '',
    num: '',
    res: 0,
    input: ''   
  });

  return (
    <CalcContext.Provider value={{ calc, setCalc }}>
      {children}
    </CalcContext.Provider>
  );
};

export default CalcProvider;