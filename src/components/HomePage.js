import React, { useState } from 'react';
import Digits from './Digits';

const HomePage = () => {
  const [number, setNumber] = useState(null);

  const onHandleNumber = (selectedNumber) => {
    setNumber(selectedNumber);
  };

  return (
    <div className="calculator">
      <div>{number}</div>
      <br></br>
      <Digits numbers="1" onSelect={() => onHandleNumber('1')} />
      <Digits numbers="2" onSelect={() => onHandleNumber('2')} />
      <Digits numbers="3" onSelect={() => onHandleNumber('3')} />
      <Digits numbers="4" onSelect={() => onHandleNumber('4')} />
      <Digits numbers="5" onSelect={() => onHandleNumber('5')} />
    </div>
  );
};

export default HomePage;
