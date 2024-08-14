// import React, { useState } from 'react';
// import { PieChart } from '@mui/x-charts/PieChart';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import './Userpanel.css';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

// function User() {
//   const name = useSelector((state) => state.name);
//   const [profile, setProfile] = useState({ username: name, firstname: 'Null',lastname: 'Null', domain:'Null' });
//   const [editMode, setEditMode] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile({ ...profile, [name]: value });
//   };

//   const handleSave = () => {
//     setEditMode(false);
//     // Here you can add the logic to save the updated profile data to the server or state
//     alert('Profile updated successfully!');
//   };

//   return (
//     <>
//       <div className="dashboard-container">
//         <nav className="dashboard-nav">
//           <ul className="dashboard-nav-list">
//             <li>
//               <a href="#" className="dashboard-logo">
//                 <span className="dashboard-nav-item1">User</span><br />
//                 <span className="dashboard-nav-item1">DashBoard</span>
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <i className="fas fa-home"></i>
//                 <Link to='/collab'><span className="dashboard-nav-item">Home</span></Link>
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <i className="fas fa-cog"></i>
//                 <span className="dashboard-nav-item">About us</span>
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <i className="fas fa-question-circle"></i>
//                 <span className="dashboard-nav-item">Pricings</span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="dashboard-logout">
//                 <i className="fas fa-sign-out-alt"></i>
//                 <Link to='/'><span className="dashboard-nav-item">Log out</span></Link>
//               </a>
//             </li>
//           </ul>
//         </nav>

//         <section className="dashboard-main">
//           <div className="dashboard-main-top">
//             <i className="fas fa-user-cog"></i>
//           </div>
//           <div className="dashboard-main-skills">
//             <div className="dashboard-card">
//               <i className="fas fa-laptop-code"></i>
//               <h3>Schedule history</h3>
//               <p>Lists the past schedules created</p>
//               <button>View</button>
//             </div>
//             <div className="dashboard-card">
//               <i className="fab fa-wordpress"></i>
//               <h3>Notifications</h3>
//               <p>Lists the Notifications</p>
//               <button>View</button>
//             </div>
//             <div className="dashboard-card">
//               <i className="fas fa-palette"></i>
//               <h3>Reports</h3>
//               <p>Lists the statistical analysis and growth</p>
//               <button>View</button>
//             </div>
//             <div className="dashboard-card">
//               <i className="fab fa-app-store-ios"></i>
//               <h3>Make Schedule</h3>
//               <p>Make your own schedule</p>
//               <button>View</button>
//             </div>
//           </div>

//           <section className="dashboard-main-course">
//             <div className='chart-div'>
//               <p className='analy'>Analysis</p>
//               <PieChart
//                 series={[
//                   {
//                     data: [
//                       { id: 0, value: 10, label: 'CSE A' },
//                       { id: 1, value: 15, label: 'CSE B' },
//                       { id: 2, value: 20, label: 'CSE C' },
//                     ],
//                   },
//                 ]}
//                 width={400}
//                 height={200}
//               />
//             </div>
//             <div className='user-details'>
//               <div className='part1'>
//                 <AccountCircleIcon className='accounticon' style={{ fontSize: 200 }}></AccountCircleIcon>
//                 {editMode ? (
//                   <div className='profile-edit'>
//                     {/* <label>
//                       Username: <input type='text' name='username' value={name} onChange={handleChange} />
//                     </label><br /> */}
//                     <label>
//                       First Name: <input type='text' name='firstname' value={profile.firstname} onChange={handleChange} />
//                     </label><br />
//                     <label>
//                       Last Name: <input type='text' name='lastname' value={profile.lastname} onChange={handleChange} />
//                     </label><br />
//                     <label>
//                       Domain: <input type='text' name='domain' value={profile.domain} onChange={handleChange} />
//                     </label><br />
//                     <button onClick={handleSave}>Save</button>
//                   </div>
//                 ) : (
//                   <p className='current'>
//                     Username: {name}<br />
//                     First Name: {profile.firstname}<br />
//                     Last Name: {profile.lastname}<br />
//                     Domain : {profile.domain}<br />
//                     <button onClick={() => setEditMode(true)} className='edit'>Edit Profile</button>
//                   </p>
//                 )}
//               </div>
//             </div>
//           </section>
//         </section>
//       </div>
//     </>
//   );
// }

