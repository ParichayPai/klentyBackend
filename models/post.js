const mongoose = require("mongoose");
const Post = new mongoose.Schema({
    title: String,
    username: String,
    description: String,
});

module.exports = mongoose.model("Post", Post);