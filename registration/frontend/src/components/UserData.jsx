import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import './UserData.css';

function UserData() {
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const edit = () => {
        alert("Working on this!! stay tuned");
    }

    let count = 1;

    return (
        <div>
            <button className="btn btn-info btn-sm fw-semibold" onClick={() => navigate('/register')} >
                Register
            </button>

            <div className="container mt-5 shadow-lg rounded mb-5 body-bg">
                <h2 className="text-center mb-4 pt-3 fw-bold">Registered Users</h2>
                <table className="table table-striped table-bordered rounded-3 overflow-hidden table-success">
                    <thead>
                        <tr>
                            <th>S No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map((user) => (
                                <tr key={user.user_id}>
                                    <td>{count++}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td className="text-center align-middle">
                                        <span style={{ cursor: 'pointer' }} title='edit' onClick={() => edit()}>
                                            <img src='/edit.png' alt='not found' className="img-fluid rounded" width={'25px'} />
                                        </span>
                                    </td>

                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="text-center">No data available</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <div><small className='text-warning fw-bold'>Note: No backup (If data is modified from here, previous data will be completely gone)</small></div>
            </div>


        </div>
    );
}

export default UserData;
