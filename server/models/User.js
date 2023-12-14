const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Userschema = new Schema({
    name: String,
    lastname: String,
    email: String,
    phone: String,
    project: String,

})
const User = mongoose.model("User", Userschema);
module.exports = User;