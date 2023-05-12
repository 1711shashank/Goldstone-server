const mongoose = require('mongoose');
const env = require('dotenv');
env.config();

const db_link = process.env.MONGO_URL;

mongoose.connect(db_link)
    .then(() => {
        console.log("db connected");
    }).catch((err) => {
        console.log(err);
    })

const usersData = mongoose.Schema({
    "id": Number,
    "name": String,
    "email": String,
    "gender": String,
    "status": String
})



const usersDataBase = mongoose.model("usersData", usersData);
module.exports = { usersDataBase };
