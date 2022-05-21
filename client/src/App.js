import './App.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";


function App() {

  const handleClickLogin = (values) => console.log(values)

  const handleClickRegister = (values) => console.log(values)
  
  const validationLogin = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).required(),
  })

  const validationRegister = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null],"As senhas n são iguais")
  })

  return (
    <div className="container">
      <h1>LOGIN</h1>
      <Formik 
        initialValues={{}} 
        onSubmit={handleClickLogin}
        validationSchema={validationLogin}
      >
        <Form className="login-form">
          <div className="login-form-group">
            <Field 
              name="email" 
              className="form-field" 
              placeholder="Email" 
            />
            <ErrorMessage 
              component="span"
              name="email"
              className="form-error"
            />
          </div>
          <div className="form-group">
            <Field 
              name="password" 
              className="form-field" 
              placeholder="Senha" 
            />
            <ErrorMessage 
              component="span"
              name="password"
              className="form-error"
            />
          </div>
          <button className="button" type="submit">Login</button>
        </Form>
      </Formik>


    {/* // //////////////////////////////////////////////////////////////////////////////////////////// */}
    
    
    <div className="container">
      <h1>Cadastro</h1>
      <Formik 
        initialValues={{}} 
        onSubmit={handleClickRegister}
        validationSchema={validationRegister}
      >
        <Form className="register-form">
          <div className="register-form-group">
            <Field 
              name="email" 
              className="form-field" 
              placeholder="Email" 
            />
            <ErrorMessage 
              component="span"
              name="email"
              className="form-error"
            />
          </div>
          <div className="form-group">
            <Field 
              name="password" 
              className="form-field" 
              placeholder="Senha" 
            />
            <ErrorMessage 
              component="span"
              name="password"
              className="form-error"
            />
          </div>
          <div className="form-group">
            <Field 
              name="confirmPassword" 
              className="form-field" 
              placeholder="Confirme sua senha" 
            />
            <ErrorMessage 
              component="span"
              name="confirmPassword"
              className="form-error"
            />
          </div>
          <button className="button" type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  </div>


    
    
  );
}

export default App;
