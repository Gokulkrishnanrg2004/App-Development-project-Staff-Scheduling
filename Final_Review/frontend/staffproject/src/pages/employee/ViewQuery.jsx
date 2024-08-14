import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewQuery.css';
import { Link } from 'react-router-dom';
const ViewQuery = () => {
    const [queries, setQueries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Function to fetch queries from the backend
        const fetchQueries = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/query');
                setQueries(response.data);
            } catch (err) {
                setError('Error fetching data');
                console.error('Error fetching queries:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchQueries();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="view-query">
            <h1 style={{marginLeft:"35%"}}>Queries by the Staffs</h1>
            <table className="query-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Query Text</th>
                        <th>Submitted At</th>
                    </tr>
                </thead>
                <tbody>
                    {queries.length > 0 ? (
                        queries.map(query => (
                            <tr key={query.id}>
                                <td>{query.id}</td>
                                <td>{query.email}</td>
                                <td>{query.queryText}</td>
                                <td>{new Date(query.submittedAt).toLocaleString()}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No queries found</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <Link to='/admin'><button className='goto'>Go to Dashboard</button></Link>
        </div>
    );
};

export default ViewQuery;
