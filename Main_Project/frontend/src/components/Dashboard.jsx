import DownloadIcon from '@mui/icons-material/Download';
import { Button } from '@mui/material';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTable } from 'react-table';
import download from '../assets/images/download.jpeg';
import Logo from '../assets/images/log01.png';
import './Dashboard.css';
import Layout from './Layout'; // Import Layout component

const API_URL = 'http://localhost:8080/api/employees'; // Your API URL

function Dashboard() {
    const name = useSelector((state) => state.name); // redux name
    const nav = useNavigate();
    const [data, setData] = useState([]);
    const [showProfile, setShowProfile] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching employees:', error));
    }, []);

    const downloadPDF = () => {
        const input = document.getElementById('scheduleTable');
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('landscape'); // Set orientation to landscape
            pdf.addImage(imgData, 'PNG', 10, 10, 280, 0); // Adjust width and height as needed
            pdf.save("schedule.pdf");
        });
    };

    const updateSchedule = (employee) => {
        fetch(`${API_URL}/update-schedule`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify([employee]),
        })
        .then(response => response.json())
        .then(updatedEmployees => {
            setData(oldData => oldData.map(emp => emp.id === employee.id ? employee : emp));
            setShowProfile(false);
        })
        .catch(error => console.error('Error updating schedule:', error));
    };

    const columns = React.useMemo(
        () => [
            { Header: 'Name', accessor: 'name' },
            { Header: 'Role', accessor: 'role' },
            { Header: moment().startOf('week').format('ddd. MMM D'), accessor: 'mon' },
            { Header: moment().startOf('week').add(1, 'day').format('ddd. MMM D'), accessor: 'tue' },
            { Header: moment().startOf('week').add(2, 'day').format('ddd. MMM D'), accessor: 'wed' },
            { Header: moment().startOf('week').add(3, 'day').format('ddd. MMM D'), accessor: 'thu' },
            { Header: moment().startOf('week').add(4, 'day').format('ddd. MMM D'), accessor: 'fri' },
            { Header: moment().startOf('week').add(5, 'day').format('ddd. MMM D'), accessor: 'sat' },
            { Header: moment().startOf('week').add(6, 'day').format('ddd. MMM D'), accessor: 'sun' },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data,
    });

    const openProfile = (employee) => {
        setSelectedEmployee(employee);
        setShowProfile(true);
    };

    const closeProfile = () => {
        setShowProfile(false);
        setSelectedEmployee(null);
    };

    return (
        <Layout showFooter={false}> {/* Use Layout component and hide footer */}
            <div>
                <div className="new-container">
                    <navigation>
                        <ul>
                            <li><a href="/" className="new-logo new-link">
                                <img src={Logo} alt="Logo" />
                                <span className="new-nav-item">{name}</span>
                            </a></li>
                            <li><a href="#" className="new-link">
                                <i className="fas fa-menorah"></i>
                                <span className="new-nav-item">Dashboard</span>
                            </a></li>
                            <li><a href="/message" className="new-link">
                                <i className="fas fa-menorah"></i>
                                <span className="new-nav-item">Message</span>
                            </a></li>
                            <li><a href="#" className="new-link">
                                <i className="fas fa-menorah"></i>
                                <span className="new-nav-item">Report</span>
                            </a></li>
                            <li><a href="#" className="new-link">
                                <i className="fas fa-menorah"></i>
                                <span className="new-nav-item">Schedule</span>
                            </a></li>
                            <li><a href="#" className="new-link">
                                <i className="fas fa-menorah"></i>
                                <span className="new-nav-item">Settings</span>
                            </a></li>
                            <li><a className="new-logout new-link">
                                <i className="fas fa-sign-out-alt"></i>
                                <span className="new-nav-item" onClick={() => nav('/home')}>Log out</span>
                            </a></li>
                        </ul>
                    </navigation>

                    <section className="new-main">
                        <div className="new-main-top">
                            <h1>Employees</h1>
                            <i className="fas fa-user-cog"></i>
                        </div>
                        <div className="new-users">
                            {data.map((employee) => (
                                <div key={employee.id} className="new-card">
                                    <img src={employee.image || download} alt="User" />
                                    <h4>{employee.name}</h4>
                                    <p>{employee.role}</p>
                                    <div className="new-per">
                                        <p>Details Hidden</p>
                                    </div>
                                    <button onClick={() => openProfile(employee)}>Profile</button>
                                </div>
                            ))}
                        </div>
                        <div className="schedule-container">
                            <div className='headdddd'>
                                <h1>Schedule</h1>
                            </div>
                            <Button onClick={downloadPDF}><DownloadIcon className='download-icon' style={{ cursor: 'pointer' }}/></Button>
                            <table {...getTableProps()} className="schedule-table" id="scheduleTable">
                                <thead>
                                    {headerGroups.map(headerGroup => (
                                        <tr {...headerGroup.getHeaderGroupProps()}>
                                            {headerGroup.headers.map(column => (
                                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                            ))}
                                        </tr>
                                    ))}
                                </thead>
                                <tbody {...getTableBodyProps()}>
                                    {rows.map((row) => {
                                        prepareRow(row);
                                        return (
                                            <tr {...row.getRowProps()}>
                                                {row.cells.map(cell => (
                                                    <td {...cell.getCellProps()}>
                                                        {cell.render('Cell')}
                                                    </td>
                                                ))}
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </div>

            {showProfile && (
                <div className="profile-modal">
                    <div className="profile-modal-content">
                        <h2>Profile</h2>
                        <label>Name:</label>
                        <input
                            type="text"
                            value={selectedEmployee?.name || ''}
                            onChange={(e) => setSelectedEmployee({ ...selectedEmployee, name: e.target.value })}
                        />
                        <label>Role:</label>
                        <input
                            type="text"
                            value={selectedEmployee?.role || ''}
                            onChange={(e) => setSelectedEmployee({ ...selectedEmployee, role: e.target.value })}
                        />

                        <button onClick={() => updateSchedule(selectedEmployee)}>Save</button>
                        <button onClick={closeProfile}>Close</button>
                    </div>
                </div>
            )}
        </Layout>
    );
}

export default Dashboard;
