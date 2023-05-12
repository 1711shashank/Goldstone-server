const { usersDataBase } = require('../models/mongoDB');
const axios = require('axios');


module.exports.addUserData = async function addUserData(req, res) {
    try {

        const response = await axios.get('https://gorest.co.in/public-api/users');
        console.log(response.data.data);

        await Promise.all(response.data.data.map((obj) =>
            usersDataBase.updateOne(
                { id: obj.id },
                { $set: obj },
                { upsert: true }
            )));

        res.status(200).json({
            userData: "Data uploaded successfully",
        })

    } catch (err) {
        res.status(405).json({
            message: err.message
        })
    }
}
module.exports.getUserData = async function getUserData(req, res) {
    try {

        const usersData = await usersDataBase.find();

        res.status(200).json({
            usersData: usersData
        });

    } catch (err) {
        res.status(405).json({
            message: err.message
        })
    }
}
module.exports.updateUserData = async function updateUserData(req, res) {
    try {
        const updatedUserData = req.body.updatedUserData;

        console.log(updatedUserData);

        await usersDataBase.updateOne(
            { id: updatedUserData.id },
            { $set: updatedUserData }
        );

        res.status(200).json({
            message: "Record updated successfully",
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};