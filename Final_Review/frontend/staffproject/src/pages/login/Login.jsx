// import React , { useState }from 'react';
// import { useDispatch } from 'react-redux';
// import { setName } from '../redux/nameSlice';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// // import TextField from '@mui/material/TextField';
// // import Button from '@mui/material/Button';
// // import { Typography } from '@mui/material';
// import { Link, useNavigate } from 'react-router-dom';
// import './Login.css';

// const Login  = ({onLogin}) => {

//   const nav = useNavigate();
//   const[name,setNameinput] = useState('');
//   const[password,setPassword] = useState('');
//   const dispatch = useDispatch();

//   const handleLogin = (e) =>{
//     e.preventDefault();
    
//     if(name && password)
//       {
//         if(! /^(?=.*\d)[a-zA-Z\d]{1,}$/.test(name) || password.length<8)
//           {
//             toast.error("Enter valid credentials !", {
//               position: toast.POSITION.TOP_CENTER,
//             });
//           }
//           else if(name==="admin2004" && password==="12345678")
//             {
//               dispatch(setName(name));
//               nav('/admin')
//               console.log('Admin logged in');
//             }
//             else 
//             {
//               onLogin();
//               dispatch(setName(name));
//               console.log('Form submitted')
//               console.log('Username : ',name)
//               console.log('Password : ',password)
//               nav('/collab')
//             }
//       }
//     else if(!name)
//     {
//       toast.error("Enter valid credentials !", {
//         position: toast.POSITION.TOP_CENTER,
//       });
//     }
//     else if(!password)
//     {
//       toast.error("Enter valid credentials !", {
//         position: toast.POSITION.TOP_CENTER,
//       });
//     }
//     else 
//     {
//       toast.error("Enter valid credentials !", {
//         position: toast.POSITION.TOP_CENTER,
//       });
//     }
//   }

//   return (
//     <div className='login'>
//     <div className='wrap'>
//       <form method='post'>
//         <h1>Login to ShiftFlow</h1>
//         <div className="input-box">
//           <input 
//           type="text" 
//           placeholder='Username' 
//           id='name'
//           value={name}
//           onChange={(e) => setNameinput(e.target.value)}
//           required
//           />
//         </div>
//         <div className="input-box">
//           <input 
//           type="password" 
//           minLength={8} 
//           placeholder='Password' 
//           id='pass'
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required/>
//         </div>
//         <div className='check'>
//           <label><input type='checkbox'/> Remember me</label>
//         </div>
//         <br/>
//           <button type='submit' onClick={handleLogin}>Login</button>
//         <div className='register2'>
//             <Link to='/register'><p>Don't have an account? Signup</p></Link>
//         </div>
//       </form>
//     </div>
//     </div>
//   )
// }

// export default Login;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setName } from '../redux/nameSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

const Login = ({ onLogin }) => {

  const nav = useNavigate();
  const [email, setNameinput] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (email && password) 
    {
      try {
        // Send login request to backend
        const response = await axios.post('http://localhost:8080/api/auth/login', {
          email,
          password,
        });

        // Get JWT token from response
        console.log(response.data);
        const {accessToken, role} = response.data;
        localStorage.setItem("token", accessToken); // Store token in localStorage
        localStorage.setItem("role", role); // Store token in localStorage
        console.log("Token: ",localStorage.getItem("token"));

        // Dispatch action to set user state
        dispatch(setName(email));

        // Call onLogin callback if provided
        onLogin();

        console.log("Login Successful!");
        if(email === "admin@gmail.com")
        {
          nav('/admin');
        }
        else 
        {
          nav('/collab'); // Redirect to home page
        }
      } catch (error) {
        toast.error("Login failed. Please check your credentials and try again.");
      }
    } 
    else 
    {
      toast.error("Login failed. Enter both credentials!");
    }
  }

  return (
    <div className='login'>
      <ToastContainer />
      <div className='wrap'>
        <form method='post'>
          <h1>Login to ShiftFlow</h1>
          <div className="input-box">
            <input 
              type="text" 
              placeholder='Email' 
              id='name'
              value={email}
              onChange={(e) => setNameinput(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <input 
              type="password" 
              minLength={8} 
              placeholder='Password' 
              id='pass'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='check'>
            <label><input type='checkbox' /> Remember me</label>
          </div>
          <br />
          <button type='submit' onClick={handleLogin}>Login</button>
          <div className='register2'>
            <Link to='/register'><p>Don't have an account? Signup</p></Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
