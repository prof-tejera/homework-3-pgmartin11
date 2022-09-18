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
      label: 'First name'
    },
    {
      type: 'password',
      id: 'passwd',
      name: 'passwd',
      label: 'Password'
    },  
    {
      type: 'checkbox',
      id: 'remember-me',
      name: 'remember',
      label: 'Remember me'
    },
    {
      type: 'submit',
      id: '',
      name: '',
      label: ''      
    }   
  ];

  return (
    <Form action="javascript:void(0);">
      { formElements.map(({type, id, name, label}) => <Input key={id} type={type} id={id} name={name} label={label} />) }
    </Form>
  );
}

export default LoginForm;

