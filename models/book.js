const mongoose=require("mongoose");

var bookSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    publisher:{
        type:String,
        required:true
    },
    image_url:{
        type:String,
        required:true
    },
    buy_url:{
        type:String,
        required:true
    },
    create_date:{
        type:Date,
        default:Date.now
    }
});

var Book=mongoose.model("Book",bookSchema);
module.exports=Book;

//Get Books
module.exports.getBooks=(limit=1000)=>Book.find().limit(limit).exec();

//Get Book
module.exports.getBookById=(id)=>Book.findById(id).exec();

// Add Book
module.exports.addBook = (book) =>Book.create(book);


//Update book
module.exports.updateBook = (id, book, options) => {
	let query = {_id: id};
	let update = {
		title: book.title,
		genre: book.genre,
		description: book.description,
		author: book.author,
		publisher: book.publisher,
		pages: book.pages,
		image_url: book.image_url,
		buy_url: book.buy_url
	}
	return Book.findOneAndUpdate(query, update, options).exec();
}

//Delete book
module.exports.deleteBook=(id)=>Book.remove({_id:id}).exec();