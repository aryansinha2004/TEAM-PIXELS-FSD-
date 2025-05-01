import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './MemberDetails.css';

const MemberDetails = () => {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/members/${id}`);
        setMember(res.data);
      } catch (err) {
        console.error('Failed to fetch member details:', err);
      }
    };

    fetchMember();
  }, [id]);

  if (!member) return <p>Loading member details...</p>;

  return (
    <div className="details-container">
      <h2>Member Details</h2>
      <img src={`http://localhost:5000/uploads/${member.image}`} alt={member.name} />
      <h3>{member.name}</h3>
      <p><strong>Role:</strong> {member.role}</p>
      <p><strong>Email:</strong> {member.email}</p>
    </div>
  );
};

export default MemberDetails;
