import './Login.css'
import { sneatIcon } from './Icons'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const Login = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address')
      .required('Required'),
    password: Yup.string()
      .required('Required')
      .matches(/^(?=.*[!@#$%^&*(),.?":{}|<>])/, 'Password must contain at least one special character')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        'Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character'
      )});
      const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
      };
    
      const handleSubmit = (values) => {
        console.log(values);
      };
  return (
    <div className='login-wrapper'>
        <div className="login-img"><img className='img' src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/pages/boy-with-rocket-light.png" alt="Boy with Rocket" /></div>
        <div className="right-login-data">
          <div className="heading-wrap">
            <div className="heading-svg">{sneatIcon({width:22,height:32 })}</div>
            <div className="heading">Sneat</div>
          </div>
          <div className="welcome">Welcome to Sneat! 👋🏻</div>
          <div className="sub-heading">Please sign-in to your account and start the adventure</div>
          <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
          <Form >
            <div className="input-inner">
                <div className="input-wrap">
                <Field type="email" id="email" name="email" placeholder="Enter your email" className='email-input' />
                <ErrorMessage name="email" component="div" />
                </div>
                <div className="input-wrap">
                <Field type="password" id="password" name="password" placeholder="Password" className='email-input' />
                <ErrorMessage name="password" component="div" />
                </div>
              </div>
            <div className="remember-password">
              <div className="remember-inner">
                <input className='remember-btn' type="checkbox" id='remember' name='remember'/> 
                <label className='label' htmlFor='remember'>Remember Me</label>
              </div>
              <a href="/">Forgot Password?</a>
            </div>
            <button className="sign-in" type='submit'>SIGN IN</button>
          </Form>
          </Formik>
        </div>
    </div>
  )
}

export default Login