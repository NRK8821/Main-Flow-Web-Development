import React, { useContext } from 'react';
import { CalcContext } from '../context/CalcContext';
import { calculateResult } from '../utils/calculateResult';

const getStyleName = (btn) => {
  const className = {
    '=': 'equals',
    'x': 'opt',
    '-': 'opt',
    '+': 'opt',
    '/': 'opt',
  };
  return className[btn];
};

const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalcContext);

  const handleBtnClick = () => {
    const numberClick = () => {
      const resetCalc = calc.res !== 0 && calc.input === calc.res.toString();

      const numberString = value.toString();
      const numberValue = resetCalc ? numberString : (calc.num === '0' && numberString === '0' ? "0" : calc.num + numberString);

      setCalc({
        ...calc,
        num: numberValue,
        input: resetCalc ? numberString : calc.input + numberString,
      });
    };

    const backspaceClick = () => {
        const updatedInput = calc.input.slice(0, -1); // Remove the last character
        const updatedNum = calc.num.slice(0, -1); // Remove the last character from num if necessary
  
        setCalc({
          ...calc,
          num: updatedNum,
          input: updatedInput,
        });
    };

    const commaClick = () => {
      if (!calc.num.toString().includes('.')) {
        setCalc({
          ...calc,
          num: calc.num + value,
          input: calc.input + value,
        });
      }
    };

    const resetClick = () => {
      setCalc({ sign: '', num: '', res: 0, input: '' });
    };

    const signClick = () => {
        let updatedInput = calc.input.trim(); // Trim input to remove any trailing whitespace
      
        // Remove the last operator from the input string if it exists
        const operators = ['+', '-', 'x', '/'];
        if (operators.includes(updatedInput.charAt(updatedInput.length - 1))) {
          updatedInput = updatedInput.slice(0, -1).trim();
        }
      
        // Append the new operator to the input string
        updatedInput += ' ' + value + ' ';
      
        setCalc({
          sign: value,
          res: calc.res || calc.num ? (calc.res ? calc.res : calc.num) : '',
          num: '',
          input: updatedInput,
        });
      };
    
    const equalsClick = () => {
    if (calc.res && calc.num && calc.sign) {
        const result = calculateResult(calc.res, calc.num, calc.sign);
        setCalc({
        res: result,
        sign: '',
        num: '',
        input: result.toString(),
        });
    } else if (calc.num && calc.sign) {
        const result = calculateResult(calc.res || calc.num, calc.num, calc.sign);
        setCalc({
        res: result,
        sign: '',
        num: '',
        input: result.toString(),
        });
    } else if (calc.res && !calc.num && !calc.sign) {
        setCalc({
        ...calc,
        num: '', // Clear previous output
        input: '', // Clear input display
        });
    }
    };

    const persenClick = () => {
      setCalc({
        num: (parseFloat(calc.num) / 100).toString(),
        res: calc.res ? (parseFloat(calc.res) / 100).toString() : '',
        sign: '',
        input: calc.input + '%',
      });
    };

    const actions = {
    '.': commaClick,
    'C': resetClick,
    '/': signClick,
    'x': signClick,
    '-': signClick,
    '+': signClick,
    '=': equalsClick,
    '%': persenClick,
    '←': backspaceClick,
    };
    if (actions[value]) {
      return actions[value]();
    } else {
      return numberClick();
    }
  };

  return (
    <button
      onClick={handleBtnClick}
      className={`${getStyleName(value)} button`}
      aria-label={`Button ${value}`}
    >
      {value}
    </button>
  );
};

export default Button;
