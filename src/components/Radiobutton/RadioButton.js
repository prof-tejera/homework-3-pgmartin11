
import "./RadioButton.css";

const RadioButton = ({ label, selected, active }) => {
  let cName = '';

  if (active) {
    cName = selected ? 'selected' : '';
  }

  return (
    <button
      className={`Rbtn ${cName}`}
      disabled={!active }
    >
      {label}
    </button>
  );
};

export default RadioButton;