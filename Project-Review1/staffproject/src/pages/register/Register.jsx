import React , { useState }from 'react';
import './Register.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Link,useNavigate} from 'react-router-dom';
const Register = () =>{
    const nav = useNavigate();
  const[name,setNameinput] = useState('');
  const[password,setPassword] = useState('');
  const[email,setEmail] = useState('');

    const handleRegister = (e) =>{
        e.preventDefault();
        
        if(name && password)
          {
            if(! /^(?=.*\d)[a-zA-Z\d]{1,}$/.test(name) || password.length<8 || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))
              {
                alert('Enter a valid username or password or email')
              }
                else 
                {
                  toast.success("Regsitered successfully !");
                  console.log('Register Form submitted')
                  console.log('Username : ',name)
                  console.log('Password : ',password)
                  console.log('Email : ',email)
                  nav('/');
                }
          }
        else if(!name || !email || !password)
        {
          toast.error("Enter valid credentials !");
        }
      }
    return(
        <div className='register'>
        <div className='wrap1'>
            <form action="">
                <h1>Regsiter to ShiftFlow</h1>
                <div className="input-box1">
                    <input type="text" placeholder='First name' required/>
                </div>
                <div className="input-box1">
                    <input type="text" placeholder='Last name' required/>
                </div>
                <div className="input-box1">
                <input 
                 type="email" 
                placeholder='Email' 
                id='name'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                </div>
                <div className="input-box1">
                <input 
                 type="text" 
                placeholder='Username' 
                id='name'
                value={name}
                onChange={(e) => setNameinput(e.target.value)}
                required
                />
                </div>
                <div className="input-box1">
                <input 
                type="password" 
                minLength={8} 
                placeholder='Password' 
                id='pass'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required/>
                </div>
                <button type='submit' onClick={handleRegister}>Sign up</button>
            </form>
        </div>
        </div>
    )
}
export default Register;