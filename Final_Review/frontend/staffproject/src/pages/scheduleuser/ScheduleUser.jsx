// import React, { useState } from 'react';
// import './ScheduleUser.css';

// const ScheduleUser = () => {
//     const [staffId, setStaffId] = useState('');
//     const [staffName, setStaffName] = useState('');
//     const [schedule, setSchedule] = useState([]);
//     const [dates, setDates] = useState(getNext7Days());
//     const [editingDates, setEditingDates] = useState(false);

//     function getNext7Days() {
//         const days = [];
//         for (let i = 0; i < 7; i++) {
//             const date = new Date();
//             date.setDate(date.getDate() + i);
//             days.push(date.toISOString().split('T')[0]);
//         }
//         return days;
//     }

//     const handleAddStaff = () => {
//         const newStaff = {
//             id: staffId,
//             name: staffName,
//             schedule: dates.reduce((acc, date) => ({ ...acc, [date]: '' }), {})
//         };
//         setSchedule([...schedule, newStaff]);
//         setStaffId('');
//         setStaffName('');
//     };

//     const handleInputChange = (staffId, date, value) => {
//         const updatedSchedule = schedule.map(staff =>
//             staff.id === staffId ? { ...staff, schedule: { ...staff.schedule, [date]: value } } : staff
//         );
//         setSchedule(updatedSchedule);
//     };

//     const handleUpdateStaff = (staffId) => {
//         console.log('Update staff with ID:', staffId);
//         // Add logic to update the staff
//     };

//     const handleDeleteStaff = (staffId) => {
//         setSchedule(schedule.filter(staff => staff.id !== staffId));
//     };

//     const handleEditDates = () => {
//         setEditingDates(true);
//     };

//     const handleDateChange = (index, value) => {
//         const newDates = [...dates];
//         newDates[index] = value;
//         setDates(newDates);

//         const updatedSchedule = schedule.map(staff => ({
//             ...staff,
//             schedule: newDates.reduce((acc, date) => ({
//                 ...acc,
//                 [date]: staff.schedule[date] || ''
//             }), {})
//         }));
//         setSchedule(updatedSchedule);
//     };

//     const handleUpdateDates = () => {
//         setEditingDates(false);
//         console.log('Updated dates:', dates);
//         // Add logic to save the updated dates if needed
//     };

//     return (
//         <div className='schedule-user'>
//             <h2>Staff Schedule</h2>
//             <div className="add-staff-form">
//                 <input
//                     type="text"
//                     placeholder="Staff ID"
//                     value={staffId}
//                     onChange={(e) => setStaffId(e.target.value)}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Staff Name"
//                     value={staffName}
//                     onChange={(e) => setStaffName(e.target.value)}
//                 />
//                 <button onClick={handleAddStaff}>Add</button>
//             </div>

