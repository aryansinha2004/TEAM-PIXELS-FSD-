import React, { useState } from 'react';
import axios from 'axios';
import './AddMember.css';

const AddMember = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    if (!formData.name || !formData.role || !formData.email || !formData.image) {
      alert('Please fill in all fields and upload an image.');
      return;
    }

    const data = new FormData();
    data.append('name', formData.name);
    data.append('role', formData.role);
    data.append('email', formData.email);
    data.append('image', formData.image);

    try {
      await axios.post('http://localhost:5000/api/members', data);
      alert('Member added successfully!');
      setFormData({ name: '', role: '', email: '', image: null });
    } catch (error) {
      console.error('Error adding member:', error);
      alert('Failed to add member.');
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Team Member</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="role" placeholder="Role" value={formData.role} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="file" name="image" accept="image/*" onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddMember;
