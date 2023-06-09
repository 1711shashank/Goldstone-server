const express = require("express");
const { addUserData, getUserData, updateUserData } = require("./src/controller/userController");


const app = express();

var cors = require("cors");

app.use(cors({ origin: '*', optionsSuccessStatus: 200, credentials: true }));
app.options("*",cors({ origin: true, optionsSuccessStatus: 200, credentials: true }));

app.use(express.json());


const port = 5000;
app.listen(port);



app.post("/addUserData", addUserData);
app.get("/getUserData", getUserData);
app.post("/updateUserData", updateUserData);


