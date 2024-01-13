const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
    member: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member',
    required: true,
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true,
  },
  issueDate: {
    type: Date, 
    default: Date.now, 
    required: true
  },
  returnDate: {
    type: Date,
  },
});

const Issue = mongoose.model('Issue', issueSchema);

module.exports = Issue;
