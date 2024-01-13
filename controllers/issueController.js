const Issue = require('../Models/Issue');
const Member = require('../Models/Member');
const Book = require('../Models/Book');

// Controller function to issue a book
const issuedBooks = async (req, res) => {
  try {
    // Extract member ID and book ID from the request body
    const { memberId, bookId } = req.body;

    // Check if member and book exist
    const member = await Member.findById(memberId);
    const book = await Book.findById(bookId);

    // console.log(book);
    // console.log(member);

    if (!member || !book) {
      return res.status(404).json({ error: 'Member or book not found' });
    }

    // Check if the book is available (not issued already)
    const isBookAvailable = await Issue.findOne({ book: bookId, returnDate: null });

    if (isBookAvailable) {
      return res.status(400).json({ error: 'Book is already issued' });
    }

    // Create a new issue record
    const newIssue = new Issue({
      member: memberId,
      book: bookId,
    });

    // Save the issue record to the database
    const issuedBook = await newIssue.save();

    res.status(201).json({issuedBook});
  } catch (error) {
    console.error('Error issuing book:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
// Controller Function to return a book
const returnedBooks = async (req, res) =>{

  const { memberId, bookId } = req.body;
  try {
    // Find the issued book based on memberId and bookId
    const issuedBook = await Issue.findOne({
      member: memberId,
      book: bookId,
      returnDate: { $exists: false }, 
    });

    // console.log(issuedBook)
    if (!issuedBook) {
      return res.status(404).json({ error: 'Book not found or already returned.' });
    }

    // Update the returnDate to mark the book as returned
    issuedBook.returnDate = new Date();
  //  const returnned = await issuedBook.save();
  //  console.log(returnned)
    res.json({ message: 'Book returned successfully' });
  } catch (error) {
    console.error('Error returning book:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

};

const getIssueBooks = async (req, res) =>{
  try {
    const issuedBooks = await Issue.find({ returnDate: { $exists: false } })
      .populate('book', 'title') 
      .populate('member', 'firstName');

    res.json({issuedBooks} );
  } catch (error) {
    console.error('Error fetching issued books:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getreturnBooks = async (req, res) =>{
  try {
    const returnedBooks = await Issue.find({ returnDate: { $exists: true } })
      .populate('book', 'title')
      .populate('member', 'firstName');

    res.json({ returnedBooks });
    // console.log(returnedBooks)
  } catch (error) {
    console.error('Error fetching returned books:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
module.exports = {
  issuedBooks,
  returnedBooks,
  getIssueBooks,
  getreturnBooks
};
