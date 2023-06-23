const mongoose = require("mongoose");

const UserModel = new mongoose.Schema({
    id: {
        type: Number,
        require: true,
        unique: true
    },
    clientId: {
        type: Number,
        require: true,
    },
    active: {
        type: Boolean,
        require: true,
    },
    username: {
        type: String,
        require: true,
    },
    bankcode: {
        type: String,
        require: true,

    },

    bankname: {
        type: String,
        require: true,
    },
    group: {
        type: Number,
        require: true,
    },
    level: {
        type: Number,
        require: true,
    },
    mobileno:
    {
        type: String,
        require: true,
        unique: true
    },
    product: {
        type: String,
        require: true
    },
    usertype: {
        type: Number,
        require: true,

    },
    created: { type: String },
    modified: { type: String }







});



// {
//     "username": "rain",
//     "level": 155,
//     "product": "pee",
//     "group": 200,
//     "bankname": "SeeeeBI",
//     "bankcode": "12Edssss",
//     "mobileno": 1234567890,
//     "usertype": 88,
//     "active": true
//   }



module.exports = mongoose.model.User || mongoose.model("User", UserModel);
