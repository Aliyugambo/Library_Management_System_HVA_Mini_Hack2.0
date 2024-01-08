const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  longDescription: {
    type: String,
    required: true,
  },
  ISBN: {
    type: String,
    unique: true,
    required: true,
  },
  Publishedyear: {
    type: Date,
    required: true,
  },
  genre: {
    type: String,
  },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
