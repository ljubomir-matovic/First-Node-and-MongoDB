const express = require('express')
const app = express()
const port = 8080
const bodyParser=require("body-parser");
const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost/mongovezba");
const db=mongoose.connection;

//middleware
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

//routes
const genreRoutes=require('./routes/genre');
app.use("/api/genres",genreRoutes);

const bookRoutes=require('./routes/book');
app.use("/api/books",bookRoutes);

//Not found middleware
app.use((req,res,next)=>res.status(404).send("API not exists"));
app.listen(port, () => console.log(`Server listening on port ${port}!`))