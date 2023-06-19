const mongoose = require("mongoose");

const LoginModel = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please enter the name"],
    },

    password: {
        type: String,
        require: [true, "Please enter the  password"],
    },

    
    created: { type: Date },
    modified: { type: Date }

});



module.exports = mongoose.model.Login || mongoose.model("Login", LoginModel);
