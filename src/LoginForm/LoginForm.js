import Panel from "components/Panel/Panel";
import Form from "components/Form/Form";
import Input from "components/Input/Input";
import "./LoginForm.css";

const LoginForm = () => {
  const formElements = [
    {
      type: 'text',
      id: 'fname',
      name: 'fname',
      label: 'First name',
      required: true
    },
    {
      type: 'password',
      id: 'passwd',
      name: 'passwd',
      label: 'Password',
      required: true
    },  
    {
      type: 'checkbox',
      id: 'remember-me',
      name: 'remember',
      label: 'Remember me',
      required: ''
    },
    {
      type: 'submit',
      id: '',
      name: '',
      label: '',
      required: ''   
    }   
  ];

  return (
    <Form action="javascript:void(0);">
      { formElements.map(({type, id, name, label, required}, i) => <Input key={i} type={type} id={id} name={name} label={label} required={required} />) }
    </Form>
  );
}

export default LoginForm;

