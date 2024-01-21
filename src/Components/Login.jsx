import './Login.css'
import { sneatIcon } from './Icons'
import { useForm } from 'react-hook-form';
import { useState } from 'react';


const Login = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setSubmitted(true);
  };
  var array1 = [541,257,125,51,256,257,51,255]
let array2 = [158,257,255,258,255,225]
const array3= array1.concat(array2)
array3.sort((a,b)=>a-b).reverse()
let sum=0;
for(let i = 0;i<array3.length;i++){
  sum += array3[i]
}
console.log(sum)
const array4 = [...new Set(array3)]
console.log(array4)
console.log(array3)
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
          <form onSubmit={handleSubmit((data) => console.log(data))} className="login">
            <div className="input-inner">
                <div className="input-wrap">
                  <input type="text" placeholder='admin@sneat.com' id='email' name='email'  className={errors.email ? "email-input has-input-error" : "email-input"} {...register('email', {required: 'Email is required',pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message: 'Invalid email address',},})}
                   style={{ borderColor: submitted && errors.email ? 'red' : '' }}/>
                    {errors.email && <p className='validation'>{errors.email.message}</p>}
                </div>
                <div className="input-wrap">
                  <input type="password" placeholder='Password' id='pswrd' name='pswrd' className={errors.password ? "email-input has-input-error" : "email-input"} {...register('password', {required: 'Password is required',minLength: {value: 6,message: 'Password must be at least 6 characters',}, maxLength: {value: 20,message: 'Password must not exceed 20 characters',},})}
                  style={{ borderColor: submitted && errors.password ? 'red' : '' }} />
                  {errors.password && <p className='validation' >{errors.password.message}</p>}
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
          </form>
        </div>
    </div>
  )
}

export default Login