import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/Pro.css';
import logo from '../assets/images/logo.png';

const Pricing = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        setIsLoggedIn(true);
        setUserEmail('user@example.com');
        navigate('/home');
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserEmail('');
        navigate('/');
    };

    const handleGetStarted = (plan) => {
        // Define prices for each plan
        const prices = {
            Free: 0,
            Starter: 2500, // $25 in INR
            Business: 4000, // $40 in INR
            Enterprise: 8000, // $80 in INR
        };

        navigate('/payment', { state: { plan, amount: prices[plan] || 0 } });
    };

    return (
        <div>
            <header className="navbar">
                <div className="logo-container">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="logo" />
                    </Link>
                </div>
                <nav className="nav-menu">
                    <ul>
                        <li className="tooltip">
                            <Link to="/">Features</Link>
                        </li>
                        <li className="tooltip">
                            <Link to="/pricing">Pricing</Link>
                        </li>
                        <li className="tooltip">
                            <Link to="/Layout">Help</Link>
                        </li>
                        <li className="tooltip">
                            <Link to="/dashboard">Demo</Link>
                        </li>
                        {isLoggedIn ? (
                            <li className="tooltip">
                                <span>
                                    Logged in as {userEmail}
                                    <button onClick={handleLogout} className="logout-button">Logout</button>
                                </span>
                            </li>
                        ) : (
                            <li className="tooltip">
                                <Link to="/login" onClick={handleLogin}>Log in</Link>
                            </li>
                        )}
                        <li className="highlight tooltip">
                            <Link to="/dashboard">Create a schedule</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="primary-content">
                <div className="feature-content">
                    <div className="background-blue white-background-gradient vector-scene">
                        <div id="48nwA" className="wrapper feature full-width first-feature">
                            <h1>Priced per team, not per employee.</h1>
                            <p className="introduction">
                                Our flat monthly price per team means there's no unexpected surprises, no matter how fast you grow.
                            </p>
                            <div id="billing-period-selector">
                                <span id="monthly" className="selected">paid monthly</span>
                                <span id="yearly">paid yearly</span>
                            </div>
                            <div className="handwriting save-discount">
                                <div></div>save 15%
                            </div>
                            <ul id="plans">
                                <li className="plan">
                                    <h2>Free</h2>
                                    <span className="price">
                                        $0<span className="price-sub-text">per team, forever</span>
                                    </span>
                                    <ul className="plan-features">
                                        <li>5 team members</li>
                                        <li>1 manager</li>
                                        <li>1 week of historical data</li>
                                        <li>1 week of forward planning</li>
                                        <li>3 week on-screen editor</li>
                                    </ul>
                                    <span className="get-started">
                                        <button className="fill-on-hover blue" onClick={() => handleGetStarted('Free')}>Get started</button>
                                    </span>
                                </li>
                                <li className="plan">
                                    <h2>Starter</h2>
                                    <span className="price">
                                        $25<span className="price-sub-text">per team, forever</span>
                                    </span>
                                    <ul className="plan-features">
                                        <li>20 team members</li>
                                        <li>1 manager</li>
                                        <li>1 year of historical data</li>
                                        <li>3 months of forward planning</li>
                                        <li>6 week on-screen editor</li>
                                    </ul>
                                    <span className="get-started">
                                        <button className="fill-on-hover blue" onClick={() => handleGetStarted('Starter')}>Get started</button>
                                    </span>
                                </li>
                                <li className="plan">
                                    <h2>Business</h2>
                                    <span className="price">
                                        $40<span className="price-sub-text">per team, forever</span>
                                    </span>
                                    <ul className="plan-features">
                                        <li>100 team members</li>
                                        <li>100 managers</li>
                                        <li>5 years of historical data</li>
                                        <li>1 year of forward planning</li>
                                        <li>20 week on-screen editor</li>
                                    </ul>
                                    <span className="get-started">
                                        <button className="fill-on-hover blue" onClick={() => handleGetStarted('Business')}>Get started</button>
                                    </span>
                                </li>
                                <li className="plan">
                                    <h2>Enterprise</h2>
                                    <span className="price">
                                        $80<span className="price-sub-text">per team, forever</span>
                                    </span>
                                    <ul className="plan-features">
                                        <li>300 team members</li>
                                        <li>300 managers</li>
                                        <li>10 years of historical data</li>
                                        <li>3 years forward planning</li>
                                        <li>52 week on-screen editor</li>
                                    </ul>
                                    <span className="get-started">
                                        <button className="fill-on-hover blue" onClick={() => handleGetStarted('Enterprise')}>Get started</button>
                                    </span>
                                </li>
                                {/* Other plan items */}
                            </ul>
                            <p style={{ textAlign: "center", margin: "90px 0 -20px 0" }}>
                                Planning to schedule more than 300 team members on a single team?
                                <a href="contact-us">Get in touch</a>!
                            </p>
                            <div className="clear"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
