import React from 'react'
// import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Userpanel.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function User() {
    const name = useSelector((state) => state.name);
  return (
    <>
  <div class="dashboard-container">
    <nav class="dashboard-nav">
      <ul class="dashboard-nav-list">
        <li><a href="#" class="dashboard-logo">
          <span class="dashboard-nav-item1">User</span><br/>
          <span class="dashboard-nav-item1">DashBoard</span>
        </a></li>
        <li><a href="#">
          <i class="fas fa-home"></i>
          <Link to='/collab'><span class="dashboard-nav-item">Home</span></Link>
        </a></li>
        <li><a href="#">
          <i class="fas fa-cog"></i>
          <span class="dashboard-nav-item">About us</span>
        </a></li>
        <li><a href="#">
          <i class="fas fa-question-circle"></i>
          <span class="dashboard-nav-item">Pricings</span>
        </a></li>
        <li><a href="#" class="dashboard-logout">
          <i class="fas fa-sign-out-alt"></i>
          <Link to='/'><span class="dashboard-nav-item">Log out</span></Link>
        </a></li>
      </ul>
    </nav>

    <section class="dashboard-main">
      <div class="dashboard-main-top">
        <h1>Skills</h1>
        <i class="fas fa-user-cog"></i>
      </div>
      <div class="dashboard-main-skills">
        <div class="dashboard-card">
          <i class="fas fa-laptop-code"></i>
          <h3>Schedule history</h3>
          <p>Lists the past schedules created</p>
          <button>View</button>
        </div>
        <div class="dashboard-card">
          <i class="fab fa-wordpress"></i>
          <h3>Notifications</h3>
          <p>Lists the Notifications</p>
          <button>View</button>
        </div>
        <div class="dashboard-card">
          <i class="fas fa-palette"></i>
          <h3>Reports</h3>
          <p>Lists the statistical analysis and growth</p>
          <button>View</button>
        </div>
        <div class="dashboard-card">
          <i class="fab fa-app-store-ios"></i>
          <h3>Make Schedule</h3>
          <p>Make your own schedule</p>
          <button>View</button>
        </div>
      </div>

      <section class="dashboard-main-course">
        {/* <h1>My Courses</h1>
        <div class="dashboard-course-box">
          <ul class="dashboard-course-tabs">
            <li class="dashboard-course-tab-active">In Progress</li>
            <li>Explore</li>
            <li>Incoming</li>
            <li>Finished</li>
          </ul>
          <div class="dashboard-course-content">
            <div class="dashboard-course-box-item">
              <h3>HTML</h3>
              <p>80% - Progress</p>
              <button>Continue</button>
              <i class="fab fa-html5 dashboard-html-icon"></i>
            </div>
            <div class="dashboard-course-box-item">
              <h3>CSS</h3>
              <p>50% - Progress</p>
              <button>Continue</button>
              <i class="fab fa-css3-alt dashboard-css-icon"></i>
            </div>
            <div class="dashboard-course-box-item">
              <h3>JavaScript</h3>
              <p>30% - Progress</p>
              <button>Continue</button>
              <i class="fab fa-js-square dashboard-js-icon"></i>
            </div>
          </div>
        </div> */}
        <div className='chart-div'>
        <p className='analy'>Analysis</p>
        <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'CSE A' },
            { id: 1, value: 15, label: 'CSE B' },
            { id: 2, value: 20, label: 'CSE C' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
    </div>
    <div className='admin-details'>
        <div className='part1'>
        <AccountCircleIcon className='accounticon' style={{ fontSize: 200 }}></AccountCircleIcon>
        <p className='current'>
        Current User logged : {name}<br/>
        Role : User<br/>
        Active : 2 hours ago<br/>
        </p>
        </div>
    </div>
      </section>
    </section>
  </div>
  </>
  );
}

export default User