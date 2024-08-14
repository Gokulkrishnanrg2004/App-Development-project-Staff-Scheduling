// import React, { useState, useEffect } from 'react';
// import DownloadIcon from '@mui/icons-material/Download';
// import moment from 'moment';

// const API_URL = 'http://localhost:8080/api/employees'; // Adjust API URL as needed

// function ViewSchedule() {
//     const [data, setData] = useState([]);
//     const [query, setQuery] = useState('');

//     useEffect(() => {
//         // Fetch the schedule data from the backend
//         fetch(API_URL)
//             .then(response => response.json())
//             .then(data => setData(data))
//             .catch(error => console.error('Error fetching schedule:', error));
//     }, []);

//     const handleDownload = () => {
//         // Logic to download the schedule as a file (e.g., Excel or CSV)
//         alert('Download functionality to be implemented.');
//     };

//     const handleSubmitQuery = () => {
//         // Logic to submit the user's query to the admin
//         if (!query) return;

//         const queryData = { query };

//         fetch(`${API_URL}/submit-query`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(queryData),
//         })
//             .then(response => response.json())
//             .then(result => {
//                 alert('Query submitted successfully');
//                 setQuery('');
//             })
//             .catch(error => {
//                 console.error('Error submitting query:', error);
//                 alert('Failed to submit query');
//             });
//     };

//     return (
//         <div className="view-schedule-container">
//             <h1>Schedule</h1>
//             <div className="action-buttons">
//                 <DownloadIcon
//                     className="download-icon"
//                     onClick={handleDownload}
//                     style={{ cursor: 'pointer' }}
//                 />
//             </div>
//             <br />
//             <table className="schedule-table">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>{moment().endOf('week').format('ddd. MMM D')}</th>
//                         <th>{moment().endOf('week').add(1, 'day').format('ddd. MMM D')}</th>
//                         <th>{moment().endOf('week').add(2, 'day').format('ddd. MMM D')}</th>
//                         <th>{moment().endOf('week').add(3, 'day').format('ddd. MMM D')}</th>
//                         <th>{moment().endOf('week').add(4, 'day').format('ddd. MMM D')}</th>
//                         <th>{moment().endOf('week').add(5, 'day').format('ddd. MMM D')}</th>
//                         <th>{moment().endOf('week').add(6, 'day').format('ddd. MMM D')}</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((employee, index) => (
//                         <tr key={index}>
//                             <td>{employee.name}</td>
//                             <td>{employee.sat}</td>
//                             <td>{employee.sun}</td>
//                             <td>{employee.mon}</td>
//                             <td>{employee.tue}</td>
//                             <td>{employee.wed}</td>
//                             <td>{employee.thu}</td>
//                             <td>{employee.fri}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <br />
//             <div className="query-box">
//                 <textarea
//                     value={query}
//                     onChange={(e) => setQuery(e.target.value)}
//                     placeholder="Enter your query here"
//                     style={{ width: '100%', height: '100px', borderRadius: '5px' }}
//                 />
//                 <button onClick={handleSubmitQuery} className="submit-query-btn">
//                     Submit Query
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default ViewSchedule;

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DownloadIcon from '@mui/icons-material/Download';
import moment from 'moment';
import * as XLSX from 'xlsx';
import './ViewSchedule.css';

const API_URL = 'http://localhost:8080/api/employees'; // Adjust API URL as needed
const API_URL1 = 'http://localhost:8080/api/query/submit-query'; // Adjust API URL as needed

function ViewSchedule() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const name = useSelector((state) => state.name); // Getting the email from Redux state

    useEffect(() => {
        // Fetch the schedule data from the backend
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching schedule:', error));
    }, []);

    const handleDownload = () => {
        // Create a new workbook and worksheet
        const ws = XLSX.utils.json_to_sheet(data, {
            header: ['name', 'sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri'],
            skipHeader: false,
        });

        // Set the sheet name and add it to the workbook
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Schedule');

        // Generate a downloadable Excel file
        XLSX.writeFile(wb, 'schedule.xlsx');
    };

    const handleSubmitQuery = () => {
        console.log('Query:', query); // Check the value of query
        console.log('Name:', name);   // Check the value of name
    
        if (!query || !name) {
            console.error('Query or name is missing');
            alert('Please make sure to enter a query and that you are logged in.');
            return;
        }
    
        const queryData = { email: name, query };
    
        fetch(API_URL1, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(queryData),
        })
        .then(response => {
            if (!response.ok) {
                // Log the response text if the response is not OK
                return response.text().then(text => {
                    console.error('Error response text:', text);
                    throw new Error('Network response was not ok');
                });
            }
            // Try parsing JSON from the response
            return response.json();
        })
        .then(result => {
            console.log('Query submitted:', result);
            alert('Query submitted successfully');
            setQuery('');
        })
        .catch(error => {
            console.error('Error submitting query:', error);
            alert('Failed to submit query');
        });
    };
    

    return (
        <div className="schedule-view-container">
            <h1 className="schedule-header" style={{marginLeft:"42.5%"}}>Weekly Schedule</h1>
            <div className="schedule-actions">
                <p className='pactions'>Download Schedule</p>
                <DownloadIcon
                    className="download-button"
                    onClick={handleDownload}
                    style={{ cursor: 'pointer' ,color:"black"}}
                />
            </div>
            <table className="schedule-table">
                <thead>
                    <tr>
                        <th>Employee</th>
                        <th>{moment().endOf('week').format('ddd. MMM D')}</th>
                        <th>{moment().endOf('week').add(1, 'day').format('ddd. MMM D')}</th>
                        <th>{moment().endOf('week').add(2, 'day').format('ddd. MMM D')}</th>
                        <th>{moment().endOf('week').add(3, 'day').format('ddd. MMM D')}</th>
                        <th>{moment().endOf('week').add(4, 'day').format('ddd. MMM D')}</th>
                        <th>{moment().endOf('week').add(5, 'day').format('ddd. MMM D')}</th>
                        <th>{moment().endOf('week').add(6, 'day').format('ddd. MMM D')}</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((employee, index) => (
                        <tr key={index}>
                            <td>{employee.name}</td>
                            <td>{employee.sat}</td>
                            <td>{employee.sun}</td>
                            <td>{employee.mon}</td>
                            <td>{employee.tue}</td>
                            <td>{employee.wed}</td>
                            <td>{employee.thu}</td>
                            <td>{employee.fri}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            <div className="query-section">
                <textarea
                    className="query-textarea"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter your query here"
                />
                <button onClick={handleSubmitQuery} className="query-submit-button">
                    Submit Query
                </button>
            </div>
        </div>
    );
}

export default ViewSchedule;
