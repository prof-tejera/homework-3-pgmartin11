import "./RadioButton.css";

const RadioButton = ({ selected, active, text }) => {
  return (
    <button
      className={selected ? "selected" : ""}
    >
      {text}
    </button>
  );
};

export default RadioButton;