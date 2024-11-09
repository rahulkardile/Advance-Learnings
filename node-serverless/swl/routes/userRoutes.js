// routes/userRoutes.js
const express = require('express');
const User = require('../models/User');

const router = express.Router();

// @desc    Create a new user
// @route   POST /api/users
router.post('/', async (req, res) => {
  try {
    const { name, salary } = req.body;
    const newUser = new User({ name, salary });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc    Get all users
// @route   GET /api/users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Get a user by ID
// @route   GET /api/users/:id
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Update a user by ID
// @route   PUT /api/users/:id
router.put('/:id', async (req, res) => {
  try {
    const { name, salary } = req.body;
    const updatedUser = await User.findByIdAndUpdate(req.params.id, { name, salary }, { new: true });
    if (!updatedUser) return res.status(404).json({ message: 'User not found' });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