// export default User;





// import React, { useState } from 'react';
// import { PieChart } from '@mui/x-charts/PieChart';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import './Userpanel.css';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

// function User() {
//   const name = useSelector((state) => state.name);
//   const [profile, setProfile] = useState({ firstname: 'Null', lastname: 'Null', domain: 'Null' });
//   const [editMode, setEditMode] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile({ ...profile, [name]: value });
//   };

//   const handleSave = () => {
//     setEditMode(false);
//     // Add logic to save the updated profile data to the server or state
//     alert('Profile saved successfully!');
//   };

//   const handleUpdate = () => {
//     setEditMode(true);
//   };

//   return (
//     <>
//       <div className="dashboard-container">
//         <nav className="dashboard-nav">
//           <ul className="dashboard-nav-list">
//             <li>
//               <a href="#" className="dashboard-logo">
//                 <span className="dashboard-nav-item1">User</span><br />
//                 <span className="dashboard-nav-item1">DashBoard</span>
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <i className="fas fa-home"></i>
//                 <Link to='/collab'><span className="dashboard-nav-item">Home</span></Link>
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <i className="fas fa-cog"></i>
//                 <span className="dashboard-nav-item">About us</span>
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <i className="fas fa-question-circle"></i>
//                 <span className="dashboard-nav-item">Pricings</span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="dashboard-logout">
//                 <i className="fas fa-sign-out-alt"></i>
//                 <Link to='/'><span className="dashboard-nav-item">Log out</span></Link>
//               </a>
//             </li>
//           </ul>
//         </nav>

//         <section className="dashboard-main">
//           <div className="dashboard-main-top">
//             <i className="fas fa-user-cog"></i>
//           </div>
//           <div className="dashboard-main-skills">
//             <div className="dashboard-card">
//               <i className="fas fa-laptop-code"></i>
//               <h3>Schedule history</h3>
//               <p>Lists the past schedules created</p>
//               <button>View</button>
//             </div>
//             <div className="dashboard-card">
//               <i className="fab fa-wordpress"></i>
//               <h3>Notifications</h3>
//               <p>Lists the Notifications</p>
//               <button>View</button>
//             </div>
//             <div className="dashboard-card">
//               <i className="fas fa-palette"></i>
//               <h3>Reports</h3>
//               <p>Lists the statistical analysis and growth</p>
//               <button>View</button>
//             </div>
//             <div className="dashboard-card">
//               <i className="fab fa-app-store-ios"></i>
//               <h3>Make Schedule</h3>
//               <p>Make your own schedule</p>
//               <button>View</button>
//             </div>
//           </div>

//           <section className="dashboard-main-course">
//             <div className='chart-div'>
//               <p className='analy'>Analysis</p>
//               <PieChart
//                 series={[
//                   {
//                     data: [
//                       { id: 0, value: 10, label: 'CSE A' },
//                       { id: 1, value: 15, label: 'CSE B' },
//                       { id: 2, value: 20, label: 'CSE C' },
//                     ],
//                   },
//                 ]}
//                 width={400}
//                 height={200}
//               />
//             </div>
//             <div className='user-details'>
//               <div className='part1'>
//                 <AccountCircleIcon className='accounticon' style={{ fontSize: 200 }}></AccountCircleIcon>
//                 {editMode ? (
//                   <div className='profile-edit'>
//                     <label>
//                       First Name: <input type='text' name='firstname' value={profile.firstname} onChange={handleChange} />
//                     </label><br />
//                     <label>
//                       Last Name: <input type='text' name='lastname' value={profile.lastname} onChange={handleChange} />
//                     </label><br />
//                     <label>
//                       Domain: <input type='text' name='domain' value={profile.domain} onChange={handleChange} />
//                     </label><br />
//                     <button onClick={handleSave}>Save</button>
//                   </div>
//                 ) : (
//                   <p className='current'>
//                     Email: {name}<br />
//                     First Name: {profile.firstname}<br />
//                     Last Name: {profile.lastname}<br />
//                     Domain : {profile.domain}<br />
//                     <button onClick={handleUpdate} className='edit'>Update</button>
//                     <button onClick={handleSave} className='save'>Save</button>
//                   </p>
//                 )}
//               </div>
//             </div>
//           </section>
//         </section>
//       </div>
//     </>
//   );
// }

