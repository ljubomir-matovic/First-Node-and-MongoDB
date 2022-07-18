const Genre=require("../models/genre");

class GenreController{
    static async getGenres(req,res){
        try{
            let genres=await Genre.getGenres();
            res.send(genres);
        }
        catch(err){
            res.status(500).send(err);
        }
    }
    static async addGenre(req,res){
        try{
            let genre=await Genre.addGenre(req.body);
            res.send(genre);
        }
        catch(err){
            res.status(500).send(err);
        }
    }
}
module.exports=GenreController;