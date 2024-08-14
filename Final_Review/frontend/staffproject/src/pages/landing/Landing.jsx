import React from 'react'
import './Landing.css';
import bg from '../landing/landing1.png';
import fb from '../landing/facebook.png';
import x from '../landing/twitter.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';
function Landing() {
  return (
    <div class="conatiner">
      <header>
        <div class="label">
          <a href="#">ShiftFlow</a>
        </div>
        <div class="navbar">
          <ul>
            <li><Link to='/'><a href="#">Home</a></Link></li>
            <li><Link to='/noti'><a href="#">Our Services</a></Link></li>
            <li><a href="#">Contact Us</a></li>
            <Link to='/register'><li><button class="btn">Sign Up</button></li></Link>
          </ul>
        </div>
      </header>
      <div class="body-content">
        <div class="b-title">
          <h1>Get your <span>Schedules</span> ready by our website</h1>
          <br/>
          <Link to='/login'><button style={{marginLeft:"2%",cursor: "pointer"}}>Login</button></Link>
          <div class="icons">
          <FacebookIcon style={{color:"#000000",marginTop:"1.5%",marginLeft:"5%",width:"25px",height:"25px"}}/>
            {/* <img src={x} /> */}
            <XIcon style={{color:"#000000",marginTop:"1.5%",marginLeft:"5%"}}/>
            <InstagramIcon style={{color:"#000000",marginTop:"1.5%",marginLeft:"5%"}}/>
          </div>
        </div>

        <div class="b-img">
          <img src={bg}/>
        </div>
      </div>
    </div>
  )
}

export default Landing