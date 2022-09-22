import "./Form.css";

const Form= ({ action, children }) => {
  return (
    <form action={action}>
      {children}
    </form>
  );
};

export default Form;