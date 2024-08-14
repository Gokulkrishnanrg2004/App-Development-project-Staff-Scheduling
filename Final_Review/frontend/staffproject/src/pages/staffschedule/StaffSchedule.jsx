import React, { useState, useEffect } from 'react';
import img1 from '../landing/landing1.png';
import { useLocation } from 'react-router-dom';
import { saveAs } from 'file-saver';
import './StaffSchedule.css'

const StaffSchedule = () => {
    const location = useLocation();
    const [schedule, setSchedule] = useState([]);
    const [dates, setDates] = useState(['2024-08-01', '2024-08-02', '2024-08-03']);

    useEffect(() => {
        const initialSchedule = location.state.staffList.map((staff) => ({
            ...staff,
            dates: dates.reduce((acc, date) => ({ ...acc, [date]: '' }), {})
        }));
        setSchedule(initialSchedule);
    }, [location.state.staffList]);

    const handleInputChange = (staffId, date, value) => {
        const updatedSchedule = schedule.map((staff) =>
            staff.id === staffId ? { ...staff, dates: { ...staff.dates, [date]: value } } : staff
        );
        setSchedule(updatedSchedule);
    };

    const handleSave = () => {
        console.log('Save schedule:', schedule);
    };

    const handleUpdate = () => {
        console.log('Update schedule:', schedule);
    };

    const handleDownload = () => {
        const csvData = [
            ['Staff ID', 'Staff Name', ...dates],
            ...schedule.map(staff => [
                staff.id,
                staff.name,
                ...dates.map(date => staff.dates[date])
            ])
        ];

        const csvContent = csvData.map(e => e.join(",")).join("\n");
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        saveAs(blob, 'schedule.csv');
    };

    return (
        <div className='staffmain' style={{display:"flex"}}>
        <div>
            <h2 className='h2sch'>Schedule</h2>
            <table className='staff1'>
                <thead>
                    <tr>
                        <th style={{backgroundColor:"black",color:"white",height:"40px",width:"200px"}}>Staff ID</th>
                        <th style={{backgroundColor:"black",color:"white",height:"40px",width:"200px"}}>Staff Name</th>
                        {dates.map((date) => (
                            <th key={date} style={{backgroundColor:"black",color:"white",height:"40px"}}>{date}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {schedule.map((staff) => (
                        <tr key={staff.id}>
                            <td style={{textAlign:"center",backgroundColor:"grey",color:"white",height:"40px"}}>{staff.id}</td>
                            <td style={{textAlign:"center",backgroundColor:"grey",color:"white",height:"40px"}}>{staff.name}</td>
                            {dates.map((date) => (
                                <td key={date}>
                                    <input
                                        type="text"
                                        value={staff.dates[date]}
                                        onChange={(e) =>
                                            handleInputChange(staff.id, date, e.target.value)
                                        }
                                        style={{height:"40px",border:"2px solid black"}}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <br/>
            <button className='save' onClick={handleSave} style={{backgroundColor:"black",color:"white",height:"45px",width:"80px",borderRadius:"10px",cursor:"pointer"}}>Save</button>
            <button onClick={handleUpdate} style={{backgroundColor:"black",color:"white",height:"45px",width:"80px",borderRadius:"10px",marginLeft:"10px",cursor:"pointer"}}>Update</button>
            <button onClick={handleDownload} style={{backgroundColor:"black",color:"white",height:"45px",width:"100px",borderRadius:"10px",marginLeft:"10px",cursor:"pointer"}}>Download</button>
        </div>
        <div className='sch'>
                <img src={img1} style={{height:"350px",marginLeft:"100px",marginTop:"180px"}}/>
        </div>
        </div>
    );
};

export default StaffSchedule;
