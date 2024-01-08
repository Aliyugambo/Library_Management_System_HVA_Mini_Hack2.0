const express = require('express');
const router = express.Router();
const memberController = require('../controllers/memberController');

// GET all members
router.get('/members', memberController.getAllMembers);

// POST a new member
router.post('/members', memberController.addNewMember);

// GET a specific member by ID
router.get('/members/:id', memberController.getMemberById);

// DELETE a specific member by ID
router.delete('/members/:id', memberController.deleteMemberById);

// PUT to edit details of a specific member by ID
router.put('/members/:id', memberController.editMemberDetails);

module.exports = router;