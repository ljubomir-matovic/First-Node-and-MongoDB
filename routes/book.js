const express = require('express');
const router = express.Router();
const BookController=require("../controllers/book");

router.route("/")
.get(BookController.getBooks)
.post(BookController.addBook);

router.route("/:_id")
.get(BookController.getBookById)
.put(BookController.updateBook)
.delete(BookController.deleteBook);

module.exports=router;