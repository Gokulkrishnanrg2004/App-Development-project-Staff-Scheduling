// import React from 'react'
// import { BarChart } from '@mui/x-charts/BarChart';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import './Admin.css';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// function Admin() {
//     const name = useSelector((state) => state.name);
//   return (
//     <>
//   <div class="dashboard-container">
//     <nav class="dashboard-nav">
//       <ul class="dashboard-nav-list">
//         <li><a href="#" class="dashboard-logo">
//           <span class="dashboard-nav-item1">Admin</span><br/>
//           <span class="dashboard-nav-item1">DashBoard</span>
//         </a></li>
//         <li><a href="#">
//           <i class="fas fa-user"></i>
//           <Link to='/add'><span class="dashboard-nav-item">Manage users</span></Link>
//         </a></li>
//         <li><a href="#">
//           <i class="fas fa-cog"></i>
//           <span class="dashboard-nav-item">About us</span>
//         </a></li>
//         <li><a href="#">
//           <i class="fas fa-question-circle"></i>
//           <span class="dashboard-nav-item">Pricings</span>
//         </a></li>
//         <li><a href="#" class="dashboard-logout">
//           <i class="fas fa-sign-out-alt"></i>
//           <Link to='/'><span class="dashboard-nav-item">Log out</span></Link>
//         </a></li>
//       </ul>
//     </nav>

//     <section class="dashboard-main">
//       <div class="dashboard-main-top">
//         <i class="fas fa-user-cog"></i>
//       </div>
//       <div class="dashboard-main-skills">
//         <div class="dashboard-card">
//           <i class="fas fa-laptop-code"></i>
//           <h3>Current Customers</h3>
//           <p>Lists the current customers enrolled</p>
//           <button>View</button>
//         </div>
//         <div class="dashboard-card">
//           <i class="fab fa-wordpress"></i>
//           <h3>Notifications</h3>
//           <p>Lists the Notifications</p>
//           <button>View</button>
//         </div>
//         <div class="dashboard-card">
//           <i class="fas fa-palette"></i>
//           <h3>Reports</h3>
//           <p>Lists the statistical analysis and growth</p>
//           <button>View</button>
//         </div>
//         <div class="dashboard-card">
//           <i class="fab fa-app-store-ios"></i>
//           <h3>Make Schedule</h3>
//           <p>Make your team and create schedule</p>
//           <Link to='/adduser'><button>View</button></Link>
//         </div>
//       </div>

//       <section class="dashboard-main-course">
//         {/* <h1>My Courses</h1>
//         <div class="dashboard-course-box">
//           <ul class="dashboard-course-tabs">
//             <li class="dashboard-course-tab-active">In Progress</li>
//             <li>Explore</li>
//             <li>Incoming</li>
//             <li>Finished</li>
//           </ul>
//           <div class="dashboard-course-content">
//             <div class="dashboard-course-box-item">
//               <h3>HTML</h3>
//               <p>80% - Progress</p>
//               <button>Continue</button>
//               <i class="fab fa-html5 dashboard-html-icon"></i>
//             </div>
//             <div class="dashboard-course-box-item">
//               <h3>CSS</h3>
//               <p>50% - Progress</p>
//               <button>Continue</button>
//               <i class="fab fa-css3-alt dashboard-css-icon"></i>
//             </div>
//             <div class="dashboard-course-box-item">
//               <h3>JavaScript</h3>
//               <p>30% - Progress</p>
//               <button>Continue</button>
//               <i class="fab fa-js-square dashboard-js-icon"></i>
//             </div>
//           </div>
//         </div> */}
//         <div className='chart-div'>
//         <p className='analy'>Analysis</p>
//         <BarChart
//       xAxis={[{ scaleType: 'band', data: ['CSE', 'ECE', 'MECH'] }]}
//       series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
//       width={500}
//       height={300} className='chart1'
//     />
//     </div>
//     <div className='admin-details'>
//         <div className='part1'>
//         <AccountCircleIcon className='accounticon' style={{ fontSize: 200 }}></AccountCircleIcon>
//         <p className='current'>
//         Current admin logged : {name}<br/>
//         Role : Lead Admin<br/>
//         Active : 2 hours ago<br/>
//         </p>
//         </div>
        
//     </div>
//       </section>
//     </section>
//   </div>
//   </>
//   );
// }

// export default Admin
import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Admin.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Admin() {
    const name = useSelector((state) => state.name);
  return (
    <>
      <div className="admin-dashboard-container">
        <nav className="admin-dashboard-nav">
          <ul className="admin-dashboard-nav-list">
            <li>
              <a href="#" className="admin-dashboard-logo">
                <span className="admin-dashboard-nav-item1">Admin</span><br/>
                <span className="admin-dashboard-nav-item1">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-user"></i>
                <Link to='/add'><span className="admin-dashboard-nav-item">Manage Users</span></Link>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-cog"></i>
                <span className="admin-dashboard-nav-item">About Us</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-question-circle"></i>
                <Link to='/pricing'><span className="admin-dashboard-nav-item">Pricings</span></Link>
              </a>
            </li>
            <li>
              <a href="#" className="admin-dashboard-logout">
                <i className="fas fa-sign-out-alt"></i>
                <Link to='/'><span className="admin-dashboard-nav-item">Log Out</span></Link>
              </a>
            </li>
          </ul>
        </nav>

        <section className="admin-dashboard-main">
          <div className="admin-dashboard-main-top">
            <i className="fas fa-user-cog"></i>
          </div>
          <div className="admin-dashboard-main-skills">
            <div className="admin-dashboard-card">
              <i className="fas fa-laptop-code"></i>
              <h3>Current Customers</h3>
              <p>Lists the current customers enrolled</p>
              <button>View</button>
            </div>
            <div className="admin-dashboard-card">
              <i className="fab fa-wordpress"></i>
              <h3>Queries</h3>
              <p>Lists the user queries</p>
              <Link to='/viewq'><button>View</button></Link>
            </div>
            <div className="admin-dashboard-card">
              <i className="fas fa-palette"></i>
              <h3>Reports</h3>
              <p>Lists the statistical analysis and growth</p>
              <button>View</button>
            </div>
            <div className="admin-dashboard-card">
              <i className="fab fa-app-store-ios"></i>
              <h3>Make Schedule</h3>
              <p>Make your team and create schedule</p>
              <Link to='/employee'><button>View</button></Link>
            </div>
          </div>

          <section className="admin-dashboard-main-analysis">
            <div className="admin-chart-div">
              <p className="admin-analysis-heading">Analysis</p>
              <BarChart
                xAxis={[{ scaleType: 'band', data: ['CSE', 'ECE', 'MECH'] }]}
                series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                width={500}
                height={300}
                className="admin-chart"
              />
            </div>
            <div className="admin-details">
              <div className="admin-info">
                <AccountCircleIcon className="admin-account-icon" style={{ fontSize: 200 }} />
                <p className="admin-current">
                  Current admin logged: {name}<br/>
                  Role: Lead Admin<br/>
                  Active: 2 hours ago<br/>
                </p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}

export default Admin;
