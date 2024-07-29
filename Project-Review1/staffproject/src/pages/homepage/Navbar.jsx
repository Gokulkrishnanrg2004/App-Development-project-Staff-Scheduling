import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = ({isLoggedIn, onLogOut})=> {

  return (
    <nav className='collab'>
        <div class="logo">
            ShiftFlow
        </div>
        <div class="menu">
            {/* <a href="#">Home</a> */}
            <Link to='/user' className="a">Dashboard</Link>
            <Link to='/Donate' className="a">Pricing</Link>
            <Link to='/Aboutus' className="a">About us</Link>
            {/* <Link to='/login' className="a">Logout </Link> */}
            {isLoggedIn ? (
            <Link to='/' className="a" onClick={onLogOut}>Logout</Link>
        ) : (
          <Link to='/' className="a">Login/Logout</Link>
        )}
        </div>
        <div class="register">
            <Link to='/City'>Schedule</Link>
        </div>
    </nav>
  )
}

export default Navbar