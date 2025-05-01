import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddMember from './components/AddMember';
import ViewMembers from './components/ViewMembers';
import MemberDetails from './components/MemberDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddMember />} />
        <Route path="/members" element={<ViewMembers />} />
        <Route path="/members/:id" element={<MemberDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
