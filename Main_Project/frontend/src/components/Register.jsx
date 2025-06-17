// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../assets/Pro.css';
// import logo from '../assets/images/logo.png';
// import axios from 'axios';

// export default function Register() {
//     const navigate = useNavigate();
//     const [userData, setUserData] = useState({
//         name: "",
//         email: "",
//         password: "",
//         roles: "USER",
//       });
    
//       const handleChange = (event) => {
//         const { name, value } = event.target;
//         setUserData({ ...userData, [name]: value });
//       };
    

//     const handleRegister = async (event) => {
//         event.preventDefault();
//         try {
//           const response = await axios.post(
//             "http://localhost:8080/api/auth/register",
//             userData
//           );
//           navigate('/login')
//           console.log(response.data);
//         } catch (error) {
//           console.error(error);
//         }
//       };

//     return (
//         <div className='reggg'>
//             <header className="lo" style={{ position: 'relative', width: '10%', height: '1px' }}>
//                 <div className="l" style={{ position: 'absolute', left: '0', bottom: '1', padding: '10px', marginTop: '10px' }}>
//                     <img src={logo} alt="logo" className='l' style={{ maxHeight: "50px" }} />
//                 </div>
//             </header>
//             <div className="text-center m-5-auto">
//                 <h2>Join us</h2>
//                 <h5>Create your personal account</h5>
//                 <form onSubmit={handleRegister}>
//                     <p>
//                         <label>Username</label><br />
//                         <input type="text" name="name" value={userData.name} onChange={handleChange} required />
//                     </p>
//                     <p>
//                         <label>Email address</label><br />
//                         <input type="email" name="email" value={userData.email} onChange={handleChange} required />
//                     </p>
//                     <p>
//                         <label>Password</label><br />
//                         <input type="password" name="password" minLength={8} id='pass' value={userData.password} onChange={handleChange} required />
//                     </p>
//                     <p>
//                         <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree to all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
//                     </p>
//                     <p>
//                         <button id="sub_btn" type="submit" >Register</button>
//                     </p>
//                 </form>
//                 {/* {message && <div className="message">{message}</div>} */}
//                 <footer>
//                     <p><Link to="/home">Back to Homepage</Link>.</p>
//                 </footer>
//             </div>
//         </div>
//     );
// }
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/Pro.css';
import logo from '../assets/images/logo.png';
import axios from 'axios';

export default function Register() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        roles: "USER",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

    const validateEmail = (email) => {
        // Email must be in lowercase, include numbers, and end with gmail.com or yahoo.com
        const emailRegex = /^[a-z0-9]+@[a-z]+\.com$/;
        const domainCheck = email.endsWith('@gmail.com') || email.endsWith('@yahoo.com');
        return emailRegex.test(email) && domainCheck;
    };

    const validatePassword = (password) => {
        // Password must contain at least one uppercase, one lowercase, one special character, and be at least 8 characters long
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleRegister = async (event) => {
        event.preventDefault();

        const { email, password } = userData;

        if (!validateEmail(email)) {
            toast.error("Invalid email format. Use only lowercase letters, and it should end with gmail.com or yahoo.com.");
            return;
        }

        if (!validatePassword(password)) {
            toast.error("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one special character.");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:8080/api/auth/register",
                userData
            );
            toast.success("Registration successful! Redirecting to login...");
            navigate('/login');
            console.log(response.data);
        } catch (error) {
            toast.error("Registration failed. Please try again.");
            console.error(error);
        }
    };

    return (
        <div className='reggg'>
            <ToastContainer />
            <header className="lo" style={{ position: 'relative', width: '10%', height: '1px' }}>
                <div className="l" style={{ position: 'absolute', left: '0', bottom: '1', padding: '10px', marginTop: '10px' }}>
                    <img src={logo} alt="logo" className='l' style={{ maxHeight: "50px" }} />
                </div>
            </header>
            <div className="text-center m-5-auto">
                <h2>Join us</h2>
                <h5>Create your personal account</h5>
                <form onSubmit={handleRegister}>
                    <p>
                        <label>Username</label><br />
                        <input type="text" name="name" value={userData.name} onChange={handleChange} required />
                    </p>
                    <p>
                        <label>Email address</label><br />
                        <input type="email" name="email" value={userData.email} onChange={handleChange} required />
                    </p>
                    <p>
                        <label>Password</label><br />
                        <input type="password" name="password" minLength={8} id='pass' value={userData.password} onChange={handleChange} required />
                    </p>
                    <p>
                        <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree to all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                    </p>
                    <p>
                        <button id="sub_btn" type="submit">Register</button>
                    </p>
                </form>
                <footer>
                    <p><Link to="/home">Back to Homepage</Link>.</p>
                </footer>
            </div>
        </div>
    );
}
