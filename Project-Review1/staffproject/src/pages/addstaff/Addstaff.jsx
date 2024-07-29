import React, { useState } from 'react';
import './Addstaff.css';
const Addstaff = () => {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState({ name: '', staffid: ''});
  const [editIndex, setEditIndex] = useState(-1);
  const [editEntry, setEditEntry] = useState({ name: '', staffid: ''});

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (editIndex !== -1) {
      setEditEntry({ ...editEntry, [name]: value });
    } else {
      setNewEntry({ ...newEntry, [name]: value });
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (newEntry.name && newEntry.staffid) {
      setEntries([...entries, newEntry]);
      setNewEntry({ name: '', staffid: ''});
    }
  };

  const handleRemove = (index) => {
    const updatedEntries = entries.filter((entry, i) => i !== index);
    setEntries(updatedEntries);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditEntry(entries[index]);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const updatedEntries = entries.map((entry, i) => (i === editIndex ? editEntry : entry));
    setEntries(updatedEntries);
    setEditIndex(-1);
    setEditEntry({ name: '', staffid: '', startTime: '', endTime: '',class: ''});
  };

  return (

      <div className="dashboardbody">
        <h1>Manage Users</h1>
        <form onSubmit={editIndex === -1 ? handleAdd : handleSave} className='dashboardform'>
          <input
            type="text"
            name="name"
            placeholder="Enter Username"
            value={editIndex === -1 ? newEntry.name : editEntry.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="staffid"
            placeholder="Enter password"
            value={editIndex === -1 ? newEntry.staffid : editEntry.staffid}
            onChange={handleChange}
            required
          />
          <button type="submit">{editIndex === -1 ? 'Schedule' : 'Save'}</button>
        </form>
        <section className='features-section'>
          <table className='dashboardtable'>
            <thead>
              <tr>
                <th>Username</th>
                <th>Password</th>

              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.name}</td>
                  <td>{entry.staffid}</td>
                  <td>{entry.endTime}</td>
                  <td>
                    <button  className='remove' onClick={() => handleRemove(index)}>Remove</button>
                    <button className='edit' onClick={() => handleEdit(index)}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
    </div>
  );
};

export default Addstaff;