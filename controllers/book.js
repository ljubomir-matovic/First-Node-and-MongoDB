const Book=require("../models/book");

class BookController{
    static async getBooks(req,res){
        try{
            let books=await Book.getBooks();
            res.send(books);
        }
        catch(err){
            res.status(500).send(err);
        }
    }
    static async getBookById(req,res){
        try{
            let book=await Book.getBookById(req.params._id);
            res.send(book);
        }
        catch(err){
            res.status(500).send(err);
        }
    }
    static async addBook(req,res){
        try{
            let {body}=req;
            let book={
                title: body.title,
		        genre: body.genre,
		        description: body.description,
		        author: body.author,
		        publisher: body.publisher,
		        pages: body.pages,
		        image_url: body.image_url,
		        buy_url: body.buy_url
            };
            book=await Book.addBook(book);
            console.log(book);
            res.send("Added");
        }
        catch(err){
            res.status(500).send(err);
        }
    }
    static async updateBook(req,res){
        try{
            let book=await Book.updateBook(req.params._id,req.body,null);
            res.send(`Book with id ${book} successfully updated`);
        }
        catch(err){
            res.status(500).send(err);
        }
    }
    static async deleteBook(req,res){
        try{
            let book=await Book.deleteBook(req.params._id);
            res.send(`Book with id ${req.params._id} successfully deleted`);
        }
        catch(err){
            res.status(500).send(err);
        }
    }
}
module.exports=BookController;