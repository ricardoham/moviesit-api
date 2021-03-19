const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const movies = require("./routes/movies.route");
const app = express();

let mongoURI = "mongodb://localhost:27017";
mongoose.connect(mongoURI);
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/movies", movies);

const PORT = process.env.PORT || 8080;
app.listen(PORT);
