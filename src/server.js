const express = require("express");
const bodyParser = require("body-parser");
const config = require("./configs/config");
const db = require("./configs/mongo-config");

// const movies = require("./routes/movies.route");
// const clientAPI = require("./routes/client.route");
const app = express();

db.on("connected", console.log.bind(console, "MongoDB Connected: "));
db.on("error", console.error.bind(console, "MongoDB connection error: "));

console.log("----", process.env.MONGO_DBNAME);

app.use([
  require('./api/routes/movies')
])

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use("/movies", movies);
// app.use("/tmdb", clientAPI);

app.listen(config.API_PORT, () => {
  console.log(`API running on port ${config.API_PORT}`);
});
