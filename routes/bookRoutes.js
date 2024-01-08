const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// GET all books
router.get('/books', bookController.getAllBooks);

// POST a new book
router.post('/books', bookController.addNewBook);

// GET a specific Book by ID
router.get('/books/:id', bookController.getBooksById);

// DELETE a specific Book by ID
router.delete('/books/:id', bookController.deleteBooksById);

// PUT to edit details of a specific Book by ID
router.put('/books/:id', bookController.editBooksDetails);

module.exports = router;
