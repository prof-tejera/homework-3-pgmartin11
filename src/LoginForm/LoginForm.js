import Panel from "components/Panel/Panel";
import Form from "components/Form/Form";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
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
    <Form action="#">
      { formElements.map(({type, id, name, label}) => <Input key={id} type={type} id={id} name={name} label={label} />) };
  
      {/* formElements.map(el => (<Input type={el.type} id={el.id} name={el.name} label={el.label} />)); */}
{/* 
      <Input type="text" id="fname" name="fname" label="First name" />
      <Input type="password" id="passwd" name="passwd" label="Password" />
      <Input type="checkbox" id="remember-me" name="remember" label="Remember me" />
      <Input type="submit" id="login-submit" />
 */ }
    </Form>
  );
}

export default LoginForm;

