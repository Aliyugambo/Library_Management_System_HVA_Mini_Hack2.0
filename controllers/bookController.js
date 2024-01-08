const Book = require('../Models/Book');

// Controller function to add a new book
const addNewBook = async (req, res) => {
    try {
      const newBook = new Book(req.body);
      const savedBook = await newBook.save();
      res.status(201).json({savedBook});
    } catch (error) {
      console.error('Error adding new book:', error);
      res.status(500).json({ 
        error: 'Internal Server Error' 
    });
    }
};

// Controller function to get all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Controller function to get a specific  book by ID
const getBooksById = async (req, res) => {
    try {
        const bookId = req.params.id;
        const book = await Book.findById(bookId);
    
        if (!book) {
          return res.status(404).json({ 
            error: 'Book not found' 
        });
        }
    
        res.status(200).json(book);
      } catch (error) {
        console.error('Error fetching Book by ID:', error);
        res.status(500).json({ 
            error: 'Internal Server Error' 
        });
      }
};



// Controller function to delete a specific member by ID
const deleteBooksById = async (req, res) => {
    try {
      const bookId = req.params.id;
      const deletedBook = await Book.findByIdAndDelete(bookId);
  
      if (!deletedBook) {
        return res.status(404).json({ 
            error: 'Book not found' 
        });
      }
  
      res.status(200).json({ 
        message: 'Book deleted successfully' 
    });
    } catch (error) {
      console.error('Error deleting Book by ID:', error);
      res.status(500).json({ 
        error: 'Internal Server Error' 
    });
    }
};

// Controller function to edit details of a specific member by ID
const editBooksDetails = async (req, res) => {
    try {
      const bookId = req.params.id;
      const updatedBook = await Book.findByIdAndUpdate(bookId, req.body, { new: true });
  
      if (!updatedBook) {
        return res.status(404).json({
             error: 'Book not found' 
            });
      }
  
      res.status(200).json(updatedBook);
    } catch (error) {
      console.error('Error editing Book details by ID:', error);
      res.status(500).json({
         error: 'Internal Server Error' 
        });
    }

};


module.exports = {
    addNewBook,
    getAllBooks,
    getBooksById,
    deleteBooksById,
    editBooksDetails
  };


 
