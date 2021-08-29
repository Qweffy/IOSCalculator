import {useRef, useState} from 'react';

export type useCalculatorProps = {};

enum Operators {
  add,
  subtract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [lastNumber, setLastNumber] = useState('0');
  const [number, setNumber] = useState('0');

  const lastOperation = useRef<Operators>();

  const clean = () => {
    setNumber('0');
    setLastNumber('0');
  };

  const buildNumber = (inputNumber: string) => {
    if (number.includes('.') && inputNumber === '.') return;
    if (number.startsWith('0') || number.startsWith('-0')) {
      if (inputNumber === '.') {
        setNumber(number + inputNumber);
      } else if (inputNumber === '0' && number.includes('.')) {
        setNumber(number + inputNumber);
      } else if (!number.includes('.')) {
        setNumber(inputNumber);
      } else {
        setNumber(number + inputNumber);
      }
    } else {
      setNumber(number + inputNumber);
    }
  };

  const btnDelete = () => {
    let negative = '';
    let tempNumber = number;
    if (number.includes('-')) {
      negative = '-';
      tempNumber = number.substr(1);
    }

    if (tempNumber.length > 1) {
      setNumber(negative + tempNumber.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const changeNumBefore = () => {
    if (number.endsWith('.')) {
      setLastNumber(number.slice(0, -1));
    }
    setLastNumber(number);
    setNumber('0');
  };

  const btnDivide = () => {
    changeNumBefore();
    lastOperation.current = Operators.divide;
  };
  const btnMultiply = () => {
    changeNumBefore();
    lastOperation.current = Operators.multiply;
  };
  const btnAdd = () => {
    changeNumBefore();
    lastOperation.current = Operators.add;
  };
  const btnSubtract = () => {
    changeNumBefore();
    lastOperation.current = Operators.subtract;
  };

  const calculate = () => {
    const num1 = Number(number);
    const num2 = Number(lastNumber);

    switch (lastOperation.current) {
      case Operators.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operators.subtract:
        setNumber(`${num2 - num1}`);
        break;
      case Operators.multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Operators.divide:
        setNumber(`${num2 / num1}`);
        break;
    }
    setLastNumber('0');
  };
  return {
    lastNumber,
    clean,
    positiveNegative,
    btnDelete,
    btnDivide,
    buildNumber,
    btnMultiply,
    btnSubtract,
    btnAdd,
    calculate,
    number,
  };
};
