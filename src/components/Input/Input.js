const Input = ({id, label, type, name}) => { 
  let comp;

  switch (type) {
    case 'checkbox':
      comp = (
        <>
          <input type={type} id={id} name={name} />
          <label  htmlFor={id}>{label}</label><br/>
        </>
      );
      break;
    case 'submit':
      comp = <input type={type} id={id} />;
      break;  
    default:
      comp = (
        <>
          <label htmlFor={id}>{label}:</label>
          <input type={type} id={id} name={name} /><br/>
        </>
      );
  }

  return comp;
};

export default Input;
