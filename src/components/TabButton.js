const TabButton = (props) => {
  const handleClick = () => {
    console.log('component clicked');
  };

  return (
    <li>
      <button onClick={handleClick}>{props.children}</button>
    </li>
  );
};

export default TabButton;
