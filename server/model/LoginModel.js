const mongoose = require("mongoose");

const LoginModel = new mongoose.Schema({
    id: {
        type: Number,
        require: true,
        unique: true
    },

    clientId: {
        type: Number,
        require: true,
        unique: true
    },

    name: {
        type: String,
        require: true,
        unique: true
    },

    password: {
        type: String,
        require: true,
    },

    created: { type: Date },
    modified: { type: Date }

});


module.exports = mongoose.model.Login || mongoose.model("Login", LoginModel);







