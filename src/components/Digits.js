const Digits = ({ numbers, onSelect }) => {
  return (
    <div>
      <p onClick={onSelect}>{numbers}</p>
    </div>
  );
};

export default Digits;
