import React, { useState } from 'react';
import Digits from './Digits';

const HomePage = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [operatorSign, setOperatorSign] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  //const [equalTo, setEqualTo] = useState(null);
  const [total, setTotal] = useState('');

  const onHandleNumber = (selectedNumber) => {
    if (!operatorSign) {
      // If no operator has been selected yet, concatenate to firstNumber
      setFirstNumber(firstNumber + selectedNumber);
    } else if (selectedNumber !== '=') {
      // If an operator has been selected, concatenate to secondNumber
      setSecondNumber(secondNumber + selectedNumber);
    }

    if (
      selectedNumber === '+' ||
      selectedNumber === '-' ||
      selectedNumber === '*'
    ) {
      setOperatorSign(selectedNumber);
    }

    if (selectedNumber === '=') {
      if (operatorSign === '+') {
        setTotal(parseInt(firstNumber) + parseInt(secondNumber));
      } else if (operatorSign === '-') {
        setTotal(parseInt(firstNumber) - parseInt(secondNumber));
      } else if (operatorSign === '*') {
        setTotal(parseInt(firstNumber) * parseInt(secondNumber));
      }
    }
  };

  return (
    <div className="calculator">
      <div>{firstNumber}</div>
      <div>{operatorSign}</div>
      <div>{secondNumber}</div>
      {/* <div>{equalTo}</div> */}
      <div>{total}</div>
      <br></br>
      <Digits numbers="1" onSelect={() => onHandleNumber('1')} />
      <Digits numbers="2" onSelect={() => onHandleNumber('2')} />
      <Digits numbers="3" onSelect={() => onHandleNumber('3')} />
      <Digits numbers="4" onSelect={() => onHandleNumber('4')} />
      <Digits numbers="5" onSelect={() => onHandleNumber('5')} />
      <Digits numbers="+" onSelect={() => onHandleNumber('+')} />
      <Digits numbers="-" onSelect={() => onHandleNumber('-')} />
      <Digits numbers="=" onSelect={() => onHandleNumber('=')} />
      <Digits numbers="*" onSelect={() => onHandleNumber('*')} />
    </div>
  );
};

export default HomePage;
