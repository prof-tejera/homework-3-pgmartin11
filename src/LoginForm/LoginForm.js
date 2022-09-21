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
      { formElements.map((el, i) => <Input key={i} {...el} />) }
    </Form>
  );
}

export default LoginForm;

