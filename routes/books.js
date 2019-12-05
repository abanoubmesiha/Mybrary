const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const Author = require('../models/author');

router.get('/', async (req,res)=>{
    res.send('all books')
});
router.get('/new',async (req,res)=>{
    try {
        const authors = await Author.find({})
        const book = new Book()
        res.render('books/new',{
            authors:authors,
            book:book
        })
    } catch {
        res.send('error catched')
     //   res.redirect('/')
    }
});

router.post('/', async (req,res)=>{
    res.send('create book')
});

module.exports = router