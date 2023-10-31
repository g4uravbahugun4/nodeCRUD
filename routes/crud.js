const express = require('express');
const router = express.Router();
const Books=require('../model/bookModel')

router.post('/add-book', async (req, res) => {
    const book = req.body;
    const bookToBeAdded = new Books(book);

    try {
        await bookToBeAdded.save();
        return res.json({ "Message": bookToBeAdded });
    } catch (error) {
        console.error("Error while saving the book:", error);
        return res.status(500).json({ "error": "Internal Server Error" });
    }
});

router.put('/edit-book/:id', async (req, res) => {
    const id = req.params.id;

    const newBook = req.body;

    try {
        const bookUpdated = await Books.findByIdAndUpdate(id, newBook, { new: true });

        if (bookUpdated) {
          
            const { _id, Title, Author, Summary } = bookUpdated;
            return res.json({ "Message": "Book updated successfully", "UpdatedBook": {  Title, Author, Summary } });
        } else {
            return res.status(404).json({ "Message": "Book not found" });
        }
    } catch (error) {
        return res.status(500).json({ "Error": error.message });
    }
});

router.delete('/delete/:id',async(req,res)=>{
    try {
        let id = req.params.id
        let bookToBeDelete = await Books.findByIdAndDelete(id)
        
        res.json({"Message":"Book Delete Sucessfully"})
        
    } catch (error) {
     
     res.json({"Error":error})   
    }
   
})

router.get('/all-books',async(req,res)=>{
    try {
        let books =await  Books.find()
        res.json({ books })
    } catch (error) {
       
       res.json({"Error":error}) 
    }
   
})

router.get('/book/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Books.findById(id);
        if (book) {
            res.json(book);  
        } else {
            res.status(404).json({ "error": "Book not found" });
        }
    } catch (error) {
        res.status(500).json({ "error": error.message });
    }
});




module.exports = router
