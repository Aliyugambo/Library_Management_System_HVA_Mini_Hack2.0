const Issue = require('../Models/Issue');
const Member = require('../Models/Member');
const Book = require('../Models/Book');


// Controller function to issue or return a book
const manageBookIssue = async (req, res) => {
    try {
      // Extract memberID, bookID, and action from the request body
      const { memberId, bookId, action } = req.body;
  
      // Check if member and book exist
      const member = await Member.findById(memberId);
      const book = await Book.findById(bookId);

      if (!member || !book) {
        return res.status(404).json({ error: 'Member or book not found' });
        // console.log({ error: 'Member or book not found' });
      }
  
      // Check if the action is valid (issue or return)
      if (action !== 'issue' && action !== 'return') {
        return res.status(400).json({ error: 'Invalid action' });
      }
  
      // Check if the book is available (not issued) for issuing
      if (action === 'issue') {
        const isBookAvailable = await Issue.findOne({ book: bookId, returnDate: null });
  
        if (isBookAvailable) {
          return res.status(400).json({ error: 'Book is already issued' });
        }
      }
  
      // Check if the book is issued (for returning)
      if (action === 'return') {
        const issuedBook = await Issue.findOne({ member: memberId, book: bookId, returnDate: null });
  
        if (!issuedBook) {
          return res.status(400).json({ error: 'Book is not issued to the member' });
        //   console.log({ error: 'Book is not issued to the member' })
        }
  
        // Update the return date to mark the book as returned
        issuedBook.returnDate = new Date();
        await issuedBook.save();
  
        return res.status(200).json({ message: 'Book returned successfully' });
      }
  
      // For issuing, create a new issue record
      const newIssue = new Issue({
        member: memberId,
        book: bookId,
      });
  
      // Save the issue record to the database
      const issuedBook = await newIssue.save();
  
      res.status(201).json(issuedBook);
    } catch (error) {
      console.error('Error managing book issue:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
    };
  
  module.exports = {manageBookIssue};