//             <table className='schedule-table'>
//                 <thead>
//                     <tr>
//                         <th>Staff ID</th>
//                         <th>Staff Name</th>
//                         {dates.map((date, index) => (
//                             <th key={index}>
//                                 {editingDates ? (
//                                     <input
//                                         type="text"
//                                         value={date}
//                                         onChange={(e) => handleDateChange(index, e.target.value)}
//                                     />
//                                 ) : (
//                                     date
//                                 )}
//                             </th>
//                         ))}
//                         <th>
//                             {editingDates ? (
//                                 <button onClick={handleUpdateDates}>Save Dates</button>
//                             ) : (
//                                 <button onClick={handleEditDates}>Update Dates</button>
//                             )}
//                         </th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {schedule.map(staff => (
//                         <tr key={staff.id}>
//                             <td>{staff.id}</td>
//                             <td>{staff.name}</td>
//                             {dates.map((date) => (
//                                 <td key={date}>
//                                     <input
//                                         type="text"
//                                         value={staff.schedule[date]}
//                                         onChange={(e) => handleInputChange(staff.id, date, e.target.value)}
//                                     />
//                                 </td>
//                             ))}
//                             <td>
//                                 <button onClick={() => handleUpdateStaff(staff.id)}>Update</button>
//                                 <button onClick={() => handleDeleteStaff(staff.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default ScheduleUser;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ScheduleUser = () => {
    const [staffId, setStaffId] = useState('');
    const [staffName, setStaffName] = useState('');
    const [schedule, setSchedule] = useState([]);
    const [dates, setDates] = useState(getNext7Days());
    const [editingDates, setEditingDates] = useState(false);

    useEffect(() => {
        fetchSchedules();
    }, []);

    const fetchSchedules = async () => {
        const response = await axios.get('http://localhost:8080/api/schedules');
        setSchedule(response.data);
    };

    function getNext7Days() {
        const days = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date();
            date.setDate(date.getDate() + i);
            days.push(date.toISOString().split('T')[0]);
        }
        return days;
    }

    const handleAddStaff = async () => {
        const newStaff = {
            staffId,
            staffName,
            schedule: dates.reduce((acc, date) => ({ ...acc, [date]: '' }), {})
        };
        await axios.post('/api/schedules', newStaff);
        fetchSchedules();
        setStaffId('');
        setStaffName('');
    };

    const handleInputChange = async (staffId, date, value) => {
        const updatedSchedule = schedule.map(staff =>
            staff.staffId === staffId ? { ...staff, schedule: { ...staff.schedule, [date]: value } } : staff
        );
        setSchedule(updatedSchedule);
        const staffToUpdate = updatedSchedule.find(staff => staff.staffId === staffId);
        await axios.put(`/api/schedules/${staffToUpdate.id}`, staffToUpdate);
    };

    const handleUpdateStaff = async (staffId) => {
        const staffToUpdate = schedule.find(staff => staff.staffId === staffId);
        await axios.put(`/api/schedules/${staffToUpdate.id}`, staffToUpdate);
    };

    const handleDeleteStaff = async (staffId) => {
        const staffToDelete = schedule.find(staff => staff.staffId === staffId);
        await axios.delete(`/api/schedules/${staffToDelete.id}`);
        fetchSchedules();
    };

    const handleEditDates = () => {
        setEditingDates(true);
    };

    const handleDateChange = (index, value) => {
        const newDates = [...dates];
        newDates[index] = value;
        setDates(newDates);

        const updatedSchedule = schedule.map(staff => ({
            ...staff,
            schedule: newDates.reduce((acc, date) => ({
                ...acc,
                [date]: staff.schedule[date] || ''
            }), {})
        }));
        setSchedule(updatedSchedule);
    };

    const handleUpdateDates = () => {
        setEditingDates(false);
    };

    return (
        <div className='schedule-user'>
            <h2>Staff Schedule</h2>
            <div className="add-staff-form">
                <input
                    type="text"
                    placeholder="Staff ID"
                    value={staffId}
                    onChange={(e) => setStaffId(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Staff Name"
                    value={staffName}
                    onChange={(e) => setStaffName(e.target.value)}
                />
                <button onClick={handleAddStaff}>Add</button>
            </div>

            <table className='schedule-table'>
                <thead>
                    <tr>
                        <th>Staff ID</th>
                        <th>Staff Name</th>
                        {dates.map((date, index) => (
                            <th key={index}>
                                {editingDates ? (
                                    <input
                                        type="text"
                                        value={date}
                                        onChange={(e) => handleDateChange(index, e.target.value)}
                                    />
                                ) : (
                                    date
                                )}
                            </th>
                        ))}
                        <th>
                            {editingDates ? (
                                <button onClick={handleUpdateDates}>Save Dates</button>
                            ) : (
                                <button onClick={handleEditDates}>Update Dates</button>
                            )}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {schedule.map(staff => (
                        <tr key={staff.staffId}>
                            <td>{staff.staffId}</td>
                            <td>{staff.staffName}</td>
                            {dates.map((date) => (
                                <td key={date}>
                                    <input
                                        type="text"
                                        value={staff.schedule[date]}
                                        onChange={(e) => handleInputChange(staff.staffId, date, e.target.value)}
                                    />
                                </td>
                            ))}
                            <td>
                                <button onClick={() => handleUpdateStaff(staff.staffId)}>Update</button>
                                <button onClick={() => handleDeleteStaff(staff.staffId)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ScheduleUser;
