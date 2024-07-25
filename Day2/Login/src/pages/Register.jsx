import React, { useRef,useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
function Register() {
    let name = useRef(null);
    let password = useRef(null);
    let email = useRef(null);
    const[error,setError] = useState({name:false,password:false,email:false})

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(name.current.value && password.current.value && email.current.value){    
            console.log('Form submitted')
            console.log('Username : ',name.current.value)
            console.log('Password : ',password.current.value)
            console.log('Email : ',email.current.value)
        }
        else 
        {
            if(!name.current.value && !password.current.value && !email.current.value)
            {
                setError((prev)=>{
                    return{...prev,name:true,password:true,email:true};
                })
            }
            else if(!name.current.value)
            {
                setError((prev)=>{
                    return{...prev,name:true,};
                })
            }
            else if(!password.current.value)
            {
                setError((prev)=>{
                    return{...prev,password:true};
                })
            }
            else if(!email.current.value)
            {
                setError((prev)=>{
                    return{...prev,email:true};
                })
            }
        }
    }
  
  return (
    <div className='login-box'>
        <h1>Register</h1>
        <br/>
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField inputRef={name} id="outlined-basic" label="Username" variant="outlined" required/><br/>
    {error.name&&(<Typography color={"red"} fontSize={"12px"} paddingLeft={"5%"}>Fill the username</Typography>)}
    <TextField inputRef={password} id="outlined-basic" label="Password" variant="outlined" type='password' required/><br/>
    {error.password&&(<Typography color={"red"} fontSize={"12px"} paddingLeft={"5%"}>Fill the password</Typography>)}
    <TextField inputRef={email} id="outlined-basic" label="Email" variant="outlined" type='email' required/><br/>
    {error.email&&(<Typography color={"red"} fontSize={"12px"} paddingLeft={"5%"}>Fill the email</Typography>)}
    <Button className='login-but' id='login-but' variant="contained" onClick={handleSubmit}>SUBMIT</Button>
  </Box>
  </div>
  )
}

export default Register