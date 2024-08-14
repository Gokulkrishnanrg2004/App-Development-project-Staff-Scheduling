import React, { useState } from 'react';
import { CSVLink } from 'react-csv';
import { format, addDays } from 'date-fns';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import './Schedule.css';
import './Sidebar.css'; // Assuming the sidebar styles are in Sidebar.css

const Schedule = () => {
  const [staff, setStaff] = useState([]);
  const [newStaff, setNewStaff] = useState({ id: '', name: '' });
  const [schedule, setSchedule] = useState({});
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const getDatesInRange = (start, end) => {
    const dates = [];
    let currentDate = start;
    while (currentDate <= end) {
      dates.push(format(currentDate, 'yyyy-MM-dd'));
      currentDate = addDays(currentDate, 1);
    }
    return dates;
  };

  const handleAddStaff = () => {
    if (staff.find(s => s.id === newStaff.id)) {
      toast.error('Staff with the same ID already exists!');
      return;
    }
    setStaff([...staff, newStaff]);
    setNewStaff({ id: '', name: '' });
    toast.success('Staff added successfully!');
  };

  const handleUpdate = (staffId, date, value) => {
    setSchedule({
      ...schedule,
      [staffId]: {
        ...schedule[staffId],
        [date]: value
      }
    });
  };

  const handleDelete = (staffId) => {
    setStaff(staff.filter(s => s.id !== staffId));
    const newSchedule = { ...schedule };
    delete newSchedule[staffId];
    setSchedule(newSchedule);
    toast.success('Staff deleted successfully!');
  };

  const downloadData = staff.map(({ id, name }) => {
    const row = { id, name };
    if (startDate && endDate && startDate !== endDate) {
      const dates = getDatesInRange(new Date(startDate), new Date(endDate));
      dates.forEach(date => {
        row[date] = schedule[id] ? schedule[id][date] : '';
      });
    }
    return row;
  });

  const dates = startDate && endDate && startDate !== endDate
    ? getDatesInRange(new Date(startDate), new Date(endDate))
    : [];

  return (
    <div className="dashboard-container">
      <ToastContainer />
      <nav className="dashboard-nav">
        <ul className="dashboard-nav-list">
          <li>
            <a href="#" className="dashboard-logo">
              <span className="dashboard-nav-item1">Admin</span><br/>
              <span className="dashboard-nav-item1">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-user"></i>
              <Link to='/add'><span className="dashboard-nav-item">Manage users</span></Link>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-cog"></i>
              <span className="dashboard-nav-item">About us</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-question-circle"></i>
              <span className="dashboard-nav-item">Pricings</span>
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
      <div className="schedule-container">
        <h1 className="schedule-header">Schedule</h1>
        <div className="schedule-inputs">
          <input
            type="text"
            placeholder="Staff ID"
            value={newStaff.id}
            onChange={(e) => setNewStaff({ ...newStaff, id: e.target.value })}
          />
          <input
            type="text"
            placeholder="Staff Name"
            value={newStaff.name}
            onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })}
          />
          <button className="schedule-button" onClick={handleAddStaff}>Add Staff</button>
        </div>
        <div className="schedule-inputs">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <table className="schedule-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              {dates.map(date => (
                <th key={date}>{date}</th>
              ))}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {staff.map(({ id, name }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                {dates.map(date => (
                  <td key={date}>
                    <input
                      type="text"
                      value={schedule[id] && schedule[id][date] ? schedule[id][date] : ''}
                      onChange={(e) => handleUpdate(id, date, e.target.value)}
                    />
                  </td>
                ))}
                <td>
                  <button className="schedule-delete-button" onClick={() => handleDelete(id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <CSVLink
          data={downloadData}
          filename="schedule.csv"
          onClick={() => {
            if (staff.length === 0) {
              toast.error('No data to download');
              return false;
            }
            toast.success('Download successful!');
            return true;
          }}
        >
          <button className="schedule-button">Download</button>
        </CSVLink>
        <div className="schedule-actions">
          <button onClick={() => toast.success('Schedule updated!')}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
