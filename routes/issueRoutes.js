const express = require('express');
const router = express.Router();
const issueController = require('../controllers/issueController');

// POST to issue or return a book
router.post('/issues', issueController.issuedBooks);
router.post('/returnBook', issueController.returnedBooks);
router.get('/booksisues', issueController.getIssueBooks);
router.get('/returnBook', issueController.getreturnBooks);

module.exports = router;