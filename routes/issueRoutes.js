const express = require('express');
const router = express.Router();
const issueController = require('../controllers/issueController');

// POST to issue or return a book
router.post('/issues', issueController.manageBookIssue);

module.exports = router;