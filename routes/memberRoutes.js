const express = require('express');
const router = express.Router();
const multer = require('multer');
const Member = require('../models/Member');

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// POST: Add new member
router.post('/members', upload.single('image'), async (req, res) => {
  try {
    const { name, role, email } = req.body;
    const image = req.file.filename;
    const member = new Member({ name, role, email, image });
    await member.save();
    res.status(201).json(member);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error saving member');
  }
});

// GET: All members
router.get('/members', async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (error) {
    res.status(500).send('Error fetching members');
  }
});

// GET: One member by ID
router.get('/members/:id', async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    res.json(member);
  } catch (error) {
    res.status(500).send('Error fetching member');
  }
});

// DELETE: Delete member by ID
router.delete('/members/:id', async (req, res) => {
  try {
    await Member.findByIdAndDelete(req.params.id);
    res.json({ message: 'Member deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error while deleting member');
  }
});

module.exports = router;
