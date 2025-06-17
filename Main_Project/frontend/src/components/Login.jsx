import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/Pro.css';
import logo from '../assets/images/logo.png';
import { useDispatch } from 'react-redux';
import { setName } from '../redux/NameSlice';
import axios from 'axios';
import { toast } from 'react-toastify'; // Import toast for error handling

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        if (email && password) {
            try {
                // Send login request to backend
                const response = await axios.post('http://localhost:8080/api/auth/login', {
                    email,
                    password,
                });

                // Get JWT token from response
                const { accessToken, role } = response.data;
                localStorage.setItem("token", accessToken); // Store token in localStorage
                localStorage.setItem("role", role); // Store role in localStorage

                // Dispatch action to set user state
                dispatch(setName(email));

                // Redirect based on role
                if (email === "admin@gmail.com") {
                    navigate('/AdminDashboard');
                } else {
                    navigate('/Dashboard');
                }
            } catch (error) {
                toast.error("Login failed. Please check your credentials and try again.");
            }
        } else {
            toast.error("Login failed. Enter both credentials!");
        }
    };

    return (
        <div className='neee-lo'>
            <header className="lo" style={{ position: 'relative', width: 'auto', height: 'auto' }}>
                <div className="l" style={{ position: 'absolute', left: '0', top: '10px', padding: '10px' }}>
                    <img src={logo} alt="logo" className='l' style={{ maxHeight: "50px" }} />
                </div>
            </header>

            <div className="text-center m-5-auto">
                <h2>Sign in to us</h2>
                <form onSubmit={handleLogin}>
                    <p>
                        <label> email address:</label><br/><br/>
                        <input 
                            type="text" 
                            name="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </p>
                    <p>
                        <label>Password</label>
                        <br />
                        <br />
                        <input 
                            type="password" 
                            name="password" 
                            minLength={8}
                            id='pass'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                        <Link to="/forg"><label className="right-label">Forget password?</label></Link>
                    </p>
                    <p>
                        <br/>
                        <button id="sub_btn" type="submit">Login</button>
                    </p>
                </form>

                {/* {message && <div className="message">{message}</div>} */}

                <footer>
                    <p>First time? <Link to="/register">Create an account</Link></p>
                    <p><Link to="/home">Back to Homepage</Link></p>
                </footer>
            </div>
        </div>
    );
}
