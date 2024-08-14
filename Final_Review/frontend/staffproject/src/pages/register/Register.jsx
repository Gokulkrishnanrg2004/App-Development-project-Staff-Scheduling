import React , { useState }from 'react';
import './Register.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
const Register = () =>{
    const nav = useNavigate();
  const[name,setNameinput] = useState('');
  const[password,setPassword] = useState('');
  const[email,setEmail] = useState('');

    const handleRegister = async (e) =>{
        e.preventDefault();
        
        if(name && password)
          {
            // if(! /^(?=.*\d)[a-zA-Z\d]{1,}$/.test(name) || password.length<8 || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))
            //   {
            //     alert('Enter a valid username or password or email')
            //   }
            //     else 
            //     {
              try {
                    toast.success("Regsitered successfully !");
                    nav('/login');
                    const response = await axios.post("http://localhost:8080/api/auth/register",{
                      name,email,password,
                      });
                    console.log(response.data);
                  } 
                  catch (error) 
                  {
                    toast.error("Registration failed. Enter Valid credentials");
                  }
                // }
          }
        else if(!name || !email || !password)
        {
          toast.error("Fill the credentials !");
        }
      }
    return(
        <div className='register'>
          <ToastContainer/>
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
                 type="email" 
                placeholder='Email' 
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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