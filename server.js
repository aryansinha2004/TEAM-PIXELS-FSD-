const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

const memberRoutes = require('./routes/memberRoutes');

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/teamdb')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api', memberRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
