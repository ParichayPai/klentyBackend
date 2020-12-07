const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const session = require("express-session");
require("dotenv").config();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const {url} = require("./config/keys");
const Post = require("./models/post");
const Comment = require("./models/comment");
const User = require("./models/user");

const app = express();

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

mongoose.connect( process.env.MONGODB_URI ||url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(r => console.log("server started"))
    .catch(err => console.log("couldn't connect ", err));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    cors({
            origin: "https://klenty-front.herokuapp.com/", //["https://klenty-front.herokuapp.com/","http://localhost:3000"],
            credentials: true,
    })
);
app.use(
    session({
            secret: "secretcode",
            resave: true,
            saveUninitialized: true,
            // cookie: { secure: true }
    })
);
app.use(cookieParser("secretcode"));
require("./config/passportSetup")(passport);
app.use(passport.initialize());
app.use(passport.session());

require("./routes")(app);

if(process.env.NODE_ENV === "production"){
    app.use(express.static('../client/build'))
}

app.listen(port, () => console.log(`Running on port ${port}`))
