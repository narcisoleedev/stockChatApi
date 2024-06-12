require("dotenv").config();

const Express = require("express");
const app = Express();

const Cors = require("cors");
app.use(Cors());

const bp = require("body-parser");
app.use(bp.json());

const port = process.env.PORT || 8000;

//Routes
const loginRoute = require("./routes/loginRoute.js");

app.use("/login", loginRoute);

const signupRoute = require("./routes/signupRoute.js");

app.use("/signup", signupRoute);

//https://stockchat-26da337cf010.herokuapp.com/login
//const corestockRoute = require("./routes/corestockRoute.js");

//app.use("/corestock", corestockRoute);

//Database routes:
const databaseRoute = require("./routes/databaseRoute.js");

app.use("/database", databaseRoute)

app.get("/", (req, res) => {
  res.redirect("/login");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
