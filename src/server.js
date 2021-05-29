const express = require("express");
const bodyParser = require("body-parser");
const config = require("./configs/config");
const db = require("./configs/mongo-config");
const movies = require("./routes/movies.route");
const clientAPI = require("./routes/client.route");
const comments = require("./routes/comments.route");
const recommendation = require("./routes/comments.route");
const waitList = require("./routes/waitlist.route");
const watchedMovies = require("./routes/watched-movies.route");

const app = express();

db.on("connected", console.log.bind(console, "MongoDB Connected: "));
db.on("error", console.error.bind(console, "MongoDB connection error: "));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", movies);
app.use("/", clientAPI);
app.use("/", comments);
app.use("/", recommendation);
app.use("/", waitList);
app.use("/", watchedMovies);

app.listen(config.API_PORT, () => {
  console.log(`API running on port ${config.API_PORT}`);
});
