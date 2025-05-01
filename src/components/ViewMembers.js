import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ViewMembers.css';

const ViewMembers = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/members');
        setMembers(res.data);
      } catch (err) {
        console.error('Failed to fetch members:', err);
      }
    };

    fetchMembers();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this member?')) {
      try {
        await axios.delete(`http://localhost:5000/api/members/${id}`);
        setMembers(members.filter((member) => member._id !== id));
        alert('Member deleted successfully!');
      } catch (err) {
        console.error('Delete failed:', err);
        alert('Failed to delete member.');
      }
    }
  };

  return (
    <div className="members-container">
      <h2>Team Members</h2>
      <div className="members-list">
        {members.map((member) => (
          <div key={member._id} className="member-card">
            <img src={`http://localhost:5000/uploads/${member.image}`} alt={member.name} />
            <h3>{member.name}</h3>
            <p><strong>Role:</strong> {member.role}</p>
            <Link to={`/members/${member._id}`} className="details-btn">View Details</Link>
            <button onClick={() => handleDelete(member._id)} className="delete-btn">🗑️ Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewMembers;
