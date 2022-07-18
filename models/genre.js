const mongoose=require("mongoose");

var genreSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    create_date:{
        type:Date,
        default:Date.now
    }
});

var Genre=module.exports=mongoose.model("Genre",genreSchema);

module.exports.getGenres=(limit=1000)=>Genre.find().limit(limit).exec();

module.exports.getGenreById=(id)=>Genre.findById(id).exec();

module.exports.addGenre=(genre)=>Genre.create(genre);