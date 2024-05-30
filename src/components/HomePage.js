import React, { useState } from 'react';
import Digits from './Digits';

const HomePage = () => {
  const [firstNumber, setFirstNumber] = useState(null);
  const [operatorSign, setOperatorSign] = useState();
  const [secondNumber, setSecondNumber] = useState(null);
  //const [equalTo, setEqualTo] = useState(null);
  const [total, setTotal] = useState('');

  const onHandleNumber = (selectedNumber) => {
    // e.g 1 + 1 = 2
    if (!firstNumber) {
      setFirstNumber(selectedNumber);
    }
    if (
      selectedNumber === '+' ||
      selectedNumber === '-' ||
      selectedNumber === '*'
    ) {
      setOperatorSign(selectedNumber);
    }
    if (firstNumber && operatorSign) {
      // why is second number turning to equalTo when total is clicked?
      setSecondNumber(selectedNumber);
    }

    if (operatorSign === '+' && selectedNumber === '=') {
      setTotal(parseInt(firstNumber) + parseInt(secondNumber));
    }
    if (operatorSign === '-' && selectedNumber === '=') {
      setTotal(firstNumber - secondNumber);
    }

    if (operatorSign === '*' && selectedNumber === '=') {
      setTotal(firstNumber * secondNumber);
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
