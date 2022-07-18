const express = require('express');
const router = express.Router();
const GenreController=require("../controllers/genre");

router.route("/")
.get(GenreController.getGenres)
.post(GenreController.addGenre);

module.exports=router;