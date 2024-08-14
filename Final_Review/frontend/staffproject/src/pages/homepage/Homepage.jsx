import React from 'react'
import './Homepage.css'
import img1 from '../login/img1.webp';
import { useSelector } from 'react-redux';
function Homepage() {
  const name = useSelector((state) => state.name);
  return (
    <div className='home'>
    <div class="txt">
      
    <h1>Make the perfect day with our schedule</h1>
    {/* <a href="#">Shop now</a> */}
    <br/>
    <p> Aim of our website is a robust platform designed to streamline the process of creating and managing employee schedules. It offers a user-friendly interface where managers can easily assign shifts, track hours, and accommodate employee availability and time-off requests. The site includes features such as automated scheduling, conflict detection, and shift swapping, which enhance efficiency and reduce errors. Additionally, it provides real-time updates and notifications to ensure all staff members are informed of their schedules. </p>

</div>
<div className='imghome1'>
  <p className='img1'>Welcome {name}!</p>
</div>
</div>
  )
}

export default Homepage