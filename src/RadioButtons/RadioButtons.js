import RadioButton from "components/RadioButton/RadioButton";
import "./RadioButtons.css";

const RadioButtons = () => {
    const radioBtnData = [
    { 
      label: 'Apple',
      selected: true,
      active: true
    },
    {
      label: 'Pear',
      selected: false,
      active: true      
    },
    {
      label: 'Orange',
      selected: false,
      active: false         
    }    
  ];

  return (
    <>
     { radioBtnData .map((radioBtn, i) => <RadioButton key={i} {...radioBtn} />) }
    </>
  );
};

export default RadioButtons;
