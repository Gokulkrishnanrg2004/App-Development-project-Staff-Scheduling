import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddUser.css';
import img1 from '../landing/landing1.png';
const AddUser = () => {
    const [staffID, setStaffID] = useState('');
    const [staffName, setStaffName] = useState('');
    const [staffList, setStaffList] = useState([]);
    const [editingStaff, setEditingStaff] = useState(null);
    const navigate = useNavigate();

    const handleAddStaff = () => {
        if (editingStaff) {
            setStaffList(
                staffList.map(staff =>
                    staff.id === editingStaff.id
                        ? { ...staff, id: staffID, name: staffName }
                        : staff
                )
            );
            setEditingStaff(null);
        } else {
            setStaffList([...staffList, { id: staffID, name: staffName }]);
        }
        setStaffID('');
        setStaffName('');
    };

    const handleEditStaff = (staff) => {
        setEditingStaff(staff);
        setStaffID(staff.id);
        setStaffName(staff.name);
    };

    const handleDeleteStaff = (id) => {
        setStaffList(staffList.filter(staff => staff.id !== id));
    };

    const handleFormTeam = () => {
        navigate('/staff', { state: { staffList } });
    };

    return (
        <div className='maindiv' style={{display:'flex'}}>
        <div className='staff1' style={{marginLeft:"-5%",marginTop:"2%"}}>
            <h2 style={{marginLeft:"43%"}}>Add User</h2>
            <input
                type="text"
                placeholder="Staff ID"
                value={staffID}
                onChange={(e) => setStaffID(e.target.value)}
                style={{marginLeft:"165px",borderRadius:"3px",height:"35px",width:"180px"}}
            />
            <input
                type="text"
                placeholder="Staff Name"
                value={staffName}
                onChange={(e) => setStaffName(e.target.value)}
                style={{marginLeft:"10px", borderRadius:"3px",marginBottom:"2%",height:"35px",width:"180px"}}
            />
            <button onClick={handleAddStaff}  style={{background:"black",color:"white",borderRadius:"10px",padding:"2px 10px",marginTop:"20px",marginLeft:"10px",height:"35px"}}>
                {editingStaff ? 'Update' : 'Add'}
            </button>
            <table style={{width:"800px",marginLeft:"20%"}}>
                <thead>
                    <tr>
                        <th style={{backgroundColor:"black",color:"white",height:"40px"}}>Staff ID</th>
                        <th style={{backgroundColor:"black",color:"white"}}>Staff Name</th>
                        <th style={{backgroundColor:"black",color:"white",width:"300px"}}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {staffList.map((staff) => (
                        <tr key={staff.id}>
                            <td>{staff.id}</td>
                            <td>{staff.name}</td>
                            <td>
                                <button onClick={() => handleEditStaff(staff)} className='updateuser'>
                                    Update
                                </button>
                                <button onClick={() => handleDeleteStaff(staff.id)} className='deleteuser'>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleFormTeam} style={{background:"black",color:"white",borderRadius:"10px",padding:"6px 10px",marginTop:"40px",marginLeft:"20%"}}>Form a Team</button>
        </div>
        <div className='div2'>
            <img src={img1} style={{height:"400px",marginLeft:"70%",marginTop:'44%'}}/>
        </div>
        </div>
    );
};

export default AddUser;
