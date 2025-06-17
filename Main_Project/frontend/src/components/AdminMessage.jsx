import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/Pro.css';

const AdminMessages = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/changerequests');
                setRequests(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch requests.');
                setLoading(false);
            }
        };

        fetchRequests();
    }, []);

    const updateRequestStatus = async (requestId, status) => {
        try {
            await axios.patch(`http://localhost:8080/api/changerequests/${requestId}/${status}`);
            setRequests(requests.filter((request) => request.id !== requestId));
            alert(`Request ${status} successfully`);
        } catch (err) {
            alert(`Failed to ${status} request`);
        }
    };

    const handleApprove = (requestId) => {
        updateRequestStatus(requestId, 'approve');
    };

    const handleReject = (requestId) => {
        updateRequestStatus(requestId, 'reject');
    };

    if (loading) return <p>Loading requests...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="admin-messages">
            <h2>Manage Shift Change Requests</h2>
            {requests.length === 0 ? (
                <p>No requests found.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Staff Name</th>
                            <th>Current Task</th>
                            <th>Desired Start Date</th>
                            <th>Desired End Date</th>
                            <th>Reason</th>
                            <th>Additional Comments</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((request) => (
                            <tr key={request.id}>
                                <td>{request.staffName}</td>
                                <td>{request.currentTask}</td>
                                <td>{request.desiredStartDate}</td>
                                <td>{request.desiredEndDate}</td>
                                <td>{request.reason}</td>
                                <td>{request.additionalComments}</td>
                                <td>
                                    <button onClick={() => handleApprove(request.id)}>Approve</button>
                                    <button onClick={() => handleReject(request.id)}>Reject</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AdminMessages;
