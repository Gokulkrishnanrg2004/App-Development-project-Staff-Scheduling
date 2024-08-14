import DownloadIcon from '@mui/icons-material/Download';
import SaveIcon from '@mui/icons-material/Save';
import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTable } from 'react-table';
import './Employee.css';
import * as XLSX from 'xlsx';
import { Link } from 'react-router-dom';
const API_URL = 'http://localhost:8080/api/employees'; // Adjust API URL as needed

function Employee() {
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
    const handleDownload = () => {
        // Create a new workbook and worksheet
        const ws = XLSX.utils.json_to_sheet(data, {
            header: ['name', 'sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri'],
            // Custom header names
            skipHeader: false,
        });

        // Set the sheet name and add it to the workbook
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Schedule');

        // Generate a downloadable Excel file
        XLSX.writeFile(wb, 'schedule.xlsx');
    };

    const columns = React.useMemo(
        () => [
            { Header: 'Name', accessor: 'name' },
            { Header: moment().endOf('week').format('ddd. MMM D'), accessor: 'Mon' },
            { Header: moment().endOf('week').add(1, 'day').format('ddd. MMM D'), accessor: 'Tue' },
            { Header: moment().endOf('week').add(2, 'day').format('ddd. MMM D'), accessor: 'Wed' },
            { Header: moment().endOf('week').add(3, 'day').format('ddd. MMM D'), accessor: 'Thu' },
            { Header: moment().endOf('week').add(4, 'day').format('ddd. MMM D'), accessor: 'Fri' },
            { Header: moment().endOf('week').add(5, 'day').format('ddd. MMM D'), accessor: 'Sat' },
            { Header: moment().endOf('week').add(6, 'day').format('ddd. MMM D'), accessor: 'Sun' },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data,
    });

    return (
        <div className="new-container">
            <section className="new-main" style={{marginRight:"40px",marginTop:"3%"}}>
                <div className="new-main-top">
                    <h1 style={{marginLeft:"50px"}}>Staff Details</h1>
                    <i className="fas fa-user-cog"></i>
                </div>

                <div className="manage-users">
                    <div className="add-employee">
                        <input
                            type="text"
                            value={newEmployee}
                            onChange={(e) => setNewEmployee(e.target.value)}
                            placeholder="Enter staff name"
                            style={{height:"44px",width:"200px",marginLeft:"50px",borderRadius:"5px"}}
                        />
                        <button onClick={handleAddEmployee}style={{marginLeft:"10px"}} className='add-staff'>Add Staff</button>
                    </div>
                    <br/>
                    <br/>
                    <div className="employee-list" style={{marginLeft:"40px",width:"1250px",padding:"10px",borderRadius:"8px",backgroundColor:"white",boxShadow:"7px 7px 11px 0px rgba(114,114,114,0.75)"}}>
                        {data.map((employee, index) => (
                            <div key={index} className="employee-card" style={{display:"flex"}}>
                                {/* <img src={employee.image} alt="User" className='employee-image' /> */}
                                <div className="emp-details" style={{display:"flex"}}>
                                    <h4>{employee.name}</h4>
                                    <p style={{marginTop:"20px",marginLeft:"20px"}}>{employee.role}</p>
                                </div>
                                <button onClick={() => handleEditEmployee(index)} className='edit-staff'>Edit Profile</button>
                                <button onClick={() => handleDeleteEmployee(index)} className="delete-staff" style={{padding:"10px 10px"}}>Delete</button>
                            </div>
                        ))}
                    </div>
                </div>
                <br/>

                <div className="schedule-container" style={{width:"1250px"}}>
                    <h1>Schedule</h1>
                    <div className="action-buttons">
                        <DownloadIcon className="download-icon"onClick={handleDownload} style={{marginLeft:"20px",cursor:"pointer"}}/>
                        <SaveIcon className="save-icon" onClick={handleSaveSchedule} style={{marginLeft:"20px",cursor:"pointer"}}/>
                    </div>
                        <br/>
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
                <div className="modal" style={{marginLeft:"50px"}}>
                    <div className="modal-content">
                        <h2>Edit Employee</h2>
                        <label>Name:</label>
                        <input
                            type="text"
                            value={data[currentEmployeeIndex]?.name || ''}
                            onChange={(e) => handleModalInputChange(e, 'name')}
                            style={{height:"30px",width:"200px",borderRadius:"5px",border:"2px solid black"}}
                        />
                        <label style={{marginLeft:"20px"}}>Role:</label>
                        <input
                            type="text"
                            value={data[currentEmployeeIndex]?.role || ''}
                            onChange={(e) => handleModalInputChange(e, 'role')}
                            style={{height:"30px",width:"200px",borderRadius:"5px",border:"2px solid black"}}
                        />
                        {/* <label>Image URL:</label>
                        <input
                            type="text"
                            value={data[currentEmployeeIndex]?.image || ''}
                            onChange={(e) => handleModalInputChange(e, 'image')}
                        /> */}
                        <button onClick={handleSaveEmployee} className='save-staff'>Save</button>
                        <button onClick={() => setShowModal(false)} className='cancel-staff'>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Employee;