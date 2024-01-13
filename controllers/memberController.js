const Member = require('../Models/Member');

// Controller function to add a new member
const addNewMember = async (req, res) => {
    try {
      const newMember = new Member(req.body);
      const savedMember = await newMember.save();
      res.status(200).json({
        message: 'Mamber Succesfully Created',
        savedMember
      });
    } catch (error) {
      console.error('Error adding new member:', error);
      res.status(500).json({ 
        error: 'Internal Server Error' 
    });
    }
};

  // Controller function to get all members
const getAllMembers = async (req, res) => {
    try {
      const members = await Member.find();
      res.status(200).json(
        members
      );
    } catch (error) {
      console.error('Error fetching members:', error);
      res.status(500).json({ 
          error: 'Internal Server Error' 
      });
    }
};
  
  // Controller function to get a specific member by ID
const getMemberById = async (req, res) => {
      try {
        const memberId = req.params.id;
        const member = await Member.findById(memberId);
    
        if (!member) {
          return res.status(404).json({ 
            error: 'Member not found' 
        });
        }
    
        res.status(200).json(member);
      } catch (error) {
        console.error('Error fetching member by ID:', error);
        res.status(500).json({ 
            error: 'Internal Server Error' 
        });
      }
};

    // Controller function to delete a specific member by ID
const deleteMemberById = async (req, res) => {
    try {
      const memberId = req.params.id;
      const deletedMember = await Member.findByIdAndDelete(memberId);
  
      if (!deletedMember) {
        return res.status(404).json({ 
            error: 'Member not found' 
        });
      }
  
      res.status(200).json({ message: 'Member deleted successfully' });
    } catch (error) {
      console.error('Error deleting member by ID:', error);
      res.status(500).json({ 
        error: 'Internal Server Error' 
    });
    }
};

// Controller function to edit details of a specific member by ID
const editMemberDetails = async (req, res) => {
    try {
      const memberId = req.params.id;
      const updatedMember = await Member.findByIdAndUpdate(memberId, req.body, { new: true });
  
      if (!updatedMember) {
        return res.status(404).json({
             error: 'Member not found' 
            });
      }
  
      res.status(200).json({
        message: 'Member Details Are successfully Updated'
      });
    } catch (error) {
      console.error('Error editing member details by ID:', error);
      res.status(500).json({
         error: 'Internal Server Error' 
        });
    }
  };
  
module.exports = {
  getAllMembers,
  addNewMember,
  getMemberById,
  deleteMemberById,
  editMemberDetails
};