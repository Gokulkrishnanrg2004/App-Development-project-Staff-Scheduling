import DownloadIcon from '@mui/icons-material/Download';
import SaveIcon from '@mui/icons-material/Save';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTable } from 'react-table';
import Logo from '../assets/images/log01.png';
import './AdminDashboard.css';
import './Dashboard.css';

const API_URL = 'http://localhost:8080/api/employees'; // Adjust API URL as needed

function AdminDashboard() {
    const name = useSelector((state) => state.name);

    const [data, setData] = useState([]);
    const [newEmployee, setNewEmployee] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [currentEmployeeIndex, setCurrentEmployeeIndex] = useState(null);

    useEffect(() => {
        // Fetch employee data from the backend
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching employees:', error));
    }, []);

    const handleInputChange = (rowIndex, columnId, value) => {
        // Map columnId to field names
        const fieldMapping = {
            'Mon': 'mon',
            'Tue': 'tue',
            'Wed': 'wed',
            'Thu': 'thu',
            'Fri': 'fri',
            'Sat': 'sat',
            'Sun': 'sun',
        };

        setData(oldData =>
            oldData.map((row, index) => {
                if (index === rowIndex) {
                    return {
                        ...oldData[rowIndex],
                        [fieldMapping[columnId] || columnId]: value,
                    };
                }
                return row;
            })
        );
    };

    const handleAddEmployee = () => {
        if (!newEmployee) return;
        const newEmp = { name: newEmployee, role: 'New Role', image: '', mon: '', tue: '', wed: '', thu: '', fri: '', sat: '', sun: '' };

        fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newEmp),
        })
        .then(response => response.json())
        .then(employee => setData([...data, employee]))
        .catch(error => console.error('Error adding employee:', error));

        setNewEmployee('');
    };

    const handleEditEmployee = (index) => {
        setCurrentEmployeeIndex(index);
        setShowModal(true);
    };

    const handleSaveEmployee = () => {
        if (currentEmployeeIndex === null) return;
        const updatedEmployee = data[currentEmployeeIndex];

        fetch(`${API_URL}/${updatedEmployee.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedEmployee),
        })
        .then(response => response.json())
        .then(() => {
            setData(data.map((emp, index) =>
                index === currentEmployeeIndex ? updatedEmployee : emp
            ));
            setShowModal(false);
        })
        .catch(error => console.error('Error updating employee:', error));
    };

    const handleModalInputChange = (e, field) => {
        if (currentEmployeeIndex !== null) {
            const updatedEmployee = { ...data[currentEmployeeIndex], [field]: e.target.value };
            setData(prevData =>
                prevData.map((emp, index) =>
                    index === currentEmployeeIndex ? updatedEmployee : emp
                )
            );
        }
    };

    const handleDeleteEmployee = (index) => {
        const employeeId = data[index].id;

        fetch(`${API_URL}/${employeeId}`, {
            method: 'DELETE',
        })
        .then(() => {
            setData(data.filter((_, i) => i !== index));
        })
        .catch(error => console.error('Error deleting employee:', error));
    };

    const handleSaveSchedule = () => {
        fetch(`${API_URL}/update-schedule`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data), // Ensure data is structured as an array of employee objects
        })
        .then(response => response.json())
        .then(result => {
            alert('Schedule updated successfully');
        })
        .catch(error => {
            console.error('Error updating schedule:', error);
            alert('Failed to update schedule');
        });
    };

    const columns = React.useMemo(
        () => [
            { Header: 'Name', accessor: 'name' },
            { Header: moment().startOf('week').format('ddd. MMM D'), accessor: 'Mon' },
            { Header: moment().startOf('week').add(1, 'day').format('ddd. MMM D'), accessor: 'Tue' },
            { Header: moment().startOf('week').add(2, 'day').format('ddd. MMM D'), accessor: 'Wed' },
            { Header: moment().startOf('week').add(3, 'day').format('ddd. MMM D'), accessor: 'Thu' },
            { Header: moment().startOf('week').add(4, 'day').format('ddd. MMM D'), accessor: 'Fri' },
            { Header: moment().startOf('week').add(5, 'day').format('ddd. MMM D'), accessor: 'Sat' },
            { Header: moment().startOf('week').add(6, 'day').format('ddd. MMM D'), accessor: 'Sun' },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data,
    });

    return (
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
                    <li><a href="/adminmessage" className="new-link">
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
                    <li><a href="/" className="new-logout new-link">
                        <i className="fas fa-sign-out-alt"></i>
                        <span className="new-nav-item">Log out</span>
                    </a></li>
                </ul>
            </navigation>

            <section className="new-main">
                <div className="new-main-top">
                    <h1>Employees</h1>
                    <i className="fas fa-user-cog"></i>
                </div>

                <div className="manage-users">
                    <div className="add-employee">
                        <input
                            type="text"
                            value={newEmployee}
                            onChange={(e) => setNewEmployee(e.target.value)}
                            placeholder="Enter new employee name"
                        />
                        <button onClick={handleAddEmployee}>Add Employee</button>
                    </div>

                    <div className="employee-list">
                        {data.map((employee, index) => (
                            <div key={index} className="employee-card">
                                <img src={employee.image} alt="User" className='employee-image' />
                                <div className="emp-details">
                                    <h4>{employee.name}</h4>
                                    <p>{employee.role}</p>
                                </div>
                                <button onClick={() => handleEditEmployee(index)}>Edit Profile</button>
                                <button onClick={() => handleDeleteEmployee(index)} className="delete-button">Delete</button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="schedule-container">
                    <div className="schedule-header">
                        <h1>Schedule</h1>
                        <div className="action-buttons">
                            <DownloadIcon className="download-icon" />
                            <SaveIcon className="save-icon" onClick={handleSaveSchedule} />
                        </div>
                    </div>
                    <table {...getTableProps()} className="schedule-table">
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
                            {rows.map((row, i) => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map(cell => {
                                            return (
                                                <td {...cell.getCellProps()}>
                                                    {cell.column.id === 'name' ? (
                                                        cell.render('Cell')
                                                    ) : (
                                                        <input
                                                            value={cell.value}
                                                            onChange={e => handleInputChange(i, cell.column.id, e.target.value)}
                                                        />
                                                    )}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </section>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Edit Employee</h2>
                        <label>Name:</label>
                        <input
                            type="text"
                            value={data[currentEmployeeIndex]?.name || ''}
                            onChange={(e) => handleModalInputChange(e, 'name')}
                        />
                        <label>Role:</label>
                        <input
                            type="text"
                            value={data[currentEmployeeIndex]?.role || ''}
                            onChange={(e) => handleModalInputChange(e, 'role')}
                        />
                        <label>Image URL:</label>
                        <input
                            type="text"
                            value={data[currentEmployeeIndex]?.image || ''}
                            onChange={(e) => handleModalInputChange(e, 'image')}
                        />
                        <button onClick={handleSaveEmployee}>Save</button>
                        <button onClick={() => setShowModal(false)}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AdminDashboard;