// export default User;


import React, { useState, useEffect } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Userpanel.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

function User() {
  const name = useSelector((state) => state.name);
  const [profile, setProfile] = useState({ firstname: '', lastname: '', domain: '' });
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    // Fetch the user profile if it exists
    axios.get(`http://localhost:8080/api/user/${name}`)
      .then(response => {
        if (response.data) {
          setProfile({
            firstname: response.data.firstName,
            lastname: response.data.lastName,
            domain: response.data.domain
          });
        }
      })
      .catch(error => console.error('There was an error fetching the profile!', error));
  }, [name]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = () => {
    axios.post('http://localhost:8080/api/user/save', {
      email: name,
      firstName: profile.firstname,
      lastName: profile.lastname,
      domain: profile.domain
    })
    .then(() => {
      setEditMode(false);
      alert('Profile saved successfully!');
    })
    .catch(error => console.error('There was an error saving the profile!', error));
  };

  const handleUpdate = () => {
    setEditMode(true);
  };

  return (
    <>
      <div className="dashboard-container">
        <nav className="dashboard-nav">
          <ul className="dashboard-nav-list">
            <li>
              <a href="#" className="dashboard-logo">
                <span className="dashboard-nav-item1">User</span><br />
                <span className="dashboard-nav-item1">DashBoard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-home"></i>
                <Link to='/collab'><span className="dashboard-nav-item">Home</span></Link>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-cog"></i>
                <Link to='/about'><span className="dashboard-nav-item">About us</span></Link>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-question-circle"></i>
                <Link to='/pricing'><span className="dashboard-nav-item">Pricings</span></Link>
              </a>
            </li>
            <li>
              <a href="#" className="dashboard-logout">
                <i className="fas fa-sign-out-alt"></i>
                <Link to='/'><span className="dashboard-nav-item">Log out</span></Link>
              </a>
            </li>
          </ul>
        </nav>

        <section className="dashboard-main">
          <div className="dashboard-main-top">
            <i className="fas fa-user-cog"></i>
          </div>
          <div className="dashboard-main-skills">
            <div className="dashboard-card">
              <i className="fas fa-laptop-code"></i>
              <h3>Schedule history</h3>
              <p>Lists the past schedules created</p>
              <button>View</button>
            </div>
            <div className="dashboard-card">
              <i className="fab fa-wordpress"></i>
              <h3>Notifications</h3>
              <p>Lists the Notifications</p>
              <button>View</button>
            </div>
            <div className="dashboard-card">
              <i className="fas fa-palette"></i>
              <h3>Reports</h3>
              <p>Lists the statistical analysis and growth</p>
              <button>View</button>
            </div>
            <div className="dashboard-card">
              <i className="fab fa-app-store-ios"></i>
              <h3>Make Schedule</h3>
              <p>Make your own schedule</p>
              <Link to='/adduser'><button>View</button></Link>
            </div>
          </div>

          <section className="dashboard-main-course">
            <div className='chart-div'>
              <p className='analy'>Usage Analysis</p>
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 10, label: 'Week 1' },
                      { id: 1, value: 15, label: 'Week 2' },
                      { id: 2, value: 20, label: 'Week 3' },
                      { id: 3, value: 35, label: 'Week 4' },
                    ],
                  },
                ]}
                width={400}
                height={200}
              />
            </div>
            <div className='user-details'>
              <div className='part1'>
                <AccountCircleIcon className='accounticon' style={{ fontSize: 200 }}></AccountCircleIcon>
                {editMode ? (
                  <div className='profile-edit'>
                    <label>
                      First Name: <input type='text' name='firstname' value={profile.firstname} onChange={handleChange} />
                    </label><br />
                    <label>
                      Last Name: <input type='text' name='lastname' value={profile.lastname} onChange={handleChange} />
                    </label><br />
                    <label>
                      Domain: <input type='text' name='domain' value={profile.domain} onChange={handleChange} />
                    </label><br />
                    <button className='saveprofile' onClick={handleSave}>Save</button>
                  </div>
                ) : (
                  <p className='current'>
                    Email: {name}<br />
                    First Name: {profile.firstname}<br />
                    Last Name: {profile.lastname}<br />
                    Domain : {profile.domain}<br />
                    <button onClick={handleUpdate} className='edit'>Update</button>
                  </p>
                )}
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}

export default User;
