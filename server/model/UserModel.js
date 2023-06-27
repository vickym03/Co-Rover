const mongoose = require("mongoose");

const UserModel = new mongoose.Schema({
    id: {
        type: Number, require: true, index:true, unique:true,sparse:true
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
        type: String,
        require: true,
    },
    level: {
        type: String,
        require: true,
    },
    mobileno:
    {
        // type: String, require: true, index:true, unique:true,sparse:true
        type: String,
        require: true,
    },
    product: {
        type: String,
        require: true
    },
    usertype: {
        type: String,
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
