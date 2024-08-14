import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import img1 from '../login/imghome2.png';
function Footer() {
  return (
    <div className='home-footer'>
      <div class="txt-footer">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      <div className='footpara'>
        <p className='footercontent'>Effortlessly schedule, manage, and optimize your staff timings with ShiftFlow. Our user-friendly platform ensures seamless shift planning, real-time updates, and improved communication, helping you enhance productivity and streamline operations. Join us in transforming the way you manage your team.ShiftFlow revolutionizes workforce management with intuitive staff scheduling solutions designed to enhance productivity and streamline operations.</p>
        
      </div>
      <div className='address'>
        <p>
        <br/>
        Address:<br/>
        1234 Scheduling Lane, Suite 100<br/>
        Cityville, State, 12345<br/>
        <br/>
        <br/>
        </p>
      </div>
    <div className='footer'>
    <div className='links'>
      {/* <br/> */}
      <p className='follow'>Follow us on :</p>
      {/* <Link to='/#'>Donate a pet</Link> */}
      <XIcon className='xicon'></XIcon>
      <p className='igx'>X</p>
      <InstagramIcon className='xicon'></InstagramIcon>
      <p className='igp'>Instagram</p>
      <FacebookIcon className='xicon'></FacebookIcon>
      <p className='facp'>FaceBook</p>
    </div>
    <div className='copyright'>
    <p>© 2024 ShiftFlow. All rights reserved. Unauthorized duplication or publication of any materials from this site is expressly prohibited.</p>
    <br/>
    <span>
       ◉ CHENNAI<br/>
       ◉ HYDERABAD <br/>
       ◉ MUMBAI<br/>
    </span>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Footer