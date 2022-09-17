import RadioButton from "components/RadioButton/RadioButton";
import "./RadioButtons.css";

const RadioButtons = () => {
  return (
    <>
      <RadioButton
        selected={true}
        disabled={false}
        text="Apple"
      />
      <RadioButton
        selected={false}
        disabled={false}
        text="Pear"
      />
      <RadioButton
        selected={false}
        disabled={true}
        text="Orange"
      />
    </>
  );
};

export default RadioButtons